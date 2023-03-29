const express = require('express');
const connectToMongo = require('./config/db');
const cors = require('cors');
const app = express()
require('dotenv').config()


const PORT = process.env.PORT;


//=============> ENV VARIABLES
app.use(express.json())
app.use(cors())

//=============> Testing endpoint
app.get('/', (req,res)=> res.send({msg: 'ALS server working fine'}))

//=============> ROUTES
app.use('/user')
app.use('/lawyer')
app.use('/admin')

//=============> CONNECTION
app.listen(PORT, async(err)=>{
    try{
        await connectToMongo();
        console.log(`ALS backend running @ ${PORT}`)
    } catch(error){
        console.log(error)
    }
})