# To Deploy

sam deploy --stack-name github-fetch-repos --s3-bucket my-potentx-sam-artifacts-20251022 --capabilities CAPABILITY_IAM --region eu-north-1 --no-confirm-changeset

# To Call

curl "https://3weepmofw3.execute-api.eu-north-1.amazonaws.com/Prod/repos?token=YOUR_GITHUB_ACCESS_TOKEN"


# Sample Response

{
  "repos": [
    {
      "name": "100xinsider",
      "full_name": "100xinsider/100xinsider",
      "private": true,
      "contents": [
        {
          "name": ".editorconfig",
          "path": ".editorconfig",
          "sha": "8f0de65c560259bd171d746d12aa187f666893a3",
          "size": 258,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/.editorconfig?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/blob/main/.editorconfig",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/8f0de65c560259bd171d746d12aa187f666893a3",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsider/main/.editorconfig?token=BUOXE7BPPWHSIZGACNA7N2DI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/.editorconfig?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/8f0de65c560259bd171d746d12aa187f666893a3",
            "html": "https://github.com/100xinsider/100xinsider/blob/main/.editorconfig"
          }
        },
        {
          "name": ".env.example",
          "path": ".env.example",
          "sha": "35db1ddf0e04fb9f138a372b17d0bfc8480bef38",
          "size": 1084,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/.env.example?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/blob/main/.env.example",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/35db1ddf0e04fb9f138a372b17d0bfc8480bef38",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsider/main/.env.example?token=BUOXE7GD7HGFLACK32LGD7TI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/.env.example?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/35db1ddf0e04fb9f138a372b17d0bfc8480bef38",
            "html": "https://github.com/100xinsider/100xinsider/blob/main/.env.example"
          }
        },
        {
          "name": ".gitattributes",
          "path": ".gitattributes",
          "sha": "dfe0770424b2a19faf507a501ebfc23be8f54e7b",
          "size": 66,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/.gitattributes?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/blob/main/.gitattributes",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/dfe0770424b2a19faf507a501ebfc23be8f54e7b",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsider/main/.gitattributes?token=BUOXE7HVUGW32TDCRD5ZSYLI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/.gitattributes?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/dfe0770424b2a19faf507a501ebfc23be8f54e7b",
            "html": "https://github.com/100xinsider/100xinsider/blob/main/.gitattributes"
          }
        },
        {
          "name": ".github",
          "path": ".github",
          "sha": "884c361cafe922d76cfb1940553f48b89c8ce6d1",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/.github?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/tree/main/.github",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/884c361cafe922d76cfb1940553f48b89c8ce6d1",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/.github?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/884c361cafe922d76cfb1940553f48b89c8ce6d1",
            "html": "https://github.com/100xinsider/100xinsider/tree/main/.github"
          }
        },
        {
          "name": ".gitignore",
          "path": ".gitignore",
          "sha": "c7cf1fa675f65701fc1118ad21257badc7899c46",
          "size": 286,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/.gitignore?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/blob/main/.gitignore",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/c7cf1fa675f65701fc1118ad21257badc7899c46",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsider/main/.gitignore?token=BUOXE7F4FXMFGBCL4PHDHK3I7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/.gitignore?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/c7cf1fa675f65701fc1118ad21257badc7899c46",
            "html": "https://github.com/100xinsider/100xinsider/blob/main/.gitignore"
          }
        },
        {
          "name": "Dockerfile",
          "path": "Dockerfile",
          "sha": "672ef43f723a8a80e8e8efaa592dcf67636f391d",
          "size": 698,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/Dockerfile?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/blob/main/Dockerfile",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/672ef43f723a8a80e8e8efaa592dcf67636f391d",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsider/main/Dockerfile?token=BUOXE7HYFR552AG6HRBZVBTI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/Dockerfile?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/672ef43f723a8a80e8e8efaa592dcf67636f391d",
            "html": "https://github.com/100xinsider/100xinsider/blob/main/Dockerfile"
          }
        },
        {
          "name": "README.md",
          "path": "README.md",
          "sha": "6b5bceea5549f2dfb3915ec6310e9d785a37f9ae",
          "size": 14,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/README.md?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/blob/main/README.md",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/6b5bceea5549f2dfb3915ec6310e9d785a37f9ae",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsider/main/README.md?token=BUOXE7FVCIXG65SEPGQ6I73I7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/README.md?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/6b5bceea5549f2dfb3915ec6310e9d785a37f9ae",
            "html": "https://github.com/100xinsider/100xinsider/blob/main/README.md"
          }
        },
        {
          "name": "app",
          "path": "app",
          "sha": "8cadc42146b544731ba9829398b2756987199d65",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/app?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/tree/main/app",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/8cadc42146b544731ba9829398b2756987199d65",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/app?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/8cadc42146b544731ba9829398b2756987199d65",
            "html": "https://github.com/100xinsider/100xinsider/tree/main/app"
          }
        },
        {
          "name": "artisan",
          "path": "artisan",
          "sha": "c35e31d6a29f62921a8621944eb20ad162f5b2bb",
          "size": 425,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/artisan?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/blob/main/artisan",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/c35e31d6a29f62921a8621944eb20ad162f5b2bb",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsider/main/artisan?token=BUOXE7DDF3QLXUXOD4KXYP3I7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/artisan?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/c35e31d6a29f62921a8621944eb20ad162f5b2bb",
            "html": "https://github.com/100xinsider/100xinsider/blob/main/artisan"
          }
        },
        {
          "name": "bootstrap",
          "path": "bootstrap",
          "sha": "3ef809b2f21b69f36df6121fd18abcd1ae3be124",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/bootstrap?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/tree/main/bootstrap",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/3ef809b2f21b69f36df6121fd18abcd1ae3be124",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/bootstrap?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/3ef809b2f21b69f36df6121fd18abcd1ae3be124",
            "html": "https://github.com/100xinsider/100xinsider/tree/main/bootstrap"
          }
        },
        {
          "name": "composer.json",
          "path": "composer.json",
          "sha": "eff37380136fc34e893789bb2bbc63625bf17d5c",
          "size": 2584,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/composer.json?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/blob/main/composer.json",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/eff37380136fc34e893789bb2bbc63625bf17d5c",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsider/main/composer.json?token=BUOXE7CYMKXUFMP2SEV7KRDI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/composer.json?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/eff37380136fc34e893789bb2bbc63625bf17d5c",
            "html": "https://github.com/100xinsider/100xinsider/blob/main/composer.json"
          }
        },
        {
          "name": "composer.lock",
          "path": "composer.lock",
          "sha": "1f232acd28be3e4cd0eec10cd47917a697cb502f",
          "size": 316445,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/composer.lock?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/blob/main/composer.lock",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/1f232acd28be3e4cd0eec10cd47917a697cb502f",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsider/main/composer.lock?token=BUOXE7ADSNWBDWCGMWO5KZDI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/composer.lock?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/1f232acd28be3e4cd0eec10cd47917a697cb502f",
            "html": "https://github.com/100xinsider/100xinsider/blob/main/composer.lock"
          }
        },
        {
          "name": "config",
          "path": "config",
          "sha": "67bc1003b76536c2f098dea607ddc0c02e5c54ac",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/config?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/tree/main/config",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/67bc1003b76536c2f098dea607ddc0c02e5c54ac",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/config?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/67bc1003b76536c2f098dea607ddc0c02e5c54ac",
            "html": "https://github.com/100xinsider/100xinsider/tree/main/config"
          }
        },
        {
          "name": "database",
          "path": "database",
          "sha": "9bca655e62bd77c99a4e02b540b5fb803bd8129a",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/database?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/tree/main/database",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/9bca655e62bd77c99a4e02b540b5fb803bd8129a",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/database?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/9bca655e62bd77c99a4e02b540b5fb803bd8129a",
            "html": "https://github.com/100xinsider/100xinsider/tree/main/database"
          }
        },
        {
          "name": "docker",
          "path": "docker",
          "sha": "868393ff52637fb2a04cda4ec9e329d77b454adf",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/docker?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/tree/main/docker",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/868393ff52637fb2a04cda4ec9e329d77b454adf",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/docker?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/868393ff52637fb2a04cda4ec9e329d77b454adf",
            "html": "https://github.com/100xinsider/100xinsider/tree/main/docker"
          }
        },
        {
          "name": "package.json",
          "path": "package.json",
          "sha": "4e4ab6fed34b98d5064837691b0a67f50c92f552",
          "size": 354,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/package.json?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/blob/main/package.json",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/4e4ab6fed34b98d5064837691b0a67f50c92f552",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsider/main/package.json?token=BUOXE7HTQ35LJEPYYNMWXNTI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/package.json?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/4e4ab6fed34b98d5064837691b0a67f50c92f552",
            "html": "https://github.com/100xinsider/100xinsider/blob/main/package.json"
          }
        },
        {
          "name": "phpunit.xml",
          "path": "phpunit.xml",
          "sha": "61c031c478ef57ccc703432e52fce874d0c2c8de",
          "size": 1173,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/phpunit.xml?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/blob/main/phpunit.xml",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/61c031c478ef57ccc703432e52fce874d0c2c8de",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsider/main/phpunit.xml?token=BUOXE7EXVHDPITPVR4BVDODI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/phpunit.xml?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/61c031c478ef57ccc703432e52fce874d0c2c8de",
            "html": "https://github.com/100xinsider/100xinsider/blob/main/phpunit.xml"
          }
        },
        {
          "name": "public",
          "path": "public",
          "sha": "a9bd4ecdfd9295fe72f5fc383ac37d2faf87ccc5",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/public?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/tree/main/public",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/a9bd4ecdfd9295fe72f5fc383ac37d2faf87ccc5",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/public?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/a9bd4ecdfd9295fe72f5fc383ac37d2faf87ccc5",
            "html": "https://github.com/100xinsider/100xinsider/tree/main/public"
          }
        },
        {
          "name": "resources",
          "path": "resources",
          "sha": "33ed01cf065184579e110130dfbdf3bfc6a9baae",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/resources?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/tree/main/resources",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/33ed01cf065184579e110130dfbdf3bfc6a9baae",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/resources?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/33ed01cf065184579e110130dfbdf3bfc6a9baae",
            "html": "https://github.com/100xinsider/100xinsider/tree/main/resources"
          }
        },
        {
          "name": "routes",
          "path": "routes",
          "sha": "cba7d0386db6c4d4afa3fb62c3fe63f262e9ceca",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/routes?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/tree/main/routes",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/cba7d0386db6c4d4afa3fb62c3fe63f262e9ceca",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/routes?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/cba7d0386db6c4d4afa3fb62c3fe63f262e9ceca",
            "html": "https://github.com/100xinsider/100xinsider/tree/main/routes"
          }
        },
        {
          "name": "storage",
          "path": "storage",
          "sha": "52f4fc20dd23d1552aad0fed5629d2fe43fb98f0",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/storage?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/tree/main/storage",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/52f4fc20dd23d1552aad0fed5629d2fe43fb98f0",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/storage?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/52f4fc20dd23d1552aad0fed5629d2fe43fb98f0",
            "html": "https://github.com/100xinsider/100xinsider/tree/main/storage"
          }
        },
        {
          "name": "tests",
          "path": "tests",
          "sha": "4b455379c5ee5810aafe0d7177d1d86518e17fac",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/tests?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/tree/main/tests",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/4b455379c5ee5810aafe0d7177d1d86518e17fac",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/tests?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/trees/4b455379c5ee5810aafe0d7177d1d86518e17fac",
            "html": "https://github.com/100xinsider/100xinsider/tree/main/tests"
          }
        },
        {
          "name": "vite.config.js",
          "path": "vite.config.js",
          "sha": "29fbfe9a819068359c30a558d0097c3c8f551885",
          "size": 331,
          "url": "https://api.github.com/repos/100xinsider/100xinsider/contents/vite.config.js?ref=main",
          "html_url": "https://github.com/100xinsider/100xinsider/blob/main/vite.config.js",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/29fbfe9a819068359c30a558d0097c3c8f551885",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsider/main/vite.config.js?token=BUOXE7HZJXSALXO6GOKFGFDI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsider/contents/vite.config.js?ref=main",
            "git": "https://api.github.com/repos/100xinsider/100xinsider/git/blobs/29fbfe9a819068359c30a558d0097c3c8f551885",
            "html": "https://github.com/100xinsider/100xinsider/blob/main/vite.config.js"
          }
        }
      ]
    },
    {
      "name": "100xinsiderAIService",
      "full_name": "100xinsider/100xinsiderAIService",
      "private": true,
      "contents": [
        {
          "name": ".dockerignore",
          "path": ".dockerignore",
          "sha": "fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "size": 393,
          "url": "https://api.github.com/repos/100xinsider/100xinsiderAIService/contents/.dockerignore?ref=master",
          "html_url": "https://github.com/100xinsider/100xinsiderAIService/blob/master/.dockerignore",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsiderAIService/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsiderAIService/master/.dockerignore?token=BUOXE7BKTZ3XDLW3TOAPHJDI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsiderAIService/contents/.dockerignore?ref=master",
            "git": "https://api.github.com/repos/100xinsider/100xinsiderAIService/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
            "html": "https://github.com/100xinsider/100xinsiderAIService/blob/master/.dockerignore"
          }
        },
        {
          "name": ".gitattributes",
          "path": ".gitattributes",
          "sha": "1ff0c423042b46cb1d617b81efb715defbe8054d",
          "size": 2518,
          "url": "https://api.github.com/repos/100xinsider/100xinsiderAIService/contents/.gitattributes?ref=master",
          "html_url": "https://github.com/100xinsider/100xinsiderAIService/blob/master/.gitattributes",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsiderAIService/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsiderAIService/master/.gitattributes?token=BUOXE7FJPWXSPESMYTKT74LI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsiderAIService/contents/.gitattributes?ref=master",
            "git": "https://api.github.com/repos/100xinsider/100xinsiderAIService/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
            "html": "https://github.com/100xinsider/100xinsiderAIService/blob/master/.gitattributes"
          }
        },
        {
          "name": ".gitignore",
          "path": ".gitignore",
          "sha": "9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "size": 6223,
          "url": "https://api.github.com/repos/100xinsider/100xinsiderAIService/contents/.gitignore?ref=master",
          "html_url": "https://github.com/100xinsider/100xinsiderAIService/blob/master/.gitignore",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsiderAIService/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsiderAIService/master/.gitignore?token=BUOXE7EYTLL5P7WVB7VHSILI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsiderAIService/contents/.gitignore?ref=master",
            "git": "https://api.github.com/repos/100xinsider/100xinsiderAIService/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
            "html": "https://github.com/100xinsider/100xinsiderAIService/blob/master/.gitignore"
          }
        },
        {
          "name": "100xinsiderLLMService.sln",
          "path": "100xinsiderLLMService.sln",
          "sha": "3224abfd521aed4911c6aa918055f2ff9fe0a961",
          "size": 1019,
          "url": "https://api.github.com/repos/100xinsider/100xinsiderAIService/contents/100xinsiderLLMService.sln?ref=master",
          "html_url": "https://github.com/100xinsider/100xinsiderAIService/blob/master/100xinsiderLLMService.sln",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsiderAIService/git/blobs/3224abfd521aed4911c6aa918055f2ff9fe0a961",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsiderAIService/master/100xinsiderLLMService.sln?token=BUOXE7DJWJWLKJOQY3YCX3LI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsiderAIService/contents/100xinsiderLLMService.sln?ref=master",
            "git": "https://api.github.com/repos/100xinsider/100xinsiderAIService/git/blobs/3224abfd521aed4911c6aa918055f2ff9fe0a961",
            "html": "https://github.com/100xinsider/100xinsiderAIService/blob/master/100xinsiderLLMService.sln"
          }
        },
        {
          "name": "100xinsiderLLMService",
          "path": "100xinsiderLLMService",
          "sha": "0ab9c9c32d2f838156049f25bfdc0f6a10286f1d",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/100xinsiderAIService/contents/100xinsiderLLMService?ref=master",
          "html_url": "https://github.com/100xinsider/100xinsiderAIService/tree/master/100xinsiderLLMService",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsiderAIService/git/trees/0ab9c9c32d2f838156049f25bfdc0f6a10286f1d",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsiderAIService/contents/100xinsiderLLMService?ref=master",
            "git": "https://api.github.com/repos/100xinsider/100xinsiderAIService/git/trees/0ab9c9c32d2f838156049f25bfdc0f6a10286f1d",
            "html": "https://github.com/100xinsider/100xinsiderAIService/tree/master/100xinsiderLLMService"
          }
        }
      ]
    },
    {
      "name": "100xinsiderAPI",
      "full_name": "100xinsider/100xinsiderAPI",
      "private": true,
      "contents": [
        {
          "name": ".dockerignore",
          "path": ".dockerignore",
          "sha": "fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "size": 393,
          "url": "https://api.github.com/repos/100xinsider/100xinsiderAPI/contents/.dockerignore?ref=master",
          "html_url": "https://github.com/100xinsider/100xinsiderAPI/blob/master/.dockerignore",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsiderAPI/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsiderAPI/master/.dockerignore?token=BUOXE7HJKFIMA4HVNMV3673I7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsiderAPI/contents/.dockerignore?ref=master",
            "git": "https://api.github.com/repos/100xinsider/100xinsiderAPI/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
            "html": "https://github.com/100xinsider/100xinsiderAPI/blob/master/.dockerignore"
          }
        },
        {
          "name": ".gitattributes",
          "path": ".gitattributes",
          "sha": "1ff0c423042b46cb1d617b81efb715defbe8054d",
          "size": 2518,
          "url": "https://api.github.com/repos/100xinsider/100xinsiderAPI/contents/.gitattributes?ref=master",
          "html_url": "https://github.com/100xinsider/100xinsiderAPI/blob/master/.gitattributes",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsiderAPI/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsiderAPI/master/.gitattributes?token=BUOXE7EKII23GVFWGEVTKODI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsiderAPI/contents/.gitattributes?ref=master",
            "git": "https://api.github.com/repos/100xinsider/100xinsiderAPI/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
            "html": "https://github.com/100xinsider/100xinsiderAPI/blob/master/.gitattributes"
          }
        },
        {
          "name": ".gitignore",
          "path": ".gitignore",
          "sha": "9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "size": 6223,
          "url": "https://api.github.com/repos/100xinsider/100xinsiderAPI/contents/.gitignore?ref=master",
          "html_url": "https://github.com/100xinsider/100xinsiderAPI/blob/master/.gitignore",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsiderAPI/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsiderAPI/master/.gitignore?token=BUOXE7CQ27FLJRQUBM77DFDI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsiderAPI/contents/.gitignore?ref=master",
            "git": "https://api.github.com/repos/100xinsider/100xinsiderAPI/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
            "html": "https://github.com/100xinsider/100xinsiderAPI/blob/master/.gitignore"
          }
        },
        {
          "name": "100xinsiderAPI.sln",
          "path": "100xinsiderAPI.sln",
          "sha": "94a97d10330b939e41944c01c88fe46296883f7b",
          "size": 1005,
          "url": "https://api.github.com/repos/100xinsider/100xinsiderAPI/contents/100xinsiderAPI.sln?ref=master",
          "html_url": "https://github.com/100xinsider/100xinsiderAPI/blob/master/100xinsiderAPI.sln",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsiderAPI/git/blobs/94a97d10330b939e41944c01c88fe46296883f7b",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsiderAPI/master/100xinsiderAPI.sln?token=BUOXE7C3Z3LCJPMQYERJQDLI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsiderAPI/contents/100xinsiderAPI.sln?ref=master",
            "git": "https://api.github.com/repos/100xinsider/100xinsiderAPI/git/blobs/94a97d10330b939e41944c01c88fe46296883f7b",
            "html": "https://github.com/100xinsider/100xinsiderAPI/blob/master/100xinsiderAPI.sln"
          }
        },
        {
          "name": "100xinsiderAPI",
          "path": "100xinsiderAPI",
          "sha": "ba9213fbb6a2c53ba9bfd2e4411cfd600a966abf",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/100xinsiderAPI/contents/100xinsiderAPI?ref=master",
          "html_url": "https://github.com/100xinsider/100xinsiderAPI/tree/master/100xinsiderAPI",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsiderAPI/git/trees/ba9213fbb6a2c53ba9bfd2e4411cfd600a966abf",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsiderAPI/contents/100xinsiderAPI?ref=master",
            "git": "https://api.github.com/repos/100xinsider/100xinsiderAPI/git/trees/ba9213fbb6a2c53ba9bfd2e4411cfd600a966abf",
            "html": "https://github.com/100xinsider/100xinsiderAPI/tree/master/100xinsiderAPI"
          }
        },
        {
          "name": "README.md",
          "path": "README.md",
          "sha": "e6b11bc606c3e3af1b97729adfd154a28f0359a5",
          "size": 16,
          "url": "https://api.github.com/repos/100xinsider/100xinsiderAPI/contents/README.md?ref=master",
          "html_url": "https://github.com/100xinsider/100xinsiderAPI/blob/master/README.md",
          "git_url": "https://api.github.com/repos/100xinsider/100xinsiderAPI/git/blobs/e6b11bc606c3e3af1b97729adfd154a28f0359a5",
          "download_url": "https://raw.githubusercontent.com/100xinsider/100xinsiderAPI/master/README.md?token=BUOXE7GFFKA6RZ3CWET3QSTI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/100xinsiderAPI/contents/README.md?ref=master",
            "git": "https://api.github.com/repos/100xinsider/100xinsiderAPI/git/blobs/e6b11bc606c3e3af1b97729adfd154a28f0359a5",
            "html": "https://github.com/100xinsider/100xinsiderAPI/blob/master/README.md"
          }
        }
      ]
    },
    {
      "name": "api-hoppscotch",
      "full_name": "100xinsider/api-hoppscotch",
      "private": false,
      "contents": [
        {
          "name": ".devcontainer",
          "path": ".devcontainer",
          "sha": "b579836f3ac3a5fe5d1a8179a3572e4f6fec05bc",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.devcontainer?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/tree/main/.devcontainer",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/trees/b579836f3ac3a5fe5d1a8179a3572e4f6fec05bc",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.devcontainer?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/trees/b579836f3ac3a5fe5d1a8179a3572e4f6fec05bc",
            "html": "https://github.com/100xinsider/api-hoppscotch/tree/main/.devcontainer"
          }
        },
        {
          "name": ".dockerignore",
          "path": ".dockerignore",
          "sha": "5b57b57f580ac35734cfec705a5777a9d955d956",
          "size": 310,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.dockerignore?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/.dockerignore",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/5b57b57f580ac35734cfec705a5777a9d955d956",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/.dockerignore",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.dockerignore?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/5b57b57f580ac35734cfec705a5777a9d955d956",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/.dockerignore"
          }
        },
        {
          "name": ".editorconfig",
          "path": ".editorconfig",
          "sha": "a1c0c0065d9a82631379be5bd1f7a0179b41ae65",
          "size": 200,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.editorconfig?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/.editorconfig",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/a1c0c0065d9a82631379be5bd1f7a0179b41ae65",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/.editorconfig",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.editorconfig?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/a1c0c0065d9a82631379be5bd1f7a0179b41ae65",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/.editorconfig"
          }
        },
        {
          "name": ".env.example",
          "path": ".env.example",
          "sha": "c1e537b42940aa735bfc91e31e7fbe3069345c90",
          "size": 1660,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.env.example?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/.env.example",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/c1e537b42940aa735bfc91e31e7fbe3069345c90",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/.env.example",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.env.example?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/c1e537b42940aa735bfc91e31e7fbe3069345c90",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/.env.example"
          }
        },
        {
          "name": ".envrc",
          "path": ".envrc",
          "sha": "894571bf430d0164dea67b454c7f4b5b40ebd583",
          "size": 177,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.envrc?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/.envrc",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/894571bf430d0164dea67b454c7f4b5b40ebd583",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/.envrc",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.envrc?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/894571bf430d0164dea67b454c7f4b5b40ebd583",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/.envrc"
          }
        },
        {
          "name": ".firebaserc",
          "path": ".firebaserc",
          "sha": "feafd4b59dc5cc525f26c89699e13918d464f339",
          "size": 55,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.firebaserc?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/.firebaserc",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/feafd4b59dc5cc525f26c89699e13918d464f339",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/.firebaserc",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.firebaserc?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/feafd4b59dc5cc525f26c89699e13918d464f339",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/.firebaserc"
          }
        },
        {
          "name": ".gitattributes",
          "path": ".gitattributes",
          "sha": "6313b56c57848efce05faa7aa7e901ccfc2886ea",
          "size": 19,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.gitattributes?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/.gitattributes",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/6313b56c57848efce05faa7aa7e901ccfc2886ea",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/.gitattributes",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.gitattributes?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/6313b56c57848efce05faa7aa7e901ccfc2886ea",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/.gitattributes"
          }
        },
        {
          "name": ".github",
          "path": ".github",
          "sha": "64fd66e98d2882ae8f075d98bedc27cc309e23e6",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.github?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/tree/main/.github",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/trees/64fd66e98d2882ae8f075d98bedc27cc309e23e6",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.github?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/trees/64fd66e98d2882ae8f075d98bedc27cc309e23e6",
            "html": "https://github.com/100xinsider/api-hoppscotch/tree/main/.github"
          }
        },
        {
          "name": ".gitignore",
          "path": ".gitignore",
          "sha": "68c412619ab2a91c68da99779e04491d3acf9b6d",
          "size": 2581,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.gitignore?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/.gitignore",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/68c412619ab2a91c68da99779e04491d3acf9b6d",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/.gitignore",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.gitignore?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/68c412619ab2a91c68da99779e04491d3acf9b6d",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/.gitignore"
          }
        },
        {
          "name": ".husky",
          "path": ".husky",
          "sha": "eab9ee9283e590bd58b8fce85762a683fc03db0f",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.husky?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/tree/main/.husky",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/trees/eab9ee9283e590bd58b8fce85762a683fc03db0f",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.husky?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/trees/eab9ee9283e590bd58b8fce85762a683fc03db0f",
            "html": "https://github.com/100xinsider/api-hoppscotch/tree/main/.husky"
          }
        },
        {
          "name": ".npmrc",
          "path": ".npmrc",
          "sha": "ff0c3c1c2dabaa2183c07129c3113a312ad1277b",
          "size": 38,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.npmrc?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/.npmrc",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/ff0c3c1c2dabaa2183c07129c3113a312ad1277b",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/.npmrc",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.npmrc?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/ff0c3c1c2dabaa2183c07129c3113a312ad1277b",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/.npmrc"
          }
        },
        {
          "name": ".prettierignore",
          "path": ".prettierignore",
          "sha": "906185b4852a6118dfeda96cb730873470d87136",
          "size": 81,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.prettierignore?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/.prettierignore",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/906185b4852a6118dfeda96cb730873470d87136",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/.prettierignore",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.prettierignore?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/906185b4852a6118dfeda96cb730873470d87136",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/.prettierignore"
          }
        },
        {
          "name": ".prettierrc.js",
          "path": ".prettierrc.js",
          "sha": "40c0e8dbacc0655e0597d2556ceaa156b11e5293",
          "size": 132,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.prettierrc.js?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/.prettierrc.js",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/40c0e8dbacc0655e0597d2556ceaa156b11e5293",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/.prettierrc.js",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/.prettierrc.js?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/40c0e8dbacc0655e0597d2556ceaa156b11e5293",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/.prettierrc.js"
          }
        },
        {
          "name": "CHANGELOG.md",
          "path": "CHANGELOG.md",
          "sha": "61c3fb9b8d7244f3cb732513aa3390b084be3408",
          "size": 101,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/CHANGELOG.md?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/CHANGELOG.md",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/61c3fb9b8d7244f3cb732513aa3390b084be3408",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/CHANGELOG.md",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/CHANGELOG.md?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/61c3fb9b8d7244f3cb732513aa3390b084be3408",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/CHANGELOG.md"
          }
        },
        {
          "name": "CODEOWNERS",
          "path": "CODEOWNERS",
          "sha": "5c837665d913644e0da4f69f62dddedca4c43fd7",
          "size": 1085,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/CODEOWNERS?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/CODEOWNERS",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/5c837665d913644e0da4f69f62dddedca4c43fd7",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/CODEOWNERS",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/CODEOWNERS?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/5c837665d913644e0da4f69f62dddedca4c43fd7",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/CODEOWNERS"
          }
        },
        {
          "name": "CODE_OF_CONDUCT.md",
          "path": "CODE_OF_CONDUCT.md",
          "sha": "5a23ef521c0fb7672ba9c74ecfb6964d465b5b5e",
          "size": 5486,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/CODE_OF_CONDUCT.md?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/CODE_OF_CONDUCT.md",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/5a23ef521c0fb7672ba9c74ecfb6964d465b5b5e",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/CODE_OF_CONDUCT.md",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/CODE_OF_CONDUCT.md?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/5a23ef521c0fb7672ba9c74ecfb6964d465b5b5e",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/CODE_OF_CONDUCT.md"
          }
        },
        {
          "name": "CONTRIBUTING.md",
          "path": "CONTRIBUTING.md",
          "sha": "ce37ce4b7c5c3c4c9ad621fd05df563685af6999",
          "size": 702,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/CONTRIBUTING.md?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/CONTRIBUTING.md",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/ce37ce4b7c5c3c4c9ad621fd05df563685af6999",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/CONTRIBUTING.md",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/CONTRIBUTING.md?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/ce37ce4b7c5c3c4c9ad621fd05df563685af6999",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/CONTRIBUTING.md"
          }
        },
        {
          "name": "LICENSE",
          "path": "LICENSE",
          "sha": "4d209962a5a25c3d3176dd8f2e9d40ccb44e39b4",
          "size": 1056,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/LICENSE?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/LICENSE",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/4d209962a5a25c3d3176dd8f2e9d40ccb44e39b4",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/LICENSE",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/LICENSE?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/4d209962a5a25c3d3176dd8f2e9d40ccb44e39b4",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/LICENSE"
          }
        },
        {
          "name": "README.md",
          "path": "README.md",
          "sha": "42a99c19cbbb707f0eab3fea3f021e774a622f7a",
          "size": 11659,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/README.md?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/README.md",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/42a99c19cbbb707f0eab3fea3f021e774a622f7a",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/README.md",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/README.md?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/42a99c19cbbb707f0eab3fea3f021e774a622f7a",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/README.md"
          }
        },
        {
          "name": "SECURITY.md",
          "path": "SECURITY.md",
          "sha": "1ea1a0a351bc12786200b1fa44a91cf9f30b46a3",
          "size": 2806,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/SECURITY.md?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/SECURITY.md",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/1ea1a0a351bc12786200b1fa44a91cf9f30b46a3",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/SECURITY.md",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/SECURITY.md?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/1ea1a0a351bc12786200b1fa44a91cf9f30b46a3",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/SECURITY.md"
          }
        },
        {
          "name": "TRANSLATIONS.md",
          "path": "TRANSLATIONS.md",
          "sha": "fa58f3811d26cc225e199d84a34f356cc6c11439",
          "size": 2628,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/TRANSLATIONS.md?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/TRANSLATIONS.md",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/fa58f3811d26cc225e199d84a34f356cc6c11439",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/TRANSLATIONS.md",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/TRANSLATIONS.md?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/fa58f3811d26cc225e199d84a34f356cc6c11439",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/TRANSLATIONS.md"
          }
        },
        {
          "name": "aio-multiport-setup.Caddyfile",
          "path": "aio-multiport-setup.Caddyfile",
          "sha": "6140f464e0f2211e0648db6aed4d0542562f75d2",
          "size": 230,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/aio-multiport-setup.Caddyfile?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/aio-multiport-setup.Caddyfile",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/6140f464e0f2211e0648db6aed4d0542562f75d2",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/aio-multiport-setup.Caddyfile",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/aio-multiport-setup.Caddyfile?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/6140f464e0f2211e0648db6aed4d0542562f75d2",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/aio-multiport-setup.Caddyfile"
          }
        },
        {
          "name": "aio-subpath-access.Caddyfile",
          "path": "aio-subpath-access.Caddyfile",
          "sha": "10b8bf5511a4dcca95c742ace826bd987ed644c6",
          "size": 694,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/aio-subpath-access.Caddyfile?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/aio-subpath-access.Caddyfile",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/10b8bf5511a4dcca95c742ace826bd987ed644c6",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/aio-subpath-access.Caddyfile",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/aio-subpath-access.Caddyfile?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/10b8bf5511a4dcca95c742ace826bd987ed644c6",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/aio-subpath-access.Caddyfile"
          }
        },
        {
          "name": "aio_run.mjs",
          "path": "aio_run.mjs",
          "sha": "504942fd1e6e9fec83fa28a676dbb2b346190b01",
          "size": 2396,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/aio_run.mjs?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/aio_run.mjs",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/504942fd1e6e9fec83fa28a676dbb2b346190b01",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/aio_run.mjs",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/aio_run.mjs?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/504942fd1e6e9fec83fa28a676dbb2b346190b01",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/aio_run.mjs"
          }
        },
        {
          "name": "commitlint.config.js",
          "path": "commitlint.config.js",
          "sha": "5717d2571f75ad3a7cb6e5e881ff3bccafd10342",
          "size": 69,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/commitlint.config.js?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/commitlint.config.js",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/5717d2571f75ad3a7cb6e5e881ff3bccafd10342",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/commitlint.config.js",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/commitlint.config.js?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/5717d2571f75ad3a7cb6e5e881ff3bccafd10342",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/commitlint.config.js"
          }
        },
        {
          "name": "devenv.lock",
          "path": "devenv.lock",
          "sha": "b22ef4eda82976ef92493bc33b309ab2934609ec",
          "size": 3239,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/devenv.lock?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/devenv.lock",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/b22ef4eda82976ef92493bc33b309ab2934609ec",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/devenv.lock",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/devenv.lock?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/b22ef4eda82976ef92493bc33b309ab2934609ec",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/devenv.lock"
          }
        },
        {
          "name": "devenv.nix",
          "path": "devenv.nix",
          "sha": "c172b4e779e7c0e89bc493cc81d0b22de36ea2c4",
          "size": 5354,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/devenv.nix?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/devenv.nix",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/c172b4e779e7c0e89bc493cc81d0b22de36ea2c4",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/devenv.nix",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/devenv.nix?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/c172b4e779e7c0e89bc493cc81d0b22de36ea2c4",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/devenv.nix"
          }
        },
        {
          "name": "devenv.yaml",
          "path": "devenv.yaml",
          "sha": "9ee9ba3496c8eb9c4bbe24f81aec72d2633da30b",
          "size": 595,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/devenv.yaml?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/devenv.yaml",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/9ee9ba3496c8eb9c4bbe24f81aec72d2633da30b",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/devenv.yaml",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/devenv.yaml?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/9ee9ba3496c8eb9c4bbe24f81aec72d2633da30b",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/devenv.yaml"
          }
        },
        {
          "name": "docker-compose.deploy.yml",
          "path": "docker-compose.deploy.yml",
          "sha": "e19b852be8b714f6eec8289953034432996a3213",
          "size": 1580,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/docker-compose.deploy.yml?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/docker-compose.deploy.yml",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/e19b852be8b714f6eec8289953034432996a3213",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/docker-compose.deploy.yml",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/docker-compose.deploy.yml?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/e19b852be8b714f6eec8289953034432996a3213",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/docker-compose.deploy.yml"
          }
        },
        {
          "name": "docker-compose.yml",
          "path": "docker-compose.yml",
          "sha": "3d58f7c3d26a054da9415921f87509958881ce4e",
          "size": 8084,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/docker-compose.yml?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/docker-compose.yml",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/3d58f7c3d26a054da9415921f87509958881ce4e",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/docker-compose.yml",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/docker-compose.yml?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/3d58f7c3d26a054da9415921f87509958881ce4e",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/docker-compose.yml"
          }
        },
        {
          "name": "firebase.json",
          "path": "firebase.json",
          "sha": "4120bed02bc1c5d0fec21c548eb11b4bcf1eac94",
          "size": 437,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/firebase.json?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/firebase.json",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/4120bed02bc1c5d0fec21c548eb11b4bcf1eac94",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/firebase.json",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/firebase.json?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/4120bed02bc1c5d0fec21c548eb11b4bcf1eac94",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/firebase.json"
          }
        },
        {
          "name": "firestore.indexes.json",
          "path": "firestore.indexes.json",
          "sha": "415027e5ddaf944819977c1d5e9aaf49e835093f",
          "size": 44,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/firestore.indexes.json?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/firestore.indexes.json",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/415027e5ddaf944819977c1d5e9aaf49e835093f",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/firestore.indexes.json",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/firestore.indexes.json?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/415027e5ddaf944819977c1d5e9aaf49e835093f",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/firestore.indexes.json"
          }
        },
        {
          "name": "firestore.rules",
          "path": "firestore.rules",
          "sha": "830e39723e359f3d8e83adf3dd667dcc9f744f48",
          "size": 547,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/firestore.rules?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/firestore.rules",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/830e39723e359f3d8e83adf3dd667dcc9f744f48",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/firestore.rules",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/firestore.rules?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/830e39723e359f3d8e83adf3dd667dcc9f744f48",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/firestore.rules"
          }
        },
        {
          "name": "healthcheck.sh",
          "path": "healthcheck.sh",
          "sha": "9b3939f17993b9a2b7debf0ef8f23a2a6325fcc8",
          "size": 485,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/healthcheck.sh?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/healthcheck.sh",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/9b3939f17993b9a2b7debf0ef8f23a2a6325fcc8",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/healthcheck.sh",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/healthcheck.sh?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/9b3939f17993b9a2b7debf0ef8f23a2a6325fcc8",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/healthcheck.sh"
          }
        },
        {
          "name": "jsconfig.json",
          "path": "jsconfig.json",
          "sha": "29037a628aaf3b84798021584c9ca70e9552d7ac",
          "size": 209,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/jsconfig.json?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/jsconfig.json",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/29037a628aaf3b84798021584c9ca70e9552d7ac",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/jsconfig.json",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/jsconfig.json?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/29037a628aaf3b84798021584c9ca70e9552d7ac",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/jsconfig.json"
          }
        },
        {
          "name": "netlify.toml",
          "path": "netlify.toml",
          "sha": "80f0ee912faab1a34ca7be0327343d3eb1a7fee3",
          "size": 1426,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/netlify.toml?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/netlify.toml",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/80f0ee912faab1a34ca7be0327343d3eb1a7fee3",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/netlify.toml",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/netlify.toml?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/80f0ee912faab1a34ca7be0327343d3eb1a7fee3",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/netlify.toml"
          }
        },
        {
          "name": "nginx",
          "path": "nginx",
          "sha": "953028d9a64e637e80e5537c960922f8c631f43d",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/nginx?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/tree/main/nginx",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/trees/953028d9a64e637e80e5537c960922f8c631f43d",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/nginx?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/trees/953028d9a64e637e80e5537c960922f8c631f43d",
            "html": "https://github.com/100xinsider/api-hoppscotch/tree/main/nginx"
          }
        },
        {
          "name": "package.json",
          "path": "package.json",
          "sha": "51aa8d6fdd496619892f376432718e365c0e83ee",
          "size": 2203,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/package.json?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/package.json",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/51aa8d6fdd496619892f376432718e365c0e83ee",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/package.json",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/package.json?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/51aa8d6fdd496619892f376432718e365c0e83ee",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/package.json"
          }
        },
        {
          "name": "packages",
          "path": "packages",
          "sha": "d6cabb3e556c42ce724fd3272591f1ca2fcdc74a",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/packages?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/tree/main/packages",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/trees/d6cabb3e556c42ce724fd3272591f1ca2fcdc74a",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/packages?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/trees/d6cabb3e556c42ce724fd3272591f1ca2fcdc74a",
            "html": "https://github.com/100xinsider/api-hoppscotch/tree/main/packages"
          }
        },
        {
          "name": "pnpm-lock.yaml",
          "path": "pnpm-lock.yaml",
          "sha": "04ed9f051b4ce10b82baee568fa06bc30de94d74",
          "size": 1076123,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/pnpm-lock.yaml?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/pnpm-lock.yaml",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/04ed9f051b4ce10b82baee568fa06bc30de94d74",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/pnpm-lock.yaml",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/pnpm-lock.yaml?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/04ed9f051b4ce10b82baee568fa06bc30de94d74",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/pnpm-lock.yaml"
          }
        },
        {
          "name": "pnpm-workspace.yaml",
          "path": "pnpm-workspace.yaml",
          "sha": "eccc335f93b17c6507d051ec75f3234fff207706",
          "size": 27,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/pnpm-workspace.yaml?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/pnpm-workspace.yaml",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/eccc335f93b17c6507d051ec75f3234fff207706",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/pnpm-workspace.yaml",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/pnpm-workspace.yaml?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/eccc335f93b17c6507d051ec75f3234fff207706",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/pnpm-workspace.yaml"
          }
        },
        {
          "name": "prod.Dockerfile",
          "path": "prod.Dockerfile",
          "sha": "d715e19300f293ffbb131357db16dc6488d67689",
          "size": 7110,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/prod.Dockerfile?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/prod.Dockerfile",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/d715e19300f293ffbb131357db16dc6488d67689",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/prod.Dockerfile",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/prod.Dockerfile?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/d715e19300f293ffbb131357db16dc6488d67689",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/prod.Dockerfile"
          }
        },
        {
          "name": "tailwind.config.ts",
          "path": "tailwind.config.ts",
          "sha": "916a621768f866f9ac854736fbcb9ae642fef6fb",
          "size": 270,
          "url": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/tailwind.config.ts?ref=main",
          "html_url": "https://github.com/100xinsider/api-hoppscotch/blob/main/tailwind.config.ts",
          "git_url": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/916a621768f866f9ac854736fbcb9ae642fef6fb",
          "download_url": "https://raw.githubusercontent.com/100xinsider/api-hoppscotch/main/tailwind.config.ts",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/api-hoppscotch/contents/tailwind.config.ts?ref=main",
            "git": "https://api.github.com/repos/100xinsider/api-hoppscotch/git/blobs/916a621768f866f9ac854736fbcb9ae642fef6fb",
            "html": "https://github.com/100xinsider/api-hoppscotch/blob/main/tailwind.config.ts"
          }
        }
      ]
    },
    {
      "name": "Meta100xinsider",
      "full_name": "100xinsider/Meta100xinsider",
      "private": true,
      "contents": [
        {
          "name": ".dockerignore",
          "path": ".dockerignore",
          "sha": "fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "size": 393,
          "url": "https://api.github.com/repos/100xinsider/Meta100xinsider/contents/.dockerignore?ref=master",
          "html_url": "https://github.com/100xinsider/Meta100xinsider/blob/master/.dockerignore",
          "git_url": "https://api.github.com/repos/100xinsider/Meta100xinsider/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "download_url": "https://raw.githubusercontent.com/100xinsider/Meta100xinsider/master/.dockerignore?token=BUOXE7AJHOGYNKPLZEFQ7O3I7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/Meta100xinsider/contents/.dockerignore?ref=master",
            "git": "https://api.github.com/repos/100xinsider/Meta100xinsider/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
            "html": "https://github.com/100xinsider/Meta100xinsider/blob/master/.dockerignore"
          }
        },
        {
          "name": ".gitattributes",
          "path": ".gitattributes",
          "sha": "1ff0c423042b46cb1d617b81efb715defbe8054d",
          "size": 2518,
          "url": "https://api.github.com/repos/100xinsider/Meta100xinsider/contents/.gitattributes?ref=master",
          "html_url": "https://github.com/100xinsider/Meta100xinsider/blob/master/.gitattributes",
          "git_url": "https://api.github.com/repos/100xinsider/Meta100xinsider/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
          "download_url": "https://raw.githubusercontent.com/100xinsider/Meta100xinsider/master/.gitattributes?token=BUOXE7G6B7XYAJYKRM2TPNLI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/Meta100xinsider/contents/.gitattributes?ref=master",
            "git": "https://api.github.com/repos/100xinsider/Meta100xinsider/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
            "html": "https://github.com/100xinsider/Meta100xinsider/blob/master/.gitattributes"
          }
        },
        {
          "name": ".gitignore",
          "path": ".gitignore",
          "sha": "9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "size": 6223,
          "url": "https://api.github.com/repos/100xinsider/Meta100xinsider/contents/.gitignore?ref=master",
          "html_url": "https://github.com/100xinsider/Meta100xinsider/blob/master/.gitignore",
          "git_url": "https://api.github.com/repos/100xinsider/Meta100xinsider/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "download_url": "https://raw.githubusercontent.com/100xinsider/Meta100xinsider/master/.gitignore?token=BUOXE7GLRS7CJ7KO4LYOJKTI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/Meta100xinsider/contents/.gitignore?ref=master",
            "git": "https://api.github.com/repos/100xinsider/Meta100xinsider/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
            "html": "https://github.com/100xinsider/Meta100xinsider/blob/master/.gitignore"
          }
        },
        {
          "name": "Meta100xinsider.sln",
          "path": "Meta100xinsider.sln",
          "sha": "c138b132acf221edfbca908d18c421271caaed3a",
          "size": 1001,
          "url": "https://api.github.com/repos/100xinsider/Meta100xinsider/contents/Meta100xinsider.sln?ref=master",
          "html_url": "https://github.com/100xinsider/Meta100xinsider/blob/master/Meta100xinsider.sln",
          "git_url": "https://api.github.com/repos/100xinsider/Meta100xinsider/git/blobs/c138b132acf221edfbca908d18c421271caaed3a",
          "download_url": "https://raw.githubusercontent.com/100xinsider/Meta100xinsider/master/Meta100xinsider.sln?token=BUOXE7AJGIP236EQVZY6LR3I7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/Meta100xinsider/contents/Meta100xinsider.sln?ref=master",
            "git": "https://api.github.com/repos/100xinsider/Meta100xinsider/git/blobs/c138b132acf221edfbca908d18c421271caaed3a",
            "html": "https://github.com/100xinsider/Meta100xinsider/blob/master/Meta100xinsider.sln"
          }
        },
        {
          "name": "Meta100xinsider",
          "path": "Meta100xinsider",
          "sha": "c71b515d4bd4aae35074e71d7cefe2a93b8ddcb0",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/Meta100xinsider/contents/Meta100xinsider?ref=master",
          "html_url": "https://github.com/100xinsider/Meta100xinsider/tree/master/Meta100xinsider",
          "git_url": "https://api.github.com/repos/100xinsider/Meta100xinsider/git/trees/c71b515d4bd4aae35074e71d7cefe2a93b8ddcb0",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/Meta100xinsider/contents/Meta100xinsider?ref=master",
            "git": "https://api.github.com/repos/100xinsider/Meta100xinsider/git/trees/c71b515d4bd4aae35074e71d7cefe2a93b8ddcb0",
            "html": "https://github.com/100xinsider/Meta100xinsider/tree/master/Meta100xinsider"
          }
        },
        {
          "name": "README.md",
          "path": "README.md",
          "sha": "d9c91ad8d672a77d2658a2a025ab24c98bb9cd4b",
          "size": 144,
          "url": "https://api.github.com/repos/100xinsider/Meta100xinsider/contents/README.md?ref=master",
          "html_url": "https://github.com/100xinsider/Meta100xinsider/blob/master/README.md",
          "git_url": "https://api.github.com/repos/100xinsider/Meta100xinsider/git/blobs/d9c91ad8d672a77d2658a2a025ab24c98bb9cd4b",
          "download_url": "https://raw.githubusercontent.com/100xinsider/Meta100xinsider/master/README.md?token=BUOXE7DODSMXHDIDTMTE4UDI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/Meta100xinsider/contents/README.md?ref=master",
            "git": "https://api.github.com/repos/100xinsider/Meta100xinsider/git/blobs/d9c91ad8d672a77d2658a2a025ab24c98bb9cd4b",
            "html": "https://github.com/100xinsider/Meta100xinsider/blob/master/README.md"
          }
        }
      ]
    },
    {
      "name": "MetaWorker100xinsider",
      "full_name": "100xinsider/MetaWorker100xinsider",
      "private": true,
      "contents": [
        {
          "name": ".dockerignore",
          "path": ".dockerignore",
          "sha": "fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "size": 393,
          "url": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/contents/.dockerignore?ref=master",
          "html_url": "https://github.com/100xinsider/MetaWorker100xinsider/blob/master/.dockerignore",
          "git_url": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "download_url": "https://raw.githubusercontent.com/100xinsider/MetaWorker100xinsider/master/.dockerignore?token=BUOXE7GXPS7XUYRKHRJ4FMTI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/contents/.dockerignore?ref=master",
            "git": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
            "html": "https://github.com/100xinsider/MetaWorker100xinsider/blob/master/.dockerignore"
          }
        },
        {
          "name": ".gitattributes",
          "path": ".gitattributes",
          "sha": "1ff0c423042b46cb1d617b81efb715defbe8054d",
          "size": 2518,
          "url": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/contents/.gitattributes?ref=master",
          "html_url": "https://github.com/100xinsider/MetaWorker100xinsider/blob/master/.gitattributes",
          "git_url": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
          "download_url": "https://raw.githubusercontent.com/100xinsider/MetaWorker100xinsider/master/.gitattributes?token=BUOXE7CZFKN753VGE3Y6HDLI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/contents/.gitattributes?ref=master",
            "git": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
            "html": "https://github.com/100xinsider/MetaWorker100xinsider/blob/master/.gitattributes"
          }
        },
        {
          "name": ".gitignore",
          "path": ".gitignore",
          "sha": "9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "size": 6223,
          "url": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/contents/.gitignore?ref=master",
          "html_url": "https://github.com/100xinsider/MetaWorker100xinsider/blob/master/.gitignore",
          "git_url": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "download_url": "https://raw.githubusercontent.com/100xinsider/MetaWorker100xinsider/master/.gitignore?token=BUOXE7G4LRU3EJ54VGUGXELI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/contents/.gitignore?ref=master",
            "git": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
            "html": "https://github.com/100xinsider/MetaWorker100xinsider/blob/master/.gitignore"
          }
        },
        {
          "name": "MetaWorker100xinsider.sln",
          "path": "MetaWorker100xinsider.sln",
          "sha": "877bc5a8dad25ca7b8d425b1e044ec050400a274",
          "size": 1019,
          "url": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/contents/MetaWorker100xinsider.sln?ref=master",
          "html_url": "https://github.com/100xinsider/MetaWorker100xinsider/blob/master/MetaWorker100xinsider.sln",
          "git_url": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/git/blobs/877bc5a8dad25ca7b8d425b1e044ec050400a274",
          "download_url": "https://raw.githubusercontent.com/100xinsider/MetaWorker100xinsider/master/MetaWorker100xinsider.sln?token=BUOXE7GXKX4JW32DHWD3Q6TI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/contents/MetaWorker100xinsider.sln?ref=master",
            "git": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/git/blobs/877bc5a8dad25ca7b8d425b1e044ec050400a274",
            "html": "https://github.com/100xinsider/MetaWorker100xinsider/blob/master/MetaWorker100xinsider.sln"
          }
        },
        {
          "name": "MetaWorker100xinsider",
          "path": "MetaWorker100xinsider",
          "sha": "f12b5c44671baa5b14de06d9925cc203038c86d4",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/contents/MetaWorker100xinsider?ref=master",
          "html_url": "https://github.com/100xinsider/MetaWorker100xinsider/tree/master/MetaWorker100xinsider",
          "git_url": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/git/trees/f12b5c44671baa5b14de06d9925cc203038c86d4",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/contents/MetaWorker100xinsider?ref=master",
            "git": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/git/trees/f12b5c44671baa5b14de06d9925cc203038c86d4",
            "html": "https://github.com/100xinsider/MetaWorker100xinsider/tree/master/MetaWorker100xinsider"
          }
        },
        {
          "name": "README.md",
          "path": "README.md",
          "sha": "4ce9b96399a35c89082e3aecf5d136cc5b8f3c98",
          "size": 23,
          "url": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/contents/README.md?ref=master",
          "html_url": "https://github.com/100xinsider/MetaWorker100xinsider/blob/master/README.md",
          "git_url": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/git/blobs/4ce9b96399a35c89082e3aecf5d136cc5b8f3c98",
          "download_url": "https://raw.githubusercontent.com/100xinsider/MetaWorker100xinsider/master/README.md?token=BUOXE7GDWVGKAQIII2F3P23I7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/contents/README.md?ref=master",
            "git": "https://api.github.com/repos/100xinsider/MetaWorker100xinsider/git/blobs/4ce9b96399a35c89082e3aecf5d136cc5b8f3c98",
            "html": "https://github.com/100xinsider/MetaWorker100xinsider/blob/master/README.md"
          }
        }
      ]
    },
    {
      "name": "Twitter100Xinsider",
      "full_name": "100xinsider/Twitter100Xinsider",
      "private": true,
      "contents": [
        {
          "name": ".dockerignore",
          "path": ".dockerignore",
          "sha": "fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "size": 393,
          "url": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/contents/.dockerignore?ref=master",
          "html_url": "https://github.com/100xinsider/Twitter100Xinsider/blob/master/.dockerignore",
          "git_url": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "download_url": "https://raw.githubusercontent.com/100xinsider/Twitter100Xinsider/master/.dockerignore?token=BUOXE7F4QWRNXRAF7M6A2HDI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/contents/.dockerignore?ref=master",
            "git": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
            "html": "https://github.com/100xinsider/Twitter100Xinsider/blob/master/.dockerignore"
          }
        },
        {
          "name": ".gitattributes",
          "path": ".gitattributes",
          "sha": "1ff0c423042b46cb1d617b81efb715defbe8054d",
          "size": 2518,
          "url": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/contents/.gitattributes?ref=master",
          "html_url": "https://github.com/100xinsider/Twitter100Xinsider/blob/master/.gitattributes",
          "git_url": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
          "download_url": "https://raw.githubusercontent.com/100xinsider/Twitter100Xinsider/master/.gitattributes?token=BUOXE7EXDKAYONA7UJ3GJJLI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/contents/.gitattributes?ref=master",
            "git": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
            "html": "https://github.com/100xinsider/Twitter100Xinsider/blob/master/.gitattributes"
          }
        },
        {
          "name": ".gitignore",
          "path": ".gitignore",
          "sha": "9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "size": 6223,
          "url": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/contents/.gitignore?ref=master",
          "html_url": "https://github.com/100xinsider/Twitter100Xinsider/blob/master/.gitignore",
          "git_url": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "download_url": "https://raw.githubusercontent.com/100xinsider/Twitter100Xinsider/master/.gitignore?token=BUOXE7CXDIIHOMH7SZUQZV3I7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/contents/.gitignore?ref=master",
            "git": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
            "html": "https://github.com/100xinsider/Twitter100Xinsider/blob/master/.gitignore"
          }
        },
        {
          "name": "README.md",
          "path": "README.md",
          "sha": "3ad6359fef7f10c4658d7edadf84d6bcb0d11208",
          "size": 1956,
          "url": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/contents/README.md?ref=master",
          "html_url": "https://github.com/100xinsider/Twitter100Xinsider/blob/master/README.md",
          "git_url": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/git/blobs/3ad6359fef7f10c4658d7edadf84d6bcb0d11208",
          "download_url": "https://raw.githubusercontent.com/100xinsider/Twitter100Xinsider/master/README.md?token=BUOXE7AZPNL5EN5IZVAGIP3I7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/contents/README.md?ref=master",
            "git": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/git/blobs/3ad6359fef7f10c4658d7edadf84d6bcb0d11208",
            "html": "https://github.com/100xinsider/Twitter100Xinsider/blob/master/README.md"
          }
        },
        {
          "name": "Twitter100Xinsider.sln",
          "path": "Twitter100Xinsider.sln",
          "sha": "0319d76164c96152fa4663ff88df053f8bae188f",
          "size": 1017,
          "url": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/contents/Twitter100Xinsider.sln?ref=master",
          "html_url": "https://github.com/100xinsider/Twitter100Xinsider/blob/master/Twitter100Xinsider.sln",
          "git_url": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/git/blobs/0319d76164c96152fa4663ff88df053f8bae188f",
          "download_url": "https://raw.githubusercontent.com/100xinsider/Twitter100Xinsider/master/Twitter100Xinsider.sln?token=BUOXE7DXVC4D3YTMI2WR54LI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/contents/Twitter100Xinsider.sln?ref=master",
            "git": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/git/blobs/0319d76164c96152fa4663ff88df053f8bae188f",
            "html": "https://github.com/100xinsider/Twitter100Xinsider/blob/master/Twitter100Xinsider.sln"
          }
        },
        {
          "name": "Twitter100Xinsider",
          "path": "Twitter100Xinsider",
          "sha": "82a72228a4bf1a71f3e11a5310756850823cc375",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/contents/Twitter100Xinsider?ref=master",
          "html_url": "https://github.com/100xinsider/Twitter100Xinsider/tree/master/Twitter100Xinsider",
          "git_url": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/git/trees/82a72228a4bf1a71f3e11a5310756850823cc375",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/contents/Twitter100Xinsider?ref=master",
            "git": "https://api.github.com/repos/100xinsider/Twitter100Xinsider/git/trees/82a72228a4bf1a71f3e11a5310756850823cc375",
            "html": "https://github.com/100xinsider/Twitter100Xinsider/tree/master/Twitter100Xinsider"
          }
        }
      ]
    },
    {
      "name": "XPortal",
      "full_name": "100xinsider/XPortal",
      "private": true,
      "contents": [
        {
          "name": ".gitattributes",
          "path": ".gitattributes",
          "sha": "dfe0770424b2a19faf507a501ebfc23be8f54e7b",
          "size": 66,
          "url": "https://api.github.com/repos/100xinsider/XPortal/contents/.gitattributes?ref=main",
          "html_url": "https://github.com/100xinsider/XPortal/blob/main/.gitattributes",
          "git_url": "https://api.github.com/repos/100xinsider/XPortal/git/blobs/dfe0770424b2a19faf507a501ebfc23be8f54e7b",
          "download_url": "https://raw.githubusercontent.com/100xinsider/XPortal/main/.gitattributes?token=BUOXE7CWK4JS3SP2DQ46MVTI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/XPortal/contents/.gitattributes?ref=main",
            "git": "https://api.github.com/repos/100xinsider/XPortal/git/blobs/dfe0770424b2a19faf507a501ebfc23be8f54e7b",
            "html": "https://github.com/100xinsider/XPortal/blob/main/.gitattributes"
          }
        },
        {
          "name": ".gitignore",
          "path": ".gitignore",
          "sha": "ee96fdad74fac89b7f07e1eed935b75f8b4801b1",
          "size": 51,
          "url": "https://api.github.com/repos/100xinsider/XPortal/contents/.gitignore?ref=main",
          "html_url": "https://github.com/100xinsider/XPortal/blob/main/.gitignore",
          "git_url": "https://api.github.com/repos/100xinsider/XPortal/git/blobs/ee96fdad74fac89b7f07e1eed935b75f8b4801b1",
          "download_url": "https://raw.githubusercontent.com/100xinsider/XPortal/main/.gitignore?token=BUOXE7FURXDRRNEGGKX5JUTI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/XPortal/contents/.gitignore?ref=main",
            "git": "https://api.github.com/repos/100xinsider/XPortal/git/blobs/ee96fdad74fac89b7f07e1eed935b75f8b4801b1",
            "html": "https://github.com/100xinsider/XPortal/blob/main/.gitignore"
          }
        },
        {
          "name": ".vscode",
          "path": ".vscode",
          "sha": "87e17fa9af17a1958c8d8875d8b0b07ea0186f29",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/XPortal/contents/.vscode?ref=main",
          "html_url": "https://github.com/100xinsider/XPortal/tree/main/.vscode",
          "git_url": "https://api.github.com/repos/100xinsider/XPortal/git/trees/87e17fa9af17a1958c8d8875d8b0b07ea0186f29",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/XPortal/contents/.vscode?ref=main",
            "git": "https://api.github.com/repos/100xinsider/XPortal/git/trees/87e17fa9af17a1958c8d8875d8b0b07ea0186f29",
            "html": "https://github.com/100xinsider/XPortal/tree/main/.vscode"
          }
        },
        {
          "name": "README.md",
          "path": "README.md",
          "sha": "76587a4b6338dff1f021b4fb4b93123c149936e9",
          "size": 27,
          "url": "https://api.github.com/repos/100xinsider/XPortal/contents/README.md?ref=main",
          "html_url": "https://github.com/100xinsider/XPortal/blob/main/README.md",
          "git_url": "https://api.github.com/repos/100xinsider/XPortal/git/blobs/76587a4b6338dff1f021b4fb4b93123c149936e9",
          "download_url": "https://raw.githubusercontent.com/100xinsider/XPortal/main/README.md?token=BUOXE7EPCKCBXXZ6ZXILXD3I7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/XPortal/contents/README.md?ref=main",
            "git": "https://api.github.com/repos/100xinsider/XPortal/git/blobs/76587a4b6338dff1f021b4fb4b93123c149936e9",
            "html": "https://github.com/100xinsider/XPortal/blob/main/README.md"
          }
        },
        {
          "name": "default.conf",
          "path": "default.conf",
          "sha": "49c3a39fd737d8bb952b8ae9b325764ec0b25943",
          "size": 744,
          "url": "https://api.github.com/repos/100xinsider/XPortal/contents/default.conf?ref=main",
          "html_url": "https://github.com/100xinsider/XPortal/blob/main/default.conf",
          "git_url": "https://api.github.com/repos/100xinsider/XPortal/git/blobs/49c3a39fd737d8bb952b8ae9b325764ec0b25943",
          "download_url": "https://raw.githubusercontent.com/100xinsider/XPortal/main/default.conf?token=BUOXE7FMOXKJ7IFWMKEMPTDI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/XPortal/contents/default.conf?ref=main",
            "git": "https://api.github.com/repos/100xinsider/XPortal/git/blobs/49c3a39fd737d8bb952b8ae9b325764ec0b25943",
            "html": "https://github.com/100xinsider/XPortal/blob/main/default.conf"
          }
        },
        {
          "name": "docker-compose.yml",
          "path": "docker-compose.yml",
          "sha": "1817c71f7f73956eb68b37a5c5062c9b67ac7405",
          "size": 573,
          "url": "https://api.github.com/repos/100xinsider/XPortal/contents/docker-compose.yml?ref=main",
          "html_url": "https://github.com/100xinsider/XPortal/blob/main/docker-compose.yml",
          "git_url": "https://api.github.com/repos/100xinsider/XPortal/git/blobs/1817c71f7f73956eb68b37a5c5062c9b67ac7405",
          "download_url": "https://raw.githubusercontent.com/100xinsider/XPortal/main/docker-compose.yml?token=BUOXE7BPSJCMSMYCMVFJVG3I7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/XPortal/contents/docker-compose.yml?ref=main",
            "git": "https://api.github.com/repos/100xinsider/XPortal/git/blobs/1817c71f7f73956eb68b37a5c5062c9b67ac7405",
            "html": "https://github.com/100xinsider/XPortal/blob/main/docker-compose.yml"
          }
        },
        {
          "name": "frontend",
          "path": "frontend",
          "sha": "3ab6e420c26e4d06b837881f59f94d5326c73928",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/XPortal/contents/frontend?ref=main",
          "html_url": "https://github.com/100xinsider/XPortal/tree/main/frontend",
          "git_url": "https://api.github.com/repos/100xinsider/XPortal/git/trees/3ab6e420c26e4d06b837881f59f94d5326c73928",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/XPortal/contents/frontend?ref=main",
            "git": "https://api.github.com/repos/100xinsider/XPortal/git/trees/3ab6e420c26e4d06b837881f59f94d5326c73928",
            "html": "https://github.com/100xinsider/XPortal/tree/main/frontend"
          }
        },
        {
          "name": "server",
          "path": "server",
          "sha": "3cd4c439108730361d76486718d020a4a98614b0",
          "size": 0,
          "url": "https://api.github.com/repos/100xinsider/XPortal/contents/server?ref=main",
          "html_url": "https://github.com/100xinsider/XPortal/tree/main/server",
          "git_url": "https://api.github.com/repos/100xinsider/XPortal/git/trees/3cd4c439108730361d76486718d020a4a98614b0",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/100xinsider/XPortal/contents/server?ref=main",
            "git": "https://api.github.com/repos/100xinsider/XPortal/git/trees/3cd4c439108730361d76486718d020a4a98614b0",
            "html": "https://github.com/100xinsider/XPortal/tree/main/server"
          }
        }
      ]
    },
    {
      "name": "100xinsider",
      "full_name": "solomonyusuf/100xinsider",
      "private": true,
      "contents": [
        {
          "name": ".editorconfig",
          "path": ".editorconfig",
          "sha": "8f0de65c560259bd171d746d12aa187f666893a3",
          "size": 258,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/.editorconfig?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/blob/main/.editorconfig",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/8f0de65c560259bd171d746d12aa187f666893a3",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsider/main/.editorconfig?token=BUOXE7HF7HCAOT5N7ANGXM3I7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/.editorconfig?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/8f0de65c560259bd171d746d12aa187f666893a3",
            "html": "https://github.com/solomonyusuf/100xinsider/blob/main/.editorconfig"
          }
        },
        {
          "name": ".env.example",
          "path": ".env.example",
          "sha": "35db1ddf0e04fb9f138a372b17d0bfc8480bef38",
          "size": 1084,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/.env.example?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/blob/main/.env.example",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/35db1ddf0e04fb9f138a372b17d0bfc8480bef38",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsider/main/.env.example?token=BUOXE7DEJ3O5CHDMPWMSPKTI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/.env.example?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/35db1ddf0e04fb9f138a372b17d0bfc8480bef38",
            "html": "https://github.com/solomonyusuf/100xinsider/blob/main/.env.example"
          }
        },
        {
          "name": ".gitattributes",
          "path": ".gitattributes",
          "sha": "dfe0770424b2a19faf507a501ebfc23be8f54e7b",
          "size": 66,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/.gitattributes?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/blob/main/.gitattributes",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/dfe0770424b2a19faf507a501ebfc23be8f54e7b",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsider/main/.gitattributes?token=BUOXE7AWWLHT3HC4WE3GVDDI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/.gitattributes?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/dfe0770424b2a19faf507a501ebfc23be8f54e7b",
            "html": "https://github.com/solomonyusuf/100xinsider/blob/main/.gitattributes"
          }
        },
        {
          "name": ".github",
          "path": ".github",
          "sha": "884c361cafe922d76cfb1940553f48b89c8ce6d1",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/.github?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/tree/main/.github",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/884c361cafe922d76cfb1940553f48b89c8ce6d1",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/.github?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/884c361cafe922d76cfb1940553f48b89c8ce6d1",
            "html": "https://github.com/solomonyusuf/100xinsider/tree/main/.github"
          }
        },
        {
          "name": ".gitignore",
          "path": ".gitignore",
          "sha": "c7cf1fa675f65701fc1118ad21257badc7899c46",
          "size": 286,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/.gitignore?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/blob/main/.gitignore",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/c7cf1fa675f65701fc1118ad21257badc7899c46",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsider/main/.gitignore?token=BUOXE7B42CCJFOB767HBAQ3I7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/.gitignore?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/c7cf1fa675f65701fc1118ad21257badc7899c46",
            "html": "https://github.com/solomonyusuf/100xinsider/blob/main/.gitignore"
          }
        },
        {
          "name": "Dockerfile",
          "path": "Dockerfile",
          "sha": "672ef43f723a8a80e8e8efaa592dcf67636f391d",
          "size": 698,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/Dockerfile?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/blob/main/Dockerfile",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/672ef43f723a8a80e8e8efaa592dcf67636f391d",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsider/main/Dockerfile?token=BUOXE7HJBBQJFEB5DJDB6K3I7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/Dockerfile?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/672ef43f723a8a80e8e8efaa592dcf67636f391d",
            "html": "https://github.com/solomonyusuf/100xinsider/blob/main/Dockerfile"
          }
        },
        {
          "name": "README.md",
          "path": "README.md",
          "sha": "6b5bceea5549f2dfb3915ec6310e9d785a37f9ae",
          "size": 14,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/README.md?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/blob/main/README.md",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/6b5bceea5549f2dfb3915ec6310e9d785a37f9ae",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsider/main/README.md?token=BUOXE7EQ43OM52IISRKEMJ3I7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/README.md?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/6b5bceea5549f2dfb3915ec6310e9d785a37f9ae",
            "html": "https://github.com/solomonyusuf/100xinsider/blob/main/README.md"
          }
        },
        {
          "name": "app",
          "path": "app",
          "sha": "01d4723128789c8cf7ec69bdfe5dfa75d153778d",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/app?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/tree/main/app",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/01d4723128789c8cf7ec69bdfe5dfa75d153778d",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/app?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/01d4723128789c8cf7ec69bdfe5dfa75d153778d",
            "html": "https://github.com/solomonyusuf/100xinsider/tree/main/app"
          }
        },
        {
          "name": "artisan",
          "path": "artisan",
          "sha": "c35e31d6a29f62921a8621944eb20ad162f5b2bb",
          "size": 425,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/artisan?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/blob/main/artisan",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/c35e31d6a29f62921a8621944eb20ad162f5b2bb",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsider/main/artisan?token=BUOXE7HFYZANU2XSANLWQCTI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/artisan?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/c35e31d6a29f62921a8621944eb20ad162f5b2bb",
            "html": "https://github.com/solomonyusuf/100xinsider/blob/main/artisan"
          }
        },
        {
          "name": "bootstrap",
          "path": "bootstrap",
          "sha": "3ef809b2f21b69f36df6121fd18abcd1ae3be124",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/bootstrap?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/tree/main/bootstrap",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/3ef809b2f21b69f36df6121fd18abcd1ae3be124",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/bootstrap?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/3ef809b2f21b69f36df6121fd18abcd1ae3be124",
            "html": "https://github.com/solomonyusuf/100xinsider/tree/main/bootstrap"
          }
        },
        {
          "name": "composer.json",
          "path": "composer.json",
          "sha": "eff37380136fc34e893789bb2bbc63625bf17d5c",
          "size": 2584,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/composer.json?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/blob/main/composer.json",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/eff37380136fc34e893789bb2bbc63625bf17d5c",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsider/main/composer.json?token=BUOXE7DSUSZI4TQA2EGNTL3I7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/composer.json?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/eff37380136fc34e893789bb2bbc63625bf17d5c",
            "html": "https://github.com/solomonyusuf/100xinsider/blob/main/composer.json"
          }
        },
        {
          "name": "composer.lock",
          "path": "composer.lock",
          "sha": "1f232acd28be3e4cd0eec10cd47917a697cb502f",
          "size": 316445,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/composer.lock?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/blob/main/composer.lock",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/1f232acd28be3e4cd0eec10cd47917a697cb502f",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsider/main/composer.lock?token=BUOXE7EE6OYYL5ISNRRRUULI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/composer.lock?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/1f232acd28be3e4cd0eec10cd47917a697cb502f",
            "html": "https://github.com/solomonyusuf/100xinsider/blob/main/composer.lock"
          }
        },
        {
          "name": "config",
          "path": "config",
          "sha": "67bc1003b76536c2f098dea607ddc0c02e5c54ac",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/config?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/tree/main/config",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/67bc1003b76536c2f098dea607ddc0c02e5c54ac",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/config?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/67bc1003b76536c2f098dea607ddc0c02e5c54ac",
            "html": "https://github.com/solomonyusuf/100xinsider/tree/main/config"
          }
        },
        {
          "name": "database",
          "path": "database",
          "sha": "9bca655e62bd77c99a4e02b540b5fb803bd8129a",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/database?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/tree/main/database",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/9bca655e62bd77c99a4e02b540b5fb803bd8129a",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/database?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/9bca655e62bd77c99a4e02b540b5fb803bd8129a",
            "html": "https://github.com/solomonyusuf/100xinsider/tree/main/database"
          }
        },
        {
          "name": "docker",
          "path": "docker",
          "sha": "868393ff52637fb2a04cda4ec9e329d77b454adf",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/docker?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/tree/main/docker",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/868393ff52637fb2a04cda4ec9e329d77b454adf",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/docker?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/868393ff52637fb2a04cda4ec9e329d77b454adf",
            "html": "https://github.com/solomonyusuf/100xinsider/tree/main/docker"
          }
        },
        {
          "name": "package.json",
          "path": "package.json",
          "sha": "4e4ab6fed34b98d5064837691b0a67f50c92f552",
          "size": 354,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/package.json?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/blob/main/package.json",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/4e4ab6fed34b98d5064837691b0a67f50c92f552",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsider/main/package.json?token=BUOXE7FEV5C66T3RNRHBCJ3I7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/package.json?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/4e4ab6fed34b98d5064837691b0a67f50c92f552",
            "html": "https://github.com/solomonyusuf/100xinsider/blob/main/package.json"
          }
        },
        {
          "name": "phpunit.xml",
          "path": "phpunit.xml",
          "sha": "61c031c478ef57ccc703432e52fce874d0c2c8de",
          "size": 1173,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/phpunit.xml?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/blob/main/phpunit.xml",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/61c031c478ef57ccc703432e52fce874d0c2c8de",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsider/main/phpunit.xml?token=BUOXE7EZWMPIW5OQT4VKZRTI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/phpunit.xml?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/61c031c478ef57ccc703432e52fce874d0c2c8de",
            "html": "https://github.com/solomonyusuf/100xinsider/blob/main/phpunit.xml"
          }
        },
        {
          "name": "public",
          "path": "public",
          "sha": "33748ff36eeacf7dc144b51e5e5d219cb483eb67",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/public?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/tree/main/public",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/33748ff36eeacf7dc144b51e5e5d219cb483eb67",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/public?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/33748ff36eeacf7dc144b51e5e5d219cb483eb67",
            "html": "https://github.com/solomonyusuf/100xinsider/tree/main/public"
          }
        },
        {
          "name": "resources",
          "path": "resources",
          "sha": "b7cde6a8b2955bd873094730280399b1159f7c0c",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/resources?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/tree/main/resources",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/b7cde6a8b2955bd873094730280399b1159f7c0c",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/resources?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/b7cde6a8b2955bd873094730280399b1159f7c0c",
            "html": "https://github.com/solomonyusuf/100xinsider/tree/main/resources"
          }
        },
        {
          "name": "routes",
          "path": "routes",
          "sha": "cba7d0386db6c4d4afa3fb62c3fe63f262e9ceca",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/routes?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/tree/main/routes",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/cba7d0386db6c4d4afa3fb62c3fe63f262e9ceca",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/routes?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/cba7d0386db6c4d4afa3fb62c3fe63f262e9ceca",
            "html": "https://github.com/solomonyusuf/100xinsider/tree/main/routes"
          }
        },
        {
          "name": "storage",
          "path": "storage",
          "sha": "52f4fc20dd23d1552aad0fed5629d2fe43fb98f0",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/storage?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/tree/main/storage",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/52f4fc20dd23d1552aad0fed5629d2fe43fb98f0",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/storage?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/52f4fc20dd23d1552aad0fed5629d2fe43fb98f0",
            "html": "https://github.com/solomonyusuf/100xinsider/tree/main/storage"
          }
        },
        {
          "name": "tests",
          "path": "tests",
          "sha": "4b455379c5ee5810aafe0d7177d1d86518e17fac",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/tests?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/tree/main/tests",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/4b455379c5ee5810aafe0d7177d1d86518e17fac",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/tests?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/trees/4b455379c5ee5810aafe0d7177d1d86518e17fac",
            "html": "https://github.com/solomonyusuf/100xinsider/tree/main/tests"
          }
        },
        {
          "name": "vite.config.js",
          "path": "vite.config.js",
          "sha": "29fbfe9a819068359c30a558d0097c3c8f551885",
          "size": 331,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/vite.config.js?ref=main",
          "html_url": "https://github.com/solomonyusuf/100xinsider/blob/main/vite.config.js",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/29fbfe9a819068359c30a558d0097c3c8f551885",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsider/main/vite.config.js?token=BUOXE7HBLPSZ77FNULABEXTI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsider/contents/vite.config.js?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsider/git/blobs/29fbfe9a819068359c30a558d0097c3c8f551885",
            "html": "https://github.com/solomonyusuf/100xinsider/blob/main/vite.config.js"
          }
        }
      ]
    },
    {
      "name": "100xinsiderAIService",
      "full_name": "solomonyusuf/100xinsiderAIService",
      "private": true,
      "contents": [
        {
          "name": ".dockerignore",
          "path": ".dockerignore",
          "sha": "fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "size": 393,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/contents/.dockerignore?ref=master",
          "html_url": "https://github.com/solomonyusuf/100xinsiderAIService/blob/master/.dockerignore",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsiderAIService/master/.dockerignore?token=BUOXE7BE6V2G33G2CY2N24LI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/contents/.dockerignore?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
            "html": "https://github.com/solomonyusuf/100xinsiderAIService/blob/master/.dockerignore"
          }
        },
        {
          "name": ".gitattributes",
          "path": ".gitattributes",
          "sha": "1ff0c423042b46cb1d617b81efb715defbe8054d",
          "size": 2518,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/contents/.gitattributes?ref=master",
          "html_url": "https://github.com/solomonyusuf/100xinsiderAIService/blob/master/.gitattributes",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsiderAIService/master/.gitattributes?token=BUOXE7HO2W7I2TVJAD4CMILI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/contents/.gitattributes?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
            "html": "https://github.com/solomonyusuf/100xinsiderAIService/blob/master/.gitattributes"
          }
        },
        {
          "name": ".gitignore",
          "path": ".gitignore",
          "sha": "9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "size": 6223,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/contents/.gitignore?ref=master",
          "html_url": "https://github.com/solomonyusuf/100xinsiderAIService/blob/master/.gitignore",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsiderAIService/master/.gitignore?token=BUOXE7DJHCU7VAVHSR6ZFYDI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/contents/.gitignore?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
            "html": "https://github.com/solomonyusuf/100xinsiderAIService/blob/master/.gitignore"
          }
        },
        {
          "name": "100xinsiderLLMService.sln",
          "path": "100xinsiderLLMService.sln",
          "sha": "3224abfd521aed4911c6aa918055f2ff9fe0a961",
          "size": 1019,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/contents/100xinsiderLLMService.sln?ref=master",
          "html_url": "https://github.com/solomonyusuf/100xinsiderAIService/blob/master/100xinsiderLLMService.sln",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/git/blobs/3224abfd521aed4911c6aa918055f2ff9fe0a961",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsiderAIService/master/100xinsiderLLMService.sln?token=BUOXE7ENTSTVU5TWWJ5SZQLI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/contents/100xinsiderLLMService.sln?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/git/blobs/3224abfd521aed4911c6aa918055f2ff9fe0a961",
            "html": "https://github.com/solomonyusuf/100xinsiderAIService/blob/master/100xinsiderLLMService.sln"
          }
        },
        {
          "name": "100xinsiderLLMService",
          "path": "100xinsiderLLMService",
          "sha": "0ab9c9c32d2f838156049f25bfdc0f6a10286f1d",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/contents/100xinsiderLLMService?ref=master",
          "html_url": "https://github.com/solomonyusuf/100xinsiderAIService/tree/master/100xinsiderLLMService",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/git/trees/0ab9c9c32d2f838156049f25bfdc0f6a10286f1d",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/contents/100xinsiderLLMService?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsiderAIService/git/trees/0ab9c9c32d2f838156049f25bfdc0f6a10286f1d",
            "html": "https://github.com/solomonyusuf/100xinsiderAIService/tree/master/100xinsiderLLMService"
          }
        }
      ]
    },
    {
      "name": "100xinsiderAPI",
      "full_name": "solomonyusuf/100xinsiderAPI",
      "private": true,
      "contents": [
        {
          "name": ".dockerignore",
          "path": ".dockerignore",
          "sha": "fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "size": 393,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/contents/.dockerignore?ref=master",
          "html_url": "https://github.com/solomonyusuf/100xinsiderAPI/blob/master/.dockerignore",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsiderAPI/master/.dockerignore?token=BUOXE7FLYAKO7J3M2OECLYDI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/contents/.dockerignore?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
            "html": "https://github.com/solomonyusuf/100xinsiderAPI/blob/master/.dockerignore"
          }
        },
        {
          "name": ".gitattributes",
          "path": ".gitattributes",
          "sha": "1ff0c423042b46cb1d617b81efb715defbe8054d",
          "size": 2518,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/contents/.gitattributes?ref=master",
          "html_url": "https://github.com/solomonyusuf/100xinsiderAPI/blob/master/.gitattributes",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsiderAPI/master/.gitattributes?token=BUOXE7CMMKSB267YQRYZGD3I7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/contents/.gitattributes?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
            "html": "https://github.com/solomonyusuf/100xinsiderAPI/blob/master/.gitattributes"
          }
        },
        {
          "name": ".gitignore",
          "path": ".gitignore",
          "sha": "9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "size": 6223,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/contents/.gitignore?ref=master",
          "html_url": "https://github.com/solomonyusuf/100xinsiderAPI/blob/master/.gitignore",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsiderAPI/master/.gitignore?token=BUOXE7AXY5KBB3FGQ6NVRXLI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/contents/.gitignore?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
            "html": "https://github.com/solomonyusuf/100xinsiderAPI/blob/master/.gitignore"
          }
        },
        {
          "name": "100xinsiderAPI.sln",
          "path": "100xinsiderAPI.sln",
          "sha": "94a97d10330b939e41944c01c88fe46296883f7b",
          "size": 1005,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/contents/100xinsiderAPI.sln?ref=master",
          "html_url": "https://github.com/solomonyusuf/100xinsiderAPI/blob/master/100xinsiderAPI.sln",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/git/blobs/94a97d10330b939e41944c01c88fe46296883f7b",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsiderAPI/master/100xinsiderAPI.sln?token=BUOXE7A3ZJP44DKAHB43SDDI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/contents/100xinsiderAPI.sln?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/git/blobs/94a97d10330b939e41944c01c88fe46296883f7b",
            "html": "https://github.com/solomonyusuf/100xinsiderAPI/blob/master/100xinsiderAPI.sln"
          }
        },
        {
          "name": "100xinsiderAPI",
          "path": "100xinsiderAPI",
          "sha": "ba9213fbb6a2c53ba9bfd2e4411cfd600a966abf",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/contents/100xinsiderAPI?ref=master",
          "html_url": "https://github.com/solomonyusuf/100xinsiderAPI/tree/master/100xinsiderAPI",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/git/trees/ba9213fbb6a2c53ba9bfd2e4411cfd600a966abf",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/contents/100xinsiderAPI?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/git/trees/ba9213fbb6a2c53ba9bfd2e4411cfd600a966abf",
            "html": "https://github.com/solomonyusuf/100xinsiderAPI/tree/master/100xinsiderAPI"
          }
        },
        {
          "name": "README.md",
          "path": "README.md",
          "sha": "e6b11bc606c3e3af1b97729adfd154a28f0359a5",
          "size": 16,
          "url": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/contents/README.md?ref=master",
          "html_url": "https://github.com/solomonyusuf/100xinsiderAPI/blob/master/README.md",
          "git_url": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/git/blobs/e6b11bc606c3e3af1b97729adfd154a28f0359a5",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/100xinsiderAPI/master/README.md?token=BUOXE7C4NM4TSJQTRF7A2YDI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/contents/README.md?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/100xinsiderAPI/git/blobs/e6b11bc606c3e3af1b97729adfd154a28f0359a5",
            "html": "https://github.com/solomonyusuf/100xinsiderAPI/blob/master/README.md"
          }
        }
      ]
    },
    {
      "name": "Meta100xinsider",
      "full_name": "solomonyusuf/Meta100xinsider",
      "private": true,
      "contents": [
        {
          "name": ".dockerignore",
          "path": ".dockerignore",
          "sha": "fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "size": 393,
          "url": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/contents/.dockerignore?ref=master",
          "html_url": "https://github.com/solomonyusuf/Meta100xinsider/blob/master/.dockerignore",
          "git_url": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/Meta100xinsider/master/.dockerignore?token=BUOXE7CCON4KVWKKLHPBW6LI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/contents/.dockerignore?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
            "html": "https://github.com/solomonyusuf/Meta100xinsider/blob/master/.dockerignore"
          }
        },
        {
          "name": ".gitattributes",
          "path": ".gitattributes",
          "sha": "1ff0c423042b46cb1d617b81efb715defbe8054d",
          "size": 2518,
          "url": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/contents/.gitattributes?ref=master",
          "html_url": "https://github.com/solomonyusuf/Meta100xinsider/blob/master/.gitattributes",
          "git_url": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/Meta100xinsider/master/.gitattributes?token=BUOXE7EE7WSYLZHKCLC6QQDI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/contents/.gitattributes?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
            "html": "https://github.com/solomonyusuf/Meta100xinsider/blob/master/.gitattributes"
          }
        },
        {
          "name": ".gitignore",
          "path": ".gitignore",
          "sha": "9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "size": 6223,
          "url": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/contents/.gitignore?ref=master",
          "html_url": "https://github.com/solomonyusuf/Meta100xinsider/blob/master/.gitignore",
          "git_url": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/Meta100xinsider/master/.gitignore?token=BUOXE7GSYWXNSIHEGKL4VFLI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/contents/.gitignore?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
            "html": "https://github.com/solomonyusuf/Meta100xinsider/blob/master/.gitignore"
          }
        },
        {
          "name": "Meta100xinsider.sln",
          "path": "Meta100xinsider.sln",
          "sha": "c138b132acf221edfbca908d18c421271caaed3a",
          "size": 1001,
          "url": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/contents/Meta100xinsider.sln?ref=master",
          "html_url": "https://github.com/solomonyusuf/Meta100xinsider/blob/master/Meta100xinsider.sln",
          "git_url": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/git/blobs/c138b132acf221edfbca908d18c421271caaed3a",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/Meta100xinsider/master/Meta100xinsider.sln?token=BUOXE7ARGPMDK6S4MFQGZBLI7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/contents/Meta100xinsider.sln?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/git/blobs/c138b132acf221edfbca908d18c421271caaed3a",
            "html": "https://github.com/solomonyusuf/Meta100xinsider/blob/master/Meta100xinsider.sln"
          }
        },
        {
          "name": "Meta100xinsider",
          "path": "Meta100xinsider",
          "sha": "c71b515d4bd4aae35074e71d7cefe2a93b8ddcb0",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/contents/Meta100xinsider?ref=master",
          "html_url": "https://github.com/solomonyusuf/Meta100xinsider/tree/master/Meta100xinsider",
          "git_url": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/git/trees/c71b515d4bd4aae35074e71d7cefe2a93b8ddcb0",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/contents/Meta100xinsider?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/git/trees/c71b515d4bd4aae35074e71d7cefe2a93b8ddcb0",
            "html": "https://github.com/solomonyusuf/Meta100xinsider/tree/master/Meta100xinsider"
          }
        },
        {
          "name": "README.md",
          "path": "README.md",
          "sha": "d9c91ad8d672a77d2658a2a025ab24c98bb9cd4b",
          "size": 144,
          "url": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/contents/README.md?ref=master",
          "html_url": "https://github.com/solomonyusuf/Meta100xinsider/blob/master/README.md",
          "git_url": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/git/blobs/d9c91ad8d672a77d2658a2a025ab24c98bb9cd4b",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/Meta100xinsider/master/README.md?token=BUOXE7AZECMIIK6NXIPPZ43I7MFWK",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/contents/README.md?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/Meta100xinsider/git/blobs/d9c91ad8d672a77d2658a2a025ab24c98bb9cd4b",
            "html": "https://github.com/solomonyusuf/Meta100xinsider/blob/master/README.md"
          }
        }
      ]
    },
    {
      "name": "MetaWorker100xinsider",
      "full_name": "solomonyusuf/MetaWorker100xinsider",
      "private": true,
      "contents": [
        {
          "name": ".dockerignore",
          "path": ".dockerignore",
          "sha": "fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "size": 393,
          "url": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/contents/.dockerignore?ref=master",
          "html_url": "https://github.com/solomonyusuf/MetaWorker100xinsider/blob/master/.dockerignore",
          "git_url": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/MetaWorker100xinsider/master/.dockerignore?token=BUOXE7HZMIRM5M7E52NDIPTI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/contents/.dockerignore?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
            "html": "https://github.com/solomonyusuf/MetaWorker100xinsider/blob/master/.dockerignore"
          }
        },
        {
          "name": ".gitattributes",
          "path": ".gitattributes",
          "sha": "1ff0c423042b46cb1d617b81efb715defbe8054d",
          "size": 2518,
          "url": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/contents/.gitattributes?ref=master",
          "html_url": "https://github.com/solomonyusuf/MetaWorker100xinsider/blob/master/.gitattributes",
          "git_url": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/MetaWorker100xinsider/master/.gitattributes?token=BUOXE7FUT52LDR5O762AIRLI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/contents/.gitattributes?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
            "html": "https://github.com/solomonyusuf/MetaWorker100xinsider/blob/master/.gitattributes"
          }
        },
        {
          "name": ".gitignore",
          "path": ".gitignore",
          "sha": "9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "size": 6223,
          "url": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/contents/.gitignore?ref=master",
          "html_url": "https://github.com/solomonyusuf/MetaWorker100xinsider/blob/master/.gitignore",
          "git_url": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/MetaWorker100xinsider/master/.gitignore?token=BUOXE7EYZ2XDDPT36XWSNT3I7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/contents/.gitignore?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
            "html": "https://github.com/solomonyusuf/MetaWorker100xinsider/blob/master/.gitignore"
          }
        },
        {
          "name": "MetaWorker100xinsider.sln",
          "path": "MetaWorker100xinsider.sln",
          "sha": "877bc5a8dad25ca7b8d425b1e044ec050400a274",
          "size": 1019,
          "url": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/contents/MetaWorker100xinsider.sln?ref=master",
          "html_url": "https://github.com/solomonyusuf/MetaWorker100xinsider/blob/master/MetaWorker100xinsider.sln",
          "git_url": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/git/blobs/877bc5a8dad25ca7b8d425b1e044ec050400a274",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/MetaWorker100xinsider/master/MetaWorker100xinsider.sln?token=BUOXE7GU3SFTDBVVLHWBRZLI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/contents/MetaWorker100xinsider.sln?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/git/blobs/877bc5a8dad25ca7b8d425b1e044ec050400a274",
            "html": "https://github.com/solomonyusuf/MetaWorker100xinsider/blob/master/MetaWorker100xinsider.sln"
          }
        },
        {
          "name": "MetaWorker100xinsider",
          "path": "MetaWorker100xinsider",
          "sha": "f12b5c44671baa5b14de06d9925cc203038c86d4",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/contents/MetaWorker100xinsider?ref=master",
          "html_url": "https://github.com/solomonyusuf/MetaWorker100xinsider/tree/master/MetaWorker100xinsider",
          "git_url": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/git/trees/f12b5c44671baa5b14de06d9925cc203038c86d4",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/contents/MetaWorker100xinsider?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/git/trees/f12b5c44671baa5b14de06d9925cc203038c86d4",
            "html": "https://github.com/solomonyusuf/MetaWorker100xinsider/tree/master/MetaWorker100xinsider"
          }
        },
        {
          "name": "README.md",
          "path": "README.md",
          "sha": "4ce9b96399a35c89082e3aecf5d136cc5b8f3c98",
          "size": 23,
          "url": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/contents/README.md?ref=master",
          "html_url": "https://github.com/solomonyusuf/MetaWorker100xinsider/blob/master/README.md",
          "git_url": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/git/blobs/4ce9b96399a35c89082e3aecf5d136cc5b8f3c98",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/MetaWorker100xinsider/master/README.md?token=BUOXE7EDI3CGNEYCXDCEGU3I7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/contents/README.md?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/MetaWorker100xinsider/git/blobs/4ce9b96399a35c89082e3aecf5d136cc5b8f3c98",
            "html": "https://github.com/solomonyusuf/MetaWorker100xinsider/blob/master/README.md"
          }
        }
      ]
    },
    {
      "name": "Twitter100Xinsider",
      "full_name": "solomonyusuf/Twitter100Xinsider",
      "private": true,
      "contents": [
        {
          "name": ".dockerignore",
          "path": ".dockerignore",
          "sha": "fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "size": 393,
          "url": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/contents/.dockerignore?ref=master",
          "html_url": "https://github.com/solomonyusuf/Twitter100Xinsider/blob/master/.dockerignore",
          "git_url": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/Twitter100Xinsider/master/.dockerignore?token=BUOXE7CKYFLHPUSRD2URL23I7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/contents/.dockerignore?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/git/blobs/fe1152bdb8442f4d14f9b9533e63fe0c2680bcee",
            "html": "https://github.com/solomonyusuf/Twitter100Xinsider/blob/master/.dockerignore"
          }
        },
        {
          "name": ".gitattributes",
          "path": ".gitattributes",
          "sha": "1ff0c423042b46cb1d617b81efb715defbe8054d",
          "size": 2518,
          "url": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/contents/.gitattributes?ref=master",
          "html_url": "https://github.com/solomonyusuf/Twitter100Xinsider/blob/master/.gitattributes",
          "git_url": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/Twitter100Xinsider/master/.gitattributes?token=BUOXE7A4A4SM7T4NU7EH42LI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/contents/.gitattributes?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/git/blobs/1ff0c423042b46cb1d617b81efb715defbe8054d",
            "html": "https://github.com/solomonyusuf/Twitter100Xinsider/blob/master/.gitattributes"
          }
        },
        {
          "name": ".gitignore",
          "path": ".gitignore",
          "sha": "9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "size": 6223,
          "url": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/contents/.gitignore?ref=master",
          "html_url": "https://github.com/solomonyusuf/Twitter100Xinsider/blob/master/.gitignore",
          "git_url": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/Twitter100Xinsider/master/.gitignore?token=BUOXE7F5KW256EZUKHTW7RDI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/contents/.gitignore?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/git/blobs/9491a2fda28342ab358eaf234e1afe0c07a53d62",
            "html": "https://github.com/solomonyusuf/Twitter100Xinsider/blob/master/.gitignore"
          }
        },
        {
          "name": "README.md",
          "path": "README.md",
          "sha": "3ad6359fef7f10c4658d7edadf84d6bcb0d11208",
          "size": 1956,
          "url": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/contents/README.md?ref=master",
          "html_url": "https://github.com/solomonyusuf/Twitter100Xinsider/blob/master/README.md",
          "git_url": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/git/blobs/3ad6359fef7f10c4658d7edadf84d6bcb0d11208",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/Twitter100Xinsider/master/README.md?token=BUOXE7DB5X4IX3DVCCF764LI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/contents/README.md?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/git/blobs/3ad6359fef7f10c4658d7edadf84d6bcb0d11208",
            "html": "https://github.com/solomonyusuf/Twitter100Xinsider/blob/master/README.md"
          }
        },
        {
          "name": "Twitter100Xinsider.sln",
          "path": "Twitter100Xinsider.sln",
          "sha": "0319d76164c96152fa4663ff88df053f8bae188f",
          "size": 1017,
          "url": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/contents/Twitter100Xinsider.sln?ref=master",
          "html_url": "https://github.com/solomonyusuf/Twitter100Xinsider/blob/master/Twitter100Xinsider.sln",
          "git_url": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/git/blobs/0319d76164c96152fa4663ff88df053f8bae188f",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/Twitter100Xinsider/master/Twitter100Xinsider.sln?token=BUOXE7BV6SLF73TQHDKDZHTI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/contents/Twitter100Xinsider.sln?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/git/blobs/0319d76164c96152fa4663ff88df053f8bae188f",
            "html": "https://github.com/solomonyusuf/Twitter100Xinsider/blob/master/Twitter100Xinsider.sln"
          }
        },
        {
          "name": "Twitter100Xinsider",
          "path": "Twitter100Xinsider",
          "sha": "82a72228a4bf1a71f3e11a5310756850823cc375",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/contents/Twitter100Xinsider?ref=master",
          "html_url": "https://github.com/solomonyusuf/Twitter100Xinsider/tree/master/Twitter100Xinsider",
          "git_url": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/git/trees/82a72228a4bf1a71f3e11a5310756850823cc375",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/contents/Twitter100Xinsider?ref=master",
            "git": "https://api.github.com/repos/solomonyusuf/Twitter100Xinsider/git/trees/82a72228a4bf1a71f3e11a5310756850823cc375",
            "html": "https://github.com/solomonyusuf/Twitter100Xinsider/tree/master/Twitter100Xinsider"
          }
        }
      ]
    },
    {
      "name": "XPortal",
      "full_name": "solomonyusuf/XPortal",
      "private": true,
      "contents": [
        {
          "name": ".gitattributes",
          "path": ".gitattributes",
          "sha": "dfe0770424b2a19faf507a501ebfc23be8f54e7b",
          "size": 66,
          "url": "https://api.github.com/repos/solomonyusuf/XPortal/contents/.gitattributes?ref=main",
          "html_url": "https://github.com/solomonyusuf/XPortal/blob/main/.gitattributes",
          "git_url": "https://api.github.com/repos/solomonyusuf/XPortal/git/blobs/dfe0770424b2a19faf507a501ebfc23be8f54e7b",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/XPortal/main/.gitattributes?token=BUOXE7FFFPHRZLZHGWVM3NLI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/XPortal/contents/.gitattributes?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/XPortal/git/blobs/dfe0770424b2a19faf507a501ebfc23be8f54e7b",
            "html": "https://github.com/solomonyusuf/XPortal/blob/main/.gitattributes"
          }
        },
        {
          "name": ".gitignore",
          "path": ".gitignore",
          "sha": "ee96fdad74fac89b7f07e1eed935b75f8b4801b1",
          "size": 51,
          "url": "https://api.github.com/repos/solomonyusuf/XPortal/contents/.gitignore?ref=main",
          "html_url": "https://github.com/solomonyusuf/XPortal/blob/main/.gitignore",
          "git_url": "https://api.github.com/repos/solomonyusuf/XPortal/git/blobs/ee96fdad74fac89b7f07e1eed935b75f8b4801b1",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/XPortal/main/.gitignore?token=BUOXE7E3JS4MOUDQQHIIZ23I7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/XPortal/contents/.gitignore?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/XPortal/git/blobs/ee96fdad74fac89b7f07e1eed935b75f8b4801b1",
            "html": "https://github.com/solomonyusuf/XPortal/blob/main/.gitignore"
          }
        },
        {
          "name": ".vscode",
          "path": ".vscode",
          "sha": "87e17fa9af17a1958c8d8875d8b0b07ea0186f29",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/XPortal/contents/.vscode?ref=main",
          "html_url": "https://github.com/solomonyusuf/XPortal/tree/main/.vscode",
          "git_url": "https://api.github.com/repos/solomonyusuf/XPortal/git/trees/87e17fa9af17a1958c8d8875d8b0b07ea0186f29",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/XPortal/contents/.vscode?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/XPortal/git/trees/87e17fa9af17a1958c8d8875d8b0b07ea0186f29",
            "html": "https://github.com/solomonyusuf/XPortal/tree/main/.vscode"
          }
        },
        {
          "name": "README.md",
          "path": "README.md",
          "sha": "76587a4b6338dff1f021b4fb4b93123c149936e9",
          "size": 27,
          "url": "https://api.github.com/repos/solomonyusuf/XPortal/contents/README.md?ref=main",
          "html_url": "https://github.com/solomonyusuf/XPortal/blob/main/README.md",
          "git_url": "https://api.github.com/repos/solomonyusuf/XPortal/git/blobs/76587a4b6338dff1f021b4fb4b93123c149936e9",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/XPortal/main/README.md?token=BUOXE7CIUHZS5A6FEASUV7LI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/XPortal/contents/README.md?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/XPortal/git/blobs/76587a4b6338dff1f021b4fb4b93123c149936e9",
            "html": "https://github.com/solomonyusuf/XPortal/blob/main/README.md"
          }
        },
        {
          "name": "default.conf",
          "path": "default.conf",
          "sha": "49c3a39fd737d8bb952b8ae9b325764ec0b25943",
          "size": 744,
          "url": "https://api.github.com/repos/solomonyusuf/XPortal/contents/default.conf?ref=main",
          "html_url": "https://github.com/solomonyusuf/XPortal/blob/main/default.conf",
          "git_url": "https://api.github.com/repos/solomonyusuf/XPortal/git/blobs/49c3a39fd737d8bb952b8ae9b325764ec0b25943",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/XPortal/main/default.conf?token=BUOXE7FF2PLHINZ3HC6IJELI7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/XPortal/contents/default.conf?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/XPortal/git/blobs/49c3a39fd737d8bb952b8ae9b325764ec0b25943",
            "html": "https://github.com/solomonyusuf/XPortal/blob/main/default.conf"
          }
        },
        {
          "name": "docker-compose.yml",
          "path": "docker-compose.yml",
          "sha": "1817c71f7f73956eb68b37a5c5062c9b67ac7405",
          "size": 573,
          "url": "https://api.github.com/repos/solomonyusuf/XPortal/contents/docker-compose.yml?ref=main",
          "html_url": "https://github.com/solomonyusuf/XPortal/blob/main/docker-compose.yml",
          "git_url": "https://api.github.com/repos/solomonyusuf/XPortal/git/blobs/1817c71f7f73956eb68b37a5c5062c9b67ac7405",
          "download_url": "https://raw.githubusercontent.com/solomonyusuf/XPortal/main/docker-compose.yml?token=BUOXE7BFZLQBTT5UOT6BIC3I7MFWM",
          "type": "file",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/XPortal/contents/docker-compose.yml?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/XPortal/git/blobs/1817c71f7f73956eb68b37a5c5062c9b67ac7405",
            "html": "https://github.com/solomonyusuf/XPortal/blob/main/docker-compose.yml"
          }
        },
        {
          "name": "frontend",
          "path": "frontend",
          "sha": "3ab6e420c26e4d06b837881f59f94d5326c73928",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/XPortal/contents/frontend?ref=main",
          "html_url": "https://github.com/solomonyusuf/XPortal/tree/main/frontend",
          "git_url": "https://api.github.com/repos/solomonyusuf/XPortal/git/trees/3ab6e420c26e4d06b837881f59f94d5326c73928",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/XPortal/contents/frontend?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/XPortal/git/trees/3ab6e420c26e4d06b837881f59f94d5326c73928",
            "html": "https://github.com/solomonyusuf/XPortal/tree/main/frontend"
          }
        },
        {
          "name": "server",
          "path": "server",
          "sha": "3cd4c439108730361d76486718d020a4a98614b0",
          "size": 0,
          "url": "https://api.github.com/repos/solomonyusuf/XPortal/contents/server?ref=main",
          "html_url": "https://github.com/solomonyusuf/XPortal/tree/main/server",
          "git_url": "https://api.github.com/repos/solomonyusuf/XPortal/git/trees/3cd4c439108730361d76486718d020a4a98614b0",
          "download_url": null,
          "type": "dir",
          "_links": {
            "self": "https://api.github.com/repos/solomonyusuf/XPortal/contents/server?ref=main",
            "git": "https://api.github.com/repos/solomonyusuf/XPortal/git/trees/3cd4c439108730361d76486718d020a4a98614b0",
            "html": "https://github.com/solomonyusuf/XPortal/tree/main/server"
          }
        }
      ]
    }
  ]
}a