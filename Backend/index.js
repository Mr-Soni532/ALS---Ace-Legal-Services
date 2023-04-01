const express = require('express');
const connectToMongo = require('./config/db');
const cors = require('cors');
const UserRouter = require('./routers/user.router');
const LawyerRouter = require('./routers/lawyer.router');
const AdminRouter = require('./routers/admin.router');
const app = express();
const passport=require("./config/google.auth")

require('dotenv').config()

const PORT = process.env.PORT;

//=============> ENV VARIABLES
app.use(express.json())
app.use(cors())

//=============> Testing endpoint
app.get('/', (req, res) => res.send({ Message: 'ALS server working fine' }))

//=============> ROUTES


app.use('/user',UserRouter)
app.use('/lawyer',LawyerRouter)
app.use('/admin',AdminRouter)
// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile',"email"] }));


// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login',session:false }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });
app.get("/auth/google",passport.authenticate("google", { scope: ["profile","email"] }));
  
  app.get("/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/login",
      session: false,
    }),
    async function (req, res) {
        console.log(req.user._json.email)
        console.log(req.user._json.name)
      // Successful authentication, redirect home.
    //   const name = req.user._json.name;
    //   const email = req.user._json.email;
    //   const pro_pic = req.user._json.picture;
    //   const user_data = {
    //     name,
    //     email,
    //     picture: pro_pic,
    //   };
    //   const user = new Usermodel(user_data);
    //   await user.save();
      // let userEmail = await Usermodel({ email: email });
      // let data = await fetch("https://finalcalender.vercel.app/regis", {
      //   method: POST,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email: userEmail.email,
      //   }),
      // });
      // console.log(user_data);
      // console.log(".." + __dirname);
      // dir="C:\Users\User\OneDrive\Desktop\organic-pets-4780-\Frontend\Dashboard\Dashboard.html"
  
    //   res.cookie("userEmail", email);
      res.redirect("http://localhost:3000/userdashboard");
    }
  );
//=============> CONNECTION
app.listen(PORT, async (err) => {
    try {
        await connectToMongo();
        console.log(`ALS backend running @ ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})
