import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia, Button, styled, Dialog, DialogTitle, DialogContent, DialogActions, Accordion, AccordionSummary, AccordionDetails, useMediaQuery, Link } from '@mui/material';
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

const BRAND = { blue: '#56C1BC' };

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
    boxShadow: `0 0 0 8px rgba(86,193,188,0.10), 0 0 32px 8px ${BRAND.blue}33, 0 12px 30px rgba(0,0,0,0.16)`
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
  '& svg': { fontSize: '40px' },
}));

const ProcessStep = styled(Card)(({ theme }) => ({
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
    boxShadow: `0 0 0 8px rgba(86,193,188,0.10), 0 0 32px 8px ${BRAND.blue}33, 0 12px 30px rgba(0,0,0,0.16)`
  },
}));

const ProcessIcon = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  minWidth: '80px',
  minHeight: '80px',
  maxWidth: '80px',
  maxHeight: '80px',
  aspectRatio: '1 / 1',
  borderRadius: '50%',
  backgroundColor: 'rgba(86, 193, 188, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 20px',
  boxShadow: '0 2px 8px rgba(86, 193, 188, 0.10)',
  transition: 'box-shadow 0.3s, transform 0.3s',
  '& svg': {
    fontSize: '40px',
    color: BRAND.blue,
  },
  '.MuiPaper-root:hover &, .MuiBox-root:hover &': {
    boxShadow: `0 0 0 8px rgba(86,193,188,0.10), 0 0 32px 8px ${BRAND.blue}33, 0 12px 30px rgba(0,0,0,0.16)`
  }
}));

const ProcessTitle = styled(Typography)(({ theme }) => ({
  color: BRAND.blue,
  fontWeight: 600,
  fontSize: '1.25rem',
  marginBottom: theme.spacing(1),
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

const ServicesProcessPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const isMobile = useMediaQuery('(max-width:900px)');

  const services = [
    {
      title: 'Business Appraisals',
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
      title: 'Mergers & Acquisitions',
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
      title: 'Business Advisory',
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
      title: 'Exit Strategy',
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

  const processSteps = [
    {
      number: '1',
      title: 'Consultation',
      description: 'Initial Consultation and a deep dive into your business operations to better advise you',
      icon: <HandshakeIcon />
    },
    {
      number: '2',
      title: 'Appraisal',
      description: 'Based on an Initial Consultation and finance assessment, we provide you with an appraisal for your business',
      icon: <AssessmentIcon />
    },
    {
      number: '3',
      title: 'Strategy Development',
      description: 'We develop a strategy around the potential sale of your business',
      icon: <TimelineIcon />
    },
    {
      number: '4',
      title: 'Strategic Marketing Plan',
      description: 'Strategic marketing on your business to best position it for sale to the right buyer',
      icon: <BusinessIcon />
    },
    {
      number: '5',
      title: 'Offer Reviews',
      description: 'We receive, vet and negotiate the best outcome for you',
      icon: <MonetizationOnIcon />
    },
    {
      number: '6',
      title: 'Post Sale',
      description: 'We help you with the sale and transition of business ownership',
      icon: <SupportAgentIcon />
    }
  ];

  const testimonials = [
    {
      quote: "Definitely recommend Sadeq and the team at Abbass Group for brokerage services for your business. From the initial meeting, what was meant to be a very difficult and emotional process was met with the utmost professionalism and sincerity, unlike a lot of the others out there. Always clear in their communication with weekly updates, but also candid in the market feedback they observe.",
      author: "Jordan",
      position: "Business Owner",
      company: "Successful Business Sale"
    },
    {
      quote: "I had a great experience with the Abbas Group. The team was outstanding! Very professional, friendly, and welcoming from the start. They were always willing to help, offering clear advice and support whenever I needed it. I was impressed by how knowledgeable and approachable everyone was.",
      author: "Agust",
      position: "Business Owner",
      company: "Successful Business Sale"
    },
    {
      quote: "I recently bought a cafe through Sadeq at Abbass Business Brokers, and I couldn't be happier with the experience. Sadeq was professional, knowledgeable, and made the process smooth and stress-free. He provided clear information and handled any issues quickly.",
      author: "Rahul",
      position: "Business Owner",
      company: "Successful Business Sale"
    }
  ];

  const faqs = [
    {
      question: "What businesses do you sell?",
      answer: "We sell a variety of businesses in the SME space spanning across hospitality, retail, manufacturing, transport and service based businesses"
    },
    {
      question: "What are your services?",
      answer: "We specialise in business sales but offer other services including business advisory, exit strategy development, business appraisals and marketing advice."
    },
    {
      question: "Why ABBASS Business Brokers?",
      answer: "We are a boutique Business Broking agency focused on providing exceptional customer service to a limited number of businesses at a time. We pride ourselves on being there for the client and going above and beyond to find the right buyer for your business."
    },
    {
      question: "What are your fees?",
      answer: "We run a success only business model. Our fees range depending on the level of service provided, which will be outlined in our initial consultation. We offer a no sale no fee guarantee."
    },
    {
      question: "Where are you located?",
      answer: "Our office is based in South Melbourne, Victoria and we operate across Victoria, Tasmania and Queensland."
    },
    {
      question: "How do I get started?",
      answer: "Reach out to us via email (info@abbass.group) or phone (03 9103 1317) to get started with an initial consultation.",
      answerWithLinks: (
        <Typography color="text.secondary">
          Reach out to us via email (
          <Link href="mailto:info@abbass.group" sx={{ color: BRAND.blue, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            info@abbass.group
          </Link>
          ) or phone (
          <Link href="tel:0391031317" sx={{ color: BRAND.blue, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            03 9103 1317
          </Link>
          ) to get started with an initial consultation.
        </Typography>
      )
    },
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
    <Box sx={{ background: '#f8f9fa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '75vh',
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '120px', // Account for header height
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 3,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  backgroundColor: BRAND.blue,
                  borderRadius: '2px',
                },
              }}
            >
              Our Services & Process
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                fontWeight: 400,
                opacity: 0.9,
                maxWidth: '800px',
                mx: 'auto',
                mb: 4,
              }}
            >
              Discover our comprehensive business brokerage services and our proven step-by-step process to help you succeed.
            </Typography>
          </Box>
        </Container>
      </Box>

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

      {/* Process Section */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        background: '#f8fdfd',
        position: 'relative' 
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ 
              fontWeight: 700, 
              mb: 2, 
              color: BRAND.blue,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}>
              Our Proven Process
            </Typography>
            <Typography variant="h6" sx={{ 
              color: 'text.secondary', 
              maxWidth: '700px', 
              mx: 'auto', 
              opacity: 0.8,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              mb: 6
            }}>
              We guide you through every step, from consultation to post-sale support, ensuring a seamless experience.
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {processSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{
                    background: 'white',
                    borderRadius: '24px',
                    p: 4,
                    width: '100%',
                    height: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  }}>
                    <Box sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(86, 193, 188, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3
                    }}>
                      <ProcessIcon>
                        {step.icon}
                      </ProcessIcon>
                    </Box>
                    <Typography sx={{
                      color: BRAND.blue,
                      fontSize: '1.25rem',
                      fontWeight: 500,
                      mb: 1
                    }}>
                      Step {step.number}:
                    </Typography>
                    <Typography sx={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#2c3e50',
                      mb: 2
                    }}>
                      {step.title}
                    </Typography>
                    <Typography sx={{
                      color: '#64748b',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      maxWidth: '280px',
                      mx: 'auto'
                    }}>
                      {step.description}
                    </Typography>
                  </Box>
                </motion.div>
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
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <FormatQuoteIcon sx={{ fontSize: '40px', color: BRAND.blue }} />
                  </Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 4,
                      fontSize: '1.1rem',
                      fontStyle: 'italic',
                      lineHeight: 1.6,
                      height: '200px',
                      overflow: 'auto'
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  <Box sx={{ 
                    mt: 'auto',
                    textAlign: 'center',
                    borderTop: '1px solid rgba(0,0,0,0.1)',
                    pt: 2
                  }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {testimonial.author}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
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

      <Footer />
    </Box>
  );
};

export default ServicesProcessPage; 