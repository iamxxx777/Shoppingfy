import { Link } from "react-router-dom"
import "./Nav.css"

import Logo from "../../assets/logo.svg"

const Nav = ({ showCart, hideCart }) => {
    return (
        <nav className="nav">
            <div className="nav_container">
                <div className="nav_logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="nav_btns">
                    <div>
                        <button onClick={hideCart}><Link to="/items"><i className="uil uil-list-ul"></i></Link></button>
                    </div>
                        
                    <div>
                        <button><Link to="/history"><i className="uil uil-redo"></i></Link></button>
                    </div>
                        
                    <div>
                        <button><Link to="/stats"><i className="uil uil-chart"></i></Link></button>
                    </div>
                        
                </div>

                <div className="cart">
                    <button onClick={showCart}>
                        <span>2</span>
                        <i className="uil uil-shopping-cart-alt"></i>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav
