const LawyerSchema=require("../model/lawyer.model")
const jwt=require("jsonwebtoken");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'ace.legal.services.official@gmail.com',
        pass: 'cwzwapjwwwfxkyxy'
    }
});

exports.userLogin = async (req, res) => {
    const {email,password}=req.body;
    const lawyerAvailable=await LawyerSchema.findOne({email});
    const dbPassword=lawyerAvailable?.password;
    const LawyerId=lawyerAvailable?._id;
    if(lawyerAvailable){
        if(password==dbPassword){
            const token=jwt.sign({LawyerId},"ALS");
            res.send({ msg: "login successful", "token": token, status: "success"})
        }else{
            res.send({msg:"Password Does not match check again"})
        }
    }else{
        res.send({msg:"login failed",status:"error"})
    }
}

exports.forgetPassword = async (req, res) => {
    let {email}=req.body;
    let url="https://joyful-kheer-dd1d3b.netlify.app/"
    try {
        const mailOptions = {
            from: "ace.legal.services.official@gmail.com",
            to: email,
            subject: "Reset Password",
            html: `<p>Click <a href=${url}>here</a> to reset your password</p> `// html body
            
        };
        await transporter.sendMail(mailOptions);
        res.json({
           msg:"Password change link is sended",
           Status:"Success",
        })
    } catch (error) {
        res.json(error)
    }
}

exports.getaUserDataByEmail = async (req, res) => {
    let email=req.query.email;
    try {
        let userData=await LawyerSchema.findOne({email});
        if(userData){
        res.send({msg:"User Found",userData})
        }else{
            res.send({msg:"Not Found UserData for this Email"})
        }
    } catch (error) {
        res.send({msg:"Some error"})
    }
}
