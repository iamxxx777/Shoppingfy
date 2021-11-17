import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getLists } from "../../redux/actions/listActions"

import ShoppingList from "../../components/Cart/ShopingList"
import History from '../../components/History/History'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

import "./historyScreen.css"

const HistoryScreen = ({ showModal }) => {

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

                    <div className="history_cart">
                        <ShoppingList showModal={showModal} />
                    </div>
                </>
            }
        </div>
    )
}

export default HistoryScreen
