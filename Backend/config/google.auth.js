const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const UserSchema=require("../model/user.model");

const GOOGLE_CLIENT_ID =
  "147798063236-iv20ceu6gpr21g5kdeg53rjehvenvg1d.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
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
          done(null,profile);
        }
  )
);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


module.exports=passport;