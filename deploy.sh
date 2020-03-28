npm run build
npm run export
cp -a github/. reidha.github.io
cd reidha.github.io
git init
git remote add origin git@github.com:reidha/reidha.github.io.git
git config user.name "reidha"
git config user.email "kdaimon.8@gmail.com"
git add -A
git commit -m auto
git push -f origin master
