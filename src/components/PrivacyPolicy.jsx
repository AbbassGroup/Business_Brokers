import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import Footer from './common/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper elevation={0} sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
            Privacy Policy
          </Typography>

          <Typography paragraph>
            This Privacy Policy applies to all personal information collected by Abbass Advocacy Pty Ltd via the website located at https://abbass.com.au/businessbrokers/.
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>1. What is "personal information"?</Typography>
            <Typography paragraph>
              The Privacy Act 1988 (Cth) currently defines "personal information" as meaning information or an opinion about an identified individual or an individual who is reasonably identifiable:
            </Typography>
            <Typography component="div" sx={{ pl: 3 }}>
              <ul>
                <li>whether the information or opinion is true or not; and</li>
                <li>whether the information or opinion is recorded in a material form or not.</li>
              </ul>
            </Typography>
            <Typography paragraph>
              If the information does not disclose your identity or enable your identity to be ascertained, it will in most cases not be classified as "personal information" and will not be subject to this privacy policy.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>2. What information do we collect?</Typography>
            <Typography paragraph>
              The kind of personal information that we collect from you will depend on how you use the website. The personal information which we collect and hold about you may include: Full name, email address and contact number.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>3. How we collect your personal information</Typography>
            <Typography paragraph>
              (a) We may collect personal information from you whenever you input such information into the website.
            </Typography>
            <Typography paragraph>
              (b) We also collect cookies from your computer which enable us to tell when you use the website and also to help customise your website experience. As a general rule, however, it is not possible to identify you personally from our use of cookies.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>4. Purpose of collection</Typography>
            <Typography paragraph>
              (a) The purpose for which we collect personal information is to provide you with the best service experience possible on the website.
            </Typography>
            <Typography paragraph>
              (b) We customarily disclose personal information only to our service providers who assist us in operating the website. Your personal information may also be exposed from time to time to maintenance and support personnel acting in the normal course of their duties.
            </Typography>
            <Typography paragraph>
              (c) By using our website, you consent to the receipt of direct marketing material. We will only use your personal information for this purpose if we have collected such information direct from you, and if it is material of a type which you would reasonably expect to receive from us. We do not use sensitive personal information in direct marketing activity. Our direct marketing material will include a simple means by which you can request not to receive further communications of this nature.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>5. Access and correction</Typography>
            <Typography paragraph>
              Australian Privacy Principle 12 permits you to obtain access to the personal information we hold about you in certain circumstances, and Australian Privacy Principle 13 allows you to correct inaccurate personal information subject to certain exceptions. If you would like to obtain such access, please contact us as set out below.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>6. Complaint procedure</Typography>
            <Typography paragraph>
              If you have a complaint concerning the manner in which we maintain the privacy of your personal information, please contact us as set out below. All complaints will be considered by Abbass Advocacy Pty Ltd and we may seek further information from you to clarify your concerns. If we agree that your complaint is well founded, we will, in consultation with you, take appropriate steps to rectify the problem. If you remain dissatisfied with the outcome, you may refer the matter to the Office of the Australian Information Commissioner.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>7. Overseas transfer</Typography>
            <Typography paragraph>
              Your personal information may be transferred to recipients located in countries outside of Australia. Those countries in question have data protection laws which protect personal information in a way which is at least substantially similar to the Australian Privacy Principles, and there will be mechanisms available to you to enforce protection of your personal information under that overseas law. In the circumstances, we do not require the overseas recipients to comply with the Australian Privacy Principles and we will not be liable for a breach of the Australian Privacy Principles if your personal information is mishandled.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>8. How to contact us about privacy</Typography>
            <Typography paragraph>
              If you have any queries, or if you seek access to your personal information, or if you have a complaint about our privacy practices, you can contact us through: info@abbass.com.au.
            </Typography>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicy; 