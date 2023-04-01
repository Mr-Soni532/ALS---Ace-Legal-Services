const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
    name: String,
    gender: String,
    phone: Number,
    email: String,
    password: String,
    Rank: Number
}, { timestamps: true })
const AdminModel = mongoose.model('admin', adminSchema);
module.exports = AdminModel;