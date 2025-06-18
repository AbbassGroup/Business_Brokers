import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, Button, Grid, TextField, MenuItem, Card, CardContent, CardMedia, IconButton, styled } from '@mui/material';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BuildIcon from '@mui/icons-material/Build';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Footer from '../common/Footer';
import Marquee from 'react-fast-marquee';
import { styled as muiStyled } from '@mui/material/styles';

// Brand Colors
const BRAND = {
  blue: '#56C1BC',
  lightBlue: 'rgba(86, 193, 188, 0.1)',
  darkBlue: '#45a19d',
  background: '#f0f2f5',
  softDark: '#ffffff',
  darkGray: '#f8fafc',
  cardBg: 'rgba(255, 255, 255, 0.9)',
  textDark: '#2c3e50',
  textGray: '#64748b'
};

// Image URLs for the website
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80", // Modern business district
  featured: {
    cafe: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80", // Modern cafe interior
    retail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", // Retail store
    restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80", // Restaurant interior
    gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80" // Modern gym
  },
  testimonials: {
    client1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    client2: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    client3: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    client4: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80"
  },
  companies: {
    logo1: "/car/Donut-King.png",
    logo2: "/car/Degani-Logo.webp",
    logo3: "/car/NDIS.png",
    logo4: "/car/Sumo-Salad.png",
    logo5: "/car/Rolld.png",
    logo6: "/car/Big-Als.png",
    logo7: "/car/Gami-Chicken.jpeg",
    logo8: "/car/Cheesecake-Shop.png",
    logo9: "/car/Burgertory.png"
  }
};

// Add company URLs for linking
const COMPANY_LINKS = [
  "https://www.donutking.com.au/", // Donut King
  "https://degani.com.au/", // Degani
  "https://www.ndis.gov.au/", // NDIS
  "https://sumosalad.com/", // Sumo Salad
  "https://rolld.com.au/", // Roll'd
  "https://www.bigalpizza.com.au/", // Big Al's
  "https://www.gamichicken.com.au/", // Gami Chicken
  "https://www.cheesecake.com.au/", // Cheesecake Shop
  "https://www.burgertory.com.au/" // Burgertory
];

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
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  transition: 'all 0.3s ease-in-out',
  height: '100%',
  background: BRAND.cardBg,
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.7)',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 30px rgba(86, 193, 188, 0.2)',
    border: '1px solid rgba(86, 193, 188, 0.3)',
  },
  '& .MuiCardMedia-root': {
    height: '200px',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '40%',
      background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
    }
  },
  '& .MuiCardContent-root': {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 200px)', // Subtract image height
  },
  '& .MuiTypography-root': {
    color: BRAND.textDark,
  },
  '& .MuiTypography-body1': {
    color: BRAND.textGray,
  }
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

const GOLD = '#bfa46f';

const StatsBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  textAlign: 'center',
  color: 'inherit',
  background: 'none',
  boxShadow: 'none',
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  minHeight: '520px',
  padding: theme.spacing(4),
  backgroundColor: BRAND.cardBg,
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
  border: '1px solid rgba(255, 255, 255, 0.7)',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(86, 193, 188, 0.15)',
  },
  '& .MuiCardContent-root': {
    flexGrow: 1,
  },
  '& .MuiTypography-root': {
    color: BRAND.textDark,
  },
  '& .MuiTypography-body1': {
    color: BRAND.textGray,
  },
  '& .quote-icon': {
    fontSize: '2.5rem',
    color: BRAND.blue,
    opacity: 0.2,
    marginBottom: theme.spacing(2),
  },
  '& .client-image': {
    width: 64,
    height: 64,
    borderRadius: '50%',
    objectFit: 'cover',
    border: `2px solid ${BRAND.blue}`,
    marginBottom: theme.spacing(2),
  },
  '& .company-logo': {
    height: 40,
    objectFit: 'contain',
    opacity: 0.8,
    filter: 'grayscale(100%)',
    transition: 'all 0.3s ease',
    '&:hover': {
      opacity: 1,
      filter: 'grayscale(0%)',
    },
  }
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

const SectionWrapper = muiStyled(Box, {
  shouldForwardProp: (prop) => prop !== '$isDark'
})(({ theme, $isDark }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: $isDark 
      ? `linear-gradient(180deg, ${BRAND.background} 0%, ${BRAND.darkGray} 100%)`
      : `linear-gradient(180deg, ${BRAND.softDark} 0%, ${BRAND.background} 100%)`,
    opacity: 0.97,
    zIndex: 0,
  }
}));

const CategoryCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  background: BRAND.cardBg,
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.7)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(86, 193, 188, 0.15)',
    border: '1px solid rgba(86, 193, 188, 0.3)',
  },
  '& .icon': {
    fontSize: '3.5rem',
    color: BRAND.blue,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    background: 'rgba(86, 193, 188, 0.1)',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
  },
  '&:hover .icon': {
    background: BRAND.blue,
    color: 'white',
  }
}));

const CompanyLogo = styled('img')({
  height: '40px',
  width: '100%',
  objectFit: 'contain',
  background: '#fff',
  opacity: 0.7,
  filter: 'grayscale(100%)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  margin: '0 auto',
  display: 'block',
  marginBottom: '24px',
  '&:hover': {
    opacity: 1,
    filter: 'grayscale(0%)',
  }
});

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      const currentCount = Math.floor(progress * end);
      if (currentCount !== countRef.current) {
        setCount(currentCount);
        countRef.current = currentCount;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

// Add a styled component for the logo card
const LogoCard = styled(Box)(({ theme }) => ({
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 4px 16px rgba(44,62,80,0.07)',
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'box-shadow 0.3s, transform 0.3s',
  height: '120px',
  minWidth: '120px',
  maxWidth: '180px',
  margin: '0 auto',
  '&:hover': {
    boxShadow: '0 8px 32px rgba(86,193,188,0.15)',
    transform: 'translateY(-4px) scale(1.04)'
  }
}));

const HomePage = () => {
  const [featuredListings, setFeaturedListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for valuation form
  const [valuationForm, setValuationForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  const [valuationStatus, setValuationStatus] = useState(''); // success or error message
  const [valuationLoading, setValuationLoading] = useState(false);

  useEffect(() => {
    const fetchFeaturedListings = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5005/api/listings');
        if (!response.ok) {
          throw new Error('Failed to fetch listings');
        }
        const data = await response.json();
        // Filter featured listings and ensure we have valid data
        const featured = Array.isArray(data) 
          ? data.filter(listing => listing && listing.featured === true).slice(0, 4)
          : [];
        console.log('Featured listings:', featured); // Debug log
        setFeaturedListings(featured);
      } catch (err) {
        console.error('Error fetching featured listings:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedListings();
  }, []);

  // Handle valuation form submit
  const handleValuationSubmit = async (e) => {
    e.preventDefault();
    setValuationStatus('');
    setValuationLoading(true);
    try {
      const res = await fetch('http://localhost:5005/api/valuations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valuationForm),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Submission failed');
      }
      setValuationStatus('success');
      setValuationForm({ firstName: '', lastName: '', phone: '', email: '' });
    } catch (err) {
      setValuationStatus(err.message || 'Submission failed');
    } finally {
      setValuationLoading(false);
    }
  };

  return (
    <Box sx={{ 
      background: BRAND.background,
      minHeight: '100vh',
      color: BRAND.textDark
    }}>
      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          minHeight: '100vh',
          backgroundColor: '#1a1a1a',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${IMAGES.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
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
            <Box 
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              sx={{ 
                maxWidth: '600px',
                pr: 4
              }}
            >
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Box component="span" display="block" sx={{ mb: 1 }}>
                    Selling your business
                  </Box>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <Box component="span" display="block">
                    is our business
                  </Box>
                </motion.div>
              </Typography>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
              </motion.div>
            </Box>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <ContactForm component="form" onSubmit={handleValuationSubmit}>
                <FormTitle>What's my business worth?</FormTitle>
                <Grid container spacing={2}>
                  <Grid item xs={12} container spacing={2}>
                    <Grid item xs={6}>
                      <FormLabel>First Name</FormLabel>
                      <FormInput
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={valuationForm.firstName}
                        onChange={e => setValuationForm(f => ({ ...f, firstName: e.target.value }))}
                        required
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormLabel>Last Name</FormLabel>
                      <FormInput
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={valuationForm.lastName}
                        onChange={e => setValuationForm(f => ({ ...f, lastName: e.target.value }))}
                        required
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <FormLabel>Phone Number</FormLabel>
                    <FormInput
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={valuationForm.phone}
                      onChange={e => setValuationForm(f => ({ ...f, phone: e.target.value }))}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormLabel>Your Email</FormLabel>
                    <FormInput
                      fullWidth
                      variant="outlined"
                      size="small"
                      type="email"
                      value={valuationForm.email}
                      onChange={e => setValuationForm(f => ({ ...f, email: e.target.value }))}
                      required
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
                      type="submit"
                      disabled={valuationLoading}
                    >
                      {valuationLoading ? 'Sending...' : 'Send'}
                    </Button>
                  </Grid>
                  {valuationStatus && (
                    <Grid item xs={12}>
                      <Typography color={valuationStatus === 'success' ? 'success.main' : 'error.main'}>
                        {valuationStatus === 'success' ? 'Thank you! We have received your request.' : valuationStatus}
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </ContactForm>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Featured Businesses Section */}
      <SectionWrapper $isDark sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ 
              textAlign: 'center', 
              mb: 8,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: `linear-gradient(to right, ${BRAND.blue}, ${BRAND.darkBlue})`,
                borderRadius: '2px',
              }
            }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  fontWeight: 700,
                  color: BRAND.textDark,
                  mb: 2,
                }}
              >
                Featured Business Opportunities
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mt: 3, 
                  maxWidth: '600px', 
                  mx: 'auto',
                  color: BRAND.textGray
                }}
              >
                Discover our handpicked selection of premium businesses for sale
              </Typography>
            </Box>
          </motion.div>

          {loading ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography>Loading featured listings...</Typography>
            </Box>
          ) : error ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography color="error">{error}</Typography>
            </Box>
          ) : featuredListings.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography>No featured listings available at the moment.</Typography>
            </Box>
          ) : (
            <Grid container spacing={4}>
              {featuredListings.map((listing, index) => (
                <Grid item xs={12} sm={6} md={3} key={listing._id}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <PropertyCard>
                      <CardMedia
                        component="img"
                        height="200"
                        image={listing.image || 'https://via.placeholder.com/400x200?text=No+Image'}
                        alt={listing.title}
                      />
                      <CardContent>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              height: '56px',
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
                              height: '72px',
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              mb: 2
                            }}
                          >
                            {listing.about?.replace(/<[^>]+>/g, '').slice(0, 120) || 'No description available.'}
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
                              fontWeight: 700
                            }}
                          >
                            {listing.price && !listing.price.startsWith('$') ? `$${listing.price}` : listing.price}
                          </Typography>
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
                              py: 1
                            }}
                          >
                            View Details
                          </Button>
                        </Box>
                      </CardContent>
                    </PropertyCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </SectionWrapper>

      {/* Business Categories Section */}
      <SectionWrapper $isDark sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 600,
                color: BRAND.textDark,
                mb: 1,
              }}
            >
              What Are You <span style={{ color: BRAND.blue }}>Looking For</span>
            </Typography>
            <Typography sx={{ mt: 3, mb: 4, color: BRAND.textGray }}>
              Explore our diverse range of business opportunities
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {[
              { icon: <StorefrontIcon sx={{ fontSize: 60, color: BRAND.blue }} />, title: 'Retail', listings: 'Available Listings' },
              { icon: <RestaurantIcon sx={{ fontSize: 60, color: BRAND.blue }} />, title: 'Restaurants', listings: 'Available Listings' },
              { icon: <ApartmentIcon sx={{ fontSize: 60, color: BRAND.blue }} />, title: 'Commercial', listings: 'Available Listings' },
              { icon: <BuildIcon sx={{ fontSize: 60, color: BRAND.blue }} />, title: 'Services', listings: 'Available Listings' },
            ].map((category, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                <CategoryCard
                  component={Link}
                  to={`/listings?category=${encodeURIComponent(category.title)}`}
                  sx={{ textDecoration: 'none', maxWidth: 260, width: '100%' }}
                >
                  <Box sx={{ mb: 2 }}>
                    {category.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {category.title}
                  </Typography>
                  <Typography sx={{ 
                    color: BRAND.textGray,
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    opacity: 0.9
                  }}>
                    {category.listings}
                  </Typography>
                </CategoryCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </SectionWrapper>

      {/* Statistics Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        sx={{
          py: { xs: 6, md: 10 },
          position: 'relative',
          background: `linear-gradient(135deg, #6ee7e7 0%, #b2f1ec 100%)`,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, #6ee7e7 0%, #b2f1ec 100%)`,
            opacity: 1,
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4}>
            {[
              { number: 40, suffix: '+', label: 'Years of combined industry experience' },
              { number: 1200, suffix: '+', label: 'Qualified buyers in our database' },
              { number: 20000, suffix: '+', label: 'Monthly marketing reach'},
              { number: 10, suffix: '+', label: 'Industry sectors served' },
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <StatsBox>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: '2.5rem', md: '3.2rem' },
                      color: BRAND.blue,
                      fontFamily: 'inherit',
                      letterSpacing: '0.02em',
                      lineHeight: 1.1,
                    }}
                  >
                    <CountUp end={stat.number} duration={2.5} />{stat.suffix}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      color: '#232323',
                      fontWeight: 600,
                      mt: 0.5,
                    }}
                  >
                    {stat.label}
                  </Typography>
                  {stat.sublabel && (
                    <Typography sx={{ color: '#232323', opacity: 0.7, fontSize: '1rem', mt: 0.5 }}>
                      {stat.sublabel}
                    </Typography>
                  )}
                </StatsBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <SectionWrapper $isDark sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 700,
                color: BRAND.textDark,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: `linear-gradient(to right, ${BRAND.blue}, ${BRAND.darkBlue})`,
                  borderRadius: '2px',
                }
              }}
            >
              What Our Clients Say
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                mt: 5,
                mb: 3,
                color: BRAND.textGray,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Don't just take our word for it. Here's what business owners have to say about working with us.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                video: "/Testimonial-Adisha.MP4",
                author: "Adisha",
                position: "Business Owner",
                company: "Successful Business Sale"
              },
              {
                video: "/Jordan-Testimonial-copy.MP4",
                author: "Jordan",
                position: "Business Owner",
                company: "Successful Business Sale"
              }
            ].map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <TestimonialCard>
                  <Box sx={{ width: '100%', mb: 3 }}>
                    <video
                      controls
                      width="100%"
                      style={{ 
                        maxHeight: '480px', 
                        objectFit: 'contain', 
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                    >
                      <source src={testimonial.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Box>
                  <Box sx={{ mt: 'auto' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {testimonial.author}
                    </Typography>
                    <Typography variant="body2" sx={{ color: BRAND.textGray }}>
                      {testimonial.position}
                    </Typography>
                    <Typography variant="body2" sx={{ color: BRAND.blue, fontWeight: 500 }}>
                      {testimonial.company}
                    </Typography>
                  </Box>
                </TestimonialCard>
              </Grid>
            ))}
          </Grid>

          {/* Trusted By Companies Section */}
          <Box sx={{ mt: 10, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: BRAND.textGray,
                  mb: 4
                }}
              >
                Trusted By Leading Companies
              </Typography>
            </motion.div>
            <Box sx={{ maxWidth: 1200, mx: 'auto', position: 'relative' }}>
              <Marquee gradient={false} speed={40} pauseOnHover={true} style={{ minHeight: 160 }}>
                {COMPANY_LINKS.map((link, index) => (
                  <Box key={index} sx={{ mx: 2, display: 'inline-block' }}>
                    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <LogoCard>
                        <CompanyLogo
                          src={Object.values(IMAGES.companies)[index]}
                          alt={`Company ${index + 1}`}
                          style={{ maxHeight: '60px', maxWidth: '120px', width: 'auto', height: 'auto' }}
                        />
                      </LogoCard>
                    </a>
                  </Box>
                ))}
              </Marquee>
            </Box>
          </Box>

          {/* Call to Action */}
        </Container>
      </SectionWrapper>
      <Footer />
    </Box>
  );
};

export default HomePage; 