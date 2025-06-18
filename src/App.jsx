import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/layout/Header';
import HomePage from './components/home/HomePage';
import ServicesProcessPage from './components/services/ServicesProcessPage';
import ListingsPage from './components/listings/ListingsPage';
import AboutPage from './components/about/AboutPage';
import AgentsPage from './components/agents/AgentsPage';
import ContactPage from './components/contact/ContactPage';
import CareersPage from './components/careers/CareersPage';
import ListingDetailsPage from './components/listings/ListingDetailsPage';
import AdminDashboard from './components/admin/AdminDashboard';
import Resources from './components/resources/Resources';
import FranchisePage from './components/franchise/FranchisePage';
import TermsAndConditions from './components/legal/TermsAndConditions';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2eca6a',
      light: '#4dd783',
      dark: '#21b85c',
      contrastText: '#fff',
    },
    secondary: {
      main: '#313131',
      light: '#4a4a4a',
      dark: '#1a1a1a',
      contrastText: '#fff',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
    text: {
      primary: '#313131',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.5px',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.5px',
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '8px 24px',
        },
        contained: {
          boxShadow: '0 4px 15px rgba(46, 202, 106, 0.2)',
          '&:hover': {
            boxShadow: '0 8px 25px rgba(46, 202, 106, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesProcessPage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/listings/:id" element={<ListingDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
