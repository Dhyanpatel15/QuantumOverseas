import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Quantum Overseas SMTP Mailer API is running" });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields (Name and Email)."
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address."
      });
    }

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = process.env.SMTP_SECURE === "true" || port === 465;
    const user = process.env.SMTP_USER || "inceptiondigital2024@gmail.com";
    const pass = process.env.SMTP_PASS || "zvmc ikvt bama voow";

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      tls: { rejectUnauthorized: false }
    });

    const recipients = process.env.RECIPIENT_EMAILS 
      ? process.env.RECIPIENT_EMAILS.split(",").map(e => e.trim()) 
      : ["inceptiondigital2024@gmail.com"];

    const mailFrom = process.env.MAIL_FROM || `"Quantum Overseas Website" <${user}>`;

    const submissionTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium"
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fd; margin: 0; padding: 20px; color: #16171a; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
          .header { background: linear-gradient(135deg, #e20935, #16171a); color: #ffffff; padding: 30px 24px; text-align: center; }
          .header h1 { margin: 0 0 6px; font-size: 24px; letter-spacing: 0.5px; }
          .header p { margin: 0; font-size: 14px; opacity: 0.9; }
          .content { padding: 28px 24px; }
          .field-group { margin-bottom: 20px; }
          .label { font-size: 12px; font-weight: 700; text-transform: uppercase; color: #6f7886; letter-spacing: 0.5px; margin-bottom: 4px; }
          .value { font-size: 16px; color: #1a202c; background: #f8fafc; padding: 12px 16px; border-radius: 6px; border: 1px solid #edf2f7; line-height: 1.5; }
          .message-box { font-size: 15px; color: #1a202c; background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #e20935; white-space: pre-wrap; line-height: 1.6; }
          .footer { background: #f1f5f9; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
          .badge { display: inline-block; padding: 4px 10px; background: #ffe4e6; color: #9f1239; border-radius: 999px; font-size: 12px; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Contact Request</h1>
            <p>Quantum Overseas – New Inquiry</p>
          </div>
          <div class="content">
            <div style="margin-bottom: 20px; text-align: right;">
              <span class="badge">Received: ${submissionTime} IST</span>
            </div>
            
            <div class="field-group">
              <div class="label">Full Name</div>
              <div class="value"><strong>${name}</strong></div>
            </div>

            <div class="field-group">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}" style="color: #e20935; text-decoration: none;">${email}</a></div>
            </div>

            <div class="field-group">
              <div class="label">Phone Number</div>
              <div class="value">${phone ? `<a href="tel:${phone}" style="color: #e20935; text-decoration: none;">${phone}</a>` : '<span style="color: #94a3b8;">Not provided</span>'}</div>
            </div>

            <div class="field-group">
              <div class="label">Subject</div>
              <div class="value">${subject || "General Inquiry"}</div>
            </div>

            <div class="field-group">
              <div class="label">Client Message</div>
              <div class="message-box">${message ? message.replace(/</g, '&lt;').replace(/>/g, '&gt;') : '<span style="color: #94a3b8; font-style: italic;">No additional message entered.</span>'}</div>
            </div>
          </div>
          <div class="footer">
            <p style="margin: 0 0 4px;">This email was automatically delivered to Quantum Overseas admins.</p>
            <p style="margin: 0;">Hit "Reply" directly in your email client to respond to <strong>${name}</strong> (${email}).</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: mailFrom,
      to: recipients,
      replyTo: `"${name}" <${email}>`,
      subject: `[Web Inquiry] ${subject || "Contact Form"} - from ${name}`,
      text: `New Website Inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message || "N/A"}\n\nSent: ${submissionTime}`,
      html: htmlContent
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Your request has been sent successfully."
    });

  } catch (error) {
    console.error("Error sending email via SMTP:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email. Please verify SMTP server settings or try again later.",
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Quantum Overseas SMTP Mailer API running on port ${PORT}`);
});
