const express = require('express');
const authorization = require('../middlewares/authorization.middleware');
const LawyerRouter = express.Router();
const lawyerController = require('../controllers/lawyer.controller');
const appointmentController = require('../controllers/appointment.controller.js')

LawyerRouter.post("/login", lawyerController.userLogin);
LawyerRouter.patch("/forgotpassword", lawyerController.forgetPasswordorgotPassword);
LawyerRouter.get("/getaUserDataByEmail", lawyerController.getaUserDataByEmail);


LawyerRouter.get("/deleteAppointment", appointmentController.deleteAppointment);

module.exports = LawyerRouter;