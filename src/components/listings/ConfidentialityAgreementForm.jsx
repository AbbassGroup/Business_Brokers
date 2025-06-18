import React, { useState } from 'react';
import { Box, Typography, Modal, Button, TextField, MenuItem, Grid, Paper, Alert } from '@mui/material';

const agreementText = `IN THIS AGREEMENT:
"The vendor's agent" is from ABBASS Business Brokers (Address: 102 / 24 Albert Road, South Melbourne VIC 3205)
WHEREAS:
The vendor is the proprietor of the business
The prospective purchaser
Warrants that it has the financial capacity to purchase the business;
Wishes to have more information ("the information") about the business for the purpose of deciding whether to purchase the business;
Acknowledges that the information could cause serious loss and / or damage to the vendor should the information become known to third parties; and
Acknowledges that the vendor and / or the vendor's agent have sole discretion as to the content
IT IS AGREED AS FOLLOWS:
In consideration of the vendor providing the information to the prospective purchaser, the prospective purchaser agrees and undertakes as follows:
Not to make direct contact with the vendor or any member of the vendor's staff without prior written consent of the vendor's agent
Not to enter into any negotiations or an agreement to purchase the whole or any portion of the business except through the vendor's agent
That subject to clause 1.4 of this agreement and in the absence of prior written consent to the contrary from the vendor, the prospective purchaser shall keep confidential and not disclose, suffer or permit the disclosure to any person of the fact of the business being offered for sale or of any matter contained in the information
Not to use or permit the prospective purchaser's professional advisers to use the information for any purpose other than for the exclusive purpose of assessing the suitability of the business for the purpose of purchase by the prospective purchaser and then only on the basis that the prospective purchaser shall:
Inform the prospective purchaser's professional advisers of the existence and terms of this agreement;
Be responsible to ensure that the confidentiality of the information is respected by the prospective purchaser's professional advisers in the same manner as provided in this agreement;
Be responsible for any breach of this agreement by comprising the disclosure of the information by the prospective purchaser's professional advisers other than in accordance with this agreement
Not to take or permit any other person to copy, reproduce, or take extracts from any part of the information;
Not to contact or permit any other person to contact or make enquiries of any customer or client of the business, or staff member employed by the business, or the accountant, solicitor or financial institution of the vendor without obtaining the prior written consent of the vendor. This clause does not apply to inspections or meetings arranged by and conducted in the presence of the vendor or the vendor's agent
To immediately return to the vendor's agent all information including other written details including drawings, handwritten notes and or extracts of the same, together with any copies of any such documentation made during the prospective purchaser's evaluation of the business in the event that the prospective purchaser and or the vendor or vendor's agent cease negotiations in respect to the purchase of the business
In the event of a breach or threatened breach of the terms of this agreement by the prospective purchaser or any other person to whom the prospective purchaser has provided the information, the vendor shall be entitled to an injunction restraining the prospective purchaser from committing any breach of this agreement without showing or proving that any actual damage has been sustained by the vendor.`;

const BRAND = {
  blue: '#56C1BC',
  darkBlue: '#45a19d',
  background: '#f0f2f5',
  cardBg: 'rgba(255, 255, 255, 0.9)',
  textDark: '#2c3e50',
  textGray: '#64748b'
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', md: 600 },
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: BRAND.cardBg,
  borderRadius: 3,
  boxShadow: '0 8px 32px rgba(86, 193, 188, 0.15)',
  p: 4,
  fontFamily: "'Poppins', 'Fahkwang', 'Gilroy', sans-serif",
};

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  country: '',
  business: '',
  address: '',
  suburb: '',
  state: '',
  postalCode: '',
};

const countries = [
  'Australia', 'New Zealand', 'United States', 'United Kingdom', 'Canada', 'Other'
];

const ConfidentialityAgreementForm = ({ open, onClose, listingTitle }) => {
  const [form, setForm] = useState({ ...initialForm, business: listingTitle || '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5005/api/confidentiality', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.mobile,
          country: form.country,
          address: form.address,
          suburb: form.suburb,
          state: form.state,
          postalCode: form.postalCode,
          businessTitle: form.business,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Submission failed');
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="confidentiality-agreement-modal">
      <Box sx={style}>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <img src="/mark.png" alt="ABBASS Mark" style={{ width: 80, marginBottom: 8 }} />
          <Typography variant="h5" fontWeight={700} mb={2} sx={{ color: BRAND.textDark, fontFamily: 'Fahkwang, Gilroy, sans-serif' }}>
            Confidentiality Agreement
          </Typography>
        </Box>
        <Paper sx={{ p: 2, mb: 3, background: '#f8fafc', maxHeight: 200, overflowY: 'auto', borderLeft: `4px solid ${BRAND.blue}`, boxShadow: '0 2px 8px rgba(86,193,188,0.07)' }}>
          <Typography variant="body2" sx={{ whiteSpace: 'pre-line', fontSize: '0.97rem', color: BRAND.textGray, fontFamily: 'Poppins, Gilroy, sans-serif' }}>{agreementText}</Typography>
        </Paper>
        {submitted ? (
          <Alert severity="success" sx={{ background: BRAND.blue, color: 'white', fontWeight: 600, borderRadius: 2 }}>
            Thank you! Your agreement has been submitted.
          </Alert>
        ) : (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="First Name" name="firstName" value={form.firstName} onChange={handleChange} required fullWidth 
                  InputLabelProps={{ style: { color: BRAND.textGray } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      fontFamily: 'Poppins, Gilroy, sans-serif',
                      color: BRAND.textDark,
                      '& fieldset': { borderColor: BRAND.blue },
                      '&:hover fieldset': { borderColor: BRAND.darkBlue },
                      '&.Mui-focused fieldset': { borderColor: BRAND.blue },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} required fullWidth 
                  InputLabelProps={{ style: { color: BRAND.textGray } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      fontFamily: 'Poppins, Gilroy, sans-serif',
                      color: BRAND.textDark,
                      '& fieldset': { borderColor: BRAND.blue },
                      '&:hover fieldset': { borderColor: BRAND.darkBlue },
                      '&.Mui-focused fieldset': { borderColor: BRAND.blue },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Email" name="email" value={form.email} onChange={handleChange} required fullWidth type="email"
                  InputLabelProps={{ style: { color: BRAND.textGray } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      fontFamily: 'Poppins, Gilroy, sans-serif',
                      color: BRAND.textDark,
                      '& fieldset': { borderColor: BRAND.blue },
                      '&:hover fieldset': { borderColor: BRAND.darkBlue },
                      '&.Mui-focused fieldset': { borderColor: BRAND.blue },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Mobile Number" name="mobile" value={form.mobile} onChange={handleChange} required fullWidth
                  InputLabelProps={{ style: { color: BRAND.textGray } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      fontFamily: 'Poppins, Gilroy, sans-serif',
                      color: BRAND.textDark,
                      '& fieldset': { borderColor: BRAND.blue },
                      '&:hover fieldset': { borderColor: BRAND.darkBlue },
                      '&.Mui-focused fieldset': { borderColor: BRAND.blue },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Country" name="country" value={form.country} onChange={handleChange} required fullWidth select
                  InputLabelProps={{ style: { color: BRAND.textGray } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      fontFamily: 'Poppins, Gilroy, sans-serif',
                      color: BRAND.textDark,
                      '& fieldset': { borderColor: BRAND.blue },
                      '&:hover fieldset': { borderColor: BRAND.darkBlue },
                      '&.Mui-focused fieldset': { borderColor: BRAND.blue },
                    },
                  }}
                >
                  {countries.map((c) => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField label="Select Business" name="business" value={form.business} onChange={handleChange} required fullWidth disabled={!!listingTitle}
                  InputLabelProps={{ style: { color: BRAND.textGray } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      fontFamily: 'Poppins, Gilroy, sans-serif',
                      color: BRAND.textDark,
                      '& fieldset': { borderColor: BRAND.blue },
                      '&:hover fieldset': { borderColor: BRAND.darkBlue },
                      '&.Mui-focused fieldset': { borderColor: BRAND.blue },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Address" name="address" value={form.address} onChange={handleChange} required fullWidth
                  InputLabelProps={{ style: { color: BRAND.textGray } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      fontFamily: 'Poppins, Gilroy, sans-serif',
                      color: BRAND.textDark,
                      '& fieldset': { borderColor: BRAND.blue },
                      '&:hover fieldset': { borderColor: BRAND.darkBlue },
                      '&.Mui-focused fieldset': { borderColor: BRAND.blue },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Suburb" name="suburb" value={form.suburb} onChange={handleChange} required fullWidth
                  InputLabelProps={{ style: { color: BRAND.textGray } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      fontFamily: 'Poppins, Gilroy, sans-serif',
                      color: BRAND.textDark,
                      '& fieldset': { borderColor: BRAND.blue },
                      '&:hover fieldset': { borderColor: BRAND.darkBlue },
                      '&.Mui-focused fieldset': { borderColor: BRAND.blue },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField label="State" name="state" value={form.state} onChange={handleChange} required fullWidth
                  InputLabelProps={{ style: { color: BRAND.textGray } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      fontFamily: 'Poppins, Gilroy, sans-serif',
                      color: BRAND.textDark,
                      '& fieldset': { borderColor: BRAND.blue },
                      '&:hover fieldset': { borderColor: BRAND.darkBlue },
                      '&.Mui-focused fieldset': { borderColor: BRAND.blue },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField label="Postal Code" name="postalCode" value={form.postalCode} onChange={handleChange} required fullWidth
                  InputLabelProps={{ style: { color: BRAND.textGray } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      fontFamily: 'Poppins, Gilroy, sans-serif',
                      color: BRAND.textDark,
                      '& fieldset': { borderColor: BRAND.blue },
                      '&:hover fieldset': { borderColor: BRAND.darkBlue },
                      '&.Mui-focused fieldset': { borderColor: BRAND.blue },
                    },
                  }}
                />
              </Grid>
              {error && (
                <Grid item xs={12}>
                  <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth sx={{ bgcolor: BRAND.blue, color: 'white', fontWeight: 600, borderRadius: 2, fontFamily: 'Fahkwang, Gilroy, sans-serif', '&:hover': { bgcolor: BRAND.darkBlue } }} disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit'}
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Box>
    </Modal>
  );
};

export default ConfidentialityAgreementForm; 