const mongoose = require('mongoose');
const lawyerSchema = mongoose.Schema({
   name: String,
   type: String,
   gender:String,
   phone: Number,
   email: String,
   password: String,
   Rank: Number
    
},{timestamps: true})
const LawyerSchema = mongoose.model('lawyer', lawyerSchema);
module.exports = LawyerSchema;