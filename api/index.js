const express = require('express');

const app = express();

const users = require('./routes/users');

// Import API Routes
app.use(users);

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app,
};
