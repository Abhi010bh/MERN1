
const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const users=require("./routes/users");
const connectDB=require("./config");
const dotenv=require('dotenv').config();
const app=express();

//cors middleware with origin and credentials options
app.use(cors({origin:true, credentials:true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/books", users); 
const port=process.env.PORT || 5000;

connectDB();


app.get('/',(req,res)=>{

    const status={
        "Status":"Running"
    }
    res.send(status.Status);
});

app.listen(port,()=>{
    console.log(`Server fired: Port ${port}`);
});