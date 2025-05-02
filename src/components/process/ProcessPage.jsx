import React from 'react';
import { Container, Box, Typography, Grid, Button, styled } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TimelineIcon from '@mui/icons-material/Timeline';
import BusinessIcon from '@mui/icons-material/Business';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Footer from '../common/Footer';
import HeroSection from '../common/HeroSection';

// Brand Colors
const BRAND = {
  blue: '#56C1BC'
};

const ProcessStep = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  padding: theme.spacing(3),
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '40%',
    right: '-50%',
    width: '100%',
    height: '2px',
    background: `linear-gradient(to right, ${BRAND.blue} 0%, rgba(86, 193, 188, 0.3) 100%)`,
  },
  '&:last-child::after': {
    display: 'none',
  },
}));

const ProcessIcon = styled(Box)(({ theme }) => ({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 20px',
  boxShadow: '0 4px 20px rgba(86, 193, 188, 0.15)',
  border: `2px solid ${BRAND.blue}`,
  '& svg': {
    fontSize: '45px',
    color: BRAND.blue,
  },
}));

const ProcessTitle = styled(Typography)(({ theme }) => ({
  color: BRAND.blue,
  fontWeight: 600,
  fontSize: '1.5rem',
  marginBottom: theme.spacing(2),
}));

// Process page hero image
const processHeroImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80";

const ProcessPage = () => {
  const processSteps = [
    {
      number: '1',
      title: 'Consultation',
      description: 'Initial Consultation and a deep dive into your business operations to better advise you',
      icon: <HandshakeIcon />
    },
    {
      number: '2',
      title: 'Appraisal',
      description: 'Based on an Initial Consultation and finance assessment, we provide you with an appraisal for your business',
      icon: <AssessmentIcon />
    },
    {
      number: '3',
      title: 'Strategy Development',
      description: 'We develop a strategy around the potential sale of your business',
      icon: <TimelineIcon />
    },
    {
      number: '4',
      title: 'Strategic Marketing Plan',
      description: 'Strategic marketing on your business to best position it for sale to the right buyer',
      icon: <BusinessIcon />
    },
    {
      number: '5',
      title: 'Offer Reviews',
      description: 'We receive, vet and negotiate the best outcome for you',
      icon: <MonetizationOnIcon />
    },
    {
      number: '6',
      title: 'Post Sale',
      description: 'We help you with the sale and transition of business ownership',
      icon: <SupportAgentIcon />
    }
  ];

  return (
    <Box sx={{ background: BRAND.background, minHeight: '100vh' }}>
      <HeroSection
        title="Business Sales Process"
        subtitle="Our proven step-by-step approach to selling your business successfully"
        backgroundImage={processHeroImage}
      />

      {/* Process Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 12 }, 
          bgcolor: '#f8f9fa',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'linear-gradient(180deg, rgba(86, 193, 188, 0.05) 0%, rgba(86, 193, 188, 0.1) 100%)',
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6}>
            {processSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProcessStep>
                  <ProcessIcon>
                    {step.icon}
                  </ProcessIcon>
                  <ProcessTitle>
                    {index + 1}) {step.title}
                  </ProcessTitle>
                  <Typography 
                    color="text.secondary" 
                    sx={{ 
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      maxWidth: '300px',
                      margin: '0 auto'
                    }}
                  >
                    {step.description}
                  </Typography>
                </ProcessStep>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: BRAND.blue,
                color: 'white',
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                '&:hover': {
                  bgcolor: '#45a19d',
                },
              }}
            >
              Talk to an expert →
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Footer />
    </Box>
  );
};

export default ProcessPage; 