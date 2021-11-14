import HistoryCategoryItem from "./HistoryCategoryItem"
import "./HistoryItem.css"


const HistoryCategory = ({ data, category }) => {
    const items = data.filter((item) => item.category === category);
    return (
        <div className="history_list_category">
            <h2>{category}</h2>
            <div className="history_category_items">
                {items.map((item) => <HistoryCategoryItem key={item._id} item={item} />)}
            </div>                
        </div>
    )
}

export default HistoryCategory
