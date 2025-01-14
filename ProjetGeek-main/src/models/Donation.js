const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    description: { type: String },
    available: { type: Boolean, default: true },
    reservedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);
