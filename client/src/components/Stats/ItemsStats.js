import CategoryStats from "./CategoryStats"

const ItemsStats = ({ data }) => {
    console.log(data);
    return (
        <div className="items_stats">
            <CategoryStats data={data[0]} title="Top Items" />
            <CategoryStats data={data[1]} title="Top Categories" />
        </div>
    )
}

export default ItemsStats
