import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// SMTP Configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.carleads.co.za',
  port: 465,
  secure: true, // SSL/TLS
  auth: {
    user: 'webmaster@carleads.co.za',
    pass: 'LetsTryThis2!'
  }
});

// API endpoint for contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, dealership } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !dealership) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: '"CarLeads Website" <webmaster@carleads.co.za>',
    to: 'shaun@hi5digital.co.za',
    subject: `New Demo Request from ${name}`,
    html: `
      <h2>New Demo Request</h2>
      <p>A new demo request has been submitted from the CarLeads website:</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Full Name</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 10px; border: 1px solid #ddd;">+27 ${phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Dealership</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${dealership}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; color: #666; font-size: 12px;">
        This email was sent from the CarLeads website contact form.
      </p>
    `,
    text: `
New Demo Request

Full Name: ${name}
Email: ${email}
Phone: +27 ${phone}
Dealership: ${dealership}

This email was sent from the CarLeads website contact form.
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully for ${name} (${email})`);
    res.json({ success: true, message: 'Demo request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

// Serve static files from dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback - all other routes serve index.html
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  } else {
    next();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
