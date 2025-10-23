import axios from "axios";

export const handler = async (event) => {
    try {
        const code = event.queryStringParameters?.code;
        if (!code) {
            return { statusCode: 400, body: JSON.stringify({ error: "Missing code" }) };
        }

        const response = await axios.post(
            "https://github.com/login/oauth/access_token",
            {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            { headers: { Accept: "application/json" } }
        );

        const token = response.data.access_token;
        if (!token) throw new Error("No token returned from GitHub");

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
        };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
};
