var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    // const text = fs.readFileSync('./content/big1.txt','utf8')
    // res.end(text)
    const fileStream = fs.createReadStream("./content/big1.txt", "utf");
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
})
.listen(5000)
// fileStream pushes from readStream into a writeStream