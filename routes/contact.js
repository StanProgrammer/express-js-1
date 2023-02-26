const express=require('express');
const router= express.Router();//mini express app tied to other express app
const contact=require('../controllers/contacts')

router.get('/contact',contact.contactUs)
module.exports=router;