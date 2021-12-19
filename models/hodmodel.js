// const { runInThisContext } = require('node:vm');
const dbcon=require('../config/config.js');
const hod=function(application)
{
    this.id=application.id;
    this.status=application.status;
}
hod.login=(username,password,result)=>{
    console.log("login model hod");
    console.log(username,password)
    const q='select case when username=\"'+username+'\" and password1=\"'+password+'\" then "ACCESS GRANTED" else "ACCESS DENIED" end as access from accounts where username=\"'+username+'\";';
    dbcon.query(q,(err,res)=>{
        if(err)
        {
            console.log('Error in connection',err)
        }
        else
        {
            // console.log(username,password);
            // console.log("No errors");
            // console.log(res);
            result(null,res);
        }
    });
}

hod.status=(id,status,result)=>{
    console.log(id,status);
    const query="UPDATE LEAVES_TABLE SET HOD="+status+" where id="+id+"";
    dbcon.query(query,(err,res)=>{
        if(err)
        {

            console.log("ERROR in aproval");
            console.log(err);
        }
        else{
            console.log("success");
            result(null,res);
        }
    })
}

hod.getPending=(result)=>
{   //check query
    const query="SELECT f.name,L.id,l.datefrom,l.dateto,l.ltype,l.days FROM LEAVES_TABLE L,faculty f  WHERE L.HOD=\"Pending\" and f.id=l.facultyid;";
    dbcon.query(query,(err,res)=>{
        if(err){
            console.log("Error in fetching HOD pending ");
            console.log(err);
        }
        else
        {
            console.log()
            result(null,res);
        }
    })
}


module.exports=hod;