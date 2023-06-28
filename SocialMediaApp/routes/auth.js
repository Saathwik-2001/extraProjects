const router = require("express").Router();
const User = require("../models/User");
router.get("/",(req,res)=>{
    res.send("Auth Route Accessed");
});

router.get("/register", async (req,res)=>{
    const user = await new User({
        profilePicture:"testTexttt"
    });
    await user.save();
    res.send("done");
});
router.post("/register", async (req,res)=>{
    const user = await new User({
        name:'abcd',
    profilePicture:'abcd'
    });
    await user.save();
    res.send("done");
});

module.exports = router;