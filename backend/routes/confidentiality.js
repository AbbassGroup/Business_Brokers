const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// POST /api/confidentiality
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, country, address, suburb, state, postalCode, businessTitle } = req.body;
    if (!firstName || !lastName || !email || !phone || !businessTitle) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send admin notification (existing behavior)
    const adminMsg = {
      to: [
        'Sadeq@abbass.group',
        'Asif.ahammed@abbass.group',
        'Hicham.nahas@abbass.group',
        'Freddie.wong@abbass.group',
        'Christine.lamani@abbass.group'
      ],
      from: process.env.SENDGRID_FROM || 'info@abbass.group',
      subject: 'Confidentiality Agreement Completed',
      text: `From: ${email}\nSubject: Confidentiality Agreement Completed\n\nDetails:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nMobile Number: ${phone}\nCountry: ${country || ''}\nAddress: ${address || ''}\nSuburb: ${suburb || ''}\nState: ${state || ''}\nPostal Code: ${postalCode || ''}\n\nBusiness:- ${businessTitle}`
    };
    await sgMail.send(adminMsg);

    // Generate PDF for user
    const templatePath = path.resolve(__dirname, '../../../frontend/Business_Brokers/public/PDF File - CA.docx.pdf');
    const templateBytes = fs.readFileSync(templatePath);
    const pdfDoc = await PDFDocument.load(templateBytes);
    // Remove the last page (the info table page)
    pdfDoc.removePage(pdfDoc.getPageCount() - 1);
    // Add a new page for the user's info
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    let y = height - 60;
    page.drawText('Information submitted', { x: 50, y, size: 16, font, color: rgb(0,0,0) });
    y -= 40;
    const info = [
      [`First name: ${firstName}`, `Surname: ${lastName}`],
      [`Mobile: ${phone}`, `Email: ${email}`],
      [`Address: ${address || ''}`],
      [`Suburb: ${suburb || ''}`, `Postcode: ${postalCode || ''}`],
      [`State: ${state || ''}`, `Country: ${country || ''}`],
    ];
    info.forEach(row => {
      page.drawText(row[0], { x: 50, y, size: 12, font, color: rgb(0,0,0) });
      if (row[1]) page.drawText(row[1], { x: 300, y, size: 12, font, color: rgb(0,0,0) });
      y -= 28;
    });
    // Write only the user's answers at best-guess coordinates to fit the table
    // Example coordinates (tweak as needed after testing)
    page.drawText(firstName, { x: 120, y: 700, size: 12, font, color: rgb(0,0,0) }); // First name
    page.drawText(lastName, { x: 350, y: 700, size: 12, font, color: rgb(0,0,0) }); // Surname
    page.drawText(phone, { x: 120, y: 670, size: 12, font, color: rgb(0,0,0) }); // Mobile
    page.drawText(email, { x: 350, y: 670, size: 12, font, color: rgb(0,0,0) }); // Email
    page.drawText(address || '', { x: 120, y: 640, size: 12, font, color: rgb(0,0,0) }); // Address
    page.drawText(suburb || '', { x: 120, y: 610, size: 12, font, color: rgb(0,0,0) }); // Suburb
    page.drawText(postalCode || '', { x: 350, y: 610, size: 12, font, color: rgb(0,0,0) }); // Postcode
    page.drawText(state || '', { x: 120, y: 580, size: 12, font, color: rgb(0,0,0) }); // State
    page.drawText(country || '', { x: 350, y: 580, size: 12, font, color: rgb(0,0,0) }); // Country
    const pdfBytes = await pdfDoc.save();

    // Send email to user
    const userMsg = {
      to: email,
      from: process.env.SENDGRID_FROM || 'md@mandeepdang.com',
      subject: 'Your Confidentiality Agreement with ABBASS Business Brokers',
      text: `Hi ${firstName} ${lastName},\n\nThank you for your enquiry on one of our listings. See attached a copy of the Confidentiality Agreement you have just signed for your records.\n\nYou have entered into an important and legally binding agreement. Please seek legal advice if you have any questions in relation to this agreement to ensure you read and understand the terms of Confidentiality.\n\nWe will be in touch, to provide you with more information regarding this business.\n\nRegards,\nABBASS Business Brokers\nhttp://www.abbass.com.au/businessbrokers\ninfo@abbass.group\n(03) 9103 1317`,
      html: `<p>Hi ${firstName} ${lastName},</p><p>Thank you for your enquiry on one of our listings. See attached a copy of the Confidentiality Agreement you have just signed for your records.</p><p>You have entered into an important and legally binding agreement. Please seek legal advice if you have any questions in relation to this agreement to ensure you read and understand the terms of Confidentiality.</p><p>We will be in touch, to provide you with more information regarding this business.</p><p>Regards,<br/>ABBASS Business Brokers<br/><a href="http://www.abbass.com.au/businessbrokers">abbass.com.au/businessbrokers</a><br/>info@abbass.group<br/>(03) 9103 1317</p>`,
      attachments: [
        {
          content: Buffer.from(pdfBytes).toString('base64'),
          filename: 'Confidentiality-Agreement.pdf',
          type: 'application/pdf',
          disposition: 'attachment',
        }
      ]
    };
    await sgMail.send(userMsg);

    res.json({ message: 'Emails sent' });
  } catch (err) {
    console.error('SendGrid email error:', err.response?.body?.errors || err);
    res.status(500).json({ error: 'Failed to send email', details: err.response?.body?.errors || err.message });
  }
});

module.exports = router; 