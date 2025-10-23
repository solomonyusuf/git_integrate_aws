import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fetch from "node-fetch";
import mime from "mime-types";

const s3 = new S3Client({ region: process.env.AWS_REGION || "eu-north-1" });

export const handler = async (event) => {
  try {
    const body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;
    const { token, repo, folder } = body;

    if (!token || !repo) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing token or repo" }) };
    }

    const deployed = await deployFolderToS3(token, repo, folder || "");
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Deployed successfully", files: deployed }),
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};

async function deployFolderToS3(token, repo, folder, prefix = "") {
  const url = folder
    ? `https://api.github.com/repos/${repo}/contents/${folder}`
    : `https://api.github.com/repos/${repo}/contents`;

  const res = await fetch(url, {
    headers: { Authorization: `token ${token}`, "User-Agent": "aws-lambda-deployer" },
  });

  if (!res.ok) throw new Error(`GitHub API Error: ${res.status} ${res.statusText}`);
  const files = await res.json();
  let uploaded = [];

  for (const file of files) {
    if (file.type === "file") {
      const content = await fetch(file.download_url).then((r) => r.arrayBuffer());
      const contentType = mime.lookup(file.name) || "application/octet-stream";

      await s3.send(
        new PutObjectCommand({
          Bucket: process.env.DEPLOY_BUCKET,
          Key: `${file.path}`,
          Body: Buffer.from(content),
          ContentType: contentType,
        })
      );
      uploaded.push(file.path);
    } else if (file.type === "dir") {
      const subFiles = await deployFolderToS3(token, repo, file.path, prefix);
      uploaded = uploaded.concat(subFiles);
    }
  }
  return uploaded;
}
