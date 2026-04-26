const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    description: String,
    price: Number,
    original_image_url: String,
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }                                    
});

module.exports = mongoose.model('Product', productSchema);