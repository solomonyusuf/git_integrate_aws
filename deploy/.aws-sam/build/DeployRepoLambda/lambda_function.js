const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

// Create S3 client
const s3 = new S3Client({ region: process.env.AWS_REGION });

exports.handler = async (event) => {
  try {
    const accessToken = event.queryStringParameters?.token;
    const repo = event.queryStringParameters?.repo;
    const folder = event.queryStringParameters?.folder;
    const bucket = process.env.BUCKET_NAME;

    if (!accessToken || !repo || !folder) {
      return { statusCode: 400, body: "Missing required parameters: token, repo, or folder" };
    }

    const contentsRes = await fetch(`https://api.github.com/repos/${repo}/contents/${folder}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!contentsRes.ok) {
      const errorText = await contentsRes.text();
      return { statusCode: contentsRes.status, body: `Failed to fetch folder: ${errorText}` };
    }

    const contents = await contentsRes.json();

    for (const file of contents) {
      if (file.type === "file") {
        const fileRes = await fetch(file.download_url);
        const fileBuffer = Buffer.from(await fileRes.arrayBuffer());

        await s3.send(
          new PutObjectCommand({
            Bucket: bucket,
            Key: `${repo}/${folder}/${file.name}`,
            Body: fileBuffer,
          })
        );
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Folder '${folder}' from '${repo}' uploaded successfully to ${bucket}`,
      }),
    };
  } catch (err) {
    console.error("Error uploading repo folder:", err);
    return { statusCode: 500, body: "Internal Server Error" };
  }
};
