const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: String,
    gender: String,
    phone: Number,
    email: String,
    password: String,
}, { timestamps: true })
const UserSchema = mongoose.model('user', userSchema);
module.exports = UserSchema;