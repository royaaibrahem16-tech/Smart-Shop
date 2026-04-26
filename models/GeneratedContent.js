const mongoose = require('mongoose');

const generatedContentSchema = new mongoose.Schema({
    content_text: String,
    image_url: String,
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, 
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GeneratedContent', generatedContentSchema);