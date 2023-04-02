const express = require('express');
const app = express()
const authorization = require('../middlewares/authorization.middleware');
const LawyerRouter = express.Router();
const lawyerController = require('../controllers/lawyer.controller');
const appointmentController = require('../controllers/appointment.controller.js')

LawyerRouter.post("/login", lawyerController.lawyerLogin);

app.use(authorization)
LawyerRouter.post('/searchLawyer', lawyerController.searchLawyer)

LawyerRouter.get("/deleteAppointment", appointmentController.deleteAppointment);

module.exports = LawyerRouter;
