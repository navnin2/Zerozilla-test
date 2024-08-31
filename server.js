require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes')
const agencyRoutes = require('./routes/agencyRoutes')

const app = express();
connectDB();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/', agencyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));