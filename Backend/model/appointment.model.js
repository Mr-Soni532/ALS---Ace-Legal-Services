const mongoose = require('mongoose');
const appointmentSchema = mongoose.Schema({
    lawyerId: String,
    userId: String,
    appointment_date: {
        date: String,
        year: String,
        month: String,
        day: String
    },
    appointmentTime: String,
    meeting_type: String,

}, { timestamps: true })
const AppointmentSchema = mongoose.model('appointment', appointmentSchema);
module.exports = AppointmentSchema;