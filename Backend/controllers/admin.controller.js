const bcrypt = require('bcrypt');
const AdminModel = require('../model/admin.model');

//! ============> Admin
exports.fetchAllAdmins = async (req, res) => {

}
exports.getAdminById = async (req, res) => {

}
exports.addAdmin = async (req, res) => {
    const payload = req.body;
    try {
        const admin = await AdminModel.find({ email });
        if (admin.length) {
            return res.status(403).json({ Error: "Admin already exsisted!" })
        }
        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) return res.json({ err: err.message });
            payload.password = hash;
            let newAdmin = new AdminModel(payload);
            await newAdmin.save(newAdmin);
            res.status(201).json({ message: 'Admin has been created.' });
            //! Pending notification
        })
    } catch (error) {
        res.status(500).json({ Error: error.message })
        console.log(error)
    }
}

//! ============> Lawyer
exports.fetchAllLawyer = async (req, res) => {

}
exports.fetchLawyerById = async (req, res) => {

}
exports.addLawyer = async (req, res) => {

}
exports.deleteLawyer = async (req, res) => {

}

//! ============> User
exports.fetchAllUsers = async (req, res) => {

}
exports.fetchUserById = async (req, res) => {

}
exports.deleteUser = async (req, res) => {

}
