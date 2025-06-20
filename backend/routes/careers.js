const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const CareerApplication = require('../models/CareerApplication');
const sgMail = require('@sendgrid/mail');
const fs = require('fs');

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/cvs'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// POST /api/careers/apply
router.post('/apply', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone, coverLetter } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: 'Resume file is required.' });
    }
    const application = new CareerApplication({
      name,
      email,
      phone,
      coverLetter,
      resumeFile: `/uploads/cvs/${req.file.filename}`
    });
    await application.save();

    // Send email to admin with resume attached
    const resumePath = req.file.path;
    const resumeData = fs.readFileSync(resumePath);
    const msg = {
      to: 'info@abbass.group',
      from: 'info@abbass.group',
      subject: 'New Career Application Submitted',
      text: `A new career application has been submitted.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCover Letter: ${coverLetter}`,
      html: `<h2>New Career Application Submitted</h2><p><strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Phone:</strong> ${phone}<br/><strong>Cover Letter:</strong> ${coverLetter}</p>`,
      attachments: [
        {
          content: resumeData.toString('base64'),
          filename: req.file.originalname,
          type: req.file.mimetype,
          disposition: 'attachment',
        }
      ]
    };
    await sgMail.send(msg);

    res.status(201).json({ message: 'Application submitted successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/careers/applications
router.get('/applications', async (req, res) => {
  try {
    const apps = await CareerApplication.find().sort({ createdAt: -1 });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 