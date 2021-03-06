const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    readOnly: {
        type: Boolean,
        required: false
    },
    categoryName: {
        type: String,
        required: true
    },
    categorySlug: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    isFeatured: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('ProductCategory', schema);
