const dbcon=require('../config/config');

var login=function(logindetails){
    this.username=logindetails.username;
    this.password=logindetails.password;
}

login.check=(username,password,result)=>{
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

module.exports=login;


// select case when username="username" and password="password" then "ACCESS GRANTED" else "ACCESS DENIED" end as access from accounts;