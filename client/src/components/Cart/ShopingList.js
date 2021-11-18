import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"

import { currentList as newCurrentList, updateCurrentList } from "../../redux/actions/listActions"

import ShoppingCart from "../Shopping/ShoppingCart"
import EmptyCart from "../Shopping/EmptyCart"
import UpdateButtons from "../Shopping/UpdateButtons"
import Source from "../../assets/source.svg"

import "./Shoping.css"

const ShoppingList = ({ mobile, showModal, showDisplay, hideDisplay, hideCart }) => {

    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
    const { currentList } = useSelector((state) => state.currentList);
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState("");
    const [currentName, setCurrentName] = useState(currentList.name ? currentList.name : "");

    const addClick = () => {
        hideCart();
        showDisplay();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(newCurrentList(name));
        setName("");
        if(mobile) {
            hideDisplay();
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateCurrentList(currentName));
        if(mobile) {
            hideDisplay();
        }
    }

    
    return (
        <div className="shopping">
            <div className="cart_items">
                <div className="cart_items_container">
                    <div className="card">
                        <div className="card_img">
                            <img src={Source} alt="cart heading" />
                        </div>
                        <div className="card_info">
                            <p>Didn't find what you need?</p>
                            <Link to="/items/newitem" onClick={() => mobile ? addClick() : null }><button>Add item</button></Link>
                        </div>
                    </div>
                    {cartItems.length > 0 ? (
                            <ShoppingCart data={cartItems} click={() => setEdit(!edit)} edit={edit} />
                        ) : (
                            <EmptyCart />
                        )
                    }
                </div>
            </div>

            {!edit && 
                <div className="name_buttons">
                    {!currentList.items &&
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                required 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                placeholder="Enter a name" 
                                style={cartItems.length === 0 ? {pointerEvents: "none", borderColor: "gray"} : null} 
                            />
                            <button type="submit" style={cartItems.length === 0 ? {pointerEvents: "none", backgroundColor: "gray"} : null}>Save</button>    
                        </form>
                    }
                    
                    {currentList.items && 
                        <form onSubmit={handleUpdate}>
                            <input 
                                type="text" 
                                required 
                                value={currentName} 
                                onChange={(e) => setCurrentName(e.target.value)} 
                                placeholder="Enter a name" 
                                style={cartItems.length === currentList.items.length ? {pointerEvents: "none", borderColor: "gray"} : null} 
                            />
                            <button type="submit" style={cartItems.length === currentList.items.length ? {pointerEvents: "none", backgroundColor: "gray"} : null}>Update</button>
                        </form>
                    }
                </div>
            }
            {edit && <UpdateButtons showModal={showModal} />}
        </div>
    )
}

export default ShoppingList
