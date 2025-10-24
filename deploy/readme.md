# To Deploy 

sam deploy --stack-name github-deploy-repo --s3-bucket my-potentx-sam-artifacts-20251022 --capabilities CAPABILITY_IAM --region eu-north-1 --no-confirm-changeset


# Sample response

C:\Users\SOLOM0N\Documents\PROGRAMMING PROJECTS\WEB DEV\PotentX\git_integrate_aws\deploy>
curl "https://47058wzzpb.execute-api.eu-north-1.amazonaws.com/Prod/deploy?token=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&repo=100xinsider/api-hoppscotch&folder=nginx"

{"message":"Folder 'nginx' from '100xinsider/api-hoppscotch' uploaded successfully to my-potentx-deployments"}