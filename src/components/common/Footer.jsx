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
  background: '#f0f2f5',
  textDark: '#2c3e50',
  textGray: '#64748b'
};

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  color: 'white',
  padding: theme.spacing(4, 0),
  position: 'relative',
  minHeight: '200px',
  display: 'flex',
  flexDirection: 'column'
}));

const FooterLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: BRAND.blue,
  }
});

const SocialIcon = styled(IconButton)({
  color: 'white',
  padding: '8px',
  '&:hover': {
    color: BRAND.blue,
  }
});

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="flex-start">
          {/* Logo Section */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src="/mark.png"
                alt="Abbass Group Logo"
                sx={{
                  width: 200,
                  height: 200,
                  objectFit: 'contain',
                  borderRadius: '50%'
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  color: '#56C1BC',
                  fontWeight: 600,
                  ml: 3,
                  fontSize: '2rem',
                  lineHeight: 1.2,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Box component="span">ABBASS</Box>
                <Box component="span">BUSINESS</Box>
                <Box component="span">BROKERS</Box>
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links Section 1 */}
          <Grid item xs={12} md={2}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <FooterLink component={RouterLink} to="/terms">Terms & Condition</FooterLink>
              <FooterLink component={RouterLink} to="/privacy">Privacy Policy</FooterLink>
              <Typography sx={{ color: 'white' }}>
                <Link 
                  href="tel:(03) 9103 1317" 
                  underline="none" 
                  sx={{ 
                    color: 'white',
                    '&:hover': { color: BRAND.blue }
                  }}
                >
                  (03) 9103 1317
                </Link>
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links Section 2 */}
          <Grid item xs={12} md={2}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <FooterLink component={RouterLink} to="/services">Services</FooterLink>
              <FooterLink component={RouterLink} to="/process">Process</FooterLink>
              <FooterLink component={RouterLink} to="/resources">Resources</FooterLink>
              <FooterLink component={RouterLink} to="/listings">Listings</FooterLink>
              <FooterLink component={RouterLink} to="/contact">Contact</FooterLink>
            </Box>
          </Grid>

          {/* Social Links Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
              Join our community
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <SocialIcon 
                component="a"
                href="https://www.facebook.com/abbassbusinessbrokers"
                target="_blank"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon 
                component="a"
                href="https://www.instagram.com/abbassbusinessbrokers"
                target="_blank"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon 
                component="a"
                href="https://www.linkedin.com/company/abbassbusinessbrokers"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </SocialIcon>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ 
          mt: 4, 
          pt: 2,
          borderTop: '1px solid rgba(255,255,255,0.1)'
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