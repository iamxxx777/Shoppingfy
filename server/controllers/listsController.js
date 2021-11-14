const List = require("../models/list");

const getAllLists = async (req, res) => {
    try {
        const lists = await List.find({});
        res.status(200).json(lists);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}

const getListId = async (req, res) => {
    try {
        const list = await List.findById(req.params.id);
        res.status(200).json(list);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}

const postList = async (req, res) => {
    try {
        const data = req.body;
        const newList = new List(data);
        await newList.save();

        res.status(200).json(newList);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}

const putList = async (req, res) => {
    try {
        const data = req.body;
        const { _id, ...others } = data;

        const list = await List.findById(_id);
        console.log(list);

        if(!list) {
            res.status(200).json({message: 'List not found'});
        }

        List.findByIdAndUpdate(_id, {$set: others}, {new: true}, (err, doc) => {
            if(err) {
                console.error(err);
                res.status(500).json({message: "Server Error"});
            } else {
                res.json(doc);
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}



module.exports = {
    getAllLists,
    getListId,
    postList,
    putList
}