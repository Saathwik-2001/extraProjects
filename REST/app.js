const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.json());
app.use(express.urlencoded({extended:"true"}));
app.set("view engine","ejs");

mongoose.connect("mongodb://0.0.0.0:27017").then(()=>{
    console.log("DB connected");
});


const prodSchema = new mongoose.Schema({ itemName:String, itemPrice:Number, itemDescr: String}); 

const prodModel = new mongoose.model("item",prodSchema);

app.get("/",(req,res)=>{
    res.render("login");
});

app.get("/product/new",(req,res)=>{
    res.render("login");
});

app.post("/product/new", async (req,res)=>{
  const prod = await prodModel.create(req.body);
    res.status(200).json({
        success:true,
        prod,
    });
});


app.get("/products", async (req,res)=>{
    const prod = await prodModel.find();
    res.status(201).json({
        success: true,
        prod
    });
});


app.put("/update/:id", async (req,res)=>{
    app.render("login");
    let prod = await prodModel.findById(req.params.id);
    if(!prod){
        return res.status(500).json({
            success:false,
            message:"Product not Found!"
        })
    }
    else{
    prod = await prodModel.findByIdAndUpdate(req.params.id, req.body, { new:true, useFindAndModify: true, runValidators:true});
    res.status(200).json({
        success:true,
        prod
    });
}
});

app.delete("/update/:id", async (req,res)=>{
    const prod = await prodModel.findById(req.params.id);
    if(!prod){
        return res.status(500).json({
            success:false,
            message:"Product not Found!"
        })
    }
    await prod.deleteOne();
    res.status(200).json({
            success:true,
            message:"Product Removed!"
        });
    });
    
    

app.listen(4500,()=>{
    console.log("Running at http://localhost:4500");
});