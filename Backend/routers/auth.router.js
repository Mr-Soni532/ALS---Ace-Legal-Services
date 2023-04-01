const express = require('express')
const AuthRouter = express.Router();
const controller = require('../controllers/auth.controller.js')
const passport = require("./config/google.auth");


AuthRouter.get("/auth/login/success", controller.loginSuccess);

AuthRouter.get("/auth/login/failed", controller.loginFailed);

AuthRouter.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', "email"] }));

AuthRouter.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login', session: false }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:3000/userdashboard');
    });



module.exports = AuthRouter;