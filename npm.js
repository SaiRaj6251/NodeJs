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

    To uninstall a package use npm uninstall package_name and remove it from package.json or refresh it
    or the other is the nuclear approach
    so first reomve all the node_modules and package-lock.json and also if you dont want any dependency then remove it
    from package.json and so then run npm install and you can see that dependency is not their which you removed from dependencies
    from package.json
    
    */
   /* gor global dependency :
        npm install -g <packageName>
        we install nodemon as local package and now if we install it globally 
        then we can use it in any project
        so can inside any terminal and use : sudo npm install -g nodemon and you can run nodemon app.js in that specific project's terminal

    */
   /* 
   package-lock.json is important file as dependencies also have dependencies and so to match proper versions 
   this file takes care of it
   */