const sayHi = require(`./module2.js`)
const name = require(`./module1.js`)

sayHi(name.peter)
console.log(name)