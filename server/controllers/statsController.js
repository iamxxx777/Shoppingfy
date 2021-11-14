const List = require("../models/list");

const getStats = async (req, res) => {
    try {
        const lists = await List.find({});
        const items = lists.map((list) => list.items).flat();

        const names = items.map((item) => item.name);
        const categorys = items.map((item) => item.category);

        const uniqueNames = [...new Set(names)];
        const uniqueCategorys = [...new Set(categorys)];

        var topNames = [];
        var topCategorys = [];

        function sortData(a, b, c) {
            var n = 0;
            for(i = 0; i < a.length; i++){
                if(a[i] == b){n++}
            }
            c.push({name: b, value:(( n / a.length) * 100).toFixed()});
        }

        uniqueNames.forEach((item) => {
            sortData(names, item, topNames);
        });

        uniqueCategorys.forEach((item) => {
            sortData(categorys, item, topCategorys);
        });

        function compare(first, second) {
            if (Number(first.value) < Number(second.value))
                return -1;
            if (Number(first.value) > Number(second.value))
              return 1;
           return 0;
        }

        const finalNames = topNames.sort(compare).slice(topNames.length-3, topNames.length);
        const finalCategorys = topCategorys.sort(compare).slice(topCategorys.length-3, topCategorys.length);

        res.status(200).json({finalNames, finalCategorys});

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
    
}

module.exports = { getStats };