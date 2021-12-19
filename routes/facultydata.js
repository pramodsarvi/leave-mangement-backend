const express=require('express');
const router=express.Router();

const facultyDataController=require('../controller/facultyDataController');
router.get('/',facultyDataController.facultyData);
module.exports=router;