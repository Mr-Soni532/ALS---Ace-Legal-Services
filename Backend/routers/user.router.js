const express = require('express')
const UserRouter = express.Router();
const authorization=require("../middlewares/authorization.middleware");
const controller =require("../controllers/user.controller")

UserRouter.post("/signup",controller.createUser);
UserRouter.post("/login",controller.userLogin);
UserRouter.get("/getAllUsers",controller.fetchAllUsers);
UserRouter.post("/verifyOTP",controller.verifyOTP);
UserRouter.patch("/forgotpassword",controller.forgotPassword);
UserRouter.get("/getaUserDataByEmail",controller.getaUserDataByEmail);

module.exports = UserRouter;