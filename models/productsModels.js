const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    product_id: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = model('Products', productSchema)