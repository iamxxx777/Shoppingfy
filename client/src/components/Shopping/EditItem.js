import "./Shopping.css"

const EditItem = ({ data }) => {
    return (
        <div className="edit_item">
            <label>
                <input type="checkbox" id={data.item} />
                <span></span>
            </label>
            <div className="edit_items">
                <p>{data.name}</p>
                <p>{data.qty} pcs</p>
            </div>
        </div>
    )
}

export default EditItem
