import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    maxWidth: '300px',
    background: 'rgba(28, 36, 52, 0.98)',
    backdropFilter: 'blur(10px)',
    padding: theme.spacing(2),
  },
}));

const DrawerNavItem = styled(ListItem)({
  padding: '15px 20px',
  '& .MuiListItemText-primary': {
    color: 'white',
    fontSize: '18px',
    fontWeight: 500,
  },
  '&:hover': {
    backgroundColor: 'rgba(86, 193, 188, 0.1)',
    '& .MuiListItemText-primary': {
      color: BRAND.blue,
    },
  },
});

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navigationItems = [
    { text: 'Home', path: '/' },
    { text: 'Services', path: '/services' },
    { text: 'Listings', path: '/listings' },
    { text: 'About', path: '/about' },
    { text: 'Agents', path: '/agents' },
    { text: 'Careers', path: '/careers' },
    { text: 'Resources', path: '/resources' },
    { text: 'Contact', path: '/contact' },
  ];

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

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 2 }}
              >
                <MenuIcon sx={{ fontSize: 28 }} />
              </IconButton>
              <MobileDrawer
                anchor="right"
                open={mobileMenuOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'flex-end', 
                  p: 1 
                }}>
                  <IconButton 
                    onClick={handleDrawerToggle}
                    sx={{ color: 'white' }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <List>
                  {navigationItems.map((item) => (
                    <DrawerNavItem
                      button
                      key={item.text}
                      component={Link}
                      to={item.path}
                      onClick={handleDrawerToggle}
                    >
                      <ListItemText primary={item.text} />
                    </DrawerNavItem>
                  ))}
                </List>
              </MobileDrawer>
            </>
          ) : (
            <NavigationSection>
              {navigationItems.map((item) => (
                <NavButton
                  key={item.text}
                  component={Link}
                  to={item.path}
                >
                  {item.text}
                </NavButton>
              ))}
            </NavigationSection>
          )}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header; 