const express=require('express');
const router=express.Router();
const hodController=require('../controller/hodController');
router.get('/login',hodController.login);
router.put('/ApplicationStatus',hodController.status);
router.get('/pending',hodController.pending);
module.exports=router;