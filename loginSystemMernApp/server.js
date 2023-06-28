const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const passport = require("passport");
const initializePassport = require("./passport-config");
initializePassport(passport,
    email => data.find(data=> data.email ==email)
);


mongoose.connect("mongodb://0.0.0.0:27017/NewDB").then(()=>{console.log("DB Connected")});

const dataSchema = mongoose.Schema({name:String,email:String,password:String});

const data = mongoose.model("credentials",dataSchema);

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.render("index",{name:"Saathwik"});    
});

app.get('/login',(req,res)=>{
    res.render("login");
});


// REGISTER GET AND POST 
app.get("/register",(req,res)=>{
    res.render("/register");
});

app.post('/register',async (req,res)=>{
    try{
        const hashPass = await bcrypt.hash(req.body.password);
        data.create({name:req.body.name, email:req.body.email, password: hashPass });
        res.redirect("/login");
    } catch{
        res.redirect("/register");
    }
    console.log("Registered a new User!");
});


app.listen(4000,()=>{
    console.log("Server Running");
});