const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Hey there this is our home page")
        return;
    }
    if(req.url === '/about'){
        res.end("Hey this is our short history")
        return;
    }
    res.end(`<h1>oops</h1>
    <p>Simon go back</p>
    <a href = "/">back home</a>`)
})
server.listen(5000);

// to not get error in console : 1.use if/elif/else 2.setup return