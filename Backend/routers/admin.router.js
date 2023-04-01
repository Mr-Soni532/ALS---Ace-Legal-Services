const express = require('express')
const AdminRouter = express.Router();

AdminRouter.get('/getAllLawyers', )
AdminRouter.get('/getAllUsers', )

// Lawyer
AdminRouter.get('/getLawyer/:id', )
AdminRouter.post('/addLawyer', )
AdminRouter.delete('/deleteLawyer/:id', )

// Lawyer
AdminRouter.get('/getUser/:id', )
AdminRouter.post('/addUser', )
AdminRouter.delete('/deleteUser/:id', )


module.exports = AdminRouter;