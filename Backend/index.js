const express = require('express');
const connectToMongo = require('./config/db');
const cors = require('cors');
const UserRouter = require('./routers/user.router');
const LawyerRouter = require('./routers/lawyer.router');
const AdminRouter = require('./routers/admin.router');
const app = express()
require('dotenv').config()

const PORT = process.env.PORT;

//=============> ENV VARIABLES
app.use(express.json())
app.use(cors())

//=============> Testing endpoint
app.get('/', (req,res)=> res.send({msg: 'ALS server working fine'}))

//=============> ROUTES

app.use('/user',UserRouter)
app.use('/lawyer',LawyerRouter)
app.use('/admin',AdminRouter)

//=============> CONNECTION
app.listen(PORT, async(err)=>{
    try{
        await connectToMongo();
        console.log(`ALS backend running @ ${PORT}`)
    } catch(error){
        console.log(error)
    }
})