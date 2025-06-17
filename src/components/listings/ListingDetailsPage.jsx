import React from 'react';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import { Container, Box, Typography, Button, Card, CardMedia, CardContent, Grid, Breadcrumbs, Link, Paper } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import { motion } from 'framer-motion';
import ConfidentialityAgreementForm from './ConfidentialityAgreementForm';
import EOIForm from './EOIForm';

const BRAND = {
  blue: '#56C1BC',
  darkBlue: '#45a19d',
  background: '#f0f2f5',
  cardBg: 'rgba(255, 255, 255, 0.9)',
  textDark: '#2c3e50',
  textGray: '#64748b'
};

const featureIcons = [
  <CheckCircleIcon color="success" sx={{ mr: 1 }} />, // 0
  <PeopleIcon color="primary" sx={{ mr: 1 }} />,      // 1
  <StarIcon color="warning" sx={{ mr: 1 }} />,        // 2
  <RoomIcon color="error" sx={{ mr: 1 }} />,          // 3
  <CheckCircleIcon color="success" sx={{ mr: 1 }} />, // 4
  <CheckCircleIcon color="success" sx={{ mr: 1 }} />, // 5
];

function getFeatureIcon(feature) {
  const lower = feature.toLowerCase();
  if (lower.includes('customer recognition') || lower.includes('support') || lower.includes('easy')) {
    return <CheckCircleIcon color="success" sx={{ mr: 1 }} />;
  }
  if (lower.includes('sales')) {
    return <PeopleIcon color="primary" sx={{ mr: 1 }} />;
  }
  if (lower.includes('lease')) {
    return <StarIcon color="warning" sx={{ mr: 1 }} />;
  }
  if (lower.includes('review') || lower.includes('reputation')) {
    return <StarIcon color="warning" sx={{ mr: 1 }} />;
  }
  if (lower.includes('location') || lower.includes('northcote')) {
    return <RoomIcon color="error" sx={{ mr: 1 }} />;
  }
  return <CheckCircleIcon color="success" sx={{ mr: 1 }} />;
}

const ListingDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [confidentialityOpen, setConfidentialityOpen] = React.useState(false);
  const [eoiOpen, setEoiOpen] = React.useState(false);

  React.useEffect(() => {
    fetch(`http://localhost:5005/api/listings/${id}`)
      .then(res => res.json())
      .then(data => {
        setListing(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Container maxWidth="md" sx={{ py: 10 }}><Typography>Loading...</Typography></Container>;
  }
  if (!listing || listing.error) {
    return (
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Typography variant="h4" color="error" align="center">
          Listing not found.
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="contained" onClick={() => navigate('/listings')}>
            Back to Listings
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: BRAND.background, minHeight: '100vh' }}>
      {/* Hero Section with gradient overlay and animation */}
      <Box sx={{
        position: 'relative',
        height: { xs: 220, md: 320 },
        backgroundImage: `url(${listing.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 4
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0,0,0,0.45)',
          zIndex: 1,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(86,193,188,0.2) 100%)'
        }} />
        <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 700, mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              {listing.title}
            </Typography>
            <Typography variant="h4" sx={{ color: BRAND.blue, fontWeight: 600, mb: 1 }}>
              {listing.price}
            </Typography>
          </motion.div>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 2, mb: 6 }}>
        <Button 
          variant="outlined" 
          sx={{ 
            mb: 3,
            color: BRAND.blue,
            borderColor: BRAND.blue,
            '&:hover': {
              borderColor: BRAND.darkBlue,
              color: BRAND.darkBlue,
              bgcolor: 'rgba(86, 193, 188, 0.1)'
            }
          }} 
          onClick={() => navigate('/listings')}
        >
          ← Back to Listings
        </Button>
        <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
          <Button variant="contained" color="primary" sx={{ bgcolor: BRAND.blue, '&:hover': { bgcolor: BRAND.darkBlue } }} onClick={() => setConfidentialityOpen(true)}>
            Submit Confidentiality Agreement →
          </Button>
          <Button variant="contained" color="primary" sx={{ bgcolor: BRAND.blue, '&:hover': { bgcolor: BRAND.darkBlue } }} onClick={() => setEoiOpen(true)}>
            EOI Form →
          </Button>
          <Button variant="outlined" color="primary" sx={{ borderColor: BRAND.blue, color: BRAND.blue }}>
            Share
          </Button>
          <Button variant="outlined" color="primary" sx={{ borderColor: BRAND.blue, color: BRAND.blue }}>
            Download PDF
          </Button>
        </Box>
        <Box sx={{
          background: '#f8fafc',
          borderRadius: 3,
          px: { xs: 2, md: 6 },
          py: { xs: 3, md: 5 },
          color: BRAND.textDark,
          textAlign: 'left',
        }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: BRAND.textDark, mb: 2 }}>
            {listing.title}
          </Typography>
          <Typography variant="h5" sx={{ color: BRAND.blue, fontWeight: 600, mb: 2 }}>
            {listing.price}
          </Typography>
          {/* Suburb/Town and Location */}
          <Box sx={{ display: 'flex', gap: 3, mb: 2, flexWrap: 'wrap' }}>
            {listing.suburb && (
              <Paper sx={{ px: 2, py: 1, background: '#e0f7fa', color: BRAND.blue, borderRadius: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <RoomIcon sx={{ fontSize: 18, mr: 0.5 }} />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>Suburb/Town:</Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>{listing.suburb}</Typography>
              </Paper>
            )}
            {listing.location && (
              <Paper sx={{ px: 2, py: 1, background: '#f3e5f5', color: '#7b1fa2', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <RoomIcon sx={{ fontSize: 18, mr: 0.5 }} />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>Location:</Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>{listing.location}</Typography>
              </Paper>
            )}
          </Box>
          {/* About the Business */}
          <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
            About the Business
          </Typography>
          <Box sx={{ color: BRAND.textGray, mb: 2 }}>
            <div dangerouslySetInnerHTML={{ __html: listing.about }} />
          </Box>
          {/* Map placeholder */}
          <Box sx={{ mt: 4, mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Location Map
            </Typography>
            {listing.mapLink ? (
              <Paper sx={{ height: 300, p: 0, overflow: 'hidden', borderRadius: 2 }}>
                <iframe
                  src={listing.mapLink}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </Paper>
            ) : (
              <Paper sx={{ height: 200, background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography color="text.secondary">[Map will go here]</Typography>
              </Paper>
            )}
          </Box>
          {/* Contact info in a card */}
          <Box sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 3, background: '#f8fafc', borderRadius: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                For More Information or to arrange an inspection, contact:
              </Typography>
              <Typography variant="body2" sx={{ color: BRAND.textGray }}>
                {listing.contact.name}<br />
                {listing.contact.phone}<br />
                {listing.contact.email}
              </Typography>
            </Paper>
          </Box>
        </Box>
        <EOIForm
          open={eoiOpen}
          onClose={() => setEoiOpen(false)}
          listingTitle={listing?.title}
        />
        <ConfidentialityAgreementForm
          open={confidentialityOpen}
          onClose={() => setConfidentialityOpen(false)}
          listingTitle={listing?.title}
        />
      </Container>
    </Box>
  );
};

export default ListingDetailsPage; 