// app.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const questionsRoutes = require('./routes/questionsRoutes');
const cors = require('cors');
const app = express();
require('dotenv').config()
// Middlewares
app.use(bodyParser.json());
app.use(cors({
    origin: [
        'https://exp.host',
        'https://*.exp.direct' // Allow subdomains of exp.direct
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add other HTTP methods as needed
    allowedHeaders: ['Content-Type', 'Authorization'], // Add other headers as needed
}));

// Connect to MongoDB
connectDB();

// Mount routes
app.use('/api/questions', questionsRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
