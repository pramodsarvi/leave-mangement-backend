const loginModel=require('../models/loginModel.js');

exports.login=(req,res)=>{
    console.log("login controller");
    console.log(req.headers);
    loginModel.check(req.headers.username,req.headers.password1,(err,login)=>{
        if(err)
        res.send(err);

        res.send(login);
    })
};