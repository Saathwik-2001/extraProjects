const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:String,
    profilePicture:{ type:String, default:''}
},
{timstamp:true}
);

module.exports = mongoose.model("User",userSchema);