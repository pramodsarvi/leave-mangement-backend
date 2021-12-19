const express=require('express');
const router=express.Router();

const ApplicationController=require('../controller/leaveApplicationController');
router.post('/apply',ApplicationController.application);
router.get('/status',ApplicationController.status);
module.exports=router;