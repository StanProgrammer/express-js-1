const path=require('path')
const express=require('express');
const router= express.Router();//mini express app tied to other express app
const rootDir=require('../util/path')
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
    
})
router.post('/product',(req,res,next)=>{
    console.log(req.body);//body-parser for parsing
    res.redirect('/shop')
})
module.exports=router;
