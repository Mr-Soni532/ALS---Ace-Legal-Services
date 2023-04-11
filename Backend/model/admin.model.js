const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    }
}, { timestamps: true })
const AdminModel = mongoose.model('admin', adminSchema);
module.exports = AdminModel;