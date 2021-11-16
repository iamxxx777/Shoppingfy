import Moment from "react-moment"
import HistoryList from "./HistoryList"
import "./History.css"

const HistoryMonth = ({ data, month }) => {
    const filteredList = data.filter((list) => new Date(list.createdAt).getMonth() === month);
    
    return (
        <div className="month">
            <h3 className="month_name">
                <Moment format="MMM YYYY">{filteredList[0].createdAt}</Moment>
            </h3>
            <div className="month_lists">
                {filteredList.map((data) => <HistoryList list={data} key={data._id} />)}
            </div>
        </div>
    )
}

export default HistoryMonth
