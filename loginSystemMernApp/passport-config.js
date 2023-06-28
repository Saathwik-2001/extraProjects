const { authenticate } = require("passport");
const locStrat = require("passport-local");
const bcrypt = require("bcrypt");
function initialize(passport, getUserByEmail){
    const authenticateUser = async (email,password,done)=>{
        if(user == null){
            return done(null,false,{message:'No user with that email'})
        }
        try{
            if(await bcrypt.compare(password,user.password)){
                return done(null,user)
            }
            else{
                return done(null,false,{message:"Password Incorrect"})
            }
        }
        catch(e){
            return done(e);
        }

    }
    passport.use(new locStrat({usernameField:'email'}),authenticateUser())

    passport.serializeUser((user,done)=>{ })
    passport.deserializeUser((id,done)=>{ });
}

module.exports = initialize