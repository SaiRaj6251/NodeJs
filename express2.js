const express = require('express');
const path = require('path');
const app = express();

// setup static and middleware
app.use(express.static('./public')) //also putted index.html in public
// static means here the file or folder that server doesnt have to change
// provided public folder contains all the static files 

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//     // as its absolute path so path.resolve otherwise use path.join
// })

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000...')

})
// js is just an asset for server as for browser its a dynamic thing

// for files to send we will use two options :-
// 1.adding to static assets where default index.html is always opened first
// 2.SSR(server side rendering where we will use templating engines)