import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Typography,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Divider,
  ThemeProvider,
  createTheme
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BRAND = {
  blue: '#56C1BC',
  darkBlue: '#45a19d',
  background: '#f0f2f5',
  cardBg: 'rgba(255, 255, 255, 0.9)',
  textDark: '#2c3e50',
  textGray: '#64748b'
};

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: BRAND.blue,
    },
  },
});

const EOIForm = ({ open, onClose, listingTitle }) => {
  const [settlementType, setSettlementType] = useState('date');
  const [formData, setFormData] = useState({
    // Purchaser Details
    fullName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',

    // Business Details
    businessName: listingTitle || '',
    businessCity: '',
    businessState: '',

    // Price Details
    purchasePrice: '',
    depositValue: '',
    balanceOfPurchase: '',

    // Settlement
    settlementDate: '',
    settlementWeeks: '',

    // Subject To
    subjectTo: '',

    // Solicitor Details
    solicitorName: '',
    solicitorEmail: '',
    solicitorPhone: '',
    solicitorStreetAddress: '',
    solicitorCity: '',
    solicitorState: '',
    solicitorPostalCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5005/api/eoi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          listingTitle,
          settlementType,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit EOI');
      }

      onClose();
      // You might want to show a success message here
    } catch (error) {
      console.error('Error submitting EOI:', error);
      // You might want to show an error message here
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{ 
          bgcolor: BRAND.blue, 
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 600
        }}>
          Expression of Interest Form
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit}>
            {/* Purchaser Details */}
            <Typography variant="h6" sx={{ mb: 2, color: BRAND.textDark, fontWeight: 600 }}>
              Purchaser Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Street Address"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Postal Code"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* Business Details */}
            <Typography variant="h6" sx={{ mb: 2, color: BRAND.textDark, fontWeight: 600 }}>
              Business Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Business Name"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="City"
                  name="businessCity"
                  value={formData.businessCity}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="State"
                  name="businessState"
                  value={formData.businessState}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* Price Details */}
            <Typography variant="h6" sx={{ mb: 2, color: BRAND.textDark, fontWeight: 600 }}>
              Price Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Purchase Price"
                  name="purchasePrice"
                  value={formData.purchasePrice}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Deposit Value"
                  name="depositValue"
                  value={formData.depositValue}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Balance of Purchase"
                  name="balanceOfPurchase"
                  value={formData.balanceOfPurchase}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* Settlement */}
            <Typography variant="h6" sx={{ mb: 2, color: BRAND.textDark, fontWeight: 600 }}>
              Settlement
            </Typography>
            <FormControl component="fieldset" sx={{ mb: 2 }}>
              <FormLabel component="legend">Settlement Type</FormLabel>
              <RadioGroup
                row
                value={settlementType}
                onChange={(e) => setSettlementType(e.target.value)}
              >
                <FormControlLabel value="date" control={<Radio />} label="Specific Date" />
                <FormControlLabel value="weeks" control={<Radio />} label="Number of Weeks" />
              </RadioGroup>
            </FormControl>
            <Grid container spacing={2}>
              {settlementType === 'date' ? (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Settlement Date"
                    name="settlementDate"
                    type="date"
                    value={formData.settlementDate}
                    onChange={handleChange}
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Number of weeks from signing Contract of Sale"
                    name="settlementWeeks"
                    type="number"
                    value={formData.settlementWeeks}
                    onChange={handleChange}
                    required
                  />
                </Grid>
              )}
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* Subject To */}
            <Typography variant="h6" sx={{ mb: 2, color: BRAND.textDark, fontWeight: 600 }}>
              Subject To
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Additional Conditions"
                  name="subjectTo"
                  multiline
                  rows={4}
                  value={formData.subjectTo}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* Solicitor Details */}
            <Typography variant="h6" sx={{ mb: 2, color: BRAND.textDark, fontWeight: 600 }}>
              Solicitor Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="solicitorName"
                  value={formData.solicitorName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="solicitorEmail"
                  type="email"
                  value={formData.solicitorEmail}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="solicitorPhone"
                  value={formData.solicitorPhone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Street Address"
                  name="solicitorStreetAddress"
                  value={formData.solicitorStreetAddress}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="City"
                  name="solicitorCity"
                  value={formData.solicitorCity}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="State"
                  name="solicitorState"
                  value={formData.solicitorState}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Postal Code"
                  name="solicitorPostalCode"
                  value={formData.solicitorPostalCode}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button 
            onClick={onClose}
            variant="outlined"
            sx={{ 
              color: BRAND.blue,
              borderColor: BRAND.blue,
              '&:hover': {
                borderColor: BRAND.darkBlue,
                bgcolor: 'rgba(86, 193, 188, 0.1)'
              }
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            variant="contained"
            sx={{ 
              bgcolor: BRAND.blue,
              '&:hover': {
                bgcolor: BRAND.darkBlue
              }
            }}
          >
            Submit EOI
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default EOIForm; 