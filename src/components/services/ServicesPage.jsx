import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia, Button, styled, Dialog, DialogTitle, DialogContent, DialogActions, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SearchIcon from '@mui/icons-material/Search';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TimelineIcon from '@mui/icons-material/Timeline';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Footer from '../common/Footer';
import HeroSection from '../common/HeroSection';

// Replace the image import with a constant
const servicesHeroImage = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80";

// Brand Colors
const BRAND = {
  blue: '#56C1BC'
};

// Service Card Styling
const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.16)',
  },
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 20px',
  backgroundColor: 'rgba(86, 193, 188, 0.1)',
  color: BRAND.blue,
  '& svg': {
    fontSize: '40px',
  },
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(4),
  borderRadius: '16px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(to right, ${BRAND.blue}, #45a19d)`,
    borderRadius: '16px 16px 0 0',
  },
}));

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Business Valuation',
      description: 'Get an accurate assessment of your business worth with our comprehensive valuation services. We use industry-standard methods to determine the true market value.',
      icon: <AssessmentIcon />,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      details: [
        'Financial Analysis & Reporting',
        'Market Comparison Analysis',
        'Asset-Based Valuation',
        'Future Earnings Projection',
        'Industry Multiplier Assessment'
      ]
    },
    {
      title: 'Business Sales',
      description: 'We handle the entire process of selling your business, from marketing to negotiations and closing. Our expertise ensures you get the best possible price.',
      icon: <HandshakeIcon />,
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
      details: [
        'Confidential Marketing',
        'Buyer Screening',
        'Negotiation Support',
        'Due Diligence Assistance',
        'Transaction Closing Services'
      ]
    },
    {
      title: 'Business Acquisitions',
      description: 'Looking to buy a business? We help you find the perfect opportunity that matches your criteria and guide you through the acquisition process.',
      icon: <SearchIcon />,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      details: [
        'Business Search & Matching',
        'Market Analysis',
        'Due Diligence Support',
        'Negotiation Assistance',
        'Transition Planning'
      ]
    },
    {
      title: 'Financial Advisory',
      description: 'Our financial experts provide guidance on business structure, tax planning, and financial strategies to maximize your business value.',
      icon: <MonetizationOnIcon />,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      details: [
        'Tax Planning',
        'Financial Structuring',
        'Risk Assessment',
        'Growth Strategy',
        'Exit Planning'
      ]
    },
    {
      title: 'Business Brokerage',
      description: 'We act as intermediaries between buyers and sellers, ensuring a smooth transaction process with confidentiality and professionalism.',
      icon: <BusinessIcon />,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
      details: [
        'Confidential Representation',
        'Market Analysis',
        'Buyer-Seller Matching',
        'Transaction Management',
        'Post-Sale Support'
      ]
    },
    {
      title: 'Consulting Services',
      description: 'Get expert advice on business operations, growth strategies, and market positioning to enhance your business value before sale.',
      icon: <SupportAgentIcon />,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      details: [
        'Operational Assessment',
        'Growth Strategy',
        'Market Analysis',
        'Business Planning',
        'Performance Optimization'
      ]
    },
  ];

  const testimonials = [
    {
      text: "Working with Abbass Business Brokers was the best decision for selling my business. Their professionalism and expertise made the process smooth and successful.",
      author: "John Smith",
      position: "Former Owner, Melbourne Cafe"
    },
    {
      text: "The team's knowledge of the market and attention to detail helped us acquire the perfect business. Highly recommended!",
      author: "Sarah Johnson",
      position: "CEO, Retail Chain"
    },
    {
      text: "Their valuation services provided crucial insights that helped us make informed decisions about our business sale.",
      author: "Michael Brown",
      position: "Director, Tech Solutions"
    }
  ];

  const faqs = [
    {
      question: "How long does it typically take to sell a business?",
      answer: "The timeline varies depending on factors such as business size, industry, and market conditions. On average, it takes 6-9 months to complete a business sale."
    },
    {
      question: "How do you determine the value of my business?",
      answer: "We use multiple valuation methods including asset-based valuation, market comparison, and earnings multipliers. We also consider industry-specific factors and market conditions."
    },
    {
      question: "What makes your business brokerage service different?",
      answer: "We offer a comprehensive approach combining market expertise, confidential marketing, and personalized service. Our team has extensive experience across various industries."
    },
    {
      question: "How do you maintain confidentiality during the sale process?",
      answer: "We implement strict confidentiality protocols, including NDAs for potential buyers, anonymous listings, and controlled information disclosure."
    }
  ];

  return (
    <Box sx={{ background: BRAND.background, minHeight: '100vh' }}>
      <HeroSection
        title="Our Services & Process"
        subtitle="Discover our comprehensive business brokerage services and our proven step-by-step process to help you succeed."
        backgroundImage={servicesHeroImage}
      />

      {/* Services Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <ServiceCard 
                  component={motion.div} 
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedService(service)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <ServiceIcon>
                      {service.icon}
                    </ServiceIcon>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Hear from our clients
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <TestimonialCard>
                  <FormatQuoteIcon 
                    sx={{ 
                      fontSize: 60, 
                      color: 'rgba(86, 193, 188, 0.2)',
                      mb: 2 
                    }} 
                  />
                  <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
                    "{testimonial.text}"
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {testimonial.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.position}
                  </Typography>
                </TestimonialCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            {faqs.map((faq, index) => (
              <Accordion 
                key={index}
                sx={{
                  mb: 2,
                  borderRadius: '8px',
                  '&:before': { display: 'none' },
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      margin: '16px 0',
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Footer />

      {/* Service Details Modal */}
      <Dialog
        open={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
        maxWidth="md"
        fullWidth
      >
        {selectedService && (
          <>
            <DialogTitle>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <ServiceIcon sx={{ width: 60, height: 60 }}>
                  {selectedService.icon}
                </ServiceIcon>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  {selectedService.title}
                </Typography>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Typography variant="body1" paragraph>
                {selectedService.description}
              </Typography>
              <Typography variant="h6" sx={{ mt: 3, mb: 2, fontWeight: 600 }}>
                What's Included:
              </Typography>
              <Grid container spacing={2}>
                {selectedService.details.map((detail, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <TimelineIcon sx={{ color: BRAND.blue }} />
                      <Typography>{detail}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedService(null)}>Close</Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: BRAND.blue,
                  '&:hover': {
                    bgcolor: '#45a19d',
                  },
                }}
              >
                Get Started
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ServicesPage; 