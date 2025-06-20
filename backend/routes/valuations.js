const express = require('express');
const router = express.Router();
const ValuationRequest = require('../models/ValuationRequest');
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware to check admin auth
function adminAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'No token' });
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
}

// POST /api/valuations - public
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, phone, email } = req.body;
    if (!firstName || !lastName || !phone || !email) {
      return res.status(400).json({ error: 'All fields required' });
    }
    const request = new ValuationRequest({ firstName, lastName, phone, email });
    await request.save();

    // Send email to admin
    const msg = {
      to: 'info@abbass.group',
      from: 'info@abbass.group',
      subject: 'New Business Valuation Request',
      html: `<h2>New Business Valuation Request</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>`
    };
    try {
      await sgMail.send(msg);
    } catch (err) {
      console.error('SendGrid email error:', err.response?.body?.errors || err);
    }

    res.status(201).json({ message: 'Request submitted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/valuations - admin only
router.get('/', adminAuth, async (req, res) => {
  try {
    const requests = await ValuationRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 