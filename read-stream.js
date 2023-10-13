// if we want to read a big file and we want to read only a small part so we will use stream
const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt',{highWaterMark:90000,
encoding:'utf8'})

stream.on('data',(result) => {
    console.log(result)
})
stream.on('error',(err)=>console.log(err))
// default size of buffer is 64kb