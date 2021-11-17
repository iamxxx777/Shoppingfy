import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getStats } from '../../redux/actions/statsActions'

import ShoppingList from "../../components/Cart/ShopingList"
import Stats from "../../components/Stats/Stats"
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

import "./statsScreen.css"

const StatsScreen = ({ showModal }) => {

    const dispatch = useDispatch();
    const { loading, stats, error } = useSelector((state) => state.stats);

    useEffect(() => {
        dispatch(getStats());
    }, [dispatch]);


    return (
        <div className="history_container">
            {
                loading ? (<Loading />)
                : error ? (<Error />)
                : <>
                    <Stats data={stats} />

                    <div className="history_cart">
                        <ShoppingList showModal={showModal} />
                    </div>
                </>
            }
        </div>
    )
}

export default StatsScreen
