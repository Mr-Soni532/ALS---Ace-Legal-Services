const AppointmentModel = require("../model/appointment.model");
const UserModel = require("../model/user.model");

exports.addAppointment = async (req, res) => {
    let payload = req.body;
    const userEMail=await UserModel.findById(payload.userId);
    payload['userId'] = req.body.userid;
    try {
        let newAppointment = new AppointmentModel(payload);
        await newAppointment.save();
        res.status(201).json({ msg: "Appointment Created", success: true })
    } catch (error) {
        res.status(500).json({ msg: error.message, success: false })
    }
}

exports.deleteAppointment = async (req, res) => {
    let payload = req.body;
    const userEMail=await UserModel.findById(payload.userId);
    try {
        await AppointmentModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'Appointment has been removed', success: true });
    } catch (error) {
        res.status(500).json({ error: error.message, success: false })
    }
}