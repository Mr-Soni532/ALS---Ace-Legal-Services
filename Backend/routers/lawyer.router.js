const express = require('express');
const authorization = require('../middlewares/authorization.middleware');
const LawyerRouter = express.Router();
const controller = require('../controllers/lawyer.controller')


LawyerRouter.get('/fetch-Lawyers', authorization, controller.fetchAllLawyers);

// Create res of required end points like above