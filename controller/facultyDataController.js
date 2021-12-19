const facultyDataModel=require('../models/facultyDataModel');
exports.facultyData=(req,res)=>{

    facultyDataModel.getData(req.headers.username,req.headers.password1,(err,reply)=>{
        if(err)
        res.send(err);

        res.send(reply);
    })
};