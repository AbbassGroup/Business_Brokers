import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia, Button, FormControl, RadioGroup, FormControlLabel, Radio, styled } from '@mui/material';
import { motion } from 'framer-motion';
import Footer from '../common/Footer';
import HeroSection from '../common/HeroSection';

// Replace the image import with a constant
const listingsHeroImage = "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80";

const BRAND = {
  blue: '#56C1BC',
  lightBlue: 'rgba(86, 193, 188, 0.1)',
  darkBlue: '#45a19d',
  background: '#f0f2f5',
  cardBg: 'rgba(255, 255, 255, 0.9)',
  textDark: '#2c3e50',
  textGray: '#64748b'
};

const FilterSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: BRAND.cardBg,
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
  marginBottom: theme.spacing(4),
}));

const ListingCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: BRAND.cardBg,
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid rgba(255, 255, 255, 0.7)',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 30px rgba(86, 193, 188, 0.2)',
    border: '1px solid rgba(86, 193, 188, 0.3)',
  },
  '& .MuiCardMedia-root': {
    height: '200px',
  },
  '& .MuiCardContent-root': {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 200px)',
  }
}));

const FilterLabel = styled(FormControlLabel)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  '& .MuiTypography-root': {
    fontSize: '1rem',
    color: BRAND.textDark,
  },
  '& .MuiRadio-root': {
    color: BRAND.blue,
    '&.Mui-checked': {
      color: BRAND.blue,
    }
  },
  '& .count': {
    color: BRAND.textGray,
    marginLeft: theme.spacing(1),
  }
}));

const ListingsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const categories = [
    { id: 'accommodation', name: 'Accommodation/Tourism' },
    { id: 'automotive', name: 'Automotive' },
    { id: 'beauty', name: 'Beauty/Health' },
    { id: 'education', name: 'Education/Training' },
    { id: 'cafes', name: 'Cafe\'s, Restaurants & Takeaway' },
    { id: 'transport', name: 'Transport & Logistics' },
    { id: 'trade', name: 'Trade' },
    { id: 'catering', name: 'Catering & Events' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'retail', name: 'Retail' },
    { id: 'healthcare', name: 'Healthcare' }
  ];

  const locations = [
    { id: 'melbourne', name: 'Melbourne' },
    { id: 'geelong', name: 'Geelong' },
    { id: 'ballarat', name: 'Ballarat' },
    { id: 'launceston', name: 'Launceston' },
    { id: 'brisbane', name: 'Brisbane' },
    { id: 'hobart', name: 'Hobart' },
    { id: 'sydney', name: 'Sydney' }
  ];

  // Sample listings data - you would typically fetch this from an API
  const listings = [
    {
      id: 1,
      title: "Modern Cafe in CBD",
      category: "cafes",
      location: "melbourne",
      description: "Well-established cafe with prime location and loyal customer base",
      price: "$450,000",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Retail Store Franchise",
      price: "$850,000",
      location: "South Melbourne",
      type: "Retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      description: "Profitable retail business with established brand presence"
    },
    // Add more listings here
  ];

  return (
    <>
      <HeroSection
        title="Business Listings"
        subtitle="Discover your next business opportunity"
        backgroundImage={listingsHeroImage}
      />
      <Box sx={{ bgcolor: BRAND.background, minHeight: '100vh' }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              color: BRAND.textDark,
              mb: { xs: 3, md: 4 },
              pl: { xs: 2, md: 0 },
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
            }}
          >
            Business Listings
          </Typography>

          <Grid container spacing={4}>
            {/* Filters Sidebar */}
            <Grid 
              item 
              xs={12} 
              md={3}
              sx={{
                order: { xs: 2, md: 1 },
                position: { md: 'sticky' },
                top: { md: 100 },
                height: { md: 'fit-content' }
              }}
            >
              <FilterSection sx={{ mb: { xs: 2, md: 4 } }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: BRAND.textDark,
                    mb: 2,
                    fontSize: { xs: '1.1rem', md: '1.25rem' }
                  }}
                >
                  Listing categories
                </Typography>
                <FormControl component="fieldset" sx={{ width: '100%' }}>
                  <RadioGroup
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <FilterLabel
                      value="all"
                      control={<Radio />}
                      label="All Categories"
                    />
                    {categories.map((category) => (
                      <FilterLabel
                        key={category.id}
                        value={category.id}
                        control={<Radio />}
                        label={category.name}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </FilterSection>

              <FilterSection>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: BRAND.textDark,
                    mb: 2,
                    fontSize: { xs: '1.1rem', md: '1.25rem' }
                  }}
                >
                  Location
                </Typography>
                <FormControl component="fieldset" sx={{ width: '100%' }}>
                  <RadioGroup
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    <FilterLabel
                      value="all"
                      control={<Radio />}
                      label="All Locations"
                    />
                    {locations.map((location) => (
                      <FilterLabel
                        key={location.id}
                        value={location.id}
                        control={<Radio />}
                        label={location.name}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </FilterSection>
            </Grid>

            {/* Listings Grid */}
            <Grid 
              item 
              xs={12} 
              md={9}
              sx={{
                order: { xs: 1, md: 2 }
              }}
            >
              <Grid container spacing={3}>
                {listings.map((listing) => (
                  <Grid item xs={12} sm={6} lg={4} key={listing.id}>
                    <ListingCard component={motion.div} whileHover={{ y: -5 }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={listing.image}
                        alt={listing.title}
                      />
                      <CardContent>
                        <Box sx={{ flex: 1 }}>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              fontSize: { xs: '1.1rem', md: '1.25rem' },
                              height: { xs: 'auto', md: '56px' },
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              mb: 1
                            }}
                          >
                            {listing.title}
                          </Typography>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: BRAND.textGray,
                              height: { xs: 'auto', md: '72px' },
                              display: '-webkit-box',
                              WebkitLineClamp: { xs: 2, md: 3 },
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              mb: 2,
                              fontSize: { xs: '0.9rem', md: '1rem' }
                            }}
                          >
                            {listing.description}
                          </Typography>
                        </Box>
                        <Box sx={{ 
                          display: 'flex', 
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 2,
                          mt: 'auto'
                        }}>
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              color: BRAND.blue,
                              fontWeight: 700,
                              fontSize: { xs: '1.5rem', md: '1.75rem' }
                            }}
                          >
                            {listing.price}
                          </Typography>
                          <Button 
                            variant="contained" 
                            fullWidth
                            sx={{
                              bgcolor: BRAND.blue,
                              '&:hover': {
                                bgcolor: BRAND.darkBlue,
                              },
                              borderRadius: '8px',
                              textTransform: 'none',
                              py: { xs: 1.5, md: 1 },
                              fontSize: { xs: '1rem', md: '0.9rem' }
                            }}
                          >
                            View Details
                          </Button>
                        </Box>
                      </CardContent>
                    </ListingCard>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>

        <Footer />
      </Box>
    </>
  );
};

export default ListingsPage; 