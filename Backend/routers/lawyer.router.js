const express = require('express');
const authorization = require('../middlewares/authorization.middleware');
const LawyerRouter = express.Router();
const controller = require('../controllers/lawyer.controller');
const LawyerSchema = require('../model/lawyer.model');


// /lawyer/fetch-lawyer
LawyerRouter.get("/getAllLawyers", async (req, res) => {
    try {
        const Data = await LawyerSchema.find();
        res.json({ Messagge: "All Lawyers Data", Data });
    } catch (err) {
        console.log(err);
        res.json({ Error: err })
    }
});


LawyerRouter.post("/postAllLawyers", async (req, res) => {
    let data = req.body
    try {
        await LawyerSchema.insertMany(data)
        res.json({ Messagge: "Inserted all Lawyers data" });
    } catch (err) {
        console.log(err);
        res.json({ Error: err })
    }
});

module.exports = LawyerRouter;