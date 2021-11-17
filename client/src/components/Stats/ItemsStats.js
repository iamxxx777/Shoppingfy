import CategoryStats from "./CategoryStats"

const ItemsStats = ({ data }) => {
    return (
        <div className="items_stats">
            <CategoryStats data={data.finalNames} title="Top Items" color="#F9A109" />
            <CategoryStats data={data.finalCategorys} title="Top Categories" color="#56CCF2" />
        </div>
    )
}

export default ItemsStats
