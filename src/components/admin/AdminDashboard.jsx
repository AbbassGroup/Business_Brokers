import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Alert, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, AppBar, CssBaseline, Divider, MenuItem } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import { ButtonGroup, Tooltip } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BusinessIcon from '@mui/icons-material/Business';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { format } from 'date-fns';
import { styled } from '@mui/material/styles';

// Brand Colors
const BRAND = {
  blue: '#56C1BC',
  darkBlue: '#45a19d',
  success: '#4CAF50',
  warning: '#FFA726',
  error: '#F44336',
  info: '#2196F3',
  background: '#f4f6f8',
  cardBg: '#ffffff',
  textDark: '#2c3e50',
  textGray: '#64748b'
};

const API_URL = 'http://localhost:5005/api';
const drawerWidth = 220;

const initialListing = {
  title: '',
  category: '',
  location: '',
  suburb: '',
  summary: '',
  description: '',
  price: '',
  image: '',
  about: '',
  contactName: '',
  contactPhone: '',
  contactEmail: '',
  mapLink: '',
};

// Add locations array for dropdown
const LOCATIONS = [
  { id: 'melbourne', name: 'Melbourne' },
  { id: 'geelong', name: 'Geelong' },
  { id: 'ballarat', name: 'Ballarat' },
  { id: 'launceston', name: 'Launceston' },
  { id: 'brisbane', name: 'Brisbane' },
  { id: 'hobart', name: 'Hobart' },
  { id: 'sydney', name: 'Sydney' }
];

// Tiptap Editor setup for About field
function AboutEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Strike,
      TextStyle,
      Color,
      FontFamily,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Update editor content if value changes (for edit mode)
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '');
    }
  }, [value]);

  if (!editor) return null;

  return (
    <Box>
      <ButtonGroup variant="outlined" size="small" sx={{ mb: 1, flexWrap: 'wrap' }}>
        <Tooltip title="Bold"><IconButton onClick={() => editor.chain().focus().toggleBold().run()} color={editor.isActive('bold') ? 'primary' : 'default'}><FormatBoldIcon /></IconButton></Tooltip>
        <Tooltip title="Italic"><IconButton onClick={() => editor.chain().focus().toggleItalic().run()} color={editor.isActive('italic') ? 'primary' : 'default'}><FormatItalicIcon /></IconButton></Tooltip>
        <Tooltip title="Underline"><IconButton onClick={() => editor.chain().focus().toggleUnderline().run()} color={editor.isActive('underline') ? 'primary' : 'default'}><FormatUnderlinedIcon /></IconButton></Tooltip>
        <Tooltip title="Strikethrough"><IconButton onClick={() => editor.chain().focus().toggleStrike().run()} color={editor.isActive('strike') ? 'primary' : 'default'}><StrikethroughSIcon /></IconButton></Tooltip>
        <Tooltip title="Bullet List"><IconButton onClick={() => editor.chain().focus().toggleBulletList().run()} color={editor.isActive('bulletList') ? 'primary' : 'default'}><FormatListBulletedIcon /></IconButton></Tooltip>
        <Tooltip title="Numbered List"><IconButton onClick={() => editor.chain().focus().toggleOrderedList().run()} color={editor.isActive('orderedList') ? 'primary' : 'default'}><FormatListNumberedIcon /></IconButton></Tooltip>
        <Tooltip title="Text Color"><IconButton onClick={() => editor.chain().focus().setColor('#1976d2').run()}><FormatColorTextIcon /></IconButton></Tooltip>
        <Tooltip title="Align Left"><IconButton onClick={() => editor.chain().focus().setTextAlign('left').run()}><FormatAlignLeftIcon /></IconButton></Tooltip>
        <Tooltip title="Align Center"><IconButton onClick={() => editor.chain().focus().setTextAlign('center').run()}><FormatAlignCenterIcon /></IconButton></Tooltip>
        <Tooltip title="Align Right"><IconButton onClick={() => editor.chain().focus().setTextAlign('right').run()}><FormatAlignRightIcon /></IconButton></Tooltip>
        <Tooltip title="Justify"><IconButton onClick={() => editor.chain().focus().setTextAlign('justify').run()}><FormatAlignJustifyIcon /></IconButton></Tooltip>
      </ButtonGroup>
      <Box sx={{ border: '1px solid #ccc', borderRadius: 2, background: '#fff', minHeight: 120, p: 1 }}>
        <EditorContent editor={editor} />
      </Box>
    </Box>
  );
}

// Styled Components
const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '4px',
    height: '100%',
    backgroundColor: BRAND.blue,
  }
}));

const StatIcon = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  backgroundColor: 'rgba(86, 193, 188, 0.1)',
  color: BRAND.blue,
}));

const RecentListingCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
  }
}));

const AdminDashboard = () => {
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [listings, setListings] = useState([]);
  const [form, setForm] = useState(initialListing);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState('');
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [featureWarning, setFeatureWarning] = useState('');
  const [featuredCount, setFeaturedCount] = useState(0);
  const [listingsView, setListingsView] = useState('add'); // 'add' or 'current'
  const [enquiries, setEnquiries] = useState([]);
  const [enquiriesLoading, setEnquiriesLoading] = useState(false);
  const [enquiriesError, setEnquiriesError] = useState('');
  const [careerApps, setCareerApps] = useState([]);
  const [careerAppsLoading, setCareerAppsLoading] = useState(false);
  const [careerAppsError, setCareerAppsError] = useState('');

  // Fetch listings and update featured count
  useEffect(() => {
    if (token) {
      axios.get(`${API_URL}/listings`).then(res => {
        setListings(res.data);
        setFeaturedCount(res.data.filter(l => l.featured).length);
      });
    }
  }, [token]);

  // Fetch enquiries when tab selected
  useEffect(() => {
    if (selectedSection === 'enquiries' && token) {
      setEnquiriesLoading(true);
      setEnquiriesError('');
      fetch(`${API_URL}/valuations`, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) setEnquiries(data);
          else setEnquiries([]);
        })
        .catch(() => setEnquiriesError('Failed to load requests'))
        .finally(() => setEnquiriesLoading(false));
    }
  }, [selectedSection, token]);

  // Fetch career applications when tab selected
  useEffect(() => {
    if (selectedSection === 'careers' && token) {
      setCareerAppsLoading(true);
      setCareerAppsError('');
      fetch(`${API_URL}/career-applications`, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) setCareerApps(data);
          else setCareerApps([]);
        })
        .catch(() => setCareerAppsError('Failed to load career applications'))
        .finally(() => setCareerAppsLoading(false));
    }
  }, [selectedSection, token]);

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await axios.post(`${API_URL}/auth/login`, loginForm);
      localStorage.setItem('adminToken', res.data.token);
      setToken(res.data.token);
    } catch (err) {
      setLoginError('Invalid credentials');
    }
  };

  // Add or update listing
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    const payload = {
      ...form,
      summary: form.summary,
      suburb: form.suburb,
      contact: {
        name: form.contactName,
        phone: form.contactPhone,
        email: form.contactEmail,
      },
      mapLink: form.mapLink,
    };
    try {
      if (editId) {
        await axios.put(`${API_URL}/listings/${editId}`, payload, { headers: { Authorization: `Bearer ${token}` } });
        setMessage('Listing updated!');
      } else {
        await axios.post(`${API_URL}/listings`, payload, { headers: { Authorization: `Bearer ${token}` } });
        setMessage('Listing added!');
      }
      setForm(initialListing);
      setEditId(null);
      const res = await axios.get(`${API_URL}/listings`);
      setListings(res.data);
    } catch (err) {
      setMessage('Error saving listing');
    }
  };

  // Edit listing
  const handleEdit = (listing) => {
    console.log('Editing listing:', listing);
    setEditId(listing._id);
    setForm({
      title: listing.title || '',
      category: listing.category || '',
      location: listing.location || '',
      suburb: listing.suburb || '',
      summary: listing.summary || '',
      description: listing.description || '',
      price: listing.price || '',
      image: listing.image || '',
      about: listing.about || '',
      contactName: listing.contact?.name || '',
      contactPhone: listing.contact?.phone || '',
      contactEmail: listing.contact?.email || '',
      mapLink: listing.mapLink || '',
    });
    setSelectedSection('listings');
  };

  // Delete listing
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this listing?')) return;
    try {
      await axios.delete(`${API_URL}/listings/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      setListings(listings.filter(l => l._id !== id));
    } catch (err) {
      alert('Error deleting listing');
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken('');
    setSelectedSection('dashboard');
  };

  // Add a handler to toggle featured status with improved feedback
  const handleToggleFeatured = async (listing) => {
    const currentlyFeatured = listings.filter(l => l.featured).length;
    const willBeFeatured = !listing.featured;

    if (willBeFeatured && currentlyFeatured >= 4) {
      setFeatureWarning('You can only feature up to 4 listings.');
      setTimeout(() => setFeatureWarning(''), 3000);
      return;
    }

    try {
      const updatedListing = { ...listing, featured: willBeFeatured };
      await axios.put(`${API_URL}/listings/${listing._id}`, updatedListing, { 
        headers: { Authorization: `Bearer ${token}` } 
      });
      
      // Update local state
      setListings(listings.map(l => 
        l._id === listing._id ? updatedListing : l
      ));
      setFeaturedCount(willBeFeatured ? currentlyFeatured + 1 : currentlyFeatured - 1);
      setFeatureWarning('');
    } catch (err) {
      console.error('Error updating featured status:', err);
      setFeatureWarning('Failed to update featured status. Please try again.');
      setTimeout(() => setFeatureWarning(''), 3000);
    }
  };

  // Calculate statistics
  const stats = {
    totalListings: listings.length,
    featuredListings: listings.filter(l => l.featured).length,
    recentListings: listings.slice(-5).reverse(),
    categories: [...new Set(listings.map(l => l.category))].length,
  };

  if (!token) {
    return (
      <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8, p: 3, background: '#fff', borderRadius: 2, boxShadow: 2 }}>
        <Typography variant="h5" mb={2}>Admin Login</Typography>
        {loginError && <Alert severity="error" sx={{ mb: 2 }}>{loginError}</Alert>}
        <form onSubmit={handleLogin}>
          <TextField label="Username" name="username" value={loginForm.username} onChange={e => setLoginForm({ ...loginForm, username: e.target.value })} fullWidth required sx={{ mb: 2 }} />
          <TextField label="Password" name="password" type="password" value={loginForm.password} onChange={e => setLoginForm({ ...loginForm, password: e.target.value })} fullWidth required sx={{ mb: 2 }} />
          <Button type="submit" variant="contained" fullWidth>Login</Button>
        </form>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: '#fff', color: '#222', boxShadow: 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 700, letterSpacing: 1 }}>
            ABBASS Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', background: '#f8f9fa' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button selected={selectedSection === 'dashboard'} onClick={() => setSelectedSection('dashboard')}>
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button selected={selectedSection === 'listings'} onClick={() => setSelectedSection('listings')}>
              <ListItemIcon><ListAltIcon /></ListItemIcon>
              <ListItemText primary="Listings" />
            </ListItem>
            <ListItem button selected={selectedSection === 'enquiries'} onClick={() => setSelectedSection('enquiries')}>
              <ListItemIcon><AssignmentIndIcon /></ListItemIcon>
              <ListItemText primary="Enquiries" />
            </ListItem>
            <ListItem button selected={selectedSection === 'careers'} onClick={() => setSelectedSection('careers')}>
              <ListItemIcon><BusinessIcon /></ListItemIcon>
              <ListItemText primary="Career Applications" />
            </ListItem>
            <Divider sx={{ my: 1 }} />
            <ListItem button onClick={handleLogout}>
              <ListItemIcon><LogoutIcon /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: BRAND.background, minHeight: '100vh', p: 4 }}>
        <Toolbar />
        {selectedSection === 'dashboard' && (
          <Box>
            <Typography variant="h4" mb={3}>Dashboard</Typography>
            
            {/* Statistics Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6} md={3}>
                <StatCard>
                  <StatIcon>
                    <BusinessIcon fontSize="large" />
                  </StatIcon>
                  <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
                    {stats.totalListings}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Listings
                  </Typography>
                </StatCard>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatCard>
                  <StatIcon>
                    <StarIcon fontSize="large" />
                  </StatIcon>
                  <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
                    {stats.featuredListings}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Featured Listings
                  </Typography>
                </StatCard>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatCard>
                  <StatIcon>
                    <TrendingUpIcon fontSize="large" />
                  </StatIcon>
                  <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
                    {stats.categories}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Business Categories
                  </Typography>
                </StatCard>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatCard>
                  <StatIcon>
                    <AccessTimeIcon fontSize="large" />
                  </StatIcon>
                  <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
                    {stats.recentListings.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Recent Updates
                  </Typography>
                </StatCard>
              </Grid>
            </Grid>

            {/* Recent Listings */}
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AccessTimeIcon color="primary" />
                    Recent Listings
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {stats.recentListings.map(listing => (
                      <RecentListingCard key={listing._id}>
                        <Box sx={{ 
                          width: 60, 
                          height: 60, 
                          borderRadius: 1, 
                          overflow: 'hidden',
                          flexShrink: 0
                        }}>
                          <img 
                            src={listing.image || 'https://via.placeholder.com/60'} 
                            alt={listing.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {listing.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {listing.location} • {listing.price}
                          </Typography>
                        </Box>
                      </RecentListingCard>
                    ))}
                  </Box>
                </Paper>
              </Grid>

              {/* Quick Actions */}
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 3 }}>Quick Actions</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button
                      variant="contained"
                      startIcon={<AddIcon />}
                      onClick={() => {
                        setSelectedSection('listings');
                        setListingsView('add');
                      }}
                      sx={{ justifyContent: 'flex-start' }}
                    >
                      Add New Listing
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<ListAltIcon />}
                      onClick={() => {
                        setSelectedSection('listings');
                        setListingsView('current');
                      }}
                      sx={{ justifyContent: 'flex-start' }}
                    >
                      View All Listings
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        )}
        {selectedSection === 'listings' && (
          <Box>
            <Typography variant="h4" mb={3}>Manage Listings</Typography>
      {message && <Alert severity="info" sx={{ mb: 2 }}>{message}</Alert>}
            {featureWarning && <Alert severity="warning" sx={{ mb: 2 }}>{featureWarning}</Alert>}
            
            {/* Add Toggle Buttons */}
            <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
              <Button
                variant={listingsView === 'add' ? 'contained' : 'outlined'}
                onClick={() => setListingsView('add')}
                startIcon={<AddIcon />}
                sx={{
                  minWidth: '200px',
                  bgcolor: listingsView === 'add' ? BRAND.blue : 'transparent',
                  color: listingsView === 'add' ? 'white' : BRAND.blue,
                  '&:hover': {
                    bgcolor: listingsView === 'add' ? BRAND.darkBlue : 'rgba(86, 193, 188, 0.1)',
                  }
                }}
              >
                Add New Listing
              </Button>
              <Button
                variant={listingsView === 'current' ? 'contained' : 'outlined'}
                onClick={() => setListingsView('current')}
                startIcon={<ListAltIcon />}
                sx={{
                  minWidth: '200px',
                  bgcolor: listingsView === 'current' ? BRAND.blue : 'transparent',
                  color: listingsView === 'current' ? 'white' : BRAND.blue,
                  '&:hover': {
                    bgcolor: listingsView === 'current' ? BRAND.darkBlue : 'rgba(86, 193, 188, 0.1)',
                  }
                }}
              >
                Current Listings
              </Button>
            </Box>

            {/* Add New Listing Form */}
            {listingsView === 'add' && (
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" mb={2}>{editId ? 'Edit Listing' : 'Add New Listing'}</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}><TextField label="Title" name="title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} fullWidth required /></Grid>
            <Grid item xs={12} sm={6}><TextField label="Category" name="category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} fullWidth /></Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        label="Listing Location"
                        name="location"
                        value={form.location}
                        onChange={e => setForm({ ...form, location: e.target.value })}
                        fullWidth
                        required
                      >
                        <MenuItem value="">Select Location</MenuItem>
                        {LOCATIONS.map(loc => (
                          <MenuItem key={loc.id} value={loc.name}>{loc.name}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Suburb/Town"
                        name="suburb"
                        value={form.suburb}
                        onChange={e => setForm({ ...form, suburb: e.target.value })}
                        fullWidth
                      />
                    </Grid>
            <Grid item xs={12} sm={6}><TextField label="Price" name="price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} fullWidth /></Grid>
            <Grid item xs={12}><TextField label="Image URL" name="image" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} fullWidth /></Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>About</Typography>
                      <AboutEditor value={form.about} onChange={value => setForm({ ...form, about: value })} />
                    </Grid>
            <Grid item xs={12} sm={4}><TextField label="Contact Name" name="contactName" value={form.contactName} onChange={e => setForm({ ...form, contactName: e.target.value })} fullWidth /></Grid>
            <Grid item xs={12} sm={4}><TextField label="Contact Phone" name="contactPhone" value={form.contactPhone} onChange={e => setForm({ ...form, contactPhone: e.target.value })} fullWidth /></Grid>
            <Grid item xs={12} sm={4}><TextField label="Contact Email" name="contactEmail" value={form.contactEmail} onChange={e => setForm({ ...form, contactEmail: e.target.value })} fullWidth /></Grid>
                    <Grid item xs={12}><TextField label="Map Link (Google Maps Embed URL)" name="mapLink" value={form.mapLink} onChange={e => setForm({ ...form, mapLink: e.target.value })} fullWidth /></Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Summary"
                        name="summary"
                        value={form.summary}
                        onChange={e => setForm({ ...form, summary: e.target.value })}
                        fullWidth
                        required
                        multiline
                        minRows={2}
                        maxRows={4}
                        helperText="Short summary for the listing card preview."
                      />
                    </Grid>
            <Grid item xs={12}><Button type="submit" variant="contained">{editId ? 'Update Listing' : 'Add Listing'}</Button></Grid>
          </Grid>
        </form>
      </Paper>
            )}

            {/* Current Listings Table */}
            {listingsView === 'current' && (
              <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>Current Listings</Typography>
                <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Price</TableCell>
                        <TableCell>Featured</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listings.map(listing => (
              <TableRow key={listing._id}>
                <TableCell>{listing.title}</TableCell>
                <TableCell>{listing.location}</TableCell>
                <TableCell>{listing.price}</TableCell>
                <TableCell>
                            <FormControlLabel
                              control={
                                <Checkbox 
                                  checked={!!listing.featured}
                                  onChange={() => handleToggleFeatured(listing)}
                                  disabled={!listing.featured && featuredCount >= 4}
                                  sx={{
                                    '&.Mui-disabled': {
                                      color: 'rgba(0, 0, 0, 0.26)',
                                    },
                                  }}
                                />
                              }
                              label={listing.featured ? "Featured" : "Not Featured"}
                            />
                          </TableCell>
                          <TableCell>
                            <IconButton onClick={() => {
                              handleEdit(listing);
                              setListingsView('add');
                            }}><EditIcon /></IconButton>
                  <IconButton onClick={() => handleDelete(listing._id)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
              </Paper>
            )}
          </Box>
        )}
        {selectedSection === 'enquiries' && (
          <Box>
            <Typography variant="h4" mb={3}>Enquiries</Typography>
            {enquiriesLoading && <Typography>Loading...</Typography>}
            {enquiriesError && <Typography color="error.main">{enquiriesError}</Typography>}
            {!enquiriesLoading && !enquiriesError && (
              <Paper sx={{ p: 3 }}>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {enquiries.map((v) => (
                        <TableRow key={v._id}>
                          <TableCell>{v.firstName} {v.lastName}</TableCell>
                          <TableCell>{v.phone}</TableCell>
                          <TableCell>{v.email}</TableCell>
                          <TableCell>{new Date(v.createdAt).toLocaleString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            )}
          </Box>
        )}
        {selectedSection === 'careers' && (
          <Box>
            <Typography variant="h4" mb={3}>Career Applications</Typography>
            {careerAppsLoading ? (
              <Typography>Loading...</Typography>
            ) : careerAppsError ? (
              <Alert severity="error">{careerAppsError}</Alert>
            ) : (
              <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Cover Letter</TableCell>
                      <TableCell>Resume</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {careerApps.map(app => (
                      <TableRow key={app._id}>
                        <TableCell>{app.name}</TableCell>
                        <TableCell>{app.email}</TableCell>
                        <TableCell>{app.phone}</TableCell>
                        <TableCell sx={{ maxWidth: 200, whiteSpace: 'pre-line', overflow: 'auto' }}>{app.coverLetter}</TableCell>
                        <TableCell>
                          <a href={app.resumeFile} target="_blank" rel="noopener noreferrer">Download CV</a>
                        </TableCell>
                        <TableCell>{app.createdAt ? new Date(app.createdAt).toLocaleString() : ''}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AdminDashboard; 