const express = require('express');
const connection = require('./config/db');
const UserRouter = require('./routers/user.router');
const LawyerRouter = require('./routers/lawyer.router');
const AdminRouter = require('./routers/admin.router');
const GoogleRouter = require("./routers/googleAuth.router")
const app = express();
const passport = require("./config/google.auth");
const cookieSession = require("cookie-session");
const AppoinmtentRouter = require('./routers/appointment.router');
const cors = require('cors');

//=============> ENV VARIABLES
require('dotenv').config()
const PORT = process.env.PORT;

//=============> MIDDLEWARES

app.use(cors({
  origin: "https://acelegalservices.vercel.app",
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', "Authorization", "Access-Control-Allow-Credentials", "Access-Control-Allow-Origin"],
  credentials: true
}));
app.use(express.json())

//=============> Testing endpoint
app.get('/', (req, res) => res.send({ Message: 'ALS server working fine' }))

//=============> ROUTES

app.use(cookieSession({
  name: 'google-auth-session',
  keys: ["key1", "key2"],
}))

app.use(passport.initialize());
app.use(passport.session());

//=============> Testing endpoint
app.get('/', (req, res) => res.send({ Message: "Welcome to ALS-Backend Server" }))


//=============> ROUTES
app.use('/user', UserRouter)
app.use('/lawyer', LawyerRouter)
app.use('/admin', AdminRouter)
app.use("/auth", GoogleRouter)
app.use("/appointment", AppoinmtentRouter)




//=============> CONNECTION
app.listen(PORT, async () => {
  try {
    await connection
    console.log(`ALS backend running @ ${PORT}`)
  } catch (error) {
    console.log({ error: error.message })
  }
})
