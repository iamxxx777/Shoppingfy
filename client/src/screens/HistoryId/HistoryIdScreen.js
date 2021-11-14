import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useState } from "react"

import NewItem from "../../components/NewItem/NewItem"
import ShoppingList from "../../components/Cart/ShopingList"
import HistoryItem from "../../components/History/HistoryItem"

import "./historyIdScreen.css"

const HistoryIdScreen = ({ showModal }) => {
    const { path } = useRouteMatch();
    const [display, setDisplay] = useState(false);

    return (
        <div className="history_id">
            <HistoryItem />
            {display && <div className="itemz_cart">
                <Switch>
                    <Route exact path={`${path}/newitem`}> <NewItem click={() => setDisplay(false)} /> </Route>
                    <Route exact path={path} > <ShoppingList  showModal={showModal} /> </Route>        
                </Switch>
            </div>}
        </div>
    )
}

export default HistoryIdScreen
