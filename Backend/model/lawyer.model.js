const mongoose = require('mongoose');
const lawyerSchema = mongoose.Schema({
   name: String,
   address: String,
   bio: String,
   skills: [String],
   profession: String,
   gender: String,
   phone: Number,
   address: String,
   image: String,
   price: String,
   languages: [String],
   rating: Number,
   experience: String,
   email: String,
   password: String,
   Rank: Number

}, { timestamps: true })
const LawyerSchema = mongoose.model('lawyer', lawyerSchema);
module.exports = LawyerSchema;