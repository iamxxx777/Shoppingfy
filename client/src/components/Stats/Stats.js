import ItemsStats from "./ItemsStats"
import "./stats.css"

const Stats = ({ data }) => {
    return (
        <div className="stats">
            <ItemsStats data={data} />
        </div>
    )
}

export default Stats
