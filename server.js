const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// API Routes
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you would typically save to database or send email
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message! We\'ll get back to you soon.' 
  });
});

app.post('/api/diagnostic', (req, res) => {
  const { company, email, phone, useCase } = req.body;
  
  // Here you would typically save to database or send email
  console.log('Diagnostic request:', { company, email, phone, useCase });
  
  res.json({ 
    success: true, 
    message: 'Diagnostic request received! We\'ll contact you within 24 hours to schedule your free diagnostic session.' 
  });
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});