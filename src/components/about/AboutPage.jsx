import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, styled } from '@mui/material';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StarIcon from '@mui/icons-material/Star';

const BRAND = {
  blue: '#56C1BC',
  lightBlue: 'rgba(86, 193, 188, 0.1)',
  darkBlue: '#45a19d',
  background: '#f0f2f5',
  cardBg: 'rgba(255, 255, 255, 0.9)',
  textDark: '#2c3e50',
  textGray: '#64748b'
};

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '60vh',
  backgroundColor: '#1a1a1a',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  color: 'white',
  textAlign: 'center',
}));

const ValueCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: BRAND.cardBg,
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid rgba(255, 255, 255, 0.7)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 30px rgba(86, 193, 188, 0.2)',
    border: '1px solid rgba(86, 193, 188, 0.3)',
  },
}));

const TeamMemberCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: BRAND.cardBg,
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid rgba(255, 255, 255, 0.7)',
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 30px rgba(86, 193, 188, 0.2)',
    border: '1px solid rgba(86, 193, 188, 0.3)',
  },
}));

const TeamMemberImage = styled('img')({
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  margin: '20px auto',
  border: `3px solid ${BRAND.blue}`,
  padding: '5px',
});

const AboutPage = () => {
  const values = [
    {
      icon: <BusinessIcon sx={{ fontSize: 40, color: BRAND.blue }} />,
      title: 'Professional Excellence',
      description: 'We maintain the highest standards of professionalism in every business transaction.'
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40, color: BRAND.blue }} />,
      title: 'Trust & Integrity',
      description: 'Building lasting relationships through honest and transparent dealings.'
    },
    {
      icon: <StarIcon sx={{ fontSize: 40, color: BRAND.blue }} />,
      title: 'Industry Expertise',
      description: 'Deep understanding of the business brokerage market and industry trends.'
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: BRAND.blue }} />,
      title: 'Client-Focused',
      description: 'Dedicated to achieving the best outcomes for our clients through personalized service.'
    }
  ];

  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      description: '15+ years of experience in business brokerage and strategic acquisitions.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Senior Business Broker',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
      description: 'Specializing in retail and hospitality business sales.'
    },
    {
      name: 'Michael Chen',
      position: 'Business Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      description: 'Expert in business valuation and market analysis.'
    },
    {
      name: 'Emily Brown',
      position: 'Client Relations Manager',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80',
      description: 'Dedicated to ensuring exceptional client experience throughout the sales process.'
    }
  ];

  return (
    <Box sx={{ background: BRAND.background, minHeight: '100vh' }}>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 3
            }}
          >
            About Abbass Business Brokers
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              opacity: 0.9
            }}
          >
            Your trusted partner in business sales and acquisitions since 2005
          </Typography>
        </Container>
      </HeroSection>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                color: BRAND.textDark,
                mb: 3
              }}
            >
              Our Story
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: BRAND.textGray,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                mb: 3
              }}
            >
              Founded in 2005, Abbass Business Brokers has established itself as a leading force in the business brokerage industry. Our journey began with a simple mission: to provide exceptional service in business sales and acquisitions while maintaining the highest standards of professionalism and integrity.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: BRAND.textGray,
                fontSize: '1.1rem',
                lineHeight: 1.8
              }}
            >
              Over the years, we've successfully facilitated hundreds of business transactions across various industries, building a reputation for excellence and reliability. Our team of experienced professionals brings together extensive knowledge of the market, ensuring the best possible outcomes for our clients.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              sx={{
                width: '100%',
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
              alt="Our office"
            />
          </Grid>
        </Grid>
      </Container>

      {/* Our Values Section */}
      <Box sx={{ background: BRAND.lightBlue, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: BRAND.textDark,
              mb: 6
            }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ValueCard component={motion.div} whileHover={{ y: -5 }}>
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Box sx={{ mb: 2 }}>
                      {value.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: BRAND.textDark,
                        mb: 2
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: BRAND.textGray
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </ValueCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Team Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            color: BRAND.textDark,
            mb: 6
          }}
        >
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <TeamMemberCard component={motion.div} whileHover={{ y: -5 }}>
                <TeamMemberImage
                  src={member.image}
                  alt={member.name}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: BRAND.textDark,
                      mb: 1
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: BRAND.blue,
                      fontWeight: 500,
                      mb: 2
                    }}
                  >
                    {member.position}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: BRAND.textGray
                    }}
                  >
                    {member.description}
                  </Typography>
                </CardContent>
              </TeamMemberCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage; 