const path=require('path')
const express=require('express');
const router= express.Router();//mini express app tied to other express app
const rootDir=require('../util/path')
router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
})
module.exports=router;