const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("Route Accessed");
});

module.exports = router;