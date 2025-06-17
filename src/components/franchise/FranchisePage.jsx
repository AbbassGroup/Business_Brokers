import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Accordion, AccordionSummary, AccordionDetails, TextField, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SchoolIcon from '@mui/icons-material/School';
import Footer from '../common/Footer';

const BRAND = {
  blue: '#56C1BC',
  darkBlue: '#45a19d',
  background: '#181818',
  cardBg: '#fff',
  textDark: '#2c3e50',
  textGray: '#64748b'
};

const faqs = [
  {
    q: 'Why buy a franchise when you can start a business?',
    a: 'Becoming a franchise partner recuces the risk substantially and as such reducing costs. There is also a shorter lead time to start earning due to following a proven and successful formula'
  },
  {
    q: 'Do I need to have business broking experience?',
    a: 'No. We will provide you with the toolkit provided to excel in your role however we look for franchise partners with a strong foundation in business operations including financial literacy and ideally experience in ownership and management.'
  },
  {
    q: 'What support & training is provided?',
    a: 'A comprehensive training program is in place which will cover sales training, process training, systems training as well as financial analysis training. Additional ongoing support & training is also available.'
  },
  {
    q: 'Why ABBASS Business Brokers?',
    a: 'Leverage from an interconnected international brand that\'s being recognised exponentially by Australians.'
  },
  {
    q: 'How does a Business Brokers franchise compare to Real Estate?',
    a: 'A Real estate franchise has higher start up and ongoing fees and requires greater overheads to operate. Business Broking provides greater opportunity as there are currently only ~1,500 active business brokers in Australia compared to ~50,000 registered in real estate.'
  }
];

const benefits = [
  {
    label: 'Unlimited earning potential',
    icon: <AttachMoneyIcon sx={{ color: BRAND.blue, fontSize: 36, mb: 1 }} />
  },
  {
    label: 'Flexible work-life balance',
    icon: <AccessTimeIcon sx={{ color: BRAND.blue, fontSize: 36, mb: 1 }} />
  },
  {
    label: 'Rewarding and impactful career',
    icon: <EmojiEventsIcon sx={{ color: BRAND.blue, fontSize: 36, mb: 1 }} />
  },
  {
    label: 'High-value niche industry',
    icon: <BusinessCenterIcon sx={{ color: BRAND.blue, fontSize: 36, mb: 1 }} />
  },
  {
    label: 'Dynamic and growing marketplace',
    icon: <TrendingUpIcon sx={{ color: BRAND.blue, fontSize: 36, mb: 1 }} />
  },
  {
    label: 'Comprehensive training and support',
    icon: <SchoolIcon sx={{ color: BRAND.blue, fontSize: 36, mb: 1 }} />
  }
];

const whyJoin = [
  {
    title: 'Market Opportunity',
    desc: 'Capitalise on the growing wave of business transitions as baby boomers retire, creating unprecedented opportunities in the business sales market.'
  },
  {
    title: 'Network',
    desc: 'Leverage from an interconnected multinational brand. Our established brand and marketing systems deliver a consistent pipeline of opportunities to our brokers.'
  },
  {
    title: 'Expert Training',
    desc: 'Access comprehensive systems, process and sales training through, providing you with the skills, knowledge, and support needed to successfully broker business deals.'
  },
  {
    title: 'Attractive Compensation',
    desc: 'Benefit from our competitive commission structure and rewards program. We\'ve designed our model to maximise earnings for dedicated brokers.'
  },
  {
    title: 'Advanced Platform',
    desc: 'Leverage our cutting-edge brokerage platform featuring advanced systems and tools, and marketing automation to streamline your operations.'
  },
  {
    title: 'Specialization',
    desc: 'Develop your expertise in specific industries or niches. We support brokers in building their reputation in sectors they\'re passionate about.'
  }
];

const FranchisePage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: BRAND.background,
          color: 'white',
          py: { xs: 8, md: 12 },
          overflow: 'hidden',
        }}
      >
        {/* Hero background gradient or pattern */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            background: 'radial-gradient(ellipse at 60% 40%, #56C1BC33 0%, #181818 70%)',
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
          <Box sx={{ flex: 1, pr: { md: 8 }, mb: { xs: 4, md: 0 } }}>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2rem', md: '2.8rem' } }}>
              Welcome To The World Of <br /> ABBASS Business Brokers
            </Typography>
            <Typography variant="h4" sx={{ color: BRAND.blue, fontWeight: 600, mb: 2, fontSize: { xs: '1.2rem', md: '1.6rem' } }}>
              Join Our Elite Network of Experts
            </Typography>
            <Typography sx={{ mb: 3, color: 'rgba(255,255,255,0.9)', fontSize: { xs: '1rem', md: '1.2rem' } }}>
              Take your career to the next level as an ABBASS Business Broker. Unlock unparalleled opportunities to grow your wealth, expand your professional network, and empower entrepreneurs in making their most critical business decisions. Enjoy the freedom to work on your terms while building a truly rewarding and impactful career.
            </Typography>
            <Typography sx={{ fontWeight: 600, mt: 2 }}>Sadeq Abbass</Typography>
            <Typography sx={{ fontWeight: 400, mb: 2 }}>Managing Director | ABBASS Group</Typography>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img src="/IMG_3391.JPG" alt="Sadeq Abbass" style={{ maxWidth: 380, width: '100%', borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }} />
          </Box>
        </Container>
      </Box>

      {/* Videos Section */}
      <Box sx={{ bgcolor: 'linear-gradient(135deg, #f8fafd 0%, #e6f7fa 100%)', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 5, color: BRAND.textDark }}>
            Hear from Our Team & Learn More
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              { src: '/ABBASS Testimonials.mp4', label: 'ABBASS Testimonials' },
              { src: '/Frequent Asked Questions.mp4', label: 'Frequently Asked Questions' },
              { src: '/Introduction to Franchising at ABBASS.mp4', label: 'Introduction to Franchising' }
            ].map((vid, idx) => (
              <Grid item xs={12} sm={6} md={4} key={vid.src} sx={{ display: 'flex' }}>
                <Card
                  sx={{
                    flex: 1,
                    p: 3,
                    borderRadius: 5,
                    boxShadow: '0 4px 32px rgba(86, 193, 188, 0.10)',
                    bgcolor: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'box-shadow 0.3s, transform 0.3s',
                    '&:hover': {
                      boxShadow: '0 0 24px 4px #56C1BC, 0 8px 32px rgba(86, 193, 188, 0.15)',
                      transform: 'translateY(-4px) scale(1.03)',
                    },
                  }}
                >
                  <Box sx={{ width: '100%', mb: 2, borderRadius: 3, overflow: 'hidden', boxShadow: '0 2px 12px rgba(44,62,80,0.08)' }}>
                    <video
                      controls
                      width="100%"
                      style={{
                        borderRadius: 12,
                        background: '#000',
                        minHeight: 180,
                        maxHeight: 260,
                        objectFit: 'cover',
                        width: '100%'
                      }}
                    >
                      <source src={vid.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: BRAND.blue,
                      fontWeight: 700,
                      textAlign: 'center',
                      fontSize: '1.15rem',
                      mt: 1,
                      letterSpacing: 0.2,
                    }}
                  >
                    {vid.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 6, md: 10 }, px: 1 }}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 4, color: BRAND.textDark }}>
            Benefits of being a Business Broker
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {benefits.map((b, i) => (
              <Grid item xs={12} sm={6} md={4} key={b.label} sx={{ display: 'flex' }}>
                <Card
                  sx={{
                    flex: 1,
                    minHeight: 150,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    boxShadow: '0 4px 24px rgba(86, 193, 188, 0.10)',
                    transition: 'box-shadow 0.3s, transform 0.3s',
                    textAlign: 'center',
                    bgcolor: '#fff',
                    p: 3,
                    '&:hover': {
                      boxShadow: '0 0 24px 4px #56C1BC, 0 8px 32px rgba(86, 193, 188, 0.15)',
                      transform: 'translateY(-4px) scale(1.03)',
                    },
                  }}
                >
                  {b.icon}
                  <Typography variant="h6" sx={{ color: BRAND.blue, fontWeight: 700, mb: 1, fontSize: '1.25rem' }}>{b.label}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Join ABBASS Section */}
      <Box sx={{ position: 'relative', py: { xs: 6, md: 10 }, overflow: 'hidden' }}>
        {/* Section background image and overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            background: `url('/why-join-bg.jpg') center/cover no-repeat`,
            filter: 'brightness(0.5) blur(0.5px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            background: 'linear-gradient(120deg, #181818cc 60%, #56C1BC22 100%)',
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 4, color: 'white' }}>
            Why join <Box component="span" sx={{ color: BRAND.blue, display: 'inline' }}>ABBASS</Box>
          </Typography>
          <Grid container spacing={4}>
            {whyJoin.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={item.title}>
                <Card sx={{ p: 4, borderRadius: 3, boxShadow: 2, textAlign: 'center', bgcolor: BRAND.cardBg, minHeight: 180 }}>
                  <Typography variant="h6" sx={{ color: BRAND.blue, fontWeight: 700, mb: 1 }}>{item.title}</Typography>
                  <Typography sx={{ color: BRAND.textGray }}>{item.desc}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 4, color: BRAND.textDark }}>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, i) => (
          <Accordion key={i} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 600 }}>{faq.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      {/* Contact Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="sm">
          <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 2 }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 3, color: BRAND.textDark }}>
              Contact Us To Learn More
            </Typography>
            <form>
              <TextField label="Name" name="name" fullWidth sx={{ mb: 2 }} />
              <TextField label="Email" name="email" fullWidth sx={{ mb: 2 }} />
              <TextField label="Contact Number" name="phone" fullWidth sx={{ mb: 2 }} />
              <TextField label="Message" name="message" fullWidth multiline rows={4} sx={{ mb: 3 }} />
              <Button variant="contained" color="primary" fullWidth sx={{ bgcolor: BRAND.blue, color: 'white', fontWeight: 600 }}>
                Send
              </Button>
            </form>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default FranchisePage; 