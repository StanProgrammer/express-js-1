
const express=require('express');
const router= express.Router();//mini express app tied to other express app
const success1=require('../controllers/successfull')
router.get('/success',success1.successPage)
module.exports=router;