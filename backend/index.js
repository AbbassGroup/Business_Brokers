require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express(); // Define app first

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:3003', 'http://localhost:3004'],
  credentials: true,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS']
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

app.use(express.json());

// MongoDB Connection
console.log('MONGODB_URI:', process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Health check route
app.get('/', (req, res) => {
  res.send('Business Brokers API is running');
});

const listingsRoutes = require('./routes/listings');
app.use('/api/listings', listingsRoutes);

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const valuationsRoutes = require('./routes/valuations');
app.use('/api/valuations', valuationsRoutes);

const confidentialityRoutes = require('./routes/confidentiality');
app.use('/api/confidentiality', confidentialityRoutes);

const eoiRoutes = require('./routes/eoi');
app.use('/api/eoi', eoiRoutes);

const careersRoutes = require('./routes/careers');
app.use('/api/careers', careersRoutes);

const contactRoute = require('./routes/contact');
app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 