import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const BRAND = {
  blue: '#56C1BC',
  darkBlue: '#45a19d',
};

const StyledHeroSection = styled(Box)(({ theme, backgroundImage }) => ({
  position: 'relative',
  minHeight: '75vh',
  backgroundColor: '#1a1a1a',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("${backgroundImage}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
  marginTop: '0',
  paddingTop: '80px',
  [theme.breakpoints.down('md')]: {
    minHeight: '60vh',
    backgroundAttachment: 'scroll'
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
    zIndex: 1
  }
}));

const HeroSection = ({ 
  title, 
  subtitle, 
  backgroundImage,
  showButton = false,
  buttonText = "Learn More",
  buttonLink = "#"
}) => {
  return (
    <StyledHeroSection backgroundImage={backgroundImage}>
      <Container 
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          py: { xs: 6, md: 8 }, // Increased padding
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%' // Ensure container takes full height
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%' }} // Ensure content takes full width
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' }, // Increased font sizes
              fontWeight: 700,
              mb: { xs: 3, md: 4 }, // Increased margin
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em',
              lineHeight: { xs: 1.2, md: 1.1 } // Adjusted line height
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: '900px', // Increased from 800px
              mx: 'auto',
              opacity: 0.9,
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' }, // Increased font sizes
              fontWeight: 400,
              lineHeight: 1.5,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              mb: showButton ? { xs: 4, md: 5 } : 0 // Increased margin when button is shown
            }}
          >
            {subtitle}
          </Typography>
          {showButton && (
            <Box sx={{ mt: 3 }}> {/* Increased margin top */}
              <Button
                variant="contained"
                size="large"
                href={buttonLink}
                sx={{
                  backgroundColor: BRAND.blue,
                  color: 'white',
                  px: 6, // Increased padding
                  py: 2,
                  fontSize: { xs: '1.1rem', md: '1.2rem' }, // Increased font size
                  fontWeight: 600,
                  borderRadius: '30px',
                  textTransform: 'none',
                  boxShadow: '0 4px 14px rgba(86, 193, 188, 0.4)',
                  '&:hover': {
                    backgroundColor: BRAND.darkBlue,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(86, 193, 188, 0.6)'
                  }
                }}
              >
                {buttonText}
              </Button>
            </Box>
          )}
        </motion.div>
      </Container>
    </StyledHeroSection>
  );
};

export default HeroSection; 