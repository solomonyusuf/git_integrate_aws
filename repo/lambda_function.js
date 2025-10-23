exports.handler = async (event) => {
  try {
    const accessToken = event.queryStringParameters?.token;
    if (!accessToken) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing GitHub access token" }),
      };
    }

    // Fetch the user's repositories
    const reposResponse = await fetch("https://api.github.com/user/repos?per_page=20", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "aws-lambda-fetch"
      },
    });

    if (!reposResponse.ok) {
      const errorText = await reposResponse.text();
      return {
        statusCode: reposResponse.status,
        body: errorText,
      };
    }

    const repos = await reposResponse.json();

    // Fetch contents for each repo
    const reposWithContents = await Promise.all(
      repos.map(async (repo) => {
        const contentsResponse = await fetch(
          `https://api.github.com/repos/${repo.owner.login}/${repo.name}/contents`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/vnd.github+json",
              "User-Agent": "aws-lambda-fetch"
            },
          }
        );

        const contents = contentsResponse.ok ? await contentsResponse.json() : [];
        return {
          name: repo.name,
          full_name: repo.full_name,
          private: repo.private,
          contents,
        };
      })
    );

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ repos: reposWithContents }),
    };

  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
