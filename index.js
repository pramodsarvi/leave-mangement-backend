const express=require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const app=express();
app.use(cors())
const port=process.env.PORT || 5000;
// app.get()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const LoginRoutes= require("./routes/login");
app.use("/api/v1/login",LoginRoutes);

const hodRoutes= require("./routes/hodRoutes");
app.use("/api/v1/hod",hodRoutes);

const facultyRoutes= require("./routes/leaveApplicationRoute");
app.use("/api/v1/faculty",facultyRoutes);

const facultyData=require("./routes/facultydata");
app.use("/api/v1/getfacultydata",facultyData);

const Principal=require("./routes/principal");
app.use("/api/v1/principal",Principal);


app.listen(port,()=>{
    console.log(`Server started at port :${port}`)
});