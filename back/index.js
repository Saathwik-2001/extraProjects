import express from "express";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";

mongoose.connect("mongodb://0.0.0.0:27017",{dbName:"DB"}).then(()=>{
    console.log("DB Connected!");
});

const messageSchema = mongoose.Schema({ name: String,email:String, phno: String });

const message= mongoose.model("Details",messageSchema);
const app = express();
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("home");
    console.log("Server Initiated");
});
app.post("/add",(req,res)=>{
    res.render("home");
    const data = { name: req.body.name, email: req.body.email};
    message.create(data);
    res.redirect("home1")
});
app.get("/home1",(req,res)=>{

    res.render("h1");
    
});
app.get("/home2",(req,res)=>{
    res.render("h2");    
    console.log("Server Initiated");
});
app.get("/home3",(req,res)=>{
    console.log("Server Initiated");    res.render("h3");
});

app.listen(5000,()=>{console.log("server Initiated")});

