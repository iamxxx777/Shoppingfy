import Empty from "../../assets/shopping.svg"

import "./Shopping.css"

const EmptyCart = () => {
    return (
        <div className="empty_cart">
            <h3>No Items</h3>
            <img src={Empty} alt="Shopper pushing empty cart" />
        </div>
    )
}

export default EmptyCart
