import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import Moment from "react-moment"
import { getListDetails } from '../../redux/actions/listActions'
import HistoryCategory from './HistoryCategory'

import "./HistoryItem.css"

const HistoryItem = () => {

    const { id } = useParams();
    const history =  useHistory();
    const dispatch = useDispatch();
    const { loading, list, error } = useSelector((state) => state.list);

    const categories = list.items ? list.items.map((item) => item.category) : null;
    const uniqueCategories = [...new Set(categories)];

    useEffect(() => {
        dispatch(getListDetails(id));
    }, [dispatch, id]);

    return (
        <div className="history_item">
            {loading ? (<h1>Loading...</h1>) 
                : error ? (<h1>{error}</h1>)
                : (
                    <div className="history_item_container">
                        <div className="history_list">
                            <button className="back" onClick={() => history.goBack()}>
                                <div>
                                    <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                                    <span>back</span>
                                </div>
                            </button>

                            <div className="history_list_title">
                                <h1>{list.name}</h1>
                                <div className="history_list_date">
                                    <i className="uil uil-calendar-alt"></i>
                                    <span><Moment format="MMM DD, YYYY">{list.updatedAt}</Moment></span>
                                </div>
                            </div>

                            {uniqueCategories.map((category) => <HistoryCategory key={category} data={list.items} category={category} />)}

                        </div>
                    </div>
                )
            }
            
        </div>
    )
}

export default HistoryItem
