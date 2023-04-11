const mongoose = require('mongoose');
const appointmentSchema = mongoose.Schema({
    lawyerEmail: {
        type: String,
        require: true
    },
    userEmail: {
        type: String,
        require: true
    },
    appointment_date: {
        date: {
            type: String,
            require: true
        },
        year: {
            type: Number,
            reqruie: true
        },
        month: {
            type: Number,
            reqruie: true
        },
        day: {
            type: Number,
            reqruie: true
        }
    },
    appointmentTime: {
        type: String,
        require: true
    },
    meeting_type: {
        type: String,
        require: true
    },
    slot: {
        type: Number,
        require: true
    }
}, { timestamps: true })
const AppointmentModel = mongoose.model('appointment', appointmentSchema);
module.exports = AppointmentModel;