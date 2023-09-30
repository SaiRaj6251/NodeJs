const {readFile} = require('fs')
console.log("First text")
readFile('./content/subfolder/test.txt','utf8',(err,result)=>{
    if(err){
        console.log(error)
        return
    }
    console.log(result)
    console.log("completed first task")
})
console.log("got it")