import { useHistory } from 'react-router-dom'
import Moment from "react-moment"
import HistoryCategory from './HistoryCategory'

import "./HistoryItem.css"

const HistoryItem = ({ list }) => {

    const history =  useHistory();

    const categories = list.items ? list.items.map((item) => item.category) : null;
    const uniqueCategories = [...new Set(categories)];

    return (
        <div className="history_item">
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
                                    <span><Moment format="MMM DD, YYYY">{list.createdAt}</Moment></span>
                                </div>
                            </div>

                            {uniqueCategories.map((category) => <HistoryCategory key={category} data={list.items} category={category} />)}

                        </div>
                    </div>
        </div>
    )
}

export default HistoryItem
