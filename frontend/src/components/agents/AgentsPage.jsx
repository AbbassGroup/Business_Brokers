import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia, styled, Button, IconButton } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import StarIcon from '@mui/icons-material/Star';
import Footer from '../common/Footer';
import HeroSection from '../common/HeroSection';

// Replace the image import with a constant
const agentsHeroImage = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80";

const BRAND = {
  blue: '#56C1BC',
  lightBlue: 'rgba(86, 193, 188, 0.1)',
  darkBlue: '#45a19d',
  background: '#f0f2f5',
  cardBg: 'rgba(255, 255, 255, 0.9)',
  textDark: '#2c3e50',
  textGray: '#64748b'
};

const AgentCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '700px',
  background: 'white',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(86, 193, 188, 0.15)',
  },
}));

const AgentImage = styled('img')({
  width: '110%',
  height: '320px',
  objectFit: 'cover',
  borderBottom: `4px solid ${BRAND.blue}`
});

const ScrollProgressBar = styled(motion.div)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '3px',
  background: BRAND.blue,
  transformOrigin: '0%',
  zIndex: 1000
});

const SocialIcon = styled(Box)(({ theme }) => ({
  color: BRAND.blue,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: BRAND.darkBlue,
    transform: 'translateY(-2px)',
  },
}));

const AgentsPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const agents = [
    {
      name: 'Asif Ahammed',
      title: 'Business Broker',
      image: '/Asif.jpg',
      location: 'Victoria & Tasmania',
      specialization: 'Hospitality & Service Based Businesses',
      bio: `I'm a results-focused business broker with hands-on experience in business sales across various sectors. My strengths lie in understanding both the financial and emotional aspects of business transitions, ensuring a smooth and rewarding experience for all parties involved. With deep knowledge of Victoria and Tasmania markets, I help connect serious buyers with the right opportunities.`,
      tags: [
        'Licenced business broker',
        'Strong domestic & international network',
        'SME business sale expert'
      ],
      email: 'asif.ahammed@abbass.group',
      phone: '0451 918 152',
      linkedin: ''
    },
    {
      name: 'Freddie Wong',
      title: 'Business Broker',
      image: '/Freddie Wong.jpg',
      location: 'Victoria',
      specialization: 'SME Businesses',
      bio: `I'm a Business Broker who is proficient in business valuation, analysing financial statements, market trends, and industry benchmarks to estimate a business's fair market value. I focus on maintaining strict confidentiality to protect sensitive business details and have experience in marketing businesses strategically to obtain the best ultimate selling price.`,
      tags: [
        'Licenced business broker',
        'Strong financial analysis & valuations',
        'SME business sale expert'
      ],
      email: 'freddie.wong@abbass.group',
      phone: '0452 655 608',
      linkedin: 'https://www.linkedin.com/in/freddie-wong-3926b388/'
    },
    {
      name: 'Hicham Nahas',
      title: 'Business Broker',
      image: '/IMG_3531.png',
      location: 'Melbourne',
      specialization: 'SME Businesses',
      bio: `I'm a business broker who has had a successful track record of selling businesses in the SME space. I have a strong financial and valuation background and focus on providing exceptional customer service.`,
      tags: [
        'Licenced business broker',
        'Strong financial analysis',
        'SME business sale expert'
      ],
      email: 'hicham.nahas@abbass.group',
      phone: '0423 241 225',
      linkedin: 'https://www.linkedin.com/in/hicham-nahas-9a1bb5202/'
    }
  ];

  return (
    <Box sx={{ background: BRAND.background, minHeight: '100vh' }}>
      <ScrollProgressBar style={{ scaleX }} />

      <HeroSection
        title="Meet Our Agents"
        subtitle="Expert business brokers dedicated to your success"
        backgroundImage={agentsHeroImage}
      />

      {/* Agents Grid Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          {agents.map((agent, index) => (
            <Grid item xs={12} md={4} key={index} style={{ height: '100%' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <AgentCard style={{ height: '100%' }}>
                  <AgentImage src={agent.image} alt={agent.name} />
                  <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Box>
                      <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, color: BRAND.textDark }}>
                        {agent.name}
                      </Typography>
                      <Typography variant="h6" sx={{ color: BRAND.blue, mb: 2 }}>
                        {agent.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <LocationOnIcon sx={{ color: BRAND.blue, mr: 1 }} />
                        <Typography variant="body1" sx={{ color: BRAND.textGray }}>
                          {agent.location}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <BusinessIcon sx={{ color: BRAND.blue, mr: 1 }} />
                        <Typography variant="body1" sx={{ color: BRAND.textGray }}>
                          {agent.specialization}
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ color: BRAND.textGray, my: 2, display: '-webkit-box', WebkitLineClamp: 7, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {agent.bio}
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 'auto' }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {agent.tags.map((tag, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              bgcolor: BRAND.lightBlue,
                              px: 2,
                              py: 0.5,
                              borderRadius: '15px',
                              fontSize: '0.95rem',
                              color: BRAND.blue,
                              fontWeight: 500
                            }}
                          >
                            <StarIcon sx={{ color: BRAND.blue, fontSize: '0.9rem', mr: 0.5 }} />
                            {tag}
                          </Box>
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <IconButton
                            component="a"
                            href={agent.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              bgcolor: BRAND.lightBlue,
                              color: BRAND.blue,
                              '&:hover': {
                                bgcolor: BRAND.blue,
                                color: 'white'
                              }
                            }}
                          >
                            <LinkedInIcon />
                          </IconButton>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <IconButton
                            component="a"
                            href={`mailto:${agent.email}`}
                            sx={{
                              bgcolor: BRAND.lightBlue,
                              color: BRAND.blue,
                              '&:hover': {
                                bgcolor: BRAND.blue,
                                color: 'white'
                              }
                            }}
                          >
                            <EmailIcon />
                          </IconButton>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <IconButton
                            component="a"
                            href={`tel:${agent.phone.replace(/\s/g, '')}`}
                            sx={{
                              bgcolor: BRAND.lightBlue,
                              color: BRAND.blue,
                              '&:hover': {
                                bgcolor: BRAND.blue,
                                color: 'white'
                              }
                            }}
                          >
                            <PhoneIcon />
                          </IconButton>
                        </motion.div>
                      </Box>
                    </Box>
                  </CardContent>
                </AgentCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default AgentsPage; 