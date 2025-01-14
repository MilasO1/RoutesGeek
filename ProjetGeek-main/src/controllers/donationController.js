const Donation = require('../models/Donation');

//Lister les donations
exports.getDonations = async (req, res) => {
    try {
        const donations = await Donation.find({ available: true });
        res.status(200).json(donations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Reserver une donation
exports.reserveDonation = async (req, res) => {
    try {
        const { donationId, userId } = req.body;
        const donation = await Donation.findById(donationId);
        if (!donation || !donation.available) {
            return res.status(400).json({ message: 'Donation not available.' });
        }
        donation.available = false;
        donation.reservedBy = userId;
        await donation.save();
        res.status(200).json(donation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
