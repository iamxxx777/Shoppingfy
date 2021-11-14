import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useState } from "react"

import Items from "../../components/Items/Items"
import NewItem from "../../components/NewItem/NewItem"
import AddNewItem from "../../components/AddNewItem/AddNewItem"
import ShoppingList from "../../components/Cart/ShopingList"

import "./itemsScreen.css"

const ItemsScreen = ({ cart, hideCart, showModal }) => {
    const { path } = useRouteMatch();
    const [display, setDisplay] = useState(false);

    return (
        <div className="container">
            {!display && !cart ? 
                <div className="itemz">
                    <Items click={() => setDisplay(true)} />
                </div>
            : null}

            {cart && <div className="itemz"> 
                        <ShoppingList click={() => setDisplay(true)}  hideCart={hideCart} showModal={showModal} /> 
                    </div>
            }

            {display && !cart ? 
                <div className="itemz_cart">
                    <Switch>
                        <Route exact path={`${path}/newitem`}> <NewItem click={() => setDisplay(false)} /> </Route>
                        <Route path={`${path}/:id`} > <AddNewItem click={() => setDisplay(false)} /> </Route>        
                        <Route exact path={path} > <ShoppingList click={() => setDisplay(false)} showModal={showModal} /> </Route>        
                    </Switch>
                </div>
            : null}
        </div>
    )
}

export default ItemsScreen
