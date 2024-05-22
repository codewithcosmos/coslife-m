const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });

// Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    description: String
});

const Product = mongoose.model('Product', productSchema);

// API Endpoint to Get All Products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Start Server
app.listen(3000, () => console.log('Server running on port 3000'));
