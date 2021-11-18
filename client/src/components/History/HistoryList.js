import { Link } from "react-router-dom"
import Moment from "react-moment"
import "./History.css"

const HistoryList = ({ list }) => {
    return (
        <div className="month_list">
            <div className="list_name">
                <h2>{list.name}</h2>
            </div>
            <div className="list_buttons">
                <div className="list_date">
                    <i className="uil uil-calendar-alt"></i>
                    <span><Moment format="MMM DD, YYYY">{list.createdAt}</Moment></span>
                </div>
                <div className="list_status">
                    <div className={`${list.completed ? "completed" : list.cancelled ? "cancelled" : "new"}`}>
                        {list.completed ? "completed" : list.cancelled ? "cancelled" : "Current"}
                    </div>
                </div>
                <div className="list_arrow">
                    <button>
                        <Link to={`/list/${list._id}`}>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HistoryList
