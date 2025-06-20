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

const TermsAndConditions = () => {
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
          Terms & Conditions
        </Typography>

        <StyledPaper>
          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              About the Website
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              (a) Welcome to www.abbassbusinessbrokers.com.au. The Website provides you with an opportunity to browse various services that have been listed for sale through the Website (Services). The Website provides this service by way of granting you access to the content on the Website (Services).
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              (b) The Website is operated by Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers (ACN 674 429 255). Access to and use of the Website, or any of its associated Services, is provided by Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers. Please read these terms and conditions (Terms) carefully. By using, browsing and/or reading the Website, this signifies that you have read, understood and agree to be bound by the Terms. If you do not agree with the Terms, you must cease usage of the Website, or any of Services, immediately.
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              (c) Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers reserves the right to review and change any of the Terms by updating this page at its sole discretion. When Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers updates the Terms, it will use reasonable endeavours to provide you with notice of updates to the Terms. Any changes to the Terms take immediate effect from the date of their publication. Before you continue, we recommend you keep a copy of the Terms for your records.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              Acceptance of the Terms
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              You ("The customer") accept the Terms by remaining on the Website. You may also accept the Terms by clicking to accept or agree to the Terms where this option is made available to you by Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers in the user interface.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              Registration to be Contacted
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              (a) In order to be contacted by Abbass Business Brokers, you must first register your contact details. As part of this process, you may be required to provide personal information about yourself (such as identification or contact details), including:
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, pl: 2 }}>
              (i) Name<br />
              (ii) Telephone number<br />
              (iii) Email address
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              Copyright and Intellectual Property
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              (a) The Website and all of the related Services of Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers are subject to copyright. The material on the Website is protected by copyright under the laws of Australia and through international treaties. Unless otherwise indicated, all rights (including copyright) in the site content and compilation of the website (including text, graphics, logos, button icons, video images, audio clips and software) (Content) are owned or controlled for these purposes, and are reserved by Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers or its contributors.
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              (b) Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers retains all rights, title and interest in and to the Website and all related content. Nothing you do on or in relation to the Website will transfer to you:
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, pl: 2 }}>
              (i) the business name, trading name, domain name, trade mark, industrial design, patent, registered design or copyright of Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers; or<br /><br />
              (ii) the right to use or exploit a business name, trading name, domain name, trade mark or industrial design; or<br /><br />
              (iii) a system or process that is the subject of a patent, registered design or copyright (or an adaptation or modification of such a system or process).
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              Privacy
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers takes your privacy seriously and any information provided through your use of the Website and/or the Services are subject to Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers's Privacy Policy, which is available on the Website.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              General Disclaimer
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              (a) You acknowledge that Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers does not make any terms, guarantees, warranties, representations or conditions whatsoever regarding the Services other than provided for pursuant to these Terms.
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              (b) Nothing in these Terms limits or excludes any guarantees, warranties, representations or conditions implied or imposed by law, including the Australian Consumer Law (or any liability under them) which by law may not be limited or excluded.
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              (c) Subject to this clause, and to the extent permitted by law:
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, pl: 2, mb: 2 }}>
              (i) all terms, guarantees, warranties, representations or conditions which are not expressly stated in these Terms are excluded; and<br /><br />
              (ii) Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers will not be liable for any special, indirect or consequential loss or damage (unless such loss or damage is reasonably foreseeable resulting from our failure to meet an applicable Consumer Guarantee), loss of profit or opportunity, or damage to goodwill arising out of or in connection with the Services or these Terms (including as a result of not being able to use the Services, whether at common law, under contract, tort (including negligence), in equity, pursuant to statute or otherwise.
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              (e) Use of the Website, the Services, and any of the Services of Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers, is at your own risk. Everything on the Website, the Services of Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers, are provided to you on an "as is" and "as available" basis, without warranty or condition of any kind. None of the affiliates, directors, officers, employees, agents, contributors, third party content providers or licensors of Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers make any express or implied representation or warranty about its Content or any Services referred to on the Website. This includes (but is not restricted to) loss or damage you might suffer as a result of any of the following:
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, pl: 2 }}>
              (i) the accuracy, suitability or currency of any information on the Website, the Service (including third party material and advertisements on the Website);<br /><br />
              (ii) the Content or operation in respect to links which are provided for the User's convenience;<br /><br />
              (iii) the use of any of the calculators available on the website.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              Limitation of Liability
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              (a) Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers's total liability arising out of or in connection with the services or these Terms, however arising, including under contract, tort (including negligence), in equity, under statute or otherwise, will not exceed the most recent Purchase Price paid by you under these Terms or where you have not paid the Purchase Price, then the total liability of Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers is the resupply of information or services to you.
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              (b) You expressly understand and agree that Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers, its affiliates, employees, agents, contributors, third party content providers and licensors shall not be liable to you for any direct, indirect, incidental, special consequential or exemplary damages which may be incurred by you, however caused and under any theory of liability. This shall include, but is not limited to, any loss of profit (whether incurred directly or indirectly), any loss of goodwill or business reputation and any other intangible loss.
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              (c) Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers is not responsible or liable in any manner for any site content (including the Content and Third Party Content) posted on the Website or in connection with the Services, whether posted or caused by users of the website of Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers, by third parties or by any of the Services offered by Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              Indemnity
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              (a) You agree to indemnify Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers, its affiliates, employees, agents, contributors, third party content providers and licensors from and against:
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, pl: 2 }}>
              (i) all actions, suits, claims, demands, liabilities, costs, expenses, loss and damage (including legal fees on a full indemnity basis) incurred, suffered or arising out of or in connection with any Content you post through the Website;<br /><br />
              (ii) any direct or indirect consequences of you accessing, using or transacting on the Website or attempts to do so and any breach by you or your agents of these Terms; and/or<br /><br />
              (iii) any breach of the Terms.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              Dispute Resolution
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              9.1. Compulsory
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              If a dispute arises out of or relates to the Terms, either party may not commence any Tribunal or Court proceedings in relation to the dispute, unless the following clauses have been complied with (except where urgent interlocutory relief is sought).
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              9.2. Notice
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              A party to the Terms claiming a dispute (Dispute) has arisen under the Terms, must give written notice to the other party detailing the nature of the dispute, the desired outcome and the action required to settle the Dispute.
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              9.3 Resolution
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              On receipt of that notice (Notice) by that other party, the parties to the Terms (Parties) must:
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, pl: 2, mb: 2 }}>
              (i) Within 28 days of the Notice endeavour in good faith to resolve the Dispute expeditiously by negotiation or such other means upon which they may mutually agree;<br /><br />
              (ii) If for any reason whatsoever, 28 days after the date of the Notice, the Dispute has not been resolved, the Parties must either agree upon selection of a mediator or request that an appropriate mediator be appointed by the President of the Australian Mediation Association or his or her nominee;<br /><br />
              (iii) The Parties are equally liable for the fees and reasonable expenses of a mediator and the cost of the venue of the mediation and without limiting the foregoing undertake to pay any amounts requested by the mediator as a pre-condition to the mediation commencing. The Parties must each pay their own costs associated with the mediation;<br /><br />
              (iv) The mediation will be held in Melbourne, Australia.
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              9.4 Confidential
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              All communications concerning negotiations made by the Parties arising out of and in connection with this dispute resolution clause are confidential and to the extent possible, must be treated as "without prejudice" negotiations for the purpose of applicable laws of evidence.
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray, mb: 2 }}>
              9.5 Termination of Mediation
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              If 2 months have elapsed after the start of a mediation of the Dispute and the Dispute has not been resolved, either Party may ask the mediator to terminate the mediation and the mediator must do so.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              Venue and Jurisdiction
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              The Services offered by Abbass Advocacy Pty Ltd T/AS Abbass Business Brokers are intended to be used by residents of Australia. In the event of any dispute arising out of or in relation to the Website, you agree that the exclusive venue for resolving any dispute shall be in the courts of Victoria, Australia.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              Governing Law
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              The Terms are governed by the laws of Victoria, Australia. Any dispute, controversy, proceeding or claim of whatever nature arising out of or in any way relating to the Terms and the rights created hereby shall be governed, interpreted and construed by, under and pursuant to the laws of Victoria Australia, without reference to conflict of law principles, notwithstanding mandatory rules. The validity of this governing law clause is not contested. The Terms shall be binding to the benefit of the parties hereto and their successors and assigns.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h5" sx={{ color: BRAND.textDark, mb: 2, fontWeight: 600 }}>
              Severance
            </Typography>
            <Typography variant="body1" sx={{ color: BRAND.textGray }}>
              If any part of these Terms is found to be void or unenforceable by a Court of competent jurisdiction, that part shall be severed and the rest of the Terms shall remain in force.
            </Typography>
          </Section>
        </StyledPaper>
      </Container>
      <Footer />
    </Box>
  );
};

export default TermsAndConditions; 