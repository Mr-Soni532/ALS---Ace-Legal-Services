const mongoose = require('mongoose');
const appointmentSchema = mongoose.Schema({
    lawyerId: String,
    userId: String,
    appointment_date: String,
    AppointmentTime: String,
    meeting_type: String,

}, { timestamps: true })
const AppointmentSchema = mongoose.model('appointment', appointmentSchema);
module.exports = AppointmentSchema;