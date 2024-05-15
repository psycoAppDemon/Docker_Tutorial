const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("Hello Hogwarts!");
});

app.listen(5050, (req,res)=>{
    console.log(`Server is running at port 5050`);
});