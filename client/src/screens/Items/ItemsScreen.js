import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { getItems } from "../../redux/actions/itemsAction"

import Items from "../../components/Items/Items"
import NewItem from "../../components/NewItem/NewItem"
import AddNewItem from "../../components/AddNewItem/AddNewItem"
import ShoppingList from "../../components/Cart/ShopingList"
import Loading from "../../components/Loading/Loading"
import Error from '../../components/Error/Error'

import "./itemsScreen.css"

const ItemsScreen = ({ showModal, display, hideDisplay, showDisplay }) => {
    const { path } = useRouteMatch();

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
                    {!display ? 
                        <div className="itemz">
                            <Items items={items} click={showDisplay} />
                        </div>
                    : null}
        
    
                     
                    <div className={`itemz_cart ${display && "mb_cart"}`}>
                        <Switch>
                            <Route exact path={`${path}/newitem`}> <NewItem click={hideDisplay} /> </Route>
                            <Route path={`${path}/:id`} > <AddNewItem click={hideDisplay} /> </Route>        
                            <Route exact path={path} > <ShoppingList click={hideDisplay} showModal={showModal} /> </Route>        
                        </Switch>
                    </div>
                    
                </>
            }   
        </div>
    )
}

export default ItemsScreen
