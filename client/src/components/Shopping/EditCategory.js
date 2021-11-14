import EditItem from "./EditItem"
import "./Shopping.css"

const EditCategory = ({ data, category }) => {
    const items = data.filter((item) => item.category === category);

    return (
        <div className="edit_category">
            <h2>{category}</h2>
            {items.map((item, i) => <EditItem key={i} data={item} />)}
        </div>
    )
}

export default EditCategory
