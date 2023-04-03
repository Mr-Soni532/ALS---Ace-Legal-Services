const AppointmentModel = require("../model/appointment.model");
const UserModel = require("../model/user.model");
const sendEmail = require("../utils/notificaton");
const emailTemplate = require('../utils/email-templates.js');
const LawyerModel = require("../model/lawyer.model");
const { send } = require("process");

exports.addAppointment = async (req, res) => {
    let payload = req.body;
    console.log(req.body)
    const user = await UserModel.find({email: payload.userEmail});
    const lawyer = await LawyerModel.findById(payload.userId);
    payload['userId'] = req.body.userid;
    try {
        let newAppointment = new AppointmentModel(payload);
        await newAppointment.save();
        // await sendEmail(emailTemplate.appointmentSuccess(user.name, lawyer.name, payload.appointment_date.date, payload.time, payload.type))
        res.status(201).json({ msg: "Appointment Created", success: true })
    } catch (error) {
        res.status(500).json({ msg: error.message, success: false })
    }
}

exports.deleteAppointment = async (req, res) => {
    let payload = req.body;
    const userEMail = await UserModel.findById(payload.userId);
    try {
        await AppointmentModel.findByIdAndDelete(req.params.id)
        await sendEmail(emailTemplate.appointmentRejected())
        res.status(200).json({ message: 'Appointment has been removed', success: true });
    } catch (error) {
        res.status(500).json({ error: error.message, success: false })
    }
}