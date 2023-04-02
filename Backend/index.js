const express = require('express');
const connectToMongo = require('./config/db');
const cors = require('cors');
const UserRouter = require('./routers/user.router');
const LawyerRouter = require('./routers/lawyer.router');
const AdminRouter = require('./routers/admin.router');
const GoogleRouter=require("./routers/googleAuth.router")
const app = express();
const passport = require("./config/google.auth");
const cookieSession = require("cookie-session");

//=============> ENV VARIABLES
require('dotenv').config()
// const PORT = process.env.PORT;
const PORT = 3100;

//=============> MIDDLEWARES
app.use(express.json())

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

//=============> Testing endpoint
app.get('/', (req, res) => res.send({ Message: 'ALS server working fine' }))

//=============> ROUTES

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(passport.initialize());
app.use(passport.session());

//=============> Testing endpoint
app.get('/', (req, res) => res.send({ Message: 'ALS server working fine' }))


//=============> ROUTES

app.use('/user',UserRouter)
app.use('/lawyer',LawyerRouter)
app.use('/admin',AdminRouter)
app.use("/auth",GoogleRouter)





//=============> CONNECTION
app.listen(PORT, async () => {
  try {
    await connectToMongo();
    console.log(`ALS backend running @ ${PORT}`)
  } catch (error) {
    console.log(error)
  }
})
