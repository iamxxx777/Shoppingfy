import { Link } from "react-router-dom"
import "../Items/Items.css"

const Item = ({ item, click }) => {
    
    return (
        <div className="item">
            <h5>{item.name}</h5>
            <Link to={`/items/${item._id}`} onClick={click}><button><i className="fa fa-plus" aria-hidden="true"></i></button></Link>
        </div>
    )
}

export default Item
