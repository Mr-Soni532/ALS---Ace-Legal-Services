const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const UserSchema = require("../model/user.model");
require('dotenv').config()

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "https://als-backend.onrender.com/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, done) {
      // let payload={
      //   _id:profile.id,
      //   email:profile.emails[0].value,
      //   name:profile.displayName
      // }
      //   let user=await new UserSchema(payload);
      //   await user.save();
      done(null, profile);
    }
  )
);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


module.exports = passport;