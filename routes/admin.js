const express=require('express');
const router= express.Router();//mini express app tied to other express app

router.get('/add-product',(req,res,next)=>{
    // console.log('In the middleware');
    res.send(`<form action='/admin/product' method="POST">
    <input type="text" name="title"><br>
    <input type="number" name="size"><br>
    <button type="submit">
    Add product
    </button>
    </form>`)
    
})
router.post('/product',(req,res,next)=>{
    console.log(req.body);//body-parser for parsing
    res.redirect('/')
})
module.exports=router;
