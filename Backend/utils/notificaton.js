const nodemailer = require("nodemailer");


//! ============> NodeMailer utils

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'ace.legal.services.official@gmail.com',
        pass: 'cwzwapjwwwfxkyxy'
    }
});

//! ===============> Send confirmation emails

const sendEmail= async(htmlBody)=>{
    try {
        const mailOptions = {
            from: "ace.legal.services.official@gmail.com",
            to: email,
            subject: "Verify your email",
            html: htmlBody, // html body
        };
        await transporter.sendMail(mailOptions);
    } catch (error) {
        res.send(error)
    }
}

module.exports = sendEmail;