const bcrypt = require('bcrypt');
const AdminModel = require('../model/admin.model');
const LawyerModel = require('../model/lawyer.model');
const UserModel = require('../model/user.model');
const nodemailer = require("nodemailer");
const generatePassword = require("../utils/generatePassword.js")
const emailTemplate = require('../utils/email-templates.js');
const sendEmail = require('../utils/notificaton.js');
//! ============> NodeMailer utils

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: 'ace.legal.services.official@gmail.com',
//         pass: 'cwzwapjwwwfxkyxy'
//     }
// });


//! ============> Admin
exports.fetchAllAdmins = async (req, res) => {
    try {
        const admin = await AdminModel.find();
        res.send(admin);
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }
}
exports.getAdminById = async (req, res) => {
    try {
        const admin = await AdminModel.findById(req.params.id);
        res.send(admin);
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }
}
exports.addAdmin = async (req, res) => {
    const payload = req.body;
    try {
        const admin = await AdminModel.find({ email: payload.email });
        if (admin.length) {
            return res.status(403).json({ Error: "Admin already exsisted!" })
        }
        const newPass = generatePassword();
        bcrypt.hash(newPass, 10, async (err, hash) => {
            if (err) return res.json({ err: err.message });
            payload['password'] = hash;
            let newAdmin = new AdminModel(payload);
            await newAdmin.save(newAdmin);
            res.status(201).json({ message: 'Admin has been created.' });

            //! sending account details notification
            sendEmail(emailTemplate(payload.email, newPass))
        })
    } catch (error) {
        res.status(500).json({ Error: error.message })
        console.log(error)
    }
}


//! ============> Lawyer
exports.fetchAllLawyer = async (req, res) => {
    try {
        const lawyer = await LawyerModel.find();
        res.send(lawyer);
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }
}
exports.fetchLawyerById = async (req, res) => {
    try {
        const lawyer = await LawyerModel.findById(req.params.id);
        res.send(lawyer);
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }
}
exports.addLawyer = async (req, res) => {
    const payload = req.body;
    try {
        const lawyer = await LawyerModel.find({ email: payload.email });
        if (lawyer.length) {
            return res.status(403).json({ Error: "Lawyer already exsisted!" })
        }
        const newPass = generatePassword();
        bcrypt.hash(newPass, 10, async (err, hash) => {
            if (err) return res.json({ err: err.message });
            payload['password'] = hash;
            let newLawyer = new LawyerModel(payload);
            await newLawyer.save(newLawyer);
            res.status(201).json({ message: 'Lawyer has been created.' });

            //! sending account details notification
            sendEmail(emailTemplate(payload.email, newPass))

        })
    } catch (error) {
        res.status(500).json({ Error: error.message })
        console.log(error)
    }
}
exports.deleteLawyer = async (req, res) => {
    try {
        await LawyerModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'Lawyer has been removed.' });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.bulkPostAdmin = async (req, res) => {
    let data = req.body
    try {
        await LawyerModel.insertMany(data)
        res.json({ Messagge: "Inserted all Lawyers data" });
    } catch (err) {
        console.log(err);
        res.json({ Error: err })
    }
}



//! ============> User
exports.fetchAllUsers = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.send(user);
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }
}
exports.fetchUserById = async (req, res) => {
    try {
        const users = await UserModel.findById(req.params.id);
        res.send(users);
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }
}
exports.deleteUser = async (req, res) => {
    try {
        await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'User has been removed.' });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// //! ===============> Send confirmation emails

// const sendEmail= async(htmlBody)=>{
//     try {
//         const mailOptions = {
//             from: "ace.legal.services.official@gmail.com",
//             to: email,
//             subject: "Verify your email",
//             html: htmlBody, // html body
//         };
//         await transporter.sendMail(mailOptions);
//     } catch (error) {
//         res.send(error)
//     }
// }