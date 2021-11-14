import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useState } from "react"

import NewItem from "../../components/NewItem/NewItem"
import ShoppingList from "../../components/Cart/ShopingList"
import History from '../../components/History/History'

import "./historyScreen.css"

const HistoryScreen = ({ showModal }) => {
    const { path } = useRouteMatch();
    const [display, setDisplay] = useState(false);

    return (
        <div className="history_container">
            <History />

            {display && <div className="itemz_cart">
                <Switch>
                    <Route exact path={`${path}/newitem`}> <NewItem click={() => setDisplay(false)} /> </Route>
                    <Route exact path={path} > <ShoppingList  showModal={showModal} /> </Route>        
                </Switch>
            </div>}
        </div>
    )
}

export default HistoryScreen
