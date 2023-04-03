const LawyerSchema=require("../model/lawyer.model")
const jwt=require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');
const LawyerModel = require("../model/lawyer.model");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'ace.legal.services.official@gmail.com',
        pass: 'cwzwapjwwwfxkyxy'
    }
});

exports.lawyerLogin = async (req, res) => {
    const {email,password}=req.body;
    const lawyerAvailable=await LawyerSchema.findOne({email});
    const dbPassword=lawyerAvailable?.password;
    const LawyerId=lawyerAvailable?._id;
    if(lawyerAvailable){
        bcrypt.compare(password,dbPassword,(err,result)=>{
            if(err){
                res.send({ Message: "Password is incorrect" })
            }
            if(result){
                const token=jwt.sign({LawyerId},"ALS");
                res.send({ msg: "login successful", "token": token, status: "success"})
            }
        })
    }else{
        res.send({msg:"login failed",status:"error"})
    }
}

exports.searchLawyer = async (req,res)=>{
    let payload = req.body;
    const myRegexPattern = new RegExp(payload.value);
    let data = await LawyerModel.find({[payload.type]: { $regex: myRegexPattern,$options: 'i' }})
    res.status(200).json({data})
}
exports.searchLawyerByEmail = async (req,res)=>{
    let email = req.query.email;
    let data = await LawyerModel.find({email: email})
    res.status(200).json({data})
}
