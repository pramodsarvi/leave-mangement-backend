const dbcon=require('../config/config');

var principal=function(logindetails){
    this.username=logindetails.username;
    this.password=logindetails.password;
}

principal.check=(username,password,result)=>{
    // console.log(username,password);
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
principal.getPending=(result)=>
{   //check query
    console.log("Pmodel")
    const query="SELECT f.name,L.id,l.datefrom,l.dateto,l.ltype,l.days,l.remarks FROM LEAVES_TABLE L,faculty f  WHERE L.HOD=1 and L.PRINCIPAL=\"Pending\" and f.id=l.facultyid;";
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


principal.status=(id,status,remarks,result)=>{
    console.log("inside pmodel status")
    console.log(id,status,remarks);
    const query="UPDATE LEAVES_TABLE SET PRINCIPAL="+status+",REMARKS=\""+remarks+"\" where id="+id+";";
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


module.exports=principal;