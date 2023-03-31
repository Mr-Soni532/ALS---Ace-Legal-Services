const UserSchema = require("../model/user.model");
const UserOTP = require("../model/UserOTPVerification");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
exports.fetchAllUsers = async (req, res) => {
    try {
        const Users = await UserSchema.find();
        res.send(Users)
    } catch (error) {
        res.send(error)
    }
}
exports.createUser = (req, res) => {
    const { name, gender, phone, email, password } = req.body;
    UserSchema.find({ email })
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
                        const user = new UserSchema(
                            { name, gender, email, phone, password: hashpassword, verified: false }
                        );
                        user
                            .save()
                            .then((result) => {
                                sendOTPVerificationEmail(result, res);
                            })
                            .catch((err) => {
                                console.log(err);
                                res.json({
                                    status: "FAILED",
                                })
                            })
                    })
                    .catch((err) => {
                        console.log(err);
                        res.json({
                            status: "FAILED",
                        })
                    })
            }
        })
    // const userAvailable = await UserSchema.findOne({ email });
    // if (userAvailable) {
    //     res.send({ msg: "you are already available , please login" })
    // }
    // bcrypt.hash(password, 5, async (err, hash) => {
    //     if (err) {
    //         res.send({ msg: "something is wrong", status: "error" })
    //     }
    //     const user = new UserSchema({ name, gender, email, phone, password: hash,verified:false });
    //     await user.save()
    //         .then((result) => {
    //             sendOTPVerificationEmail(result,res);
    //             // console.log(result);
    //         });
    //     res.send({ msg: "signup successful", status: "success" })
    // })
}
exports.userLogin = async (req, res) => {
    const { email, password } = req.body;
    const userAvailable = await UserSchema.findOne({ email });
    const userid = userAvailable?._id;
    const username = userAvailable?.name;
    const hashpassword = userAvailable?.password;

    if (userAvailable) {
        bcrypt.compare(password, hashpassword, (err, result) => {

            if (err) {
                res.send({ "msg": "Password is incorrect" })
            }
            const token = jwt.sign({ id: userid }, "ALS");
            res.send({ msg: "login successful", "token": token, status: "success", "name": username })
        })
    }
    else {
        res.send({ msg: "please signup", status: "error" })
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
            html: `<p>Enter <b>${otp}</b> in the website to verify your email address and complete the signup</P>`, // html body
        };
        const saltRounds = 10;
        let hashedOTP = await bcrypt.hash(otp, saltRounds);
        let newOTPVerification = await new UserOTP({
            userId: _id,
            otp: hashedOTP,
            createdAt: Date.now(),
            expireAt: Date.now() + 3600000
        })
        await newOTPVerification.save();
        await transporter.sendMail(mailOptions);
        res.json({
            status: "Pending",
            message: "Verification otp email sent",
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
        if (!userId || !otp) {
            res.send("Some of the fields are missing ")
        } else {
            let userRecords = await UserOTP.find({ userId });
            let hashedOTP = userRecords[0].otp;
            if (userRecords.length <= 0) {
                res.send("Account record doesn't exist or has already been verified");
            } else {
                let validOTP = await bcrypt.compare(otp, hashedOTP);
                if (!validOTP) {
                    res.send("otp is wrong")
                } else {
                    await UserSchema.findByIdAndUpdate({ _id: userId }, payload);
                    await UserOTP.deleteMany({ userId });
                    res.json({
                        status: 'VERIFIED',
                        message: "Email Successfully Verified"
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

