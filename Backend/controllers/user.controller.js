const UserModel = require("../model/user.model");
const UserOTP = require("../model/UserOTPVerification");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const sendEmail = require("../utils/notificaton");
const emailTemplate = require('../utils/email-templates.js');
exports.fetchAllUsers = async (req, res) => {
    try {
        const Users = await UserModel.find();
        res.send(Users)
    } catch (error) {
        res.send(error)
    }
}
exports.createUser = (req, res) => {
    const { name, gender, phone, email, password } = req.body;
    UserModel.find({ email })
        .then((result) => {
            if (result.length) {
                res.json(

                    { msg: "you are already available , please login" }
                )
            } else {
                const saltRounds = 10;
                bcrypt
                    .hash(password, saltRounds)
                    .then((hashpassword) => {
                        const user = new UserModel(
                            { name, gender, email, phone, password: hashpassword, verified: false }
                        );
                        user
                            .save()
                            .then((result) => {
                                sendOTPVerificationEmail(result, res);
                                // res.send({"status":"success","msg":"Sign up Successfull"});
                            })
                            .catch((err) => {
                                console.log(err);
                                res.json({
                                    status: "FAILED",
                                    msg: "Sign Up Failed"
                                })
                            })
                    })
                    .catch((err) => {
                        console.log(err);
                        res.json({
                            status: "FAILED",
                            msg: "Sign Up Failed"
                        })
                    })
            }
        })
}
exports.userLogin = async (req, res) => {
    const { email, password } = req.body;
    const userAvailable = await UserModel.findOne({ email });
    const userid = userAvailable?._id;
    const username = userAvailable?.name;
    const hashpassword = userAvailable?.password;

    if (userAvailable) {
        bcrypt.compare(password, hashpassword, (err, result) => {

            if (err) {
                res.send({ Message: "Password is incorrect" })
            }

            if (result) {
                const token = jwt.sign({ id: userid }, "ALS");
                res.send({ msg: "login successful", "token": token, status: "success", "name": username ,"userData":userAvailable})
            } else {
                res.send({ msg: "login failed", status: "error" })
            }


        })
    }
    else {
        res.send({ Message: "please signup", status: "error" })
    }
}
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'ace.legal.services.official@gmail.com',
        pass: 'cwzwapjwwwfxkyxy'
    }
});

const sendOTPVerificationEmail = async ({ _id, email }, res) => {
    try {
        const otp = `${Math.floor(Math.random() * 9000)}`;
        const mailOptions = {
            from: "ace.legal.services.official@gmail.com",
            to: email,
            subject: "Verify your email",
            html: emailTemplate.otpEmail(otp), // html body
        };
        const saltRounds = 10;
        let hashedOTP = await bcrypt.hash(otp, saltRounds);
        let newOTPVerification = await new UserOTP({
            _id,
            otp: hashedOTP,
            createdAt: Date.now(),
            expireAt: Date.now() + 3600000
        })
        await newOTPVerification.save();
        await transporter.sendMail(mailOptions);
        res.json({
            status: "Pending",
            msg: "Verification otp email sent",
            data: {
                userId: _id,
                email
            }
        })
    } catch (error) {
        res.send(error)
    }
}


exports.verifyOTP = async (req, res) => {
    let payload = { verified: true }
    try {
        let { userId, otp } = req.body;
        console.log(req.body);
        if (!userId ) {
            res.send({msg:"userId is missing "})
        }
        if(!otp){
            res.send({msg:"otp is missing"})
        } 
        else {
            let userRecords = await UserOTP.find({ userId });
            let hashedOTP = userRecords[0].otp;
            if (userRecords.length <= 0) {
                res.send({ msg: "Account record doesn't exist or has already been verified" });
            } else {
                let validOTP = await bcrypt.compare(otp, hashedOTP);
                if (!validOTP) {
                    res.send({ msg: "otp is wrong" })
                } else {
                    await UserModel.findByIdAndUpdate({ _id: userId }, payload);
                    await UserOTP.deleteMany({ userId });
                    sendEmail(emailTemplate.signupSuccess());
                    res.json({
                        status: 'VERIFIED',
                        msg: "Email Successfully Verified"
                    })
                }
            }
        }
    } catch (error) {
        res.json({
            status: 'FAILED',
            error: error.message
        })
    }
}

exports.forgotPassword = async(req,res)=>{
    let {email}=req.body;
    let user = await UserModel.find({email});
    let userName=user[0].name;
    let url="https://joyful-kheer-dd1d3b.netlify.app/"
    try {
        const mailOptions = {
            from: "ace.legal.services.official@gmail.com",
            to: email,
            subject: "Reset Password",
            html: emailTemplate.resetPassword(userName,url)// html body
        };

        await transporter.sendMail(mailOptions);

        res.json({
            msg: "Password change link is sended",
            Status: "Success",
            data:{
                userId:user[0]._id
            }
        })
    } catch (error) {
        res.json(error)
    }
}
exports.getaUserDataByEmail = async (req, res) => {
    let email = req.query.email;
    try {

        let userData=await UserModel.findOne({email});
        if(userData){
        res.send({msg:"User Found",userData})
        }else{
            res.send({msg:"Not Found UserData for this Email"})
        }
    } catch (error) {
        res.send({ msg: "Some error" })
    }
}

