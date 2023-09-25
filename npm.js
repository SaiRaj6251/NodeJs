/* 
to install dependencies :- npm init -y ...if you want to make changes in file make changes in package.json...
to install package :- npm i <packageName>....eg. npm i lodash..refresh and see node modules where all dependencies are stored


*/
// to use lodash
const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)