import ItemsStats from "./ItemsStats"
import Chart from "../Chart/Chart"
import "./stats.css"

const Stats = ({ data }) => {
    return (
        <div className="stats">
            <ItemsStats data={data} />
            <Chart data={data.graph} />
        </div>
    )
}

export default Stats
