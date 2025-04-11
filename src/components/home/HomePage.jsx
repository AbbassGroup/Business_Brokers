import React from 'react';
import { Container, Box, Typography, Button, Grid, TextField, MenuItem, Card, CardContent, CardMedia, IconButton, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BuildIcon from '@mui/icons-material/Build';

// Brand Colors
const BRAND = {
  blue: '#56C1BC'
};

// Image URLs for the website
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80", // Modern business district
  featured: {
    cafe: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80", // Modern cafe interior
    retail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", // Retail store
    restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80", // Restaurant interior
    gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80" // Modern gym
  }
};

const SearchBar = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '4px',
  padding: theme.spacing(3),
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  marginTop: theme.spacing(4),
}));

const SearchSelect = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#f8f9fa',
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const PropertyCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

const CategoryBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: 'white',
  borderRadius: '8px',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: BRAND.blue,
    color: 'white',
    transform: 'translateY(-5px)',
    '& .icon': {
      color: 'white',
    },
  },
}));

const StatsBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: 'white',
  '& .icon': {
    fontSize: '4rem',
    marginBottom: theme.spacing(2),
  },
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(4),
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  '& .MuiCardContent-root': {
    flexGrow: 1,
  },
}));

const ContactForm = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '8px',
  padding: theme.spacing(4),
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  marginTop: theme.spacing(4),
  maxWidth: '500px',
  width: '100%',
  marginLeft: 'auto',
  backdropFilter: 'blur(30px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
}));

const FormTitle = styled(Typography)({
  fontSize: '24px',
  fontWeight: '600',
  color: 'white',
  marginBottom: '24px',
});

const FormLabel = styled(Typography)({
  fontSize: '14px',
  color: 'rgba(255, 255, 255, 0.9)',
  marginBottom: '8px',
});

const FormInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.7)',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '12px 14px',
    color: 'white',
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.7)',
      opacity: 1,
    },
  },
}));

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#1a1a1a',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${IMAGES.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            minHeight: '100vh',
            pt: { xs: 8, md: 0 }
          }}>
            <Box sx={{ 
              maxWidth: '600px',
              pr: 4
            }}>
              <Typography
                variant="h1"
                color="white"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.8rem' },
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.2
                }}
              >
                <Box component="span" display="block" sx={{ mb: 1 }}>
                  Selling your business
                </Box>
                <Box component="span" display="block">
                  is our business
                </Box>
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: BRAND.blue,
                  color: 'white',
                  padding: '12px 24px',
                  fontSize: '16px',
                  mt: 4,
                  '&:hover': {
                    backgroundColor: '#45a19d',
                  }
                }}
              >
                Contact Us →
              </Button>
            </Box>

            <ContactForm>
              <FormTitle>What's my business worth?</FormTitle>
              <Grid container spacing={2}>
                <Grid item xs={12} container spacing={2}>
                  <Grid item xs={6}>
                    <FormLabel>First Name</FormLabel>
                    <FormInput
                      fullWidth
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormLabel>Last Name</FormLabel>
                    <FormInput
                      fullWidth
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <FormLabel>Phone Number</FormLabel>
                  <FormInput
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormLabel>Your Email</FormLabel>
                  <FormInput
                    fullWidth
                    variant="outlined"
                    size="small"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      height: '45px',
                      backgroundColor: BRAND.blue,
                      fontSize: '16px',
                      '&:hover': {
                        backgroundColor: '#45a19d',
                      }
                    }}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </ContactForm>
          </Box>
        </Container>
      </Box>

      {/* Featured Businesses Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 600,
                position: 'relative',
                display: 'inline-block',
                mb: 1,
              }}
            >
              Featured Business Opportunities
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              {
                image: IMAGES.featured.cafe,
                title: "Modern Cafe in CBD",
                description: "Well-established cafe with prime location and loyal customer base",
                price: "$450,000"
              },
              {
                image: IMAGES.featured.retail,
                title: "Retail Store Franchise",
                description: "Profitable retail business with established brand presence",
                price: "$850,000"
              },
              {
                image: IMAGES.featured.restaurant,
                title: "Fine Dining Restaurant",
                description: "Award-winning restaurant with excellent reputation",
                price: "$1,200,000"
              },
              {
                image: IMAGES.featured.gym,
                title: "Premium Fitness Center",
                description: "Modern gym facility with state-of-the-art equipment",
                price: "$750,000"
              }
            ].map((business, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <PropertyCard component={motion.div} whileHover={{ y: -10 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={business.image}
                    alt={business.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {business.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {business.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6" color="primary.main">
                        {business.price}
                      </Typography>
                      <Button variant="outlined" color="primary" component={Link} to="/properties">
                        View Details
                      </Button>
                    </Box>
                  </CardContent>
                </PropertyCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Business Categories Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 600,
                mb: 1,
              }}
            >
              What Are You <span style={{ color: BRAND.blue }}>Looking For</span>
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 3, mb: 4 }}>
              Explore our diverse range of business opportunities
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              { icon: <StorefrontIcon sx={{ fontSize: 60, color: BRAND.blue }} />, title: 'Retail', count: '47', listings: '47 Listings' },
              { icon: <RestaurantIcon sx={{ fontSize: 60, color: BRAND.blue }} />, title: 'Restaurants', count: '24', listings: '24 Listings' },
              { icon: <ApartmentIcon sx={{ fontSize: 60, color: BRAND.blue }} />, title: 'Commercial', count: '38', listings: '38 Listings' },
              { icon: <BuildIcon sx={{ fontSize: 60, color: BRAND.blue }} />, title: 'Services', count: '15', listings: '15 Listings' },
            ].map((category, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <CategoryBox>
                  <Box sx={{ mb: 2 }}>
                    {category.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {category.title}
                  </Typography>
                  <Typography sx={{ color: BRAND.blue }}>
                    {category.listings}
                  </Typography>
                </CategoryBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Box 
        sx={{ 
          py: { xs: 6, md: 10 }, 
          bgcolor: BRAND.blue,
          backgroundImage: `linear-gradient(135deg, ${BRAND.blue} 0%, rgba(86,193,188,0.8) 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { number: '967', title: 'Businesses For Sale', icon: <MonetizationOnIcon className="icon" /> },
              { number: '1,276', title: 'Successful Sales', icon: <BusinessIcon className="icon" /> },
              { number: '396', title: 'Expert Agents', icon: <LocationOnIcon className="icon" /> },
              { number: '177', title: 'Happy Clients', icon: <PeopleIcon className="icon" /> },
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <StatsBox>
                  {stat.icon}
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, fontSize: '3.5rem' }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: '1.25rem' }}>
                    {stat.title}
                  </Typography>
                </StatsBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomePage; 