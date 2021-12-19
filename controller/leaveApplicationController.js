const applicationModel=require('../models/leaveApplicationModel');

exports.application=(req,res)=>{
    console.log("Leave Application controller ");
    console.log(req.body);
    // console.log(req.body.fid);
    // console.log(req.body.datefrom);
    // console.log(req.body.dateto);
    // console.log(req.body.ltype);
    // console.log(req.body.days);
    applicationModel.apply(req.body,(err,app)=>{
        if(err)
        res.send(err);

        res.send(app);
    })

};

exports.status=(req,res)=>{
    console.log(req.headers)
    applicationModel.getStatus(req.headers,(err,status)=>{
        if(err)
        res.send(err);

        res.send(status);
    })
}