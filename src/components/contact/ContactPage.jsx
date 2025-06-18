import React, { useState } from 'react';
import { Container, Box, Typography, Grid, TextField, Button, Card, CardContent, styled, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
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

// Contact page hero image
const contactHeroImage = "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1920&q=80";

const ContactCard = styled(Card)({
  height: '100%',
  background: BRAND.cardBg,
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(86, 193, 188, 0.2)',
  }
});

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

const SocialButton = styled(IconButton)({
  color: BRAND.blue,
  backgroundColor: BRAND.lightBlue,
  margin: '0 8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: BRAND.blue,
    color: 'white',
    transform: 'translateY(-3px)',
  }
});

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Failed to send message');
      setSubmitSuccess('Your message has been sent! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setSubmitError('There was an error sending your message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: BRAND.blue }} />,
      title: 'Visit Us',
      details: ['Unit 102/24 Albert Rd', 'South Melbourne VIC 3205']
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: BRAND.blue }} />,
      title: 'Call Us',
      details: ['(03) 9103 1317', 'Monday - Friday: 9am - 5pm']
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: BRAND.blue }} />,
      title: 'Email Us',
      details: ['info@abbass.group']
    }
  ];

  return (
    <Box sx={{ background: BRAND.background, minHeight: '100vh' }}>
      <HeroSection
        title="Contact Us"
        subtitle="Let's discuss your business needs"
        backgroundImage={contactHeroImage}
      />

      {/* Contact Information Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, mb: 6 }}>
        <Grid container spacing={4} sx={{ mb: 8 }} alignItems="stretch">
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ height: '100%' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ContactCard sx={{ height: '100%', minHeight: 240, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Box sx={{ mb: 2 }}>
                      {info.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, color: BRAND.textDark }}>
                      {info.title}
                    </Typography>
                    {info.details.map((detail, idx) => (
                      <Typography 
                        key={idx} 
                        variant="body1" 
                        sx={{ 
                          color: BRAND.textGray,
                          mb: idx === 0 ? 1 : 0
                        }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </CardContent>
                </ContactCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form and Connect Sections */}
        <Grid container spacing={6}>
          {/* Send Us a Message Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h3" sx={{ 
                mb: 4, 
                color: BRAND.textDark,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '80px',
                  height: '4px',
                  background: BRAND.blue,
                  borderRadius: '2px'
                }
              }}>
                Send Us a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                {submitSuccess && (
                  <Box sx={{ mb: 2, color: 'green', fontWeight: 600 }}>{submitSuccess}</Box>
                )}
                {submitError && (
                  <Box sx={{ mb: 2, color: 'red', fontWeight: 600 }}>{submitError}</Box>
                )}
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'stretch', sm: 'center' },
                      justifyContent: { xs: 'center', sm: 'flex-start' },
                      gap: 2,
                      mt: 2
                    }}>
                      <Button
                        variant="contained"
                        size="large"
                        type="submit"
                        sx={{
                          backgroundColor: BRAND.blue,
                          color: 'white',
                          px: 4,
                          py: 1.5,
                          fontSize: '1.1rem',
                          '&:hover': {
                            backgroundColor: BRAND.darkBlue,
                          },
                          width: { xs: '100%', sm: 'auto' }
                        }}
                        disabled={submitting}
                      >
                        {submitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </motion.div>
          </Grid>

          {/* Connect With Us Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography variant="h3" sx={{ 
                mb: 4, 
                color: BRAND.textDark,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '80px',
                  height: '4px',
                  background: BRAND.blue,
                  borderRadius: '2px'
                }
              }}>
                Connect With Us
              </Typography>
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body1" sx={{ 
                  mb: 4, 
                  color: BRAND.textGray, 
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                  textAlign: 'justify'
                }}>
                  Looking to buy or sell a business? Our experienced team of business brokers is ready to guide you through every step of the process. We offer confidential consultations and personalized solutions tailored to your specific needs.
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: BRAND.textGray, 
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                  textAlign: 'justify',
                  mb: 4
                }}>
                  Visit our office in South Melbourne for a face-to-face discussion, or connect with us through your preferred channel. We're here to help you achieve your business goals.
                </Typography>
                {/* Follow Us section below the paragraphs, left-aligned with icons, with extra margin below */}
                <Box sx={{ mt: 10, mb: 6 }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 800, 
                      color: BRAND.textDark, 
                      mb: 2, 
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                      letterSpacing: '0.03em',
                      textAlign: 'left'
                    }}
                  >
                    Follow Us
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 4 }}>
                    <IconButton 
                      component="a" 
                      href="https://www.linkedin.com/company/abbassbusinessbrokers"
                      target="_blank"
                      aria-label="LinkedIn"
                      sx={{
                        background: 'rgba(86, 193, 188, 0.18)',
                        color: BRAND.blue,
                        width: 60,
                        height: 60,
                        boxShadow: '0 2px 8px rgba(86,193,188,0.10)',
                        transition: 'all 0.2s',
                        '&:hover': {
                          background: BRAND.blue,
                          color: 'white',
                          boxShadow: '0 4px 16px rgba(86,193,188,0.18)',
                        }
                      }}
                    >
                      <LinkedInIcon sx={{ fontSize: 32 }} />
                    </IconButton>
                    <IconButton 
                      component="a" 
                      href="https://www.facebook.com/abbassbusinessbrokers"
                      target="_blank"
                      aria-label="Facebook"
                      sx={{
                        background: 'rgba(86, 193, 188, 0.18)',
                        color: BRAND.blue,
                        width: 60,
                        height: 60,
                        boxShadow: '0 2px 8px rgba(86,193,188,0.10)',
                        transition: 'all 0.2s',
                        '&:hover': {
                          background: BRAND.blue,
                          color: 'white',
                          boxShadow: '0 4px 16px rgba(86,193,188,0.18)',
                        }
                      }}
                    >
                      <FacebookIcon sx={{ fontSize: 32 }} />
                    </IconButton>
                    <IconButton 
                      component="a" 
                      href="https://www.instagram.com/abbassbusinessbrokers"
                      target="_blank"
                      aria-label="Instagram"
                      sx={{
                        background: 'rgba(86, 193, 188, 0.18)',
                        color: BRAND.blue,
                        width: 60,
                        height: 60,
                        boxShadow: '0 2px 8px rgba(86,193,188,0.10)',
                        transition: 'all 0.2s',
                        '&:hover': {
                          background: BRAND.blue,
                          color: 'white',
                          boxShadow: '0 4px 16px rgba(86,193,188,0.18)',
                        }
                      }}
                    >
                      <InstagramIcon sx={{ fontSize: 32 }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Box sx={{ mt: 8, borderRadius: '20px', overflow: 'hidden', height: '500px' }}>
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.148138424717!2d144.97150729999998!3d-37.8334177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642a81029e79f%3A0xbae359ce81039253!2sUnit%20102%2F24%20Albert%20Rd%2C%20South%20Melbourne%20VIC%203205!5e0!3m2!1sen!2sau!4v1746160838419!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default ContactPage; 