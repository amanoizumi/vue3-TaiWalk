set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/amanoizumi/vue3-TaiWalk.git main:gh-pages

cd -