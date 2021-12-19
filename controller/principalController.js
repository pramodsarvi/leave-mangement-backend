const PrincipalModel=require('../models/PrincipalModel');

exports.login=(req,res)=>{
    console.log("PRINCIPAL login controller");
    console.log(req.headers);
    PrincipalModel.check(req.headers.username,req.headers.password1,(err,login)=>{
        if(err)
        res.send(err);

        // console.log("\n\n\n\n\n\nCP1");
        res.send(login);
    })
};

// exports.pend
exports.status=(req,res)=>{
    console.log("Principal Approval Controller");

    console.log(req.body);
    console.log(req.headers);
    PrincipalModel.status(req.body.body.id,req.body.body.status,req.body.body.remarks,(err,app)=>{
        if(err)
        res.send(err);

        res.send(app);
    })
};

exports.pending=(req,res)=>
{
    console.log("princi Controller");
    PrincipalModel.getPending((err,pending)=>{
        if(err)
        {console.log(err);
            res.send(err);

        }

        res.send(pending);
    })
};