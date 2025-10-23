## Frontend App

  └─> /auth/github (redirect to GitHub)
  └─> /auth/callback (handled by Lambda 1)
  └─> /deploy (handled by Lambda 2)

Lambda OAuth 1 → GitHub OAuth Flow → returns Access Token  
Lambda Deploy 2 → GitHub API + AWS S3 SDK → deploys folder contents

## Frontend OAuth Flow

Basically our frontend goes to github to authorize our user : https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID&scope=repo,read:user


Github redirect us to this endpoint which is our lambda function:
https://your-api-gateway.amazonaws.com/auth/callback?code=abc123


## To Deloy

aws cloudformation deploy \
  --template-file github-deploy.yml \
  --stack-name GitHubDeployStack \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides \
    GitHubClientId=YOUR_GITHUB_CLIENT_ID \
    GitHubClientSecret=YOUR_GITHUB_CLIENT_SECRET \
    DeployBucket=my-s3-deploy-bucket





