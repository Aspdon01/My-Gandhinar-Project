const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 8080;

// Security Middlewares
app.use(helmet()); // Secure HTTP headers
app.use(cors()); // Enable CORS for scalability

// Rate limiting to prevent DDoS / Brute force
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: { error: 'Too many requests from this IP, please try again later.' }
});
app.use('/api/', limiter);

// Built-in Middlewares
app.use(express.json({ limit: '10kb' })); // Body parser with size limit to prevent payload attacks
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = app;
