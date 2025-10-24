exports.handler = async (event) => {
  try {
    const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
    const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
    const REDIRECT_URI = process.env.REDIRECT_URI;

    const code = event.queryStringParameters?.code;
    if (!code) {
      return { statusCode: 400, body: "Missing code parameter" };
    }

    // Exchange code for access token
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: REDIRECT_URI,
      }),
    });

    const tokenData = await tokenRes.json();

    const params = new URLSearchParams(tokenData).toString();

    return {
      statusCode: 302, // HTTP redirect
      headers: {
        Location: `https://cosmic-biscochitos-de66d5.netlify.app/authorize?${params}`,
      },
    };

  } 
  catch (err) 
  {
    console.error(err);
    return { statusCode: 500, body: "Internal Server Error" };
  }
};
