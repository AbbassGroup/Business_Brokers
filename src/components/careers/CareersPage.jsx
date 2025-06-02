import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, Button, TextField, styled } from '@mui/material';
import { motion } from 'framer-motion';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Footer from '../common/Footer';
import HeroSection from '../common/HeroSection';

const BRAND = {
  blue: '#56C1BC',
  lightBlue: 'rgba(86, 193, 188, 0.1)',
  darkBlue: '#45a19d',
  background: '#f0f2f5',
  cardBg: 'rgba(255, 255, 255, 0.9)',
  textDark: '#2c3e50',
  textGray: '#64748b'
};

// Careers page hero image
const careersHeroImage = "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80";

const BenefitCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: BRAND.cardBg,
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 30px rgba(86, 193, 188, 0.2)',
  }
}));

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(44, 62, 80, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: BRAND.blue,
    },
    '&.Mui-focused fieldset': {
      borderColor: BRAND.blue,
    },
  },
});

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  });

  const [fileName, setFileName] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('');
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('coverLetter', formData.coverLetter);
    if (formData.resume) {
      data.append('resume', formData.resume);
    }
    try {
      const res = await fetch('http://localhost:5005/api/careers/apply', {
        method: 'POST',
        body: data
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Submission failed');
      }
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', resume: null, coverLetter: '' });
      setFileName('');
    } catch (err) {
      setSubmitStatus(err.message || 'Submission failed');
    }
  };

  const benefits = [
    {
      icon: <WorkIcon sx={{ fontSize: 40, color: BRAND.blue }} />,
      title: 'Professional Growth',
      description: 'Continuous learning and development opportunities in the business brokerage industry.'
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40, color: BRAND.blue }} />,
      title: 'Collaborative Environment',
      description: 'Work with a dynamic team of professionals in a supportive and inclusive workplace.'
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: BRAND.blue }} />,
      title: 'Career Advancement',
      description: 'Clear path for career progression with mentorship and training programs.'
    }
  ];

  return (
    <Box sx={{ background: BRAND.background, minHeight: '100vh' }}>
      <HeroSection
        title="Join Our Team"
        subtitle="Build your career with Melbourne's leading business brokerage firm"
        backgroundImage={careersHeroImage}
      />

      {/* Benefits Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 6,
              color: BRAND.textDark,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: BRAND.blue,
                borderRadius: '2px'
              }
            }}
          >
            Why Work With Us
          </Typography>
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <BenefitCard>
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>
                      {benefit.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, color: BRAND.textDark, fontWeight: 600 }}>
                      {benefit.title}
                    </Typography>
                    <Typography sx={{ color: BRAND.textGray }}>
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </BenefitCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Application Form Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 6,
              color: BRAND.textDark,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: BRAND.blue,
                borderRadius: '2px'
              }
            }}
          >
            Apply Now
          </Typography>
          <Card sx={{ p: 4, borderRadius: '16px' }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    component="label"
                    variant="outlined"
                    startIcon={<CloudUploadIcon />}
                    sx={{
                      width: '100%',
                      py: 2,
                      borderColor: BRAND.blue,
                      color: BRAND.blue,
                      '&:hover': {
                        borderColor: BRAND.darkBlue,
                        backgroundColor: BRAND.lightBlue
                      }
                    }}
                  >
                    Upload CV
                    <VisuallyHiddenInput 
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />
                  </Button>
                  {fileName && (
                    <Typography variant="body2" sx={{ mt: 1, color: BRAND.textGray }}>
                      Selected file: {fileName}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="Cover Letter"
                    name="coverLetter"
                    multiline
                    rows={4}
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Tell us why you'd like to join our team..."
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      bgcolor: BRAND.blue,
                      color: 'white',
                      py: 2,
                      fontSize: '1.1rem',
                      '&:hover': {
                        bgcolor: BRAND.darkBlue
                      }
                    }}
                  >
                    Submit Application
                  </Button>
                  {submitStatus === 'success' && (
                    <Typography color="success.main" sx={{ mt: 2 }}>
                      Thank you! Your application has been submitted.
                    </Typography>
                  )}
                  {submitStatus && submitStatus !== 'success' && (
                    <Typography color="error.main" sx={{ mt: 2 }}>
                      {submitStatus}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </form>
          </Card>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default CareersPage; 