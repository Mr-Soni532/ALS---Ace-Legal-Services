const express = require('express');
const AppointmentModel = require('../model/appointment.model');
const authorization = require('../middlewares/authorization.middleware');
const AppoinmtentRouter = express.Router()

AppoinmtentRouter.get('/fetch/userEmail', authorization,async (req, res) => {
    let email = req.query.email;
    try {
        let data = await AppointmentModel.find({ userEmail: email })
        res.send({ data })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})
AppoinmtentRouter.get('/fetch/lawyerEmail', authorization,async (req, res) => {
    let email = req.query.email;
    try {
        let data = await AppointmentModel.find({ lawyerEmail: email })
        res.send({ data })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})

module.exports = AppoinmtentRouter; 