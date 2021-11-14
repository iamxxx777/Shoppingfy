const express = require('express');
const router = express.Router();
const { getAllLists, getListId, postList, putList } = require("../controllers/listsController");

// All Lists route
router.get('/', getAllLists);

// List ID page
router.get('/:id', getListId);

// Post List page
router.post("/", postList);

// Put List page
router.put("/", putList);

module.exports = router;