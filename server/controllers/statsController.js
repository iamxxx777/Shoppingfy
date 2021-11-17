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

        const finalNames = topNames.sort(compare).slice(topNames.length-3, topNames.length).reverse();
        const finalCategorys = topCategorys.sort(compare).slice(topCategorys.length-3, topCategorys.length).reverse();

        // Get month stats
        const monthsList = await List.find({}).sort({'createdAt': -1});

        const options = { month: 'long' };
        const months = [...new Set(monthsList.map((list) => new Intl.DateTimeFormat('en-US', options).format(new Date(list.createdAt))))];

        const reducers = (previousValue, currentValue) => previousValue + currentValue.items.length;

        var graph = [];

        months.forEach((month) => {
            var onee = monthsList.filter((mon) => new Intl.DateTimeFormat('en-US', options).format(new Date(mon.createdAt)) === month).reduce(reducers, 0);
            graph.push({month: month, value: onee});
        });

        graph = graph.reverse();

        res.status(200).json({finalNames, finalCategorys, graph});


    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
    
}

module.exports = { getStats };