const express = require('express');
const router = express.Router();
const { getStats } = require("../controllers/statsController");

// All Lists route
router.get('/', getStats);


module.exports = router;