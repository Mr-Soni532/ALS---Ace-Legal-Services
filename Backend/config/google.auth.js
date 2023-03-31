// const passport=require("passport");
// require("dotenv").config();
// var GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: `http://localhost:${process.env.port}/auth/google/callback`
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     let user ={
//       email:profile._json.email,
//       name:profile._json.name,
//     }
//       return cb(null, user);
//   }
// ));

// module.exports=passport;
// const GOOGLE_CLIENT_ID="147798063236-iv20ceu6gpr21g5kdeg53rjehvenvg1d.apps.googleusercontent.com"
// const GOOGLE_CLIENT_SECRET="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"
// const passport = require("passport")

// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:4000/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     let email= profile._json.email;
//     console.log(email);
//       return cb(null, "user");
//   }
// ));
// module.exports={
//   passport
// }
const passport = require("passport");
require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GOOGLE_CLIENT_ID =
  "147798063236-iv20ceu6gpr21g5kdeg53rjehvenvg1d.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, cb) {
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      // console.log(profile);
      console.log( profile);
      return cb(null, profile);
      // });
    }
  )
);

module.exports = passport;