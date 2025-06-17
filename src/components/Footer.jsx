import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content footer-grid">
        {/* Logo and Company Name */}
        <div className="footer-col logo-col">
          <div className="logo-container">
            <img src="/mark.png" alt="Abbass Group Logo" className="footer-logo" />
            <div className="logo-text">
              <span className="abbass-main">ABBASS</span>
              <span className="abbass-sub">BUSINESS BROKERS</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/listings">Listings</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/agents">Agents</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-col">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-list contact-list">
            <li>Unit 102/24 Albert Rd, South Melbourne VIC 3205</li>
            <li><a href="tel:(03)91031317">(03) 9103 1317</a></li>
            <li><a href="mailto:info@abbass.group">info@abbass.group</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-col">
          <h3 className="footer-heading">Useful Links</h3>
          <ul className="footer-list">
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-col">
          <h3 className="footer-heading">Join Our Community</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/abbassbusinessbrokers" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon fontSize="inherit" />
            </a>
            <a href="https://www.instagram.com/abbassbusinessbrokers" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon fontSize="inherit" />
            </a>
            <a href="https://www.linkedin.com/company/abbassbusinessbrokers" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon fontSize="inherit" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ABBASS Business Brokers. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 