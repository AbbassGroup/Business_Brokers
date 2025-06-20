import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from '../common/Footer';

const BRAND = {
  blue: '#56C1BC',
  lightBlue: 'rgba(86, 193, 188, 0.1)',
  darkBlue: '#45a19d',
  textDark: '#2c3e50',
  textGray: '#64748b'
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: '16px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.7)',
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const PrivacyPolicy = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, flex: 1 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '2.75rem' },
            fontWeight: 700,
            color: BRAND.textDark,
            mb: 4,
            textAlign: 'center',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: `linear-gradient(to right, ${BRAND.blue}, ${BRAND.darkBlue})`,
              borderRadius: '2px',
            }
          }}
        >
          Privacy Policy
        </Typography>

        <StyledPaper>
          <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 4 }}>
            This Privacy Policy applies to all personal information collected by Abbass Advocacy Pty Ltd via the website located at https://abbass.com.au/businessbrokers/.
          </Typography>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              1. What is "personal information"?
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              The Privacy Act 1988 (Cth) currently defines "personal information" as meaning information or an opinion about an identified individual or an individual who is reasonably identifiable:
              whether the information or opinion is true or not; and
              whether the information or opinion is recorded in a material form or not.
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mt: 2 }}>
              If the information does not disclose your identity or enable your identity to be ascertained, it will in most cases not be classified as "personal information" and will not be subject to this privacy policy.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              2. What information do we collect?
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              The kind of personal information that we collect from you will depend on how you use the website. The personal information which we collect and hold about you may include: Full name, email address and contact number.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              3. How we collect your personal information
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              (a) We may collect personal information from you whenever you input such information into the website.
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              (b) We also collect cookies from your computer which enable us to tell when you use the website and also to help customise your website experience. As a general rule, however, it is not possible to identify you personally from our use of cookies.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              4. Purpose of collection
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              (a) The purpose for which we collect personal information is to provide you with the best service experience possible on the website.
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              (b) We customarily disclose personal information only to our service providers who assist us in operating the website. Your personal information may also be exposed from time to time to maintenance and support personnel acting in the normal course of their duties.
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              (c) By using our website, you consent to the receipt of direct marketing material. We will only use your personal information for this purpose if we have collected such information direct from you, and if it is material of a type which you would reasonably expect to receive from us. We do not use sensitive personal information in direct marketing activity. Our direct marketing material will include a simple means by which you can request not to receive further communications of this nature.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              5. Access and correction
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              Australian Privacy Principle 12 permits you to obtain access to the personal information we hold about you in certain circumstances, and Australian Privacy Principle 13 allows you to correct inaccurate personal information subject to certain exceptions. If you would like to obtain such access, please contact us as set out below.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              6. Complaint procedure
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              If you have a complaint concerning the manner in which we maintain the privacy of your personal information, please contact us as set out below. All complaints will be considered by Abbass Advocacy Pty Ltd and we may seek further information from you to clarify your concerns. If we agree that your complaint is well founded, we will, in consultation with you, take appropriate steps to rectify the problem. If you remain dissatisfied with the outcome, you may refer the matter to the Office of the Australian Information Commissioner.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              7. Overseas transfer
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              Your personal information may be transferred to recipients located in countries outside of Australia. Those countries in question have data protection laws which protect personal information in a way which is at least substantially similar to the Australian Privacy Principles, and there will be mechanisms available to you to enforce protection of your personal information under that overseas law. In the circumstances, we do not require the overseas recipients to comply with the Australian Privacy Principles and we will not be liable for a breach of the Australian Privacy Principles if your personal information is mishandled.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              8. How to contact us about privacy
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              If you have any queries, or if you seek access to your personal information, or if you have a complaint about our privacy practices, you can contact us through: info@abbass.com.au
            </Typography>
          </Section>
        </StyledPaper>
      </Container>
      <Footer />
    </Box>
  );
};

export default PrivacyPolicy; 