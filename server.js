require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express()

// Middelware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Mongoose
const URI = process.env.CONNECTING_URI;

mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const connected = mongoose.connection

connected.once('open', () => {
    console.log('Database Connected')
})

// Routes
app.use('/user', require('./routes/userRoutes'));
app.use('/api', require('./routes/productsRoutes'));

// Server listening
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server running on port: ', PORT)
})