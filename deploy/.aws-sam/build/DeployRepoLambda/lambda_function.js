const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const {
  DynamoDBClient,
  BatchWriteItemCommand,
  GetItemCommand,
  PutItemCommand,
} = require("@aws-sdk/client-dynamodb");

const s3 = new S3Client({ region: process.env.AWS_REGION || "eu-north-1" });
const dynamodb = new DynamoDBClient({ region: process.env.AWS_REGION || "eu-north-1" });

exports.handler = async (event) => {
  try {
    const { token, repo, folder } = event.queryStringParameters || {};
    const bucket = process.env.BUCKET_NAME;
    const tableName = process.env.DYNAMO_TABLE;
    const usersTable = process.env.USERS_TABLE;

    if (!token || !repo || !folder)
      return { statusCode: 400, body: "Missing parameters" };

    const userRes = await fetch("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const userData = await userRes.json();
    const userId = userData.id?.toString() || "unknown";

    const existingUser = await dynamodb.send(
      new GetItemCommand({
        TableName: usersTable,
        Key: { user_id: { S: userId } },
      })
    );

    if (!existingUser.Item) {
      await dynamodb.send(
        new PutItemCommand({
          TableName: usersTable,
          Item: {
            user_id: { S: userId },
            login: { S: userData.login || "unknown" },
            name: { S: userData.name || "N/A" },
            avatar_url: { S: userData.avatar_url || "" },
            created_at: { S: new Date().toISOString() },
          },
        })
      );
    }

    const contentsRes = await fetch(
      `https://api.github.com/repos/${repo}/contents/${folder}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (!contentsRes.ok)
      return { statusCode: contentsRes.status, body: await contentsRes.text() };

    const items = await contentsRes.json();
    const dynamoItems = [];

    for (const file of items) {
      if (file.type === "file") {
        const fileRes = await fetch(file.download_url);
        const fileBuffer = Buffer.from(await fileRes.arrayBuffer());
        const s3Key = `${repo}/${folder}/${file.name}`;

        // Upload file to S3
        await s3.send(
          new PutObjectCommand({
            Bucket: bucket,
            Key: s3Key,
            Body: fileBuffer,
          })
        );

        // Collect for bulk write
        dynamoItems.push({
          PutRequest: {
            Item: {
              user_id: { S: userId },
              file_name: { S: file.name },
              s3_path: { S: `s3://${bucket}/${s3Key}` },
              uploaded_at: { S: new Date().toISOString() },
            },
          },
        });
      }
    }

    // Bulk create in chunks of 25
    for (let i = 0; i < dynamoItems.length; i += 25) {
      const chunk = dynamoItems.slice(i, i + 25);
      await dynamodb.send(
        new BatchWriteItemCommand({
          RequestItems: {
            [tableName]: chunk,
          },
        })
      );
    }

    return { statusCode: 200, body: "Folder uploaded and logged successfully" };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "Internal Server Error" };
  }
};
