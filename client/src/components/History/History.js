import HistoryMonth from "./HistoryMonth"

import "./History.css"

const History = ({ lists }) => {

    const dates = lists.map((list) => new Date(list.createdAt).getMonth());
    const setDates = [...new Set(dates)];


    return (
        <main className="history">
            <div className="main_container">
                <div className="history_title">
                    <h1>Shopping History</h1>
                </div>

                {setDates.map((date) => <HistoryMonth key={date} month={date} data={lists} />)}
                        
            </div>
        </main>
    )
}

export default History
