const dbcon=require('../config/config.js');
const application=function(applicationDetails)
{
    this.fid=applicationDetails.fid;
    this.from=applicationDetails.datefrom;
    this.to=applicationDetails.dateto;
    this.ltype=applicationDetails.ltype;
    this.nod=applicationDetails.days;
}

application.apply=(data,result)=>{

    console.log(data.body.fid);
    // const query="INSERT INTO `leavemanagement`.`leaves` (`facultyID`, `from`, `to`,`type`,`days`) VALUES ('"+fid+"', '"+from+"', '"+to+"');";
    const query=`INSERT INTO LEAVES_TABLE(FACULTYID,DATEFROM,DATETO,LTYPE,DAYS) VALUES ("${data.body.fid}","${data.body.datefrom}","${data.body.dateto}","${data.body.ltype}","${data.body.days}"); `;
    // INSERT INTO `leavemanagement`.`leaves_table` (`facultyid`, `datefrom`, `dateto`, `ltype`, `days`) VALUES ('CSE001', '2020-02-03', '2020-03-03', 'casual', '30');

    dbcon.query(query,(err,res)=>{
        if(err)
        console.log("Error in application submition",err);
        else
        {
            console.log("Application Submitted");
            // res.end(JSON.stringify({"Application status":"Success"}));
            result(null,res);
        }
    });
}

application.getStatus=(data,result)=>{
    console.log("STATUS model\n",data)
    const query=`Select hod,principal,remarks
     from leaves_table l where l.id=${data.id};`;
    dbcon.query(query,(err,res)=>{
        if(err)
        console.log("Error in application submition",err);
        else
        {
            console.log("Status fetched");
            // res.end(JSON.stringify({"Application status":"Success"}));
            result(null,res);
        }
    });
}
module.exports=application;