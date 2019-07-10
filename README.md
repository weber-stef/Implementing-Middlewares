# Implementing-Middlewares
creating a logger middleware

## Implementing Middlewares

1. Create a logger middleware that logs on every request the following values
    - Request Method (HTTP verb e.g. GET)
    - the route that is requested

## Steps I took
creating repo on github
cloning repo to local machine
npm int to create a package.json
npm install express --save to install express as a dev-dependency of my project
create .gitignore which avoids node_modules being uploaded to github by entering
" echo "node_modules">.gitignore" in terminal
install nodemon as a development dependency:

npm install --save-dev nodemon

nodemon will start node again after every change made to the file watched and thus everything will be restarted and the localhost-browser-window will update
from here on changes will automatically be visible in the localhost window

created a script in my package.json to start  my server using nodemon, watching my file (in my case, named "index.js")

"dev": "nodemon index.js"


