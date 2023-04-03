const mongoose = require('mongoose');
require('dotenv').config();

//==============> HANDLE WARNING MESSAGE
mongoose.set('strictQuery', true);


//==============> MONGOOSE CONNECTION
// const mongoURI = process.env.mongoURI;
const mongoURI = 'mongodb+srv://sanjayv:sanjay@cluster0.9ycsbw8.mongodb.net/nxm301cw?retryWrites=true&w=majority';
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connnected to Mongoose');
    } catch (error) {
        console.log({ Error: error.message })
    }
}
module.exports = connectToMongo;