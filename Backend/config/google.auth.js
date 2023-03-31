const passport=require("passport");
require("dotenv").config();
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://localhost:${process.env.port}/auth/google/callback`
  },
  function(accessToken, refreshToken, profile, cb) {
    let user ={
      email:profile._json.email,
      name:profile._json.name,
    }
      return cb(null, user);
  }
));

module.exports=passport;