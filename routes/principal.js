const express=require('express');
const routes=express.Router();

const principalController=require('../controller/principalController');
routes.get('/login',principalController.login);
routes.get('/pending',principalController.pending);
routes.put('/status',principalController.status);
module.exports=routes;

