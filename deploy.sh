#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME


git init
git add -A
git commit -m 'Fixed title and form clearing when either title or text is missing'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:j-umbac/j-umbac.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:j-umbac/vue-newsfeed.git master:gh-pages   #<--- master:gh-pages

cd -