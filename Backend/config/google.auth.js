
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
    function (accessToken, refreshToken, profile, cb,done) {
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      // console.log(profile);
      // console.log( profile);
      // return cb(null, profile);
      console.log(profile)
      done(null, profile);
      // });
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