import CartItem from "./CartItem"
import "./Shoping.css"

const CartCategory = ({ data, category }) => {
    const items = data.filter((item) => item.category === category);
    
    return (
        <div className="shopping_category">
            <h2>{category}</h2>
            <div className="category_items">
                {items.map((item, i) => <CartItem key={i} data={item} />)}
            </div>
        </div>
    )
}

export default CartCategory
