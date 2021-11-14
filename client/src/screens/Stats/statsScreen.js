import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getStats } from '../../redux/actions/statsActions'

import NewItem from "../../components/NewItem/NewItem"
import ShoppingList from "../../components/Cart/ShopingList"
import Stats from "../../components/Stats/Stats"

import "./statsScreen.css"

const StatsScreen = ({ showModal }) => {
    const { path } = useRouteMatch();
    const [display, setDisplay] = useState(false);

    const dispatch = useDispatch();
    const { loading, stats, error } = useSelector((state) => state.stats);

    useEffect(() => {
        dispatch(getStats());
    }, [dispatch]);

    console.log(stats);

    return (
        <div className="history_container">
            {
                loading ? (<h1>Loading...</h1>)
                : error ? (<h1>{error}</h1>)
                : 
                <>
                    <Stats data={stats} />

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

export default StatsScreen
