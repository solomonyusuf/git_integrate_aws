## Frontend App

  └─> /auth/oauth (redirect by GitHub)
  
  └─> /user/repo (handled by Lambda 2)
  
  └─> /deploy (handled by Lambda 3)

Lambda OAuth 1 → GitHub OAuth Flow → returns Access Token 

Lambda Repo 2 →  returns list of user repo  

Lambda Deploy 3 → GitHub API + AWS S3 SDK → deploys folder contents

## Frontend OAuth Flow

Basically our frontend goes to github to authorize our user : https://github.com/login/oauth/authorize?client_id=GITHUB_ID&redirect_uri=https%3A%2F%2Fn0bmcwctpk.execute-api.eu-north-1.amazonaws.com%2FProd%2Foauth%2Fcallback&scope=repo,user&allow_signup=true



Github redirect us to this endpoint which is our lambda function:
https://your-api-gateway.amazonaws.com/auth/callback?code=abc123







