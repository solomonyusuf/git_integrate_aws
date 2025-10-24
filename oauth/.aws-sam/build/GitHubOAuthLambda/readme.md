# Deploy using

sam deploy --stack-name github-oauth --s3-bucket my-potentx-sam-artifacts-20251022 --capabilities CAPABILITY_IAM --region eu-north-1 --no-confirm-changeset


## Frontend OAuth Integration

Basically our frontend has a button that goes to github to authorize our user using this url : http://github.com/login/oauth/authorize?client_id=Ov23li1hTQlkn4BALtEq&redirect_uri=https://oj8iug0a8a.execute-api.eu-north-1.amazonaws.com%2FProd%2Foauth%2Fcallback&scope=repo%2Cuser


sample response :

{
    	
    access_token	"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"
    token_type	"bearer"
    scope	"repo,user"

}
