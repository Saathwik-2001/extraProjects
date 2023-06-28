import express from "express";
const app = express();
import mongoose from "mongoose";
import path from "path";
const port = 5000;
mongoose.connect("mongodb://0.0.0.0:27017/Dbb").then(() => { console.log("DB Connected!"); }).catch((e) => { console.log("error!"); })

//if error occurs...thn use this ", {useNewUrlParser:true, useUnifiedTopology:true}"  

app.set("view engine","ejs");

app.use(express.static(path.join(path.resolve(),"public")));
app.use(express.urlencoded({extended:true}));

const mSchema =mongoose.Schema({name:String,email:String});

const m= mongoose.model("info",mSchema);



app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/register", (req,res)=>{
    
})

// app.post("/",(req,res)=>{
//     console.log(req.body);
//     // m.create({name: req.body.name , email: req.body.email});
//     res.render("home");
// })

app.listen(port, () => {
    console.log(`Initiated Server on port: ${port}, Url: http://localhost:5000/`);
})