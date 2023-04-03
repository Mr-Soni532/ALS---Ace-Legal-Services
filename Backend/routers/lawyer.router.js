const express = require('express');
const authorization = require('../middlewares/authorization.middleware');
const LawyerRouter = express.Router();
const lawyerController = require('../controllers/lawyer.controller');
const appointmentController = require('../controllers/appointment.controller.js')

LawyerRouter.post("/login", lawyerController.lawyerLogin);

LawyerRouter.post('/searchLawyer', authorization, lawyerController.searchLawyer)

LawyerRouter.get("/deleteAppointment", authorization, appointmentController.deleteAppointment);

module.exports = LawyerRouter;
