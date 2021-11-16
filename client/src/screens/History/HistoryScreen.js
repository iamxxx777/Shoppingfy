import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getLists } from "../../redux/actions/listActions"

import NewItem from "../../components/NewItem/NewItem"
import ShoppingList from "../../components/Cart/ShopingList"
import History from '../../components/History/History'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

import "./historyScreen.css"

const HistoryScreen = ({ showModal }) => {
    const { path } = useRouteMatch();
    const [display, setDisplay] = useState(false);

    const dispatch = useDispatch();
    const { loading, lists, error } = useSelector(state => state.lists);

    useEffect(() => {
        dispatch(getLists());
    }, [dispatch]);

    return (
        <div className="history_container">
            {
                loading ? (<Loading />) 
                : error ? (<Error />) :
                <>
                    <History lists={lists} />

                    {display && <div className="itemz_cart">
                        <Switch>
                            <Route exact path={`${path}/newitem`}> <NewItem click={() => setDisplay(false)} /> </Route>
                            <Route exact path={path} > <ShoppingList  showModal={showModal} /> </Route>        
                        </Switch>
                    </div>}
                </>
            }
        </div>
    )
}

export default HistoryScreen
