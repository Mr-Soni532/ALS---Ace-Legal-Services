const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: String,
    gender: String,
    phone: Number,
    email: String,
    password: String,
    verified:Boolean
}, { timestamps: true })
const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;