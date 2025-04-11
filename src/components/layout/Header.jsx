import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Button, Box, styled } from '@mui/material';

const BRAND = {
  blue: '#56C1BC'
};

const LogoSection = styled(Box)({
  position: 'relative',
  backgroundColor: 'transparent',
  height: '150px',
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
  return (
    <AppBar 
      position="absolute" 
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%)',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100px' }}>
          <Link to="/">
            <LogoImage src="/type2_negative.png" alt="Abbass Business Brokers" />
          </Link>
          <NavigationSection>
            <NavButton component={Link} to="/">
              Home
            </NavButton>
            <NavButton component={Link} to="/properties">
              Properties
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