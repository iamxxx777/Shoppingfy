const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    cancelled: {
        type: Boolean,
        default: false,
    },
    items: [{
        name: { type: String, required: true },
        category: { type: String, required: true },
        qty: { type: String, required: true },
        checked: { type: Boolean, default: false },
        item: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Items',
        },
    }]
}, {timestamps: true});

module.exports = mongoose.models.List || mongoose.model('List', listSchema);