const mongoose = require('mongoose');
require('dotenv').config();

//==============> HANDLE WARNING MESSAGE
mongoose.set('strictQuery', true);


//==============> MONGOOSE CONNECTION
// const mongoURI = process.env.mongoURI;
const mongoURI = 'mongodb+srv://bhupenderSoni:amiclone69@nxm.4qrblvw.mongodb.net/ALS?retryWrites=true&w=majority';
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connnected to Mongoose');
    } catch (error) {
        console.log({ Error: error.message })
    }
}
module.exports = connectToMongo;