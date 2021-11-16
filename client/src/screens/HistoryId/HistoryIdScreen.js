import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getListDetails } from '../../redux/actions/listActions'

import NewItem from "../../components/NewItem/NewItem"
import ShoppingList from "../../components/Cart/ShopingList"
import HistoryItem from "../../components/History/HistoryItem"
import Loading from "../../components/Loading/Loading"
import Error from '../../components/Error/Error'

import "./historyIdScreen.css"

const HistoryIdScreen = ({ showModal }) => {
    const { path } = useRouteMatch();
    const [display, setDisplay] = useState(false);

    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, list, error } = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(getListDetails(id));
    }, [dispatch, id]);

    return (
        <div className="history_id">
            {
                loading ? <Loading /> 
                : error ? <Error /> :
                <>
                    <HistoryItem list={list} />
                    
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

export default HistoryIdScreen
