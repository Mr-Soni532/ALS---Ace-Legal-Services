const express = require('express');
const connectToMongo = require('./config/db');
const cors = require('cors');
const UserRouter = require('./routers/user.router');
const LawyerRouter = require('./routers/lawyer.router');
const AdminRouter = require('./routers/admin.router');
const app = express();
const passport = require("./config/google.auth");
const cookieSession = require("cookie-session");
const AuthRouter = require('./routers/auth.router');

//=============> ENV VARIABLES
require('dotenv').config()
const PORT = process.env.PORT;

//=============> MIDDLEWARES
app.use(express.json())
app.use(cors())
app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(passport.initialize());
app.use(passport.session());

//=============> Testing endpoint
app.get('/', (req, res) => res.send({ Message: 'ALS server working fine' }))

//=============> ROUTES
app.use('/user', UserRouter)
app.use('/lawyer', LawyerRouter)
app.use('/admin', AdminRouter)
app.use('/auth', AuthRouter)

//=============> CONNECTION
app.listen(PORT, async () => {
  try {
    await connectToMongo();
    console.log(`ALS backend running @ ${PORT}`)
  } catch (error) {
    console.log(error)
  }
})
