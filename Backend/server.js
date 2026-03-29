import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors({
  origin: ["https://nicecoolcare.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phoneNo, service, date, message } = req.body;

  //console.log("FORM DATA",req.body);

  try {
    /* ================= EMAIL TO CUSTOMER ================= */
    await transporter.sendMail({
      from: `"Nice Cool Care" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Contacting Nice Cool Care",
      html: `
      <div style="background:#f4f6f8;padding:30px;font-family:Arial">
        <div style="max-width:600px;margin:auto;background:#fff;border-radius:10px;overflow:hidden">
          
          <div style="background:#00194B;padding:20px;text-align:center">
            <h1 style="color:#fff;margin:0">Nice Cool Care</h1>
            <p style="color:#ffb703;margin:5px 0 0">AC Repair & Service Experts</p>
          </div>

          <div style="padding:25px">
            <h2>Thank You, ${name} 🙏</h2>
            <p>We have received your request. Our team will contact you shortly.</p>

            <table style="width:100%;margin-top:15px">
              <tr><td><b>📞 Phone</b></td><td>${phoneNo}</td></tr>
              <tr><td><b>🛠 Service</b></td><td>${service}</td></tr>
              <tr><td><b>📅 Date</b></td><td>${date}</td></tr>
            </table>

            <p style="margin-top:20px">Regards,<br><b>Nice Cool Care Team</b></p>
          </div>

          <div style="background:#f1f1f1;padding:10px;text-align:center;font-size:13px">
            📞 +91 89798 82073 | +91 7300703941 | 📍 Ghaziabad
          </div>

        </div>
      </div>
      `,
    });

    /* ================= EMAIL TO OWNER ================= */
    await transporter.sendMail({
      from: `"Customer Query" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: "🚨 New AC Service Lead",
      html: `
      <div style="background:#eef2f7;padding:25px;font-family:Arial">
        <div style="max-width:650px;margin:auto;background:#fff;border-radius:8px">
          
          <div style="background:#071c3f;padding:18px">
            <h2 style="color:#fff;margin:0">New Customer Inquiry</h2>
          </div>

          <div style="padding:20px">
            <table style="width:100%">
              <tr><td><b>Name</b></td><td>${name}</td></tr>
              <tr><td><b>Email</b></td><td>${email}</td></tr>
              <tr><td><b>Phone</b></td><td>${phoneNo}</td></tr>
              <tr><td><b>Service</b></td><td>${service}</td></tr>
              <tr><td><b>Date</b></td><td>${date}</td></tr>
              <tr><td><b>Message</b></td><td>${message || "N/A"}</td></tr>
            </table>
            <p style="margin-top:20px">Regards,<br><b>Nice Cool Care Team</b></p>
          </div>
          
          <div style="background:#f1f1f1;padding:10px;text-align:center;font-size:13px">
            📞 +91 89798 82073 | +91 7300703941 | 📍 Ghaziabad
          </div>

        </div>
      </div>
      `,
    });

    res
      .status(200)
      .json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("EMAIL ERROR ", error);
    res.status(500).json({ success: false, message: "Email failed" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
