const express = require('express');
const authorization = require('../middlewares/authorization.middleware');
const LawyerRouter = express.Router();
const controller = require('../controllers/lawyer.controller')

// /lawyer/fetch-lawyer

LawyerRouter.get('/fetch-Lawyers', authorization, controller.fetchLawyer);

// Create res of required end points like above


module.exports = LawyerRouter;