// <!--!  OTP -->
exports.otpEmail = (otp) => {
  return `<html>
  <head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Verify Your OTP</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="background-color: #f7f7f7; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #333;">
  <table style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-collapse: collapse;">
  <tbody>
        <tr>
          <td style="text-align: center; padding-bottom: 30px;">
          <img src="#" alt="Ace Legal Services">
          </td>
          </tr>
          <tr>
          <td>
          <p style="margin-top: 0;">Hello,</p>
          <p>Thank you for signing  up with us. Please verify your email to finish signing up with Ace Legal Services. Use the following verification code:</p>
          <h2 style="text-align: center; margin-top: 20px; margin-bottom: 40px; font-size: 36px; color: #333; background-color: #f7f7f7; padding: 20px;">${otp}</h2>
          <p>If you did not request this OTP, please ignore this email.</p>
          </td>
          </tr>
          <tr>
          <td style="border-top: 1px solid #ccc; padding-top: 30px;">
          <p style="margin-top: 0; font-size: 14px;">Best regards,</p>
          <p style="margin-top: 0; font-size: 14px;">Ace Legal Services</p>
          </td>
          </tr>
          </tbody>
          </table>
          </body>
          </html>`
}

// < !--!  Sign In Success-- >
exports.signupSuccess = () => {
  return `<html lang="en">
  <head>
  <meta charset="UTF-8">
  <title>Successful Sign Up</title>
  </head>
  <body>
  <div style="background-color:#F2F2F2; padding:20px;">
  <div style="background-color:#FFFFFF; max-width:600px; margin:0 auto; padding:20px; border-radius:10px;">
  <img src="https://example.com/logo.png" alt="Ace Legal Services" style="display:block; margin:0 auto; max-width:150px;">
  
  <h1 style="text-align:center; margin-top:30px;">Welcome to Our Community!</h1>
  <p style="text-align:center; font-size:18px; font-weight:bold;">Thank you for signing up for our service.</p>
  <p style="text-align:center;">To get started, simply log in to your account using the email and password you provided during sign up.</p>
  <p style="text-align:center;">If you have any questions or need assistance, please do not hesitate to contact us at <a href="mailto:ace.legal.services.official@gmail.com">ace.legal.services.official@gmail.com</a>.</p>
  <div style="text-align:center; margin-top:30px;">
  <a href="#" style="background-color:#4CAF50; color:#FFFFFF; padding:10px 20px; text-decoration:none; border-radius:5px;">Log In Now</a>
  </div>
  </div>
  </div>
  </body>
  </html>`
}

{/* <!--!  Appointment Success-- > */ }
exports.appointmentSuccess = (clientName, lawyerName, date, time, type) => {

  return ` <html>
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appointment Booking Confirmation</title>
  <style>
  /* Styling for the email content */
  body {
    font - family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    background-color: #F5F5F5;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
            h1, h2, h3, h4, h5, h6 {
              font - weight: bold;
              color: #333;
            }
            h1 {
              font - size: 32px;
              line-height: 1.2;
              margin-top: 0;
              margin-bottom: 20px;
            }
            p {
              margin - top: 0;
              margin-bottom: 20px;
            }
            ul {
              list - style - type: none;
              margin: 0;
              padding: 0;
            }
            li {
              margin - bottom: 10px;
            }
            /* Styling for the email container */
            .container {
              max - width: 600px;
              margin: 0 auto;
              padding: 20px;
            background-color: #FFFFFF;
            border-radius: 10px;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
          }
          /* Styling for the header section */
          .header {
            background - color: #4B4E6D;
            border-radius: 10px 10px 0 0;
            padding: 10px 20px;
            color: #FFFFFF;
            margin-bottom: 20px;
            text-align: center;
          }
          .header h1 {
            font - size: 40px;
            margin-top: 0;
            margin-bottom: 0;
            line-height: 1;
            text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
          }
          /* Styling for the footer section */
          .footer {
            background - color: #F5F5F5;
            border-radius: 0 0 10px 10px;
            padding: 10px 20px;
            margin-top: 20px;
            text-align: center;
		}
            .footer p {
              margin - top: 0;
              margin-bottom: 0;
            }
            </style>
            </head>
            <body>
            <div class="container">
            <div class="header">
            <h1>Appointment Booking Confirmed</h1>
            </div>
            <p>Dear ${clientName},</p>
            <p>We are pleased to confirm that your appointment has been successfully booked.</p>
            <ul>
            <li><strong>Appointment Details</strong></li>
            <li><strong>Lawyer Name:</strong>${lawyerName}</li>
            <li><strong>Date:</strong> ${date}</li>
            <li><strong>Time:</strong> ${time}</li>
            <li><strong>Meeting Type:</strong> ${type}</li>
            </ul>
            <p>If you need to make any changes to your appointment or have any questions, please contact us at <a href="mailto:ace.legal.services.official@gmail.com">ace.legal.services.official@gmail.com</a>.</p>
            <p>Thank you for choosing our services. We look forward to seeing you soon.</p>
            <div class="footer">
            <p>© 2023 Ace Legal Services. All rights reserved.</p>
            </div>
            </div>        
        </body>
        </html>`
}

// <!--!  Appointment Rejected -->
exports.appointmentRejected = (usermail) => {
  let email = usermail
  let User = usermail.split("@")[0]
  return `
      <html>
        <head>
          <meta charset="utf-8">
            <title>Appointment Rejected</title>
            <style>
      /* Styling for the email */
              body {
                font - family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-size: 16px;
              line-height: 1.6;
              color: #333333;
              background-color: #f7f7f7;
      }
              .container {
                max - width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 10px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      }
              h1 {
                font - size: 32px;
              font-weight: bold;
              margin-top: 0;
              margin-bottom: 30px;
              text-align: center;
              color: #1a1a1a;
              text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.5);
      }
              p {
                margin - top: 0;
              margin-bottom: 20px;
              font-size: 18px;
              color: #333333;
      }
              a {
                color: #0072C6;
              text-decoration: none;
              border-bottom: 1px solid #0072C6;
              transition: border-bottom-color 0.2s ease-in-out;
      }
              a:hover {
                border - bottom - color: #004f88;
      }
              .button {
                display: inline-block;
              padding: 10px 20px;
              background-color: #0072C6;
              color: #ffffff;
              font-size: 18px;
              font-weight: bold;
              text-align: center;
              text-decoration: none;
              border-radius: 5px;
              box-shadow: 0px 3px 0px 0px #004f88;
              transition: box-shadow 0.2s ease-in-out;
      }
              .button:hover {
                box - shadow: 0px 5px 0px 0px #004f88;
      }
              .signature {
                font - size: 20px;
              font-style: italic;
              color: #999999;
              margin-top: 30px;
              text-align: center;
              text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.5);
      }
            </style>
        </head>
        <body>
          <div class="container">
            <h1>Appointment Rejection</h1>
            <p>Dear ${User},</p>
            <p>We regret to inform you that your appointment with our lawyer has been rejected. We apologize for any inconvenience this may have caused.</p>
            <p>If you have any questions or concerns, please feel free to <a href="mailto:ace.legal.services.official@gmail.com">ace.legal.services.official@gmail.com</a>.</p>
            <p>Thank you for your understanding.</p>
            <div style="text-align:center;">
              <a href="#" class="button">Schedule a New Appointment</a>
            </div>
            <p class="signature">Best regards,<br>The Ace Legal Service Team</p>
          </div>
        </body>
      </html>`
}
// <!--!  Reset Password-- >
exports.resetPassword = (userName, link) => {
  return `  <html lang="en">
    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Reset Password</title>
          </head>
          <body style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px;">
            <div style="background-color: #fff; max-width: 600px; margin: 0 auto; border-radius: 5px; padding: 40px;">
              <h1 style="font-size: 24px; margin-bottom: 20px;">Reset Your Password</h1>
              <p style="margin-bottom: 20px;">Dear ${userName},</p>
              <p style="margin-bottom: 20px;">You recently requested to reset your password for <b>Ace Legal Services.</b> Click the button below to set a new password:</p>
              <div style="margin-bottom: 20px;">
                <a href="${link}" style="display: inline-block; padding: 10px 20px; background-color: #3498db; color: #fff; text-decoration: none; border-radius: 5px;">Click to Set New Password</a>
              </div>
              <p style="margin-bottom: 20px;">If you did not request a password reset, please ignore this email or reply to let us know.</p>
              <p style="margin-bottom: 20px;">Best regards,<br><b>Ace Legal Services</b> Team</p>
            </div>
          </body>
        </html>
`
}

exports.sendAccountDetails = (email, password) => {
  return `
<html>
  <head>
    <title>New Account Details</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      /* Styles for the email body */
      body {
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #333333;
        background-color: #f5f5f5;
        padding: 0;
        margin: 0;
      }
      /* Styles for the email wrapper */
      .email-wrapper {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      /* Styles for the email heading */
      .email-heading {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
        color: #0077cc;
      }
      /* Styles for the email content */
      .email-content {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 20px;
        color: #666666;
      }
      /* Styles for the email button */
      .email-button {
        display: block;
        margin: 0 auto;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        color: #ffffff;
        background-color: #0077cc;
        text-align: center;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;
      }
      .email-button:hover {
        background-color: #005daa;
      }
      /* Styles for the accent color */
      .accent-color {
        color: #0077cc;
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <h1 class="email-heading">Welcome to our platform!</h1>
      <p class="email-content">Thank you for creating an account with us. Your login details are:</p>
      <ul class="email-content">
        <li><strong class="accent-color">Email:</strong> ${email}</li>
        <li><strong class="accent-color">Password:</strong> ${password}</li>
      </ul>
      <p class="email-content">You can use these details to log in to our platform and start using our services. If you have any questions or concerns, please don't hesitate to <a class="accent-color" href="mailto:ace.legal.services.official@gmail.com">contact us</a>.</p>
      <a class="email-button" href="#">Log in to your account</a>
    </div>
  </body>
</html>

  `
}