const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// POST /api/confidentiality
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, country, address, suburb, state, postalCode, businessTitle } = req.body;
    if (!firstName || !lastName || !email || !phone || !businessTitle) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const msg = {
      to: email, // Send to the user's email address
      from: process.env.SENDGRID_FROM || 'md@mandeepdang.com', // must be verified in SendGrid
      subject: 'Confidentiality Agreement Completed',
      text: `From: ${email}\nSubject: Confidentiality Agreement Completed\n\nDetails:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nMobile Number: ${phone}\nCountry: ${country || ''}\nAddress: ${address || ''}\nSuburb: ${suburb || ''}\nState: ${state || ''}\nPostal Code: ${postalCode || ''}\n\nBusiness:- ${businessTitle}`
    };
    await sgMail.send(msg);
    res.json({ message: 'Email sent' });
  } catch (err) {
    console.error('SendGrid email error:', err.response?.body?.errors || err);
    res.status(500).json({ error: 'Failed to send email', details: err.response?.body?.errors || err.message });
  }
});

module.exports = router; 