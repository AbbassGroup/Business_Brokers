import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Alert, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, AppBar, CssBaseline, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

const API_URL = 'http://localhost:5005/api';
const drawerWidth = 220;

const initialListing = {
  title: '',
  category: '',
  location: '',
  description: '',
  price: '',
  image: '',
  summary: '',
  about: '',
  keyFeatures: '', // comma separated
  whyOpportunity: '',
  contactName: '',
  contactPhone: '',
  contactEmail: '',
  mapLink: '', // new field for map embed link
};

const AdminDashboard = () => {
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [listings, setListings] = useState([]);
  const [form, setForm] = useState(initialListing);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState('');
  const [selectedSection, setSelectedSection] = useState('dashboard');

  // Fetch listings
  useEffect(() => {
    if (token) {
      axios.get(`${API_URL}/listings`).then(res => setListings(res.data));
    }
  }, [token]);

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
      keyFeatures: form.keyFeatures.split(',').map(f => f.trim()),
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
    setEditId(listing._id);
    setForm({
      ...listing,
      keyFeatures: listing.keyFeatures ? listing.keyFeatures.join(', ') : '',
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

  // Dashboard summary
  const totalListings = listings.length;
  const recentListings = listings.slice(-5).reverse();

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
            <Divider sx={{ my: 1 }} />
            <ListItem button onClick={handleLogout}>
              <ListItemIcon><LogoutIcon /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f4f6f8', minHeight: '100vh', p: 4 }}>
        <Toolbar />
        {selectedSection === 'dashboard' && (
          <Box>
            <Typography variant="h4" mb={3}>Dashboard</Typography>
            <Paper sx={{ p: 3, mb: 4 }}>
              <Typography variant="h6">Total Listings: {totalListings}</Typography>
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>Recent Listings</Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell>Location</TableCell>
                      <TableCell>Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentListings.map(listing => (
                      <TableRow key={listing._id}>
                        <TableCell>{listing.title}</TableCell>
                        <TableCell>{listing.location}</TableCell>
                        <TableCell>{listing.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
        )}
        {selectedSection === 'listings' && (
          <Box>
            <Typography variant="h4" mb={3}>Manage Listings</Typography>
            {message && <Alert severity="info" sx={{ mb: 2 }}>{message}</Alert>}
            <Paper sx={{ p: 3, mb: 4 }}>
              <Typography variant="h6" mb={2}>{editId ? 'Edit Listing' : 'Add New Listing'}</Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}><TextField label="Title" name="title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} fullWidth required /></Grid>
                  <Grid item xs={12} sm={6}><TextField label="Category" name="category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} fullWidth /></Grid>
                  <Grid item xs={12} sm={6}><TextField label="Location" name="location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} fullWidth /></Grid>
                  <Grid item xs={12} sm={6}><TextField label="Price" name="price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} fullWidth /></Grid>
                  <Grid item xs={12}><TextField label="Image URL" name="image" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} fullWidth /></Grid>
                  <Grid item xs={12}><TextField label="Summary" name="summary" value={form.summary} onChange={e => setForm({ ...form, summary: e.target.value })} fullWidth multiline rows={2} /></Grid>
                  <Grid item xs={12}><TextField label="About" name="about" value={form.about} onChange={e => setForm({ ...form, about: e.target.value })} fullWidth multiline rows={2} /></Grid>
                  <Grid item xs={12}><TextField label="Key Features (comma separated)" name="keyFeatures" value={form.keyFeatures} onChange={e => setForm({ ...form, keyFeatures: e.target.value })} fullWidth multiline rows={2} /></Grid>
                  <Grid item xs={12}><TextField label="Why This Opportunity?" name="whyOpportunity" value={form.whyOpportunity} onChange={e => setForm({ ...form, whyOpportunity: e.target.value })} fullWidth multiline rows={2} /></Grid>
                  <Grid item xs={12} sm={4}><TextField label="Contact Name" name="contactName" value={form.contactName} onChange={e => setForm({ ...form, contactName: e.target.value })} fullWidth /></Grid>
                  <Grid item xs={12} sm={4}><TextField label="Contact Phone" name="contactPhone" value={form.contactPhone} onChange={e => setForm({ ...form, contactPhone: e.target.value })} fullWidth /></Grid>
                  <Grid item xs={12} sm={4}><TextField label="Contact Email" name="contactEmail" value={form.contactEmail} onChange={e => setForm({ ...form, contactEmail: e.target.value })} fullWidth /></Grid>
                  <Grid item xs={12}><TextField label="Map Link (Google Maps Embed URL)" name="mapLink" value={form.mapLink} onChange={e => setForm({ ...form, mapLink: e.target.value })} fullWidth /></Grid>
                  <Grid item xs={12}><Button type="submit" variant="contained">{editId ? 'Update Listing' : 'Add Listing'}</Button></Grid>
                </Grid>
              </form>
            </Paper>
            <Typography variant="h6" mb={2}>Current Listings</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Price</TableCell>
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
                        <IconButton onClick={() => handleEdit(listing)}><EditIcon /></IconButton>
                        <IconButton onClick={() => handleDelete(listing._id)}><DeleteIcon /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AdminDashboard; 