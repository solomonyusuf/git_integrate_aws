# Deploy using

sam deploy --stack-name github-oauth --s3-bucket my-potentx-sam-artifacts-20251022 --capabilities CAPABILITY_IAM --region eu-north-1 --no-confirm-changeset


## Frontend OAuth Integration

Basically our frontend has a button that goes to github to authorize our user using this url : https://github.com/login/oauth/authorize?client_id=GITHUB_ID&redirect_uri=https%3A%2F%2Fn0bmcwctpk.execute-api.eu-north-1.amazonaws.com%2FProd%2Foauth%2Fcallback&scope=repo,user&allow_signup=true
