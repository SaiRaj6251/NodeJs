/* 
to install dependencies :- npm init -y ...if you want to make changes in file make changes in package.json...
to install package :- npm i <packageName>....eg. npm i lodash..refresh and see node modules where all dependencies are stored


*/
// to use lodash
const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)

/* generally while sharing code with another developer on github we dont share node_modules but as package json is 
   shared so using ....npm install....he can install all the node modules */

/* nodemon module is used to do always start of project and run it and we are installing it as dev dependency as
    it can also be installed as simple dependency by :
    npm i nodemon (-D or --save-dev) 
    then in package.json : "scripts" : { "start" : "node app.js"
                                            "dev" : "nodemon app.js" } and in cmd run : npm run dev(cmd_name)
                                            or the other way ,
                                            {"scripts" : "nodemon app.js"} and in cmd : npm start
    
    */