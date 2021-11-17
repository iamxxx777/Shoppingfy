import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getListDetails } from '../../redux/actions/listActions'

import ShoppingList from "../../components/Cart/ShopingList"
import HistoryItem from "../../components/History/HistoryItem"
import Loading from "../../components/Loading/Loading"
import Error from '../../components/Error/Error'

import "./historyIdScreen.css"

const HistoryIdScreen = ({ showModal }) => {

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
                    
                    <div className="history_cart">
                        <ShoppingList showModal={showModal} />
                    </div>
                </>
            }    
        </div>
    )
}

export default HistoryIdScreen
