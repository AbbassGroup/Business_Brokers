const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const adminEmail = 'info@abbass.group';
  const fromEmail = 'info@abbass.group';

  const mailOptions = {
    to: adminEmail,
    from: fromEmail,
    subject: `New Contact Form Submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || ''}\nSubject: ${subject}\nMessage: ${message}`,
    html: `<h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || ''}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
  };

  try {
    await sgMail.send(mailOptions);
    res.json({ message: 'Contact form submitted successfully' });
  } catch (err) {
    console.error('SendGrid email error:', err.response?.body?.errors || err);
    res.status(500).json({ error: 'Failed to send email', details: err.response?.body?.errors || err.message });
  }
});

module.exports = router; 