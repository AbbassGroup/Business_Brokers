import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link, styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const BRAND = {
  blue: '#56C1BC',
  lightBlue: 'rgba(86, 193, 188, 0.1)',
  darkBlue: '#45a19d',
  background: '#1a1a1a',
  textDark: '#2c3e50',
  textGray: '#64748b'
};

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: BRAND.background,
  color: 'white',
  padding: theme.spacing(6, 0, 2, 0),
  position: 'relative',
  minHeight: '200px',
  display: 'flex',
  flexDirection: 'column',
}));

const FooterLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  fontSize: '1.05rem',
  '&:hover': {
    color: BRAND.blue,
  }
});

const SocialIcon = styled(IconButton)({
  color: BRAND.blue,
  background: 'rgba(86, 193, 188, 0.1)',
  marginRight: 16,
  '&:hover': {
    background: BRAND.blue,
    color: 'white',
  },
  width: 48,
  height: 48,
  borderRadius: '50%',
  transition: 'all 0.3s',
});

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          {/* Logo Section */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, mb: { xs: 4, md: 0 } }}>
              <Box
                component="img"
                src="/mark.png"
                alt="Abbass Group Logo"
                sx={{
                  width: 160,
                  height: 160,
                  objectFit: 'contain',
                  borderRadius: '50%',
                  mb: 2
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '2rem',
                  letterSpacing: '0.1em',
                  textAlign: { xs: 'center', md: 'left' },
                  mb: 0.5,
                  fontFamily: 'Gilroy, sans-serif',
                }}
              >
                ABBASS
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: BRAND.blue,
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  letterSpacing: '0.2em',
                  textAlign: { xs: 'center', md: 'left' },
                  mb: 0.5,
                  fontFamily: 'Fahkwang, sans-serif',
                }}
              >
                BUSINESS BROKERS
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Quick Links</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              <FooterLink component={RouterLink} to="/">Home</FooterLink>
              <FooterLink component={RouterLink} to="/services">Services</FooterLink>
              <FooterLink component={RouterLink} to="/listings">Listings</FooterLink>
              <FooterLink component={RouterLink} to="/about">About</FooterLink>
              <FooterLink component={RouterLink} to="/agents">Agents</FooterLink>
              <FooterLink component={RouterLink} to="/careers">Careers</FooterLink>
              <FooterLink component={RouterLink} to="/contact">Contact</FooterLink>
            </Box>
          </Grid>

          {/* Contact Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Contact Us</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              <Typography variant="body1" sx={{ color: 'white', fontSize: '1.05rem' }}>
                Unit 102/24 Albert Rd,<br />South Melbourne VIC 3205
              </Typography>
              <FooterLink href="tel:(03)91031317">(03) 9103 1317</FooterLink>
              <FooterLink href="mailto:info@abbass.group">info@abbass.group</FooterLink>
            </Box>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Useful Links</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              <FooterLink component={RouterLink} to="/terms-and-conditions">Terms & Conditions</FooterLink>
              <FooterLink component={RouterLink} to="/privacy">Privacy Policy</FooterLink>
            </Box>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Join Our Community</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <SocialIcon 
                component="a"
                href="https://www.facebook.com/abbassbusinessbrokers"
                target="_blank"
                aria-label="Facebook"
              >
                <FacebookIcon fontSize="medium" />
              </SocialIcon>
              <SocialIcon 
                component="a"
                href="https://www.instagram.com/abbassbusinessbrokers"
                target="_blank"
                aria-label="Instagram"
              >
                <InstagramIcon fontSize="medium" />
              </SocialIcon>
              <SocialIcon 
                component="a"
                href="https://www.linkedin.com/company/abbassbusinessbrokers"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedInIcon fontSize="medium" />
              </SocialIcon>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ 
          mt: 6, 
          pt: 2,
          borderTop: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center'
        }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            © {new Date().getFullYear()} ABBASS Business Brokers. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer; 