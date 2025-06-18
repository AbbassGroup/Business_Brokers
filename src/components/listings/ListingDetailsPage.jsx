import React from 'react';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import { Container, Box, Typography, Button, Card, CardMedia, CardContent, Grid, Breadcrumbs, Link, Paper } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import { motion } from 'framer-motion';
import ConfidentialityAgreementForm from './ConfidentialityAgreementForm';
import EOIForm from './EOIForm';
import Snackbar from '@mui/material/Snackbar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PhoneIcon from '@mui/icons-material/Phone';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [shareModalOpen, setShareModalOpen] = React.useState(false);

  const shareUrl = window.location.href;
  const shareTitle = listing?.title || 'Check out this business listing!';

  const detailsRef = React.useRef();

  function handleShareClick() {
    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        url: shareUrl,
      });
    } else {
      setShareModalOpen(true);
    }
  }

  async function handleDownloadPDF() {
    const input = detailsRef.current;
    if (!input) return;
    const canvas = await html2canvas(input, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    // Calculate image dimensions to fit A4
    const imgWidth = pageWidth - 40;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 20, 20, imgWidth, imgHeight);
    pdf.save(`${listing.title || 'listing'}.pdf`);
  }

  function ShareModal({ open, onClose }) {
    return (
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, color: BRAND.textDark }}>Share this Listing</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', pb: 3 }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <IconButton color="primary" aria-label="Share on Facebook" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}>
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary" aria-label="Share on LinkedIn" onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`, '_blank')}>
              <LinkedInIcon />
            </IconButton>
            <IconButton color="primary" aria-label="Share on WhatsApp" onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`, '_blank')}>
              <WhatsAppIcon />
            </IconButton>
            <IconButton color="primary" aria-label="Share via Email" onClick={() => window.open(`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`)}>
              <EmailIcon />
            </IconButton>
          </Box>
          <Button
            variant="outlined"
            startIcon={<ContentCopyIcon />}
            onClick={async () => {
              await navigator.clipboard.writeText(shareUrl);
              setSnackbarOpen(true);
            }}
            sx={{ borderColor: BRAND.blue, color: BRAND.blue, fontWeight: 600, borderRadius: 2, px: 3 }}
          >
            Copy Link
          </Button>
        </DialogContent>
      </Dialog>
    );
  }

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
          <Button variant="contained" onClick={() => navigate('/listings')} sx={{ bgcolor: BRAND.blue, '&:hover': { bgcolor: BRAND.darkBlue } }}>
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
        <Button variant="outlined" sx={{ mb: 3, borderColor: BRAND.blue, color: BRAND.blue, '&:hover': { borderColor: BRAND.darkBlue, color: BRAND.darkBlue } }} onClick={() => navigate('/listings')}>
          ← Back to Listings
        </Button>
        <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
          <Button variant="contained" color="primary" sx={{ bgcolor: BRAND.blue, '&:hover': { bgcolor: BRAND.darkBlue } }} onClick={() => setConfidentialityOpen(true)}>
            Submit Confidentiality Agreement →
          </Button>
          <Button variant="contained" color="primary" sx={{ bgcolor: BRAND.blue, '&:hover': { bgcolor: BRAND.darkBlue } }} onClick={() => setEoiOpen(true)}>
            EOI Form →
          </Button>
          <Button variant="outlined" color="primary" sx={{ borderColor: BRAND.blue, color: BRAND.blue }}
            onClick={handleShareClick}
          >
            Share
          </Button>
          <Button variant="outlined" color="primary" sx={{ borderColor: BRAND.blue, color: BRAND.blue }}
            onClick={handleDownloadPDF}
          >
            Download PDF
          </Button>
        </Box>
        <Box ref={detailsRef} sx={{
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
                <Typography variant="body2" sx={{ fontWeight: 600 }}>Suburb:</Typography>
                <Typography variant="body2" sx={{ ml: 1 }}>{listing.suburb}</Typography>
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
              <Typography variant="body2" sx={{ color: BRAND.textGray, display: 'flex', flexDirection: 'column', gap: 1.2, fontSize: '1.15rem', fontWeight: 500 }}>
                <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                  <PersonIcon sx={{ fontSize: 24, color: BRAND.blue }} />
                  {listing.contact.name}
                </Box>
                <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                  <PhoneIcon sx={{ fontSize: 24, color: BRAND.blue }} />
                  {listing.contact.phone}
                </Box>
                <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                  <EmailIcon sx={{ fontSize: 24, color: BRAND.blue }} />
                  {listing.contact.email}
                </Box>
              </Typography>
            </Paper>
          </Box>
        </Box>
        <ConfidentialityAgreementForm open={confidentialityOpen} onClose={() => setConfidentialityOpen(false)} listingTitle={listing.title} />
        <EOIForm open={eoiOpen} onClose={() => setEoiOpen(false)} listingTitle={listing.title} />
        <ShareModal open={shareModalOpen} onClose={() => setShareModalOpen(false)} />
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={() => setSnackbarOpen(false)}
          message="Link copied!"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
      </Container>
    </Box>
  );
};

export default ListingDetailsPage; 