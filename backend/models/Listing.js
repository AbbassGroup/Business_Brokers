const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
}, { _id: false });

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: String,
  location: String,
  suburb: String,
  description: String,
  price: String,
  image: String,
  summary: String,
  about: String,
  keyFeatures: [String],
  whyOpportunity: String,
  contact: contactSchema,
  mapLink: String,
  featured: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Listing', listingSchema); 