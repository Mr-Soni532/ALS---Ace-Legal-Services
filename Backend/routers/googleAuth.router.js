const express = require("express");
const GoogleRouter = express.Router();
const passport = require("../config/google.auth");
const UserModel = require("../model/user.model");
GoogleRouter.get("/login/success", async (req, res) => {
  // console.log(req.user)
  let payload = req.user;
  if (req.user) {
    // console.log(req.user)
    let userDetails = {
      name: payload.displayName,
      email: payload.emails[0].value,
      gender: "",
      phone: 0,
      img: payload.photos[0].value,
      verified: true
    }
    let user = await UserModel.find({email: userDetails.email});
    console.log(user)
    if(user.length == 0){
      let newUser = new UserModel(userDetails);
      await newUser.save()
    }
    res.status(200).json({
      success: true,
      message: "successfull",
      user: userDetails
      //   cookies: req.cookies
    });
  }
});

GoogleRouter.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

GoogleRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/");
});

GoogleRouter.get("/google", passport.authenticate('google', { scope: ['profile', 'email'] }));

GoogleRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/userdashboard",
    failureRedirect: "/auth/login/failed",
  })
);


module.exports = GoogleRouter;