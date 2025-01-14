const express = require('express');
const { getDonations, reserveDonation } = require('../controllers/donationController');
const router = express.Router();

router.get('/', getDonations);
router.post('/reserve', reserveDonation);

module.exports = router;
