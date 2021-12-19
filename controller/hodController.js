const hodModel=require('../models/hodmodel');
exports.login=(req,res)=>{
    hodModel.login(req.headers.username,req.headers.password1,(err,login)=>{
        if(err)
        res.send(err);

        res.send(login);
    })
}

exports.status=(req,res)=>{
    console.log("Hod Approval Controller");

    hodModel.status(req.body.id,req.body.status,(err,app)=>{
        if(err)
        res.send(err);

        res.send(app);
    })
};
exports.pending=(req,res)=>
{
    console.log("HOD Controller");
    hodModel.getPending((err,pending)=>{
        if(err)
        {console.log(err);
            res.send(err);

        }

        res.send(pending);
    })
};