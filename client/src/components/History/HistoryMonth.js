import Moment from "react-moment"
import HistoryList from "./HistoryList"
import "./History.css"

const HistoryMonth = ({ data }) => {
    return (
        <div className="month">
            <h3 className="month_name">
                <Moment format="MMM YYYY">{data.updatedAt}</Moment>
            </h3>
            <div className="month_lists">
                {data.map((data) => <HistoryList list={data} key={data._id} />)}
            </div>
        </div>
    )
}

export default HistoryMonth
