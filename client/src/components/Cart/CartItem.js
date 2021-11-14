import { useState } from "react"
import { useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../../redux/actions/cartActions";
import "./Shoping.css"

const CartItem = ({ data }) => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleRemove = () => {
        dispatch(removeFromCart(data.item));
    }

    const handleIncrease = () => {
        dispatch(increaseQty(data.item));
    }

    const handleDecrease = () => {
        dispatch(decreaseQty(data.item));
    }

    return (
        <div className="category_item">
            <h3 style={data.checked ? {textDecoration: "line-through" } : null}>{data.name}</h3>
            <div className={`category_item_btn ${show ? "show" : ""} `}>
                <button onClick={handleRemove} className={!show ? "hide" : ""}><i className="uil uil-trash-alt"></i></button>
                <button onClick={handleDecrease} className={!show ? "hide" : ""}><i className="uil uil-minus"></i></button>
                <button disabled={data.checked ? true : false} onClick={() => setShow(!show)} className="main_btn">{data.qty} pcs</button>
                <button onClick={handleIncrease} className={!show ? "hide" : ""}><i className="uil uil-plus"></i></button>
            </div>
        </div>
    )
}

export default CartItem
