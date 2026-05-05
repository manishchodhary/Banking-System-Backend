import { config } from "dotenv";
config();
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAUTH2",
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Error connecting to email server", error);
  } else {
    console.log("Email server is ready to send message");
  }
});

const sendEmail = async(to,subject,text,html)=>{
    try {
        const info = await transporter.sendMail({
            from:`Your Name <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
            html,
        })

        console.log("Message sent ", info.messageId);
        console.log('Preview URL', nodemailer.getTestMessageUrl(info));
        
        
    } catch (error) {
        console.error("Error sending email",error);
        
    }

    async function sendRegistrationEmail(userEmail,name){
        const subject = "Welcome to Our Bank!";
        const text = `Dear ${name},\n\nThank you for registering with our bank. We are excited to have you on board!\n\nBest regards,\nYour Bank Team`;
        const html = `<p>Dear ${name},</p><p>Thank you for registering with our bank. We are excited to have you on board!</p><p>Best regards,<br>Your Bank Team</p>`;
        await sendEmail(userEmail,subject,text,html);
    }
}

export {sendEmail}
