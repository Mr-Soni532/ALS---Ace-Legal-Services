const express = require("express");
const GoogleRouter = express.Router();
const passport = require("../config/google.auth");
const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt")
let RedirectLink = `https://acelegalservices.vercel.app`

GoogleRouter.get("/google", passport.authenticate('google', { scope: ['profile', 'email'] }));


GoogleRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/login/success",
    failureRedirect: "/auth/login/failed",
  })
);

GoogleRouter.get("/login/success", async (req, res) => {
  if (!req.user) {
    return res.redirect(`${RedirectLink}/userdashboard?authsuccess=false`)
  }
  let payload = req.user

  let userDetails = {
    name: payload.displayName,
    email: payload.emails[0].value,
    gender: "Not Assigned",
    phone: 0,
    password: payload.emails[0].value,
    img: payload.photos[0].value,
    verified: true
  }
  // console.log(userDetails)
  console.log("Google Auth Accessed by" + userDetails.email);
  try {
    let user = await UserModel.find({ email: userDetails.email });
    if (user.length !== 0) {
      let id = user[0]._id
      res.redirect(`${RedirectLink}/userdashboard?authsuccess=true&userID=${id}`)
    } else {
      bcrypt.hash(userDetails.email, 10, async (err, hash) => {
        if (hash) {
          userDetails.password = hash
          let instance = new UserModel(userDetails);
          await instance.save()
          res.redirect(`${RedirectLink}/userdashboard?authsuccess=true&userID=${instance._id}`)
        }
      })
    }

  } catch (error) {
    console.log(error);
    res.redirect(`${RedirectLink}/userdashboard?authsuccess=false`)
  }


});
GoogleRouter.get("/login/failed", (req, res) => {
  res.redirect(`${RedirectLink}/userdashboard?authsuccess=false`)
});

GoogleRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect(`${RedirectLink}`);
});




module.exports = GoogleRouter;