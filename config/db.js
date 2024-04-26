// config/db.js
const mongoose = require('mongoose');
require('dotenv').config()
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://rowhit66:${process.env.MONGO_URI}@cluster0.preis8v.mongodb.net/questions?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
