require('dotenv').config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    note: {
        type: String,
    },
    image: {
        type: String,
    }
}, { timestamps: true });



module.exports = mongoose.models.Items || mongoose.model('Items', itemSchema);