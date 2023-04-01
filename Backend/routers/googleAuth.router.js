const express=require("express");
const GoogleRouter=express.Router();
const passport=require("../config/google.auth")
GoogleRouter.get("/login/success", (req, res) => {
    // console.log(req.user)
    if (req.user) {
      // console.log(req.user)
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
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
    res.redirect("http://localhost:3001/");
  });
  
  GoogleRouter.get("/google", passport.authenticate('google', { scope: ['profile','email'] }));
  
  GoogleRouter.get(
    "/google/callback",
    passport.authenticate("google", {
      successRedirect: "http://localhost:3001/userdashboard",
      failureRedirect: "/auth/login/failed",
    })
  );
  

module.exports=GoogleRouter;