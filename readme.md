git init - create a new git repo
git status - view the changes to your project code
git add - Add files to stagging area
git commit - Create a new commit with files from stagging area
git log - View recent commits

abbas_haider12@hotmail.com
!1A2s3d4f!

Use Git Bash for SSH
ssh -keygen -t rsa -b 4096 -C "abbas_haider12@hotmail.com (t is type, b is size, C is comment)

keep default and press enter
ls -a ~/.ssh
eval "$(ssh-agent -s)", this to check or set ssh agent
ssh-add ~/.ssh/id_rsa , this is to add identity
clip < ~/.ssh/id_rsa.pub, take the file and copy it to clipboard, get this command from github ssh docs 
github profile -> ssh and gpg keys -> new ssh key
ssh -T git@github.com, to check if ssh is making connection with github.com

now in cmd prompt
git remote add origin git@github.com:abbashaider110/react-course-expensify-app.git, copy paste the last line from repository ssh

git push -u origin master

webpack production
set new build in scripts package json, "build:prod" : "webpack -p --env production"

npm run serve, to run live server

webpack extract plugin
    yarn add extract-text-webpack-plugin@3.0.0

install heroku cli
heroku --version
heroku login
heroku create nameoffile
assign start script in packagejson
git status
git commit -m "production and server build"
git push
git push heroku master 


yarn add chalk --dev

add the dependencies diferent for dev and production
add bundle and style files is dist folder, virtually and then by production, check lecture 137
git commit -a -m "message"


library
yarn add numeral@latest