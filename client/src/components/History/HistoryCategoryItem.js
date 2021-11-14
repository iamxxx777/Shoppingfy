import "./HistoryItem.css"

const HistoryCategoryItem = ({ item }) => {
    return (
        <div className="history_category_item">
            <h3>{item.name}</h3>
            <h5>{item.qty}pcs</h5>
        </div>
    )
}

export default HistoryCategoryItem
