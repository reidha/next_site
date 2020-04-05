npm run build
npm run export
cd reidha.github.io
git init
git remote add origin git@github.com:reidha/reidha.github.io.git
git pull origin master
git config user.name "reidha"
git config user.email "kdaimon.8@gmail.com"
git add -A
git commit -m auto
git push -f origin master
