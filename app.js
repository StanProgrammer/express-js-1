
const express=require('express')
const bodyParser=require('body-parser')
const app=express()

app.use(bodyParser.urlencoded({extended: false}))
app.use('/add-product',(req,res,next)=>{
    // console.log('In the middleware');
    res.send(`<form action='/product' method="POST">
    <input type="text" name="title"><br>
    <input type="number" name="size"><br>
    <button type="submit">
    Add product
    </button>
    </form>`)
    
})
app.post('/product',(req,res,next)=>{
    console.log(req.body);//body-parser for parsing
    res.redirect('/')
})
app.use('/',(req,res,next)=>{
    // console.log('In the another middleware');
    res.send('<h1>Hello From Express</h1>')
    
})

app.listen(3000)