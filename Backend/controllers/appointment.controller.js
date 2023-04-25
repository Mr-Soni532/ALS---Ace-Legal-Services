const AppointmentModel = require("../model/appointment.model");
const UserModel = require("../model/user.model");
const sendEmail = require("../utils/notificaton");
const emailTemplate = require('../utils/email-templates.js');
const LawyerModel = require("../model/lawyer.model");
const { send } = require("process");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'Ace.Legal.Services.official@gmail.com',
        pass: 'cwzwapjwwwfxkyxy'
    }
});

exports.addAppointment = async (req, res) => {
    let payload = req.body;
    console.log(req.body)
    const user = await UserModel.find({ email: payload.userEmail });
    const lawyer = await LawyerModel.find({ email: payload.lawyerEmail });
    console.log(user[0].name, lawyer[0].name, payload.appointment_date?.date, payload?.appointmentTime, payload?.meeting_type)
    payload['userId'] = req.body.userid;
    const mailOptions = {
        from: "ace.legal.services.official@gmail.com",
        to: payload.userEmail,
        subject: "Appointment Status",
        html: emailTemplate.appointmentSuccess(user[0].name, lawyer[0].name, payload.appointment_date?.date, payload?.appointmentTime, payload?.meeting_type) // html body
    };
    try {
        let newAppointment = new AppointmentModel(payload);
        await newAppointment.save();
        // await sendEmail(emailTemplate.appointmentSuccess(user[0].name, lawyer[0].name, payload.appointment_date?.date, payload?.appointmentTime, payload?.meeting_type))
        await transporter.sendMail(mailOptions);
        res.status(201).json({ msg: "Appointment Created", success: true })
    } catch (error) {
        res.status(500).json({ msg: error.message, success: false })
    }
}

exports.deleteAppointment = async (req, res) => {
    let id = req.params.id
    const Appointment = await AppointmentModel.find({ _id: id });
    let useremail = Appointment[0].userEmail
    try {
        await AppointmentModel.findByIdAndDelete(req.params.id)
        await sendEmail(emailTemplate.appointmentRejected(useremail))
        res.status(200).json({ message: 'Appointment has been removed', success: true });
    } catch (error) {
        res.status(500).json({ error: error.message, success: false })
    }
}