// express is either used to setup api or in templates with ssr 
// here api in express or http case means to set up an http interface to interact with our data
// data is sent using json and to send response we use res.json method
// other flavor is ssr where we will set up templates and send back entire html css and js ourselves using res.render method
// from now onwards we are responsible for setting up the responses and we will setup apis that are http interfaces to interact with our data.
const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.json(products)
    // ([{name:'john'},{name:'susan'}])
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})
// json response or the product data