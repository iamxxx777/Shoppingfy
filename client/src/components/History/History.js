import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getLists } from "../../redux/actions/listActions"

import HistoryMonth from "./HistoryMonth"

import "./History.css"
import HistoryList from "./HistoryList"

const History = () => {

    const dispatch = useDispatch();
    const { loading, lists, error } = useSelector(state => state.lists);

    const dates = lists.map((list) => new Date(list.updatedAt).getMonth());
    const setDates = [...new Set(dates)];

    useEffect(() => {
        dispatch(getLists());
    }, [dispatch]);

    return (
        <main className="history">
            {loading ? (<h1>Loading...</h1>) 
                : error ? (<h1>{error}</h1>) :
                (
                    <div className="main_container">
                        <div className="history_title">
                            <h1>Shopping History</h1>
                        </div>

                        {setDates.map((date) => <HistoryMonth key={date} data={lists} />)}
                        
                    </div>
                )            
            }
        </main>
    )
}

export default History
