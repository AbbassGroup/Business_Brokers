import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Button, Box, styled } from '@mui/material';

const BRAND = {
  blue: '#56C1BC'
};

const LogoSection = styled(Box)({
  position: 'relative',
  backgroundColor: 'transparent',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
}); 

const LogoImage = styled('img')({
  height: '65px',
  marginLeft: '1px',
  position: 'relative',
  zIndex: 1
});

const NavigationSection = styled(Box)({
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '40px',
});

const NavButton = styled(Button)({
  color: 'white',
  fontSize: '16px',
  textTransform: 'none',
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: 'transparent',
    color: BRAND.blue
  }
});

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <AppBar 
      position="fixed" 
      elevation={scrolled ? 2 : 0}
      sx={{
        backgroundColor: scrolled ? 'rgba(28, 36, 52, 0.95)' : 'transparent',
        backgroundImage: scrolled 
          ? 'none'
          : 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          height: scrolled ? '80px' : '100px',
          transition: 'height 0.3s ease-in-out'
        }}>
          <Link to="/">
            <LogoImage 
              src="/type2_negative.png" 
              alt="Abbass Business Brokers" 
              sx={{
                height: scrolled ? '55px' : '65px',
                transition: 'height 0.3s ease-in-out'
              }}
            />
          </Link>
          <NavigationSection>
            <NavButton component={Link} to="/">
              Home
            </NavButton>
            <NavButton component={Link} to="/services">
              Services
            </NavButton>
            <NavButton component={Link} to="/process">
              Process
            </NavButton>
            <NavButton component={Link} to="/listings">
              Listings
            </NavButton>
            <NavButton component={Link} to="/about">
              About
            </NavButton>
            <NavButton component={Link} to="/agents">
              Agents
            </NavButton>
            <NavButton component={Link} to="/contact">
              Contact
            </NavButton>
          </NavigationSection>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header; 