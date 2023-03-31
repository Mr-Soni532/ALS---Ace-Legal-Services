const express = require('express')
const UserRouter = express.Router();
const authorization=require("../middlewares/authorization.middleware");
const controller =require("../controllers/user.controller")
// const passport=require("passport")
UserRouter.post("/signup",controller.createUser);
UserRouter.post("/login",controller.userLogin);
UserRouter.get("/getAllUsers",controller.fetchAllUsers);
UserRouter.post("/verifyOTP",controller.verifyOTP);
UserRouter.patch("/forgotpassword",controller.forgotPassword);
UserRouter.get("/getaUserDataByEmail",controller.getaUserDataByEmail);
// UserRouter.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile',"email"] }));

// UserRouter.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login',session:false }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

// UserRouter.listen(5051,()=>{
//     console.log("http://localhost:5051")
// })

module.exports = UserRouter;