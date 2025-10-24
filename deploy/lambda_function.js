const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

// Inbuilt AWS SDK v3 S3 client for Node 18
const s3 = new S3Client({ region: process.env.AWS_REGION || "eu-north-1" });

exports.handler = async (event) => {
  try {
    const { token, repo, folder } = event.queryStringParameters || {};
    const bucket = process.env.BUCKET_NAME;

    if (!token || !repo || !folder)
      return { statusCode: 400, body: "Missing parameters" };

    // Node 18 has inbuilt fetch
    const contentsRes = await fetch(
      `https://api.github.com/repos/${repo}/contents/${folder}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (!contentsRes.ok)
      return { statusCode: contentsRes.status, body: await contentsRes.text() };

    const items = await contentsRes.json();

    for (const file of items) {
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

    return { statusCode: 200, body: "Folder uploaded successfully" };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "Internal Server Error" };
  }
};
