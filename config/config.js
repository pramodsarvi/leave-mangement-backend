const mysql=require('mysql');

const dbConn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"leavemanagement"
});
dbConn.connect((error)=>{
    if(error)
    throw error;

    console.log("Database Connection successful");
});

module.exports=dbConn;