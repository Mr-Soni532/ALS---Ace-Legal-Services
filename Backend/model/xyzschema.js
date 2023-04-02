const mongoose = require('mongoose');
const xyzschema = mongoose.Schema({
    name: String,
    address: String,
    bio: String,
    skills: [String],
    profession: String,
    gender: String,
    phone: Number,
    image: String,
    price: String,
    languages: [String],
    rating: Number,
    experience: String,
    email: String,
    password: String,
    Rank: Number

}, { timestamps: true })
const xyzmodel = mongoose.model('xyz', xyzschema);
module.exports = xyzmodel;
