const express= require('express')
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href = "/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image}=product;
        return {id,name,image}
        // res.json(products)
    })
    res.json(newProducts);
})

// for many route
app.get('/api/products/:productID',(req,res)=>{
    // console.log(req)
    // console.log(req.params)
    const {productID} = req.params;
    const singleProduct = products.find((product)=>product.id===Number(productID))
    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist')
    }
    // res.json(singleProduct)
    return res.json(singleProduct)

})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send('hello world')
})

app.get('/api/v1/query',(req,res)=>{
    console.log(res.query)
    const {search,limit} = req.query;
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProduncts.length<1){
        // res.status(200).send('no products matched your search');
        return res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortedProducts)
    res.send('hello world')
})


// for 1 route
// app.get('/api/products/1',(req,res)=>{
//     const singleproduct=products.find((product)=>product.id===1)
//     res.json(singleProduct)
// })

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})

// you cant send two responses for 1 request so in conditional statement always return the response
// atlast even if dont use return then too okay as theirs no code after that 