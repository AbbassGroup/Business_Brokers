import React, { useState } from 'react';
import { Modal, Box, Typography, Grid, TextField, Button, Alert } from '@mui/material';

const BRAND = {
  blue: '#56C1BC',
  darkBlue: '#45a19d',
  cardBg: 'rgba(255, 255, 255, 0.97)',
  textDark: '#2c3e50',
  textGray: '#64748b'
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '98%', md: 600 },
  maxHeight: '95vh',
  overflowY: 'auto',
  bgcolor: BRAND.cardBg,
  borderRadius: 3,
  boxShadow: '0 8px 32px rgba(86, 193, 188, 0.15)',
  p: 4,
  fontFamily: "'Poppins', 'Fahkwang', 'Gilroy', sans-serif",
};

const initialForm = {
  purchaserName: '',
  purchaserEmail: '',
  purchaserPhone: '',
  purchaserAddress: '',
  purchaserCity: '',
  purchaserState: '',
  purchaserPostcode: '',
  purchaserCountry: '',
  businessName: '',
  businessCity: '',
  businessState: '',
  purchasePrice: '',
  depositValue: '',
  balanceOfPurchase: '',
  settlementDate: '',
  weeksFromContract: '',
  subjectTo: '',
  solicitorName: '',
  solicitorEmail: '',
  solicitorPhone: '',
  solicitorAddress: '',
  solicitorCity: '',
  solicitorState: '',
  solicitorPostcode: '',
};

const EOIForm = ({ open, onClose, listingTitle }) => {
  const [form, setForm] = useState({ ...initialForm, businessName: listingTitle || '' });
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
      const res = await fetch('http://localhost:5005/api/eoi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
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
    <Modal open={open} onClose={onClose} aria-labelledby="eoi-form-modal">
      <Box sx={{ ...style, border: `2px solid ${BRAND.blue}` }}>
        <Typography variant="h4" fontWeight={700} mb={3} sx={{ color: BRAND.textDark, letterSpacing: '-1px', textAlign: 'left' }}>
          Expression Of Interest (EOI) Form
        </Typography>
        {submitted ? (
          <Alert severity="success" sx={{ background: BRAND.blue, color: 'white', fontWeight: 600, borderRadius: 2 }}>
            Thank you! Your EOI has been submitted.
          </Alert>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Purchaser Details */}
            <Box sx={{ mb: 4, p: 2, background: '#f8fafc', borderRadius: 2, borderLeft: `4px solid ${BRAND.blue}` }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: BRAND.blue }}>Purchaser Details</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}><TextField label="Full Name" name="purchaserName" value={form.purchaserName} onChange={handleChange} required fullWidth variant="outlined" /></Grid>
                <Grid item xs={12}><TextField label="Email Address" name="purchaserEmail" value={form.purchaserEmail} onChange={handleChange} required fullWidth type="email" variant="outlined" /></Grid>
                <Grid item xs={12}><TextField label="Phone" name="purchaserPhone" value={form.purchaserPhone} onChange={handleChange} required fullWidth variant="outlined" /></Grid>
                <Grid item xs={12}><TextField label="Street Address" name="purchaserAddress" value={form.purchaserAddress} onChange={handleChange} required fullWidth variant="outlined" /></Grid>
                <Grid item xs={6}><TextField label="City" name="purchaserCity" value={form.purchaserCity} onChange={handleChange} required fullWidth variant="outlined" /></Grid>
                <Grid item xs={6}><TextField label="State" name="purchaserState" value={form.purchaserState} onChange={handleChange} required fullWidth variant="outlined" /></Grid>
                <Grid item xs={12}><TextField label="Postal Code" name="purchaserPostcode" value={form.purchaserPostcode} onChange={handleChange} required fullWidth variant="outlined" /></Grid>
                <Grid item xs={12}><TextField label="Country" name="purchaserCountry" value={form.purchaserCountry} onChange={handleChange} required fullWidth variant="outlined" /></Grid>
              </Grid>
            </Box>
            {/* Business Details */}
            <Box sx={{ mb: 4, p: 2, background: '#f8fafc', borderRadius: 2, borderLeft: `4px solid ${BRAND.blue}` }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: BRAND.blue }}>Business Details</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}><TextField label="Name" name="businessName" value={form.businessName} onChange={handleChange} required fullWidth variant="outlined" /></Grid>
                <Grid item xs={6}><TextField label="City" name="businessCity" value={form.businessCity} onChange={handleChange} required fullWidth variant="outlined" /></Grid>
                <Grid item xs={6}><TextField label="State" name="businessState" value={form.businessState} onChange={handleChange} required fullWidth variant="outlined" /></Grid>
              </Grid>
            </Box>
            {/* Price Details */}
            <Box sx={{ mb: 4, p: 2, background: '#f8fafc', borderRadius: 2, borderLeft: `4px solid ${BRAND.blue}` }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: BRAND.blue }}>Price Details</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}><TextField label="Purchase Price" name="purchasePrice" value={form.purchasePrice} onChange={handleChange} required fullWidth variant="outlined" /></Grid>
                <Grid item xs={12}><TextField label="Deposite Value" name="depositValue" value={form.depositValue} onChange={handleChange} required fullWidth variant="outlined" /></Grid>
                <Grid item xs={12}><TextField label="Balance Of Purchase" name="balanceOfPurchase" value={form.balanceOfPurchase} onChange={handleChange} required fullWidth variant="outlined" /></Grid>
              </Grid>
            </Box>
            {/* Settlement Date */}
            <Box sx={{ mb: 4, p: 2, background: '#f8fafc', borderRadius: 2, borderLeft: `4px solid ${BRAND.blue}` }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: BRAND.blue }}>Settlement Date</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}><TextField label="Date" name="settlementDate" value={form.settlementDate} onChange={handleChange} fullWidth type="date" InputLabelProps={{ shrink: true }} variant="outlined" /></Grid>
                <Grid item xs={12}><Typography align="center" sx={{ my: 2, fontWeight: 700, color: BRAND.textGray }}>OR</Typography></Grid>
                <Grid item xs={12}><TextField label="Number of weeks from signing Contract of Sale" name="weeksFromContract" value={form.weeksFromContract} onChange={handleChange} fullWidth variant="outlined" /></Grid>
              </Grid>
            </Box>
            {/* Subject To */}
            <Box sx={{ mb: 4, p: 2, background: '#f8fafc', borderRadius: 2, borderLeft: `4px solid ${BRAND.blue}` }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: BRAND.blue }}>Subject To:</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}><TextField label="Subject To" name="subjectTo" value={form.subjectTo} onChange={handleChange} fullWidth multiline minRows={2} variant="outlined" /></Grid>
              </Grid>
            </Box>
            {/* Solicitor Details */}
            <Box sx={{ mb: 2, p: 2, background: '#f8fafc', borderRadius: 2, borderLeft: `4px solid ${BRAND.blue}` }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: BRAND.blue }}>Solicitor Details</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}><TextField label="Full Name" name="solicitorName" value={form.solicitorName} onChange={handleChange} fullWidth variant="outlined" /></Grid>
                <Grid item xs={12}><TextField label="Email Address" name="solicitorEmail" value={form.solicitorEmail} onChange={handleChange} fullWidth type="email" variant="outlined" /></Grid>
                <Grid item xs={12}><TextField label="Phone" name="solicitorPhone" value={form.solicitorPhone} onChange={handleChange} fullWidth variant="outlined" /></Grid>
                <Grid item xs={12}><TextField label="Street Address" name="solicitorAddress" value={form.solicitorAddress} onChange={handleChange} fullWidth variant="outlined" /></Grid>
                <Grid item xs={6}><TextField label="City" name="solicitorCity" value={form.solicitorCity} onChange={handleChange} fullWidth variant="outlined" /></Grid>
                <Grid item xs={6}><TextField label="State" name="solicitorState" value={form.solicitorState} onChange={handleChange} fullWidth variant="outlined" /></Grid>
                <Grid item xs={12}><TextField label="Postal Code" name="solicitorPostcode" value={form.solicitorPostcode} onChange={handleChange} fullWidth variant="outlined" /></Grid>
              </Grid>
            </Box>
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>
            )}
            <Button type="submit" variant="contained" fullWidth sx={{ bgcolor: BRAND.blue, color: 'white', fontWeight: 700, borderRadius: 2, fontFamily: 'Fahkwang, Gilroy, sans-serif', mt: 3, fontSize: '1.15rem', py: 1.5, boxShadow: '0 4px 16px rgba(86,193,188,0.10)', '&:hover': { bgcolor: BRAND.darkBlue } }} disabled={loading}>
              {loading ? 'Submitting...' : 'Send Message'}
            </Button>
          </form>
        )}
      </Box>
    </Modal>
  );
};

export default EOIForm; 