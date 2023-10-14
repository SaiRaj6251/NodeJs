const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("User has hit the home page")
    res.end("Hey its me")
})
server.listen(5000);