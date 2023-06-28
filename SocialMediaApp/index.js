const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{console.log("DB Connected");}).catch((e)=>{
    console.log(e);
    console.log("Error connecting to the DB");
});

//middlewares

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

app.listen(5000,()=>{
    console.log("Server Initiated at http://localhost:5000");
})