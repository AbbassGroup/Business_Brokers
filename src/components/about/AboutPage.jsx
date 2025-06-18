import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, styled, Button } from '@mui/material';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SchoolIcon from '@mui/icons-material/School';
import Footer from '../common/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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
  position: 'relative',
  minHeight: '75vh',
  backgroundColor: '#1a1a1a',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
  marginTop: '0',
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
}));

const ValueCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'white',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: `0 0 0 8px rgba(86,193,188,0.10), 0 0 32px 8px ${BRAND.blue}33, 0 12px 30px rgba(0,0,0,0.16)`
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

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: BRAND.cardBg,
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid rgba(255, 255, 255, 0.7)',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 30px rgba(86, 193, 188, 0.2)',
    border: '1px solid rgba(86, 193, 188, 0.3)',
  },
}));

const SocialButton = styled(Button)(({ theme }) => ({
  minWidth: 'auto',
  padding: '8px',
  marginRight: '8px',
  color: BRAND.blue,
  '&:hover': {
    backgroundColor: BRAND.lightBlue,
  },
}));

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const StaggerChildren = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

const DirectorSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: '#fff',
  padding: '80px 0',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    background: `linear-gradient(135deg, ${BRAND.lightBlue} 0%, rgba(255,255,255,0) 50%)`,
    zIndex: 0
  }
}));

const DirectorImageWrapper = styled(Box)({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '20px',
    left: '20px',
    width: '100%',
    height: '100%',
    background: `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.darkBlue} 100%)`,
    borderRadius: '20px',
    zIndex: 0,
    opacity: 0.1,
    transition: 'all 0.5s ease-in-out'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-15px',
    right: '-15px',
    width: '140px',
    height: '140px',
    background: `linear-gradient(45deg, ${BRAND.lightBlue} 0%, rgba(86, 193, 188, 0.2) 100%)`,
    borderRadius: '50%',
    zIndex: 0,
    opacity: 0.6
  },
  '&:hover::before': {
    top: '25px',
    left: '25px',
    opacity: 0.15
  }
});

const DirectorImage = styled('img')({
  width: '100%',
  maxWidth: '400px',
  borderRadius: '20px',
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  transition: 'all 0.5s ease-in-out',
  position: 'relative',
  zIndex: 1,
  background: 'white'
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

const AboutPage = () => {
  const values = [
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: BRAND.blue }} />,
      title: 'Trust',
      description: 'Building lasting relationships through transparency and reliability'
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: BRAND.blue }} />,
      title: 'Excellence',
      description: 'Delivering exceptional service and results in everything we do'
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40, color: BRAND.blue }} />,
      title: 'Commitment',
      description: 'Dedicated to achieving the best outcomes for our clients'
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40, color: BRAND.blue }} />,
      title: 'Convenience',
      description: 'Making real estate simple and accessible for everyone'
    },
    {
      icon: <WorkspacePremiumIcon sx={{ fontSize: 40, color: BRAND.blue }} />,
      title: 'Expertise',
      description: 'Bringing years of experience and market knowledge'
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

  const whyChooseUs = [
    {
      title: 'Proven Track Record',
      description: 'Successfully facilitated over 500+ business transactions across various industries.'
    },
    {
      title: 'Comprehensive Network',
      description: 'Access to a vast network of qualified buyers and industry connections.'
    },
    {
      title: 'Confidential Process',
      description: 'Strict confidentiality measures to protect your business interests.'
    },
    {
      title: 'Market Knowledge',
      description: 'Deep understanding of local and national market trends and valuations.'
    }
  ];

  const testimonials = [
    {
      text: `I wanted to express my gratitude to Asif for his exceptional assistance. He worked diligently to provide me with all the necessary information, answering my questions thoroughly and professionally. His dedication and expertise were truly impressive. Thank you, Asif, for your outstanding support!`,
      author: 'Kiran',
      position: 'Business Buyer',
    },
    {
      text: `My experience with Abbass Group was exceptional. As someone new to the process of purchasing a business, Sadeq made everything smooth and seamless. He was informative, responsive, and took the time to answer all of my questions in detail. I would definitely work with them again.`,
      author: 'Dan',
      position: 'Business Buyer',
    },
    {
      text: `Abbass and his team are highly professional and knowledgeable. He genuinely care about his clients. He provides clear, honest advice and goes the extra mile to help people achieve their property and business goals. His expertise, integrity and dedication make him a trusted advisor in the industry. Highly recommended!`,
      author: 'Huss',
      position: 'Business Owner',
    },
    {
      text: `Sadeq and his team are incredible. They are quite knowledgeable and diligent. Their service is incredible. All my communication were promptly responded to. All my questions and queries were satisfactorily addressed. Made the entire process smooth and assuring. Great team to have by your corner regardless what your needs are. Highly recommend Sadeq and his team.`,
      author: 'Nik',
      position: 'Business Owner',
    },
    {
      text: `I had a great experience with the Abbas Group. The team was outstanding! very professional, friendly, and welcoming from the start. They were always willing to help, offering clear advice and support whenever I needed it. I was impressed by how knowledgeable and approachable everyone was, making it easy to learn and feel comfortable. Abbas Group has a fantastic team that truly stands out for their dedication and teamwork. I highly recommend them!`,
      author: 'Agust',
      position: 'Business Owner',
    },
    {
      text: `The team's negotiation skills and level of service and commitment was unparalleled. Highly recommended!`,
      author: 'Jason',
      position: 'Business Buyer',
    },
    {
      text: `Definitely recommend Sadeq and the team at Abbass Group for brokerage services for your business. From the initial meeting, what was meant to be a very difficult and emotional process was met with the utmost professionalism and sincerity, unlike a lot of the others out there. Always clear in their communication with weekly updates, but also candid in the market feedback they observe. I was able to rest assured knowing these guys were working around the clock to fulfill a quick sale of my business which is what I had requested. Not to mention all for a very reasonable fee. Thank you team and all the best.`,
      author: 'Jordan',
      position: 'Business Owner',
    },
    {
      text: `Abbass Brokers was instrumental in helping us find the perfect buyer. Their`,
      author: 'Adisha',
      position: 'Business Owner',
    },
  ];

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const navigate = useNavigate();

  return (
    <Box sx={{ background: BRAND.background, minHeight: '100vh' }}>
      <ScrollProgressBar style={{ scaleX }} />

      {/* Hero Section */}
      <HeroSection>
        <Container 
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            py: { xs: 8, md: 12 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                fontWeight: 700,
                mb: { xs: 3, md: 4 },
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '-0.02em'
              }}
            >
              About <Box component="span" sx={{ color: BRAND.blue }}>ABBASS</Box> Business Brokers
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                opacity: 0.9,
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                fontWeight: 400,
                lineHeight: 1.5,
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                mb: { xs: 4, md: 6 }
              }}
            >
              A boutique firm delivering tailored, high-impact outcomes for business owners
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 10 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <FadeInWhenVisible>
              <Box sx={{ px: { xs: 2, md: 0 } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.75rem', md: '2.5rem' },
                    fontWeight: 700,
                    color: BRAND.textDark,
                    mb: { xs: 2, md: 3 },
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
                  Our Story
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: BRAND.textGray,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                    mb: 3,
                    textAlign: 'justify'
                  }}
                >
                  ABBASS Business Brokers was founded to raise the standard in an industry where too many brokers focus on volume over value, listing dozens of businesses with little intention or ability to sell them. We do things differently. We're a boutique firm that works with a select number of clients at a time, ensuring every business we represent receives the attention, care, and strategic focus it deserves. Our approach is grounded in five core values: trust, earned through transparency; expertise, developed through real market experience; excellence, delivered in every detail; commitment, to seeing each deal through with dedication; and convenience, by making the process as smooth and stress free as possible. At ABBASS, we don't just facilitate sales, we guide business owners through one of the most important transactions of their lives with clarity, respect, and results.
                </Typography>
              </Box>
            </FadeInWhenVisible>
          </Grid>
          <Grid item xs={12} md={6}>
            <FadeInWhenVisible delay={0.2}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                sx={{
                  width: '100%',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  display: 'block',
                  mx: 'auto',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateY(0deg)'
                  }
                }}
                alt="Our office"
              />
            </FadeInWhenVisible>
          </Grid>
        </Grid>
      </Container>

      {/* Managing Director Section */}
      <DirectorSection>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <FadeInWhenVisible>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <DirectorImageWrapper>
                    <DirectorImage
                      src="/IMG_3392.JPG"
                      alt="Sadeq Abbass - Managing Director"
                      sx={{
                        filter: 'brightness(1.02) contrast(1.02)',
                        '&:hover': {
                          boxShadow: `0 25px 50px rgba(86, 193, 188, 0.2)`,
                          transform: 'translateY(-5px)'
                        }
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: '-20px',
                        right: '-20px',
                        width: '200px',
                        height: '200px',
                        background: `radial-gradient(circle, ${BRAND.lightBlue} 0%, rgba(255,255,255,0) 70%)`,
                        opacity: 0.4,
                        zIndex: 0,
                        borderRadius: '50%'
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '-30px',
                        left: '-30px',
                        width: '150px',
                        height: '150px',
                        background: `radial-gradient(circle, ${BRAND.lightBlue} 0%, rgba(255,255,255,0) 70%)`,
                        opacity: 0.3,
                        zIndex: 0,
                        borderRadius: '50%'
                      }}
                    />
                  </DirectorImageWrapper>
                </motion.div>
              </FadeInWhenVisible>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <FadeInWhenVisible delay={0.2}>
                  <Typography
                    component={motion.h2}
                    variant="h2"
                    whileInView={{ 
                      opacity: [0, 1],
                      x: [-50, 0] 
                    }}
                    transition={{ duration: 0.8 }}
                    sx={{
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      fontWeight: 700,
                      color: BRAND.textDark,
                      mb: 3,
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
                    Meet Our Managing Director
                  </Typography>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.3}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: BRAND.blue,
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                      fontWeight: 600,
                      mb: 3
                    }}
                  >
                    Sadeq Abbass
                  </Typography>
                </FadeInWhenVisible>

                <StaggerChildren>
                  {[
                    "Sadeq Abbass is a licensed business broker, finance broker, and real estate agent with a rare mix of frontline experience and strategic thinking. As a strategic deal maker and business and wealth builder, Sadeq has bought and sold businesses of his own, giving him a firsthand understanding of what's at stake when entrepreneurs decide to exit. Those experiences also exposed him to a disappointing reality: too many business brokers lack the drive, depth, and accountability required to truly represent their clients' interests.",
                    "That frustration became fuel. Determined to raise the bar, Sadeq founded ABBASS Business Brokers. A boutique firm designed to do what traditional agencies can't or won't. Rather than chasing listings, he focuses on results, working with a select group of clients to deliver tailored, high-impact outcomes. His approach is personal, professional, and rooted in strategy, offering business owners not just a sale, but a smart next chapter"
                  ].map((paragraph, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: BRAND.textGray,
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          lineHeight: 1.8,
                          mb: 3,
                          textAlign: 'justify'
                        }}
                      >
                        {paragraph}
                      </Typography>
                    </motion.div>
                  ))}
                </StaggerChildren>

                <FadeInWhenVisible delay={0.5}>
                  <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                    <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="contained"
                        startIcon={<LinkedInIcon />}
                        sx={{
                          backgroundColor: BRAND.blue,
                          color: 'white',
                          px: 3,
                          py: 1.5,
                          borderRadius: '10px',
                          '&:hover': { backgroundColor: BRAND.darkBlue }
                        }}
                        component="a"
                        href="https://www.linkedin.com/in/sadeqabbass/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                      >
                        LinkedIn
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="contained"
                        startIcon={<EmailIcon />}
                        sx={{
                          backgroundColor: BRAND.blue,
                          color: 'white',
                          px: 3,
                          py: 1.5,
                          borderRadius: '10px',
                          '&:hover': { backgroundColor: BRAND.darkBlue }
                        }}
                        component="a"
                        href="mailto:sadeq@abbass.group"
                        aria-label="Email Sadeq Abbass"
                      >
                        Email
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="contained"
                        startIcon={<PhoneIcon />}
                        sx={{
                          backgroundColor: BRAND.blue,
                          color: 'white',
                          px: 3,
                          py: 1.5,
                          borderRadius: '10px',
                          '&:hover': { backgroundColor: BRAND.darkBlue }
                        }}
                        component="a"
                        href="tel:0391031317"
                        aria-label="Call Sadeq Abbass"
                      >
                        Contact
                      </Button>
                    </motion.div>
                  </Box>
                </FadeInWhenVisible>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </DirectorSection>

      {/* Our Values Section */}
      <Box sx={{ 
        background: '#f8fdfd',
        py: { xs: 8, md: 12 }
      }}>
        <Container maxWidth="lg">
          <FadeInWhenVisible>
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                color: '#2c3e50',
                mb: 2,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: BRAND.blue,
                  borderRadius: '2px'
                }
              }}
            >
              Our Values
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{
                color: '#64748b',
                mb: { xs: 6, md: 8 },
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.25rem'
              }}
            >
              The principles that guide us in delivering exceptional real estate services
            </Typography>
          </FadeInWhenVisible>

          <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
            <Grid container spacing={3} alignItems="stretch">
              {values.map((value, index) => (
                <Grid item xs={12} sm={6} md={2.4} key={index}>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    style={{ height: '100%' }}
                  >
                    <ValueCard sx={{ 
                      width: '100%',
                      height: '100%',
                      minHeight: '260px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <CardContent sx={{ 
                        p: 4,
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: 2
                      }}>
                        <Box sx={{ 
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(86, 193, 188, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                          overflow: 'hidden'
                        }}>
                          {value.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: '#2c3e50',
                            fontSize: '1.25rem',
                            mb: 1
                          }}
                        >
                          {value.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#64748b',
                            fontSize: '1rem',
                            lineHeight: 1.6,
                            textAlign: 'center',
                            maxWidth: '200px'
                          }}
                        >
                          {value.description}
                        </Typography>
                      </CardContent>
                    </ValueCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 10 } }}>
        <FadeInWhenVisible>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              fontWeight: 700,
              color: BRAND.textDark,
              mb: { xs: 4, md: 6 },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: BRAND.blue,
                borderRadius: '2px'
              }
            }}
          >
            Why Choose Us
          </Typography>
        </FadeInWhenVisible>
        <StaggerChildren>
          <Grid container spacing={4}>
            {whyChooseUs.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircleIcon sx={{ color: BRAND.blue, mt: 0.5 }} />
                    </motion.div>
                    <Box>
                      <Typography variant="h6" sx={{ color: BRAND.textDark, mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: BRAND.textGray }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </StaggerChildren>
      </Container>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 10 } }}>
        <FadeInWhenVisible>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              fontWeight: 700,
              color: BRAND.textDark,
              mb: { xs: 4, md: 6 },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: BRAND.blue,
                borderRadius: '2px'
              }
            }}
          >
            Hear from our clients
          </Typography>
        </FadeInWhenVisible>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          style={{ paddingBottom: 40 }}
          breakpoints={{
            900: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card sx={{
                height: '100%',
                minHeight: 340,
                maxHeight: 340,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 4,
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                position: 'relative',
              }}>
                <FormatQuoteIcon sx={{ fontSize: 60, color: 'rgba(86, 193, 188, 0.2)', mb: 2 }} />
                <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', color: BRAND.textGray, minHeight: 120, maxHeight: 120, overflow: 'auto' }}>
                  "{testimonial.text}"
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, color: BRAND.textDark }}>
                  {testimonial.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.position}
                </Typography>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* Contact CTA Section */}
      <Box 
        component={motion.div}
        initial={{ backgroundColor: BRAND.blue }}
        whileHover={{ backgroundColor: BRAND.darkBlue }}
        transition={{ duration: 0.3 }}
        sx={{ 
          py: { xs: 6, md: 10 },
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <FadeInWhenVisible>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.75rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 3
              }}
            >
              Ready to Start Your Journey?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                mb: 4,
                opacity: 0.9
              }}
            >
              Let's discuss how we can help you achieve your business goals
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/contact')}
                sx={{
                  backgroundColor: 'white',
                  color: BRAND.blue,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.9)',
                  }
                }}
              >
                Contact Us Today
              </Button>
            </motion.div>
          </FadeInWhenVisible>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutPage; 