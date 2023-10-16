// express middleware are functions that execute during the request to the server
// req => middleware => res

const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//  we will make a common function for the routes which are going to follow it

// we will make a separate file for logger function and add the function to all the routes that need them 
// app.use(logger) //invokes for all routes but invoke it at start as order matters in express
// app.use('./api',logger) //gets applied to path to any route after this API
app.use([logger,authorize]) //order matters

app.get('/',(req,res)=>{
    
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get("/api/products",(req, res) => {
  res.send("Products");
});
app.get("/api/items",(req, res) => {
    console.log(req.user)
  res.send("Items");
});

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})