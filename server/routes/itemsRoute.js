const express = require('express');
const router = express.Router();
const { getAllItems, getItemId, postItem } = require('../controllers/itemsController');

// All Items route
router.get('/', getAllItems);

// Item ID page
router.get('/:id', getItemId);

// Post Item page
router.post("/", postItem)

module.exports = router;