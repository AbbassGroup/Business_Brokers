import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia, Button, FormControl, RadioGroup, FormControlLabel, Radio, styled } from '@mui/material';
import { motion } from 'framer-motion';
import Footer from '../common/Footer';
import HeroSection from '../common/HeroSection';
import { Link, useLocation } from 'react-router-dom';
import RoomIcon from '@mui/icons-material/Room';
import LabelIcon from '@mui/icons-material/Label';

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
  const location = useLocation();
  // Map HomePage categories to internal category names/ids
  const categoryMap = {
    Retail: 'retail',
    Restaurants: "cafes",
    Commercial: 'commercial',
    Services: 'trade',
  };
  // Get category from query param
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get('category');
  const initialCategory = urlCategory && categoryMap[urlCategory] ? categoryMap[urlCategory] : 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [listings, setListings] = useState([]);

  useEffect(() => {
    setSelectedCategory(initialCategory);
    // eslint-disable-next-line
  }, [location.search]);

  useEffect(() => {
    fetch('http://localhost:5005/api/listings')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setListings(data);
        } else {
          setListings([]);
        }
      })
      .catch(() => setListings([]));
  }, []);

  const categories = [
    { id: 'accommodation', name: 'Accommodation/Tourism' },
    { id: 'automotive', name: 'Automotive' },
    { id: 'beauty', name: 'Beauty/Health' },
    { id: 'education', name: 'Education/Training' },
    { id: 'cafes', name: "Cafe's, Restaurants & Takeaway" },
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

  // Filter listings by selected category and location
  const filteredListings = listings.filter(listing => {
    // Category filter
    let categoryMatch = true;
    if (selectedCategory !== 'all') {
      const selectedCategoryObj = categories.find(cat => cat.id === selectedCategory);
      categoryMatch = selectedCategoryObj ? listing.category === selectedCategoryObj.name : true;
    }
    // Location filter
    let locationMatch = true;
    if (selectedLocation !== 'all') {
      const selectedLocationObj = locations.find(loc => loc.id === selectedLocation);
      locationMatch = selectedLocationObj ? (listing.location && listing.location.toLowerCase().includes(selectedLocationObj.name.toLowerCase())) : true;
    }
    return categoryMatch && locationMatch;
  });

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
                {Array.isArray(filteredListings) && filteredListings.map((listing) => (
                  <Grid item xs={12} sm={12} md={6} lg={6} key={listing._id}>
                    <ListingCard
                      component={motion.div}
                      whileHover={{ y: -8, boxShadow: '0 12px 32px rgba(86,193,188,0.18)' }}
                      sx={{
                        minHeight: 420,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 4px 20px rgba(86,193,188,0.08)',
                        border: '1.5px solid #e0f7fa',
                        transition: 'box-shadow 0.3s, transform 0.3s',
                        p: 0
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={listing.image || 'https://via.placeholder.com/400x200?text=No+Image'}
                        alt={listing.title}
                        sx={{ objectFit: 'cover', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
                      />
                      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 3 }}>
                        {/* Badges Row */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          {listing.location && (
                            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#e0f7fa', color: BRAND.blue, px: 1.2, py: 0.3, borderRadius: 2, fontSize: 13, fontWeight: 500 }}>
                              <RoomIcon sx={{ fontSize: 16, mr: 0.5 }} />
                              {listing.location}
                            </Box>
                          )}
                          {listing.category && (
                            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#f3e5f5', color: '#7b1fa2', px: 1.2, py: 0.3, borderRadius: 2, fontSize: 13, fontWeight: 500 }}>
                              <LabelIcon sx={{ fontSize: 15, mr: 0.5 }} />
                              {listing.category}
                            </Box>
                          )}
                        </Box>
                        {/* Title */}
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: { xs: '1.2rem', md: '1.3rem' },
                            fontWeight: 700,
                            display: '-webkit-box',
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            mb: 1
                          }}
                        >
                          {listing.title}
                        </Typography>
                        {/* Description */}
                        <Typography
                          variant="body2"
                          sx={{
                            color: BRAND.textGray,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            mb: 2
                          }}
                        >
                          {listing.summary || listing.description || 'No description available.'}
                        </Typography>
                        {/* Price */}
                        <Typography
                          variant="h5"
                          sx={{
                            color: BRAND.blue,
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '2.2rem' },
                            mb: 2
                          }}
                        >
                          {listing.price && !listing.price.startsWith('$') ? `$${listing.price}` : listing.price}
                        </Typography>
                        <Box sx={{ width: '100%', mb: 2 }}>
                          <hr style={{ border: 'none', borderTop: '1.5px solid #e0f7fa', margin: 0 }} />
                        </Box>
                        <Button
                          component={Link}
                          to={`/listings/${listing._id}`}
                          variant="contained"
                          fullWidth
                          sx={{
                            bgcolor: BRAND.blue,
                            '&:hover': {
                              bgcolor: BRAND.darkBlue,
                            },
                            borderRadius: '8px',
                            textTransform: 'none',
                            py: { xs: 1.5, md: 1.5 },
                            fontSize: { xs: '1.1rem', md: '1.1rem' },
                            mt: 1
                          }}
                        >
                          View Details
                        </Button>
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