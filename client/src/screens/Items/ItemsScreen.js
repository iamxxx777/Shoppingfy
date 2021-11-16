import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";

import { getItems } from "../../redux/actions/itemsAction"

import Items from "../../components/Items/Items"
import NewItem from "../../components/NewItem/NewItem"
import AddNewItem from "../../components/AddNewItem/AddNewItem"
import ShoppingList from "../../components/Cart/ShopingList"
import Loading from "../../components/Loading/Loading"
import Error from '../../components/Error/Error'

import "./itemsScreen.css"

const ItemsScreen = ({ cart, hideCart, showModal }) => {
    const { path } = useRouteMatch();
    const [display, setDisplay] = useState(false);

    const dispatch = useDispatch();
    const { loading, error, items } = useSelector((state) => state.items);

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

    return (
        <div className="container">
            {
                loading ? <Loading />
                : error ? <Error /> :
                <>
                    {!display && !cart ? 
                        <div className="itemz">
                            <Items items={items} click={() => setDisplay(true)} />
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
                </>
            }   
        </div>
    )
}

export default ItemsScreen
