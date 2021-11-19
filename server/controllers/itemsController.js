const Items = require('../models/item');


const getAllItems = async (req, res) => {
    try {
        const items = await Items.find({});
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}

const getItemId = async (req, res) => {
    try {
        const item = await Items.findById(req.params.id);
        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}

const postItem = async (req, res) => {
    try {
        const data = req.body;
        const newItem = new Items(data);
        await newItem.save();

        res.status(200).json({success: true});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}


module.exports = {
    getAllItems,
    getItemId,
    postItem
};