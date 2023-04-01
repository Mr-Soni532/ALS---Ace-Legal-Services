const express = require('express');
const connectToMongo = require('./config/db');
const cors = require('cors');
const UserRouter = require('./routers/user.router');
const LawyerRouter = require('./routers/lawyer.router');
const AdminRouter = require('./routers/admin.router');
const app = express();
const passport=require("./config/google.auth");
// const UserSchema = require('./model/user.model');
const cookieSession = require("cookie-session");

require('dotenv').config()

const PORT = process.env.PORT;

//=============> ENV VARIABLES
app.use(express.json())
app.use(cors())

//=============> Testing endpoint
app.get('/', (req,res)=> res.send({msg: 'ALS server working fine'}))

//=============> ROUTES
app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());
app.use('/user',UserRouter)
app.use('/lawyer',LawyerRouter)
app.use('/admin',AdminRouter)
app.get("/auth/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

app.get("/auth/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile',"email"] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login',session:false }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/userdashboard');
  });
// app.get("/auth/google",passport.authenticate("google", { scope: ["profile","email"] }));
  
// app.get("/auth/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "http://localhost:3000/userdashboard",
//     failureRedirect: "auth/login/failed",
//   })
// );
  // app.get("/auth/google/callback",
  //   passport.authenticate("google", {
  //     failureRedirect: "/login",
  //     session: false,
  //   }),
  //   async function (req, res) {
  //       // let email=req.user._json.email;
  //       // let name=req.user._json.given_name;
  //       // let verified=req.user._json.email_verified;
  //       // const user=new UserSchema({email,name,verified});
  //       // await user.save();
  //     res.redirect("http://localhost:3000/userdashboard");
  //   }
  // );
  // router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//=============> CONNECTION
app.listen(PORT, async(err)=>{
    try{
        await connectToMongo();
        console.log(`ALS backend running @ ${PORT}`)
    } catch(error){
        console.log(error)
    }
})