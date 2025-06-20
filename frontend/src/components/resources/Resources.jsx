import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from '../common/Footer';

const BRAND = {
  blue: '#56C1BC',
  darkBlue: '#45a19d',
  textDark: '#2c3e50',
};

const blogs = [
  {
    title: 'Your Guide to Selling a Business in Australia: How ABBASS Business Brokers Can Help',
    summary: 'At ABBASS Business Brokers, we understand that selling your business is not just a financial decision but a deeply personal one. After years of hard...',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    link: '/resources/guide-to-selling-business',
  },
  {
    title: 'The comprehensive guide to buying a business',
    summary: 'Acquiring an existing business can be an excellent path to entrepreneurship, though it comes with its own set of challenges. Follow this guide to navigate',
    image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg',
    link: '/resources/guide-to-buying-business',
  },
  {
    title: 'How to finance a business purchase',
    summary: 'When buying a business, understanding your financing options is crucial. Here\'s a guide to the most common methods: debt and equity financing, and vendor finance.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    link: '/resources/how-to-finance-business',
  },
  {
    title: 'Checklist for buying a business',
    summary: 'Guide for Buying a Business Starting the journey to buy a business or franchise can be challenging. To assist you, we\'ve created this comprehensive checklist.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    link: '/resources/checklist-for-buying-business',
  },
];

const Resources = () => {
  const [showFirstBlog, setShowFirstBlog] = useState(false);
  const [showSecondBlog, setShowSecondBlog] = useState(false);
  const [showThirdBlog, setShowThirdBlog] = useState(false);
  const [showFourthBlog, setShowFourthBlog] = useState(false);

  if (showFirstBlog) {
    return (
      <Box sx={{ background: '#f8fafc', minHeight: '100vh' }}>
        {/* Blog Hero Section */}
        <Box
          sx={{
            width: '100%',
            minHeight: { xs: '40vh', md: '55vh' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: { xs: 6, md: 10 },
            px: 2,
            color: 'white',
            textAlign: 'center',
            mb: 0,
            boxShadow: '0 8px 32px 0 rgba(86, 193, 188, 0.10)',
            background: `
              linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
              url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg') center/cover no-repeat
            `,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, letterSpacing: '-1px', fontSize: { xs: '2rem', md: '2.8rem' }, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Your Guide to Selling a Business in Australia
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', opacity: 0.95, fontWeight: 400, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            How ABBASS Business Brokers Can Help
          </Typography>
        </Box>
        <Container maxWidth="lg">
          <Box sx={{ mb: 3, mt: 1 }}>
            <Button
              onClick={() => setShowFirstBlog(false)}
              sx={{ color: '#56C1BC', textTransform: 'none', fontWeight: 500, fontSize: 18, pl: 0 }}
              startIcon={<span style={{ fontSize: 20, marginRight: 2 }}>&laquo;</span>}
            >
              Back to Resources
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 900, width: '100%', boxShadow: 6, borderRadius: 5, p: { xs: 2, sm: 4 }, mb: 6, mt: 0 }}>
              <CardContent sx={{ px: { xs: 0, sm: 2 }, pb: { xs: 2, sm: 3 } }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#2c3e50' }}>
                  Your Guide to Selling a Business in Australia: How ABBASS Business Brokers Can Help
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#64748b', mb: 3 }}>
                  October 26, 2024
                </Typography>
                <Typography paragraph sx={{ fontSize: 18, color: '#374151', mb: 2 }}>
                  At ABBASS Business Brokers, we understand that selling your business is not just a financial decision but a deeply personal one. After years of hard work and dedication, you want to ensure that the sale process is smooth, efficient, and financially rewarding. Whether you are selling a small business in Melbourne or a larger enterprise anywhere in Australia, working with a trusted business broker is crucial to achieving the best outcome.
                </Typography>
                <Typography paragraph sx={{ fontSize: 18, color: '#374151', mb: 3 }}>
                  In this blog, we'll explore how the professional small business brokers at ABBASS Business Brokers can assist you in navigating business sales in Melbourne and across the country, helping you maximize the value of your sale.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>Why Choose ABBASS Business Brokers?</Typography>
                <Typography paragraph>Selling a business involves various steps, from determining the correct valuation to finding the right buyer, negotiating favorable terms, and ensuring legal compliance. As experienced business brokers in Australia, we offer the guidance and expertise necessary to navigate this often complex process.</Typography>
                <Typography paragraph>At ABBASS Business Brokers, we specialise in helping business owners achieve successful business sales. Our team of Melbourne business brokers has a deep understanding of the local market, and our nationwide experience means we can assist clients throughout Australia. We're not just any broker; we are professional small business brokers who prioritise your goals, ensuring you receive maximum value when selling your business.</Typography>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>The Role of a Business Broker</Typography>
                <Typography paragraph>Selling a business is not as simple as listing it on the market and waiting for buyers to come knocking. A business sale requires strategic positioning, targeted marketing, and careful negotiation. This is where the services of a business sale broker can make all the difference.</Typography>
                <Typography paragraph>As your trusted business brokers, we at ABBASS Business Brokers offer comprehensive support, from initial consultations to closing the deal. Our services include:</Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <li><Typography>Business Appraisals: One of the most critical factors in any sale is getting the value right. Overpricing can scare off buyers, while underpricing can leave you short-changed. Our professional small business brokers understand the importance of small business values and work to provide you with an accurate and fair valuation.</Typography></li>
                  <li><Typography>Marketing: As experienced business brokers in Australia, we use a tailored approach to market your business. This includes listing your business on business for sale brokers platforms, creating compelling marketing materials, and directly reaching out to potential buyers.</Typography></li>
                  <li><Typography>Negotiation: We act as intermediaries, ensuring that all negotiations are handled professionally and in your best interests. Whether you are selling a small local shop or a large company, our goal is to get you the best possible deal.</Typography></li>
                  <li><Typography>Legal and Financial Compliance: At ABBASS Business Brokers, we work closely with legal and financial professionals to ensure that the sale complies with all necessary regulations, giving you peace of mind throughout the process.</Typography></li>
                </Box>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>ABBASS Business Brokers: Leading the Way in Business Sales</Typography>
                <Typography paragraph>For business owners in Melbourne, ABBASS Business Brokers is your local expert. We have extensive knowledge of the Melbourne market and have helped countless business owners navigate business sales in Melbourne. From small businesses in retail and hospitality to larger enterprises, we understand the unique dynamics of selling in this vibrant city.</Typography>
                <Typography paragraph>Our Melbourne business brokers are equipped with the latest market insights and buyer trends, allowing us to position your business effectively in a competitive marketplace. Businesses for sale in Melbourne benefit from a diverse pool of buyers, and with our guidance, your business will be seen by the right people at the right time.</Typography>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>Understanding Small Business Values</Typography>
                <Typography paragraph>At ABBASS Business Brokers, we recognise that your business is more than just an asset to be sold — it's the result of years of hard work, passion, and dedication. That's why we focus on your small business values, ensuring that they are reflected in every step of the sale process. From your loyal customer base to your brand's reputation, we highlight the unique aspects of your business to attract the most suitable buyers.</Typography>
                <Typography paragraph>Our professional small business brokers take the time to understand your goals and expectations for the sale, ensuring that we align our strategy to meet your needs. With our expertise in small business values, we work to ensure you receive a fair valuation and the best possible terms for the sale.</Typography>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>Why Sell Business in Australia?</Typography>
                <Typography paragraph>Australia's stable economy and growing business sector make it an attractive market for both local and international investors. For those looking to sell business Australia, the opportunity is ripe, but competition can be fierce. That's why partnering with an experienced business sale broker is essential.</Typography>
                <Typography paragraph>At ABBASS Business Brokers, we have extensive experience in handling business sales Australia-wide. We've built a reputation for delivering results, whether you're a small business owner or looking to sell a larger company. From our base in Melbourne, we work with business owners across the country, helping them navigate the sale process with ease and confidence.</Typography>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>The ABBASS Difference: A Boutique Approach to Business Sales</Typography>
                <Typography paragraph>At ABBASS Business Brokers, we pride ourselves on our boutique approach. We're not a high-volume broker; instead, we focus on providing personalized service that is tailored to your specific business needs. Our boutique nature allows us to spend more time understanding your business, identifying its strengths, and positioning it to attract the right buyers.</Typography>
                <Typography paragraph>Our team of business brokers in Melbourne and across Australia takes a hands-on approach, ensuring that your business gets the attention it deserves. Whether you're selling a small café or a larger enterprise, we offer the expertise and dedication you need to achieve a successful sale.</Typography>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>How ABBASS Business Brokers Helps You Sell</Typography>
                <Typography paragraph>When you partner with ABBASS Business Brokers, we guide you through every stage of the sale process:</Typography>
                <Box component="ol" sx={{ pl: 3, mb: 2 }}>
                  <li><Typography>Initial Consultation: We start by understanding your business and your goals for the sale. This allows us to create a tailored strategy that reflects your unique needs.</Typography></li>
                  <li><Typography>Appraisal: Our team of small business brokers conducts a comprehensive valuation, ensuring that your business is priced accurately and competitively.</Typography></li>
                  <li><Typography>Marketing: We develop a marketing plan that targets potential buyers, including online listings and direct outreach through business for sale brokers platforms.</Typography></li>
                  <li><Typography>Negotiation: Our brokers handle all negotiations, ensuring that the terms of the sale meet your financial expectations and protect your interests.</Typography></li>
                  <li><Typography>Closing the Deal: Once a buyer has been secured, we work with legal and financial professionals to finalize the sale, ensuring all legalities are addressed and the transaction is smooth.</Typography></li>
                </Box>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>Ready to Sell Your Business?</Typography>
                <Typography paragraph>If you're considering selling your business, now is the time to work with the experts at ABBASS Business Brokers. Our experience in business sales Melbourne and across Australia positions us as the trusted partner for business owners looking to achieve the best outcome.</Typography>
                <Typography paragraph>From small businesses to larger enterprises, we provide the expertise, support, and guidance you need to ensure a successful sale. Contact ABBASS Business Brokers today to find out how we can help you sell your business and achieve your financial goals.</Typography>
                <Box sx={{ mt: 5, textAlign: 'center' }}>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    sx={{
                      backgroundColor: '#56C1BC',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: 18,
                      px: 5,
                      py: 1.5,
                      borderRadius: 2,
                      boxShadow: '0 4px 16px rgba(86,193,188,0.15)',
                      '&:hover': {
                        backgroundColor: '#45a19d',
                      },
                    }}
                  >
                    Talk to an expert
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    );
  }

  if (showSecondBlog) {
    return (
      <Box sx={{ background: '#f8fafc', minHeight: '100vh' }}>
        {/* Blog Hero Section */}
        <Box
          sx={{
            width: '100%',
            minHeight: { xs: '40vh', md: '55vh' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: { xs: 6, md: 10 },
            px: 2,
            color: 'white',
            textAlign: 'center',
            mb: 0,
            boxShadow: '0 8px 32px 0 rgba(86, 193, 188, 0.10)',
            background: `
              linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
              url('https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg') center/cover no-repeat
            `,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, letterSpacing: '-1px', fontSize: { xs: '2rem', md: '2.8rem' }, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            The comprehensive guide to buying a business
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', opacity: 0.95, fontWeight: 400, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Step-by-step advice for aspiring business owners
          </Typography>
        </Box>
        <Container maxWidth="lg">
          <Box sx={{ mb: 3, mt: 1 }}>
            <Button
              onClick={() => setShowSecondBlog(false)}
              sx={{ color: '#56C1BC', textTransform: 'none', fontWeight: 500, fontSize: 18, pl: 0 }}
              startIcon={<span style={{ fontSize: 20, marginRight: 2 }}>&laquo;</span>}
            >
              Back to Resources
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 900, width: '100%', boxShadow: 6, borderRadius: 5, p: { xs: 2, sm: 4 }, mb: 6, mt: 0 }}>
              <CardContent sx={{ px: { xs: 0, sm: 2 }, pb: { xs: 2, sm: 3 } }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#2c3e50' }}>
                  The comprehensive guide to buying a business
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#64748b', mb: 3 }}>
                  June 10, 2024
                </Typography>
                <Typography paragraph>Acquiring an existing business can be an excellent path to entrepreneurship, though it comes with its own set of challenges. Follow this guide to navigate the process effectively and become a business owner the right way.</Typography>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>Steps to Buying a Business</Typography>
                <Box component="ol" sx={{ pl: 3, mb: 2 }}>
                  <li><Typography>Assess Your Readiness</Typography></li>
                  <li><Typography>Choose Between an Independent Business and a Franchise</Typography></li>
                  <li><Typography>Conduct Thorough Research</Typography></li>
                  <li><Typography>Perform Due Diligence</Typography></li>
                  <li><Typography>Determine the Business's Value</Typography></li>
                  <li><Typography>Make an Offer</Typography></li>
                  <li><Typography>Arrange Purchase Contracts</Typography></li>
                  <li><Typography>Secure Financing</Typography></li>
                </Box>
                <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 700 }}>1. Assess Your Readiness</Typography>
                <Typography paragraph>Before diving into the search for a business, determine if you are prepared for the responsibilities of business ownership. Consider if you are ready to make daily decisions, manage time efficiently, and handle various roles, from sales to financial management.</Typography>
                <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 700 }}>2. Choose Between an Independent Business and a Franchise</Typography>
                <Typography paragraph>Deciding whether to buy an independent business or a franchise depends on your personality, preferences, and financial situation.</Typography>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Independent Business:</Typography>
                <Typography paragraph>Offers complete control over decisions and flexibility to implement changes based on market conditions or personal interests. You are not bound by specific terms and conditions.</Typography>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Franchise:</Typography>
                <Typography paragraph>Provides the security of a larger organisation with brand recognition, bulk purchasing power, marketing support, and training.</Typography>
                <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 700 }}>3. Conduct Thorough Research</Typography>
                <Typography paragraph>Just like inspecting a car before purchase, a detailed examination of your potential business is crucial.</Typography>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Find a Suitable Business:</Typography>
                <Typography paragraph>Choose a business that aligns with your interests and passions.</Typography>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Understand Costs:</Typography>
                <Typography paragraph>Know all costs involved, including initial investment and ongoing running costs.</Typography>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Assess Strengths and Weaknesses:</Typography>
                <Typography paragraph>Investigate why the business is for sale, its legal structure, credit status, staff and customer satisfaction, supplier relationships, and competitive landscape. Visit at different times and analyse its reputation through social media.</Typography>
                <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 700 }}>4. Perform Due Diligence</Typography>
                <Typography paragraph>Due diligence involves a detailed examination to evaluate if the business is a good investment. Conduct this with your lawyer, accountant, or business advisor, focusing on:</Typography>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Financial Matters:</Typography>
                <Typography paragraph>Review income statements, balance sheets, tax returns, profit and loss statements, stock levels, and details about assets.</Typography>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Legal Matters:</Typography>
                <Typography paragraph>Check intellectual property, trademarks, patents, existing contracts, and any legal issues.</Typography>
                <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 700 }}>5. Determine the Business's Value</Typography>
                <Typography paragraph>Benchmark the business against similar ones on the market, considering both tangible and intangible assets like goodwill. Common valuation methods include:</Typography>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Net Worth Calculation:</Typography>
                <Typography paragraph>Difference between assets and liabilities.</Typography>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Capitalised Future Earnings:</Typography>
                <Typography paragraph>Valuing the business based on its potential future earnings.</Typography>
                <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 700 }}>6. Make an Offer</Typography>
                <Typography paragraph>Prepare to negotiate. Start with a reasonable but low offer and increase if necessary. Know your highest acceptable price and stick to it. Seek advice on handling intangible assets and be ready to walk away if the deal isn't right.</Typography>
                <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 700 }}>7. Arrange Purchase Contracts</Typography>
                <Typography paragraph>Draft a purchase contract to make your agreement legally binding. Include details like:</Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <li><Typography>Purchase price and payment method</Typography></li>
                  <li><Typography>Seller's involvement post-purchase</Typography></li>
                  <li><Typography>Restraint of trade covenant</Typography></li>
                  <li><Typography>Conditions covering contingencies such as inaccuracies in financial information</Typography></li>
                </Box>
                <Typography paragraph>Always consult legal and financial advisors before finalising the contract.</Typography>
                <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 700 }}>8. Secure Financing</Typography>
                <Typography paragraph>Explore financing options such as secured and unsecured loans. Prepare a solid business plan, demonstrate good credit history, and ensure you can provide the necessary security for the loan. Consulting a finance broker or using an online comparison tool can help find the best loan options. If you can finance the purchase without borrowing, you'll retain all profits and avoid loan repayments.</Typography>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>Conclusion</Typography>
                <Typography paragraph>Buying a small business involves many considerations, but with thorough preparation and the right approach, it can be a rewarding process that sets you up for future success. If you're ready for the challenge, start today and take the first steps toward business ownership.</Typography>
                <Typography paragraph>Contact us today to learn more:<br/>(03) 9103 1317<br/>info@abbass.group</Typography>
                <Box sx={{ mt: 5, textAlign: 'center' }}>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    sx={{
                      backgroundColor: '#56C1BC',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: 18,
                      px: 5,
                      py: 1.5,
                      borderRadius: 2,
                      boxShadow: '0 4px 16px rgba(86,193,188,0.15)',
                      '&:hover': {
                        backgroundColor: '#45a19d',
                      },
                    }}
                  >
                    Talk to an expert
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    );
  }

  if (showThirdBlog) {
    return (
      <Box sx={{ background: '#f8fafc', minHeight: '100vh' }}>
        {/* Blog Hero Section */}
        <Box
          sx={{
            width: '100%',
            minHeight: { xs: '40vh', md: '55vh' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: { xs: 6, md: 10 },
            px: 2,
            color: 'white',
            textAlign: 'center',
            mb: 0,
            boxShadow: '0 8px 32px 0 rgba(86, 193, 188, 0.10)',
            background: `
              linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
              url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg') center/cover no-repeat
            `,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, letterSpacing: '-1px', fontSize: { xs: '2rem', md: '2.8rem' }, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            How to finance a business purchase
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', opacity: 0.95, fontWeight: 400, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Debt, equity, and vendor finance explained
          </Typography>
        </Box>
        <Container maxWidth="lg">
          <Box sx={{ mb: 3, mt: 1 }}>
            <Button
              onClick={() => setShowThirdBlog(false)}
              sx={{ color: '#56C1BC', textTransform: 'none', fontWeight: 500, fontSize: 18, pl: 0 }}
              startIcon={<span style={{ fontSize: 20, marginRight: 2 }}>&laquo;</span>}
            >
              Back to Resources
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 900, width: '100%', boxShadow: 6, borderRadius: 5, p: { xs: 2, sm: 4 }, mb: 6, mt: 0 }}>
              <CardContent sx={{ px: { xs: 0, sm: 2 }, pb: { xs: 2, sm: 3 } }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#2c3e50' }}>
                  How to finance a business purchase
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#64748b', mb: 3 }}>
                  June 1, 2024
                </Typography>
                <Typography paragraph>When buying a business, understanding your financing options is crucial. Here's a guide to the most common methods: debt and equity financing, and vendor finance.</Typography>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>Debt Financing</Typography>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Definition:</Typography>
                <Typography paragraph>Debt financing involves borrowing money from an external source, such as a bank, credit union, or finance company. Alternatively, you might get a loan from family or friends, but it's essential to document this arrangement thoroughly to avoid future disputes.</Typography>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>How It Works:</Typography>
                <Typography paragraph>When you secure a loan from a commercial lender, you receive a fixed amount of credit that must be repaid with interest over a specified period. The interest rate depends on the lender, the perceived risk, and the loan amount.</Typography>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Advantages:</Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <li><Typography>Control: You retain full control of your business and profits.</Typography></li>
                  <li><Typography>Tax Deductible: Interest on loan repayments is usually tax-deductible.</Typography></li>
                </Box>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Requirements:</Typography>
                <Typography paragraph>To apply for a business loan, you typically need to:</Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <li><Typography>Determine the required amount and purpose.</Typography></li>
                  <li><Typography>Prepare a detailed business plan.</Typography></li>
                  <li><Typography>Show personal finance history and projected business income.</Typography></li>
                  <li><Typography>Provide financial, management, and forecast information of the target business.</Typography></li>
                </Box>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Disadvantages:</Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <li><Typography>Repayment Obligations: Loans need to be repaid with interest, which increases the total amount paid.</Typography></li>
                  <li><Typography>Collateral: Loans often require substantial deposits and collateral, such as personal or business assets, which the lender can seize if you default on the loan.</Typography></li>
                </Box>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>Vendor Financing</Typography>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Definition:</Typography>
                <Typography paragraph>Vendor financing, or seller financing, is when the seller provides a loan for part of the purchase price, accepting an IOU from the buyer.</Typography>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Advantages:</Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <li><Typography>Filling Gaps: Helps bridge the gap between the purchase price and available funds without involving a bank.</Typography></li>
                  <li><Typography>Speed: Often quicker to arrange than traditional loans, allowing faster business acquisition and loan repayment from business profits.</Typography></li>
                </Box>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Loan Agreement:</Typography>
                <Typography paragraph>A vendor finance agreement should include:</Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <li><Typography>Borrowed amount</Typography></li>
                  <li><Typography>Interest rate</Typography></li>
                  <li><Typography>Repayment schedule</Typography></li>
                  <li><Typography>Loan type (interest only or principal and interest)</Typography></li>
                  <li><Typography>Financial reporting requirements</Typography></li>
                  <li><Typography>Consequences of missed payments</Typography></li>
                  <li><Typography>Provided security</Typography></li>
                </Box>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Disadvantages:</Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <li><Typography>Limited Availability: Not all sellers offer this option.</Typography></li>
                  <li><Typography>Collateral: Similar to bank loans, vendor financing often requires an initial deposit and collateral, usually the business itself.</Typography></li>
                </Box>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>Equity Financing</Typography>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Definition:</Typography>
                <Typography paragraph>Equity financing involves selling a stake in your business to an investor in exchange for funds. The investor then shares in the profits and decision-making.</Typography>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Advantages:</Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <li><Typography>No Repayment: Unlike loans, equity financing doesn't require repayment</Typography></li>
                  <li><Typography>Experience and Connections: Investors can bring valuable expertise and networks.</Typography></li>
                  <li><Typography>Growth Potential: Easier access to additional funding for business expansion.</Typography></li>
                </Box>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Disadvantages:</Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <li><Typography>Shared Ownership: Requires sharing control and profits with the investor.</Typography></li>
                  <li><Typography>Decision-Making: You might lose some autonomy over business decisions.</Typography></li>
                  <li><Typography>Relationship Risks: Personal relationships can be strained if business challenges arise.</Typography></li>
                </Box>
                <Typography sx={{ fontWeight: 600, color: '#2c3e50', mt: 1 }}>Documentation:</Typography>
                <Typography paragraph>It's vital to have a legally documented agreement covering investment amounts, profit sharing, and responsibilities.</Typography>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>Choosing the Right Financing</Typography>
                <Typography paragraph>Selecting the right financing option depends on your situation. Here are some steps to guide you:</Typography>
                <Box component="ol" sx={{ pl: 3, mb: 2 }}>
                  <li><Typography>Seek Professional Advice: Consult with an accountant or business advisor to understand your options.</Typography></li>
                  <li><Typography>Evaluate Options: Research and compare different financing scenarios to see what fits best with your business needs.</Typography></li>
                  <li><Typography>Prepare Thoroughly: Whether you choose debt, vendor, or equity financing, have a solid business plan and understand the terms and implications of the financing option you select.</Typography></li>
                </Box>
                <Typography paragraph>Remember, each business is unique, so the best financing method will be the one that aligns with your specific circumstances and goals.</Typography>
                <Typography paragraph>Contact us today to learn more:<br/>(03) 9103 1317<br/>info@abbass.group</Typography>
                <Box sx={{ mt: 5, textAlign: 'center' }}>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    sx={{
                      backgroundColor: '#56C1BC',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: 18,
                      px: 5,
                      py: 1.5,
                      borderRadius: 2,
                      boxShadow: '0 4px 16px rgba(86,193,188,0.15)',
                      '&:hover': {
                        backgroundColor: '#45a19d',
                      },
                    }}
                  >
                    Talk to an expert
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    );
  }

  if (showFourthBlog) {
    return (
      <Box sx={{ background: '#f8fafc', minHeight: '100vh' }}>
        {/* Blog Hero Section */}
        <Box
          sx={{
            width: '100%',
            minHeight: { xs: '40vh', md: '55vh' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: { xs: 6, md: 10 },
            px: 2,
            color: 'white',
            textAlign: 'center',
            mb: 0,
            boxShadow: '0 8px 32px 0 rgba(86, 193, 188, 0.10)',
            background: `
              linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
              url('https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg') center/cover no-repeat
            `,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, letterSpacing: '-1px', fontSize: { xs: '2rem', md: '2.8rem' }, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Checklist for buying a business
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', opacity: 0.95, fontWeight: 400, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            A step-by-step guide for business buyers
          </Typography>
        </Box>
        <Container maxWidth="lg">
          <Box sx={{ mb: 3, mt: 1 }}>
            <Button
              onClick={() => setShowFourthBlog(false)}
              sx={{ color: '#56C1BC', textTransform: 'none', fontWeight: 500, fontSize: 18, pl: 0 }}
              startIcon={<span style={{ fontSize: 20, marginRight: 2 }}>&laquo;</span>}
            >
              Back to Resources
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 900, width: '100%', boxShadow: 6, borderRadius: 5, p: { xs: 2, sm: 4 }, mb: 6, mt: 0 }}>
              <CardContent sx={{ px: { xs: 0, sm: 2 }, pb: { xs: 2, sm: 3 } }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#2c3e50' }}>
                  Checklist for buying a business
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#64748b', mb: 3 }}>
                  May 1, 2024
                </Typography>
                <Typography paragraph>Guide for Buying a Business</Typography>
                <Typography paragraph>Starting the journey to buy a business or franchise can be challenging. To assist you, we've created this comprehensive checklist.</Typography>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>Initial Steps</Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <li><Typography>Confirm Business Fit: Reflect on whether this business aligns with your interests and lifestyle. Consider the industry, potential income, flexibility, and other personal factors.</Typography></li>
                  <li><Typography>Conduct Online Research: Thoroughly investigate the business online to gather as much information as possible.</Typography></li>
                  <li><Typography>Verify the Seller: Obtain and verify the seller's name, details, and personal references. Ensure you review the business ownership documentation. Understand why the seller is moving on and ask all pertinent questions.</Typography></li>
                  <li><Typography>Check the Business's Reputation: Investigate customer, supplier, and credit references to gauge the business's standing.</Typography></li>
                  <li><Typography>Analyse Competitors: Identify local competitors and evaluate the business's position within the market. Understand their offerings and how they compare.</Typography></li>
                  <li><Typography>Identify Opportunities: Look for growth opportunities and assess the business's potential for future success. Can sales increase with existing resources? Consider the long-term viability.</Typography></li>
                  <li><Typography>Gather a Professional Team: Assemble a team of professionals, including a lawyer, accountant, and business advisor, to guide you through the buying process and due diligence.</Typography></li>
                </Box>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>In-Depth Examination</Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <li><Typography>Examine the Assets: Verify the condition and compliance of the business assets. Check for regulatory adherence, especially regarding occupational health and safety. Assess lease terms for any leased assets.</Typography></li>
                  <li><Typography>Review Intellectual Property: Obtain a list of intellectual property, such as trademarks and patents, and confirm ownership.</Typography></li>
                  <li><Typography>Study the Business Finances: Review financial accounts. Ensure the business fits your budget, with your accountant's assistance.</Typography></li>
                  <li><Typography>Inspect the Premises: Review leases for business premises and visit them. Ensure continued operation viability and lease terms are in line with market conditions. Consider nearby developments' impact.</Typography></li>
                  <li><Typography>Review Stock: Check if existing stock includes outdated or unsellable items. Assess stock levels and potential need for additional cash flow.</Typography></li>
                  <li><Typography>Investigate Insurance Details: Ensure all taxes, insurances, and WorkCover premiums are current. Verify adequate asset insurance and the possibility of obtaining similar coverage.</Typography></li>
                  <li><Typography>Check Permits, Licences, and Contracts: Confirm with relevant authorities about permits or licensing obligations. Ensure these are transferable.</Typography></li>
                  <li><Typography>Understand Contract Transfers: Review material contracts and their transferability.</Typography></li>
                  <li><Typography>Get Employee Details: Obtain a list of employees with full salary and entitlements. Verify employment costs against financial accounts. Assess the risk and impact of key staff not continuing with you.</Typography></li>
                  <li><Typography>Review Customers: Examine customer lists to evaluate the business-customer relationship strength.</Typography></li>
                  <li><Typography>Secure Finance: Prove your financial capability to buy the business. For a bank loan, prepare evidence of the business's success, a business plan, and financial history.</Typography></li>
                </Box>
                <Typography variant="h5" sx={{ mt: 4, mb: 1.5, color: '#56C1BC', fontWeight: 700 }}>Final Steps</Typography>
                <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                  <li><Typography>Get Legal Advice: Hire a qualified practitioner to manage the Contract of Sale, leases, and employee-related documents.</Typography></li>
                  <li><Typography>Check the Contract: Ensure the draft Contract of Sale includes comprehensive warranties, key dates, and obligations. Thoroughly review before signing.</Typography></li>
                  <li><Typography>Understand the Non-Competition Clause: Confirm the Contract of Sale includes a clause preventing the vendor and its directors from competing within a specific time frame and distance.</Typography></li>
                  <li><Typography>Review Approvals: If the purchase depends on financier approval, ensure a relevant condition is included in the Contract of Sale.</Typography></li>
                </Box>
                <Typography paragraph>Contact us today to learn more:<br/>(03) 9103 1317<br/>info@abbass.group</Typography>
                <Box sx={{ mt: 5, textAlign: 'center' }}>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    sx={{
                      backgroundColor: '#56C1BC',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: 18,
                      px: 5,
                      py: 1.5,
                      borderRadius: 2,
                      boxShadow: '0 4px 16px rgba(86,193,188,0.15)',
                      '&:hover': {
                        backgroundColor: '#45a19d',
                      },
                    }}
                  >
                    Talk to an expert
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ background: '#f8fafc', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          minHeight: { xs: '60vh', md: '75vh' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: { xs: 8, md: 12 },
          px: 2,
          color: 'white',
          textAlign: 'center',
          mb: 7,
          boxShadow: '0 8px 32px 0 rgba(86, 193, 188, 0.10)',
          background: `
            linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
            url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat
          `,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, letterSpacing: '-1px', fontSize: { xs: '2.2rem', md: '3.2rem' }, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          Resources & Blog
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto', opacity: 0.95, fontWeight: 400, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
          Insights, guides, and tips for business owners, buyers, and sellers. Stay informed with the latest from ABBASS Business Brokers.
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 10 } }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            mb: 6,
            color: BRAND.textDark,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-16px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: BRAND.blue,
              borderRadius: '2px'
            }
          }}
        >
          Blogs
        </Typography>
        <Grid container spacing={4}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                boxShadow: 3,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.03)',
                  boxShadow: '0 8px 32px 0 rgba(86, 193, 188, 0.18), 0 1.5px 8px 0 rgba(44,62,80,0.10)',
                },
              }}>
                <CardMedia
                  component="img"
                  height="220"
                  image={blog.image}
                  alt={blog.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', mb: 2 }}>
                    {blog.summary}
                  </Typography>
                  {index === 0 ? (
                    <Button
                      sx={{ color: '#56C1BC', fontWeight: 500, textTransform: 'none', pl: 0 }}
                      onClick={() => setShowFirstBlog(true)}
                    >
                      READ MORE &raquo;
                    </Button>
                  ) : index === 1 ? (
                    <Button
                      sx={{ color: '#56C1BC', fontWeight: 500, textTransform: 'none', pl: 0 }}
                      onClick={() => setShowSecondBlog(true)}
                    >
                      READ MORE &raquo;
                    </Button>
                  ) : index === 2 ? (
                    <Button
                      sx={{ color: '#56C1BC', fontWeight: 500, textTransform: 'none', pl: 0 }}
                      onClick={() => setShowThirdBlog(true)}
                    >
                      READ MORE &raquo;
                    </Button>
                  ) : index === 3 ? (
                    <Button
                      sx={{ color: '#56C1BC', fontWeight: 500, textTransform: 'none', pl: 0 }}
                      onClick={() => setShowFourthBlog(true)}
                    >
                      READ MORE &raquo;
                    </Button>
                  ) : (
                    <Button
                      component={Link}
                      to={blog.link}
                      sx={{ color: '#56C1BC', fontWeight: 500, textTransform: 'none', pl: 0 }}
                    >
                      READ MORE &raquo;
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Resources; 