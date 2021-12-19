const dbcon=require('../config/config');
var data=function(login)
{
    this.username=login.username;
    this.password=login.password;
}

data.getData=(username,password,result)=>
{
    console.log("Model");
    const  q =`select f.* from accounts a,faculty f where f.id=a.fid and a.password1="${password}" and a.username="${username}";`;
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
module.exports=data;