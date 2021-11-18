import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "./Nav.css"

import Logo from "../../assets/logo.svg"

const Nav = ({ showCart, hideDisplay, hideSide }) => {

    const { cartItems } = useSelector((state) => state.cart);

    return (
        <nav className="nav">
            <div className="nav_container">
                <div className="nav_logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="nav_btns">
                    <div>
                        <button><Link to="/items" onClick={hideDisplay}><i className="uil uil-list-ul"></i></Link></button>
                    </div>
                        
                    <div>
                        <button><Link to="/history" onClick={hideSide}><i className="uil uil-redo"></i></Link></button>
                    </div>
                        
                    <div>
                        <button><Link to="/stats" onClick={hideSide}><i className="uil uil-chart"></i></Link></button>
                    </div>
                        
                </div>

                <div className="cart">
                    <button onClick={showCart}>
                        <span>{cartItems.length}</span>
                        <i className="uil uil-shopping-cart-alt"></i>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav
