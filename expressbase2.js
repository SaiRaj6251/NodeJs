
const http = require('http')

const server = http.createServer((req,res)=>{
  res.writeHead(200, { "content-head": "text/html" }); // mime types mdn (media types)
  res.write("<h1>Home Page</h1>");
  res.end();
//   console.log(req.method)
//   console.log(req.url)
})
server.listen(3000);