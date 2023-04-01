const express = require('express')
const AdminRouter = express.Router();
const controller = require('../controllers/admin.controller.js')

// Admin
AdminRouter.get('/getAllAdmins', controller.fetchAllAdmins)
AdminRouter.get('/getAdmin/:id', controller.getAdminById)
AdminRouter.post('/addAdmin',controller.addAdmin)

// Lawyer
AdminRouter.get('/getAllLawyers', controller.fetchAllLawyer)
AdminRouter.get('/getLawyer/:id', controller.fetchLawyerById)
AdminRouter.post('/addLawyer', controller.addLawyer)
AdminRouter.delete('/deleteLawyer/:id', controller.deleteLawyer)
AdminRouter.post("/postAllLawyers", controller.bulkPostAdmin);

// User
AdminRouter.get('/getAllUsers', controller.fetchAllUsers)
AdminRouter.get('/getUser/:id', controller.fetchUserById)
AdminRouter.delete('/deleteUser/:id', controller.deleteUser)

module.exports = AdminRouter;