## Frontend App

  └─> /auth/github (redirect to GitHub)
  └─> /auth/callback (handled by Lambda 1)
  └─> /deploy (handled by Lambda 2)

Lambda OAuth 1 → GitHub OAuth Flow → returns Access Token  
Lambda Deploy 2 → GitHub API + AWS S3 SDK → deploys folder contents

## Frontend OAuth Flow

Basically our frontend goes to github to authorize our user : https://github.com/login/oauth/authorize?client_id=GITHUB_ID&redirect_uri=https%3A%2F%2Fn0bmcwctpk.execute-api.eu-north-1.amazonaws.com%2FProd%2Foauth%2Fcallback&scope=repo,user&allow_signup=true



Github redirect us to this endpoint which is our lambda function:
https://your-api-gateway.amazonaws.com/auth/callback?code=abc123


## To Deloy

aws cloudformation deploy \
  --template-file github-deploy.yml \
  --stack-name GitHubDeployStack \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides \
    GitHubClientId=Ov23li1hTQlkn4BALtEq \
    GitHubClientSecret=10f141255a59e3ce8ef5be3f2a55186f6c8cdc88 \
    DeployBucket=integration_deploy





