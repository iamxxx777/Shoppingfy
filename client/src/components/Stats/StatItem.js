import "./stats.css"

const StatItem = ({data}) => {
    return (
        <div className="stat_item">
            <div className="stat_head">
                <h3>{data.name}</h3>
                <h2>{data.value}%</h2>
            </div>
            <div className="range">
                <div className="stat_range" style={{width: `${data.value}%`}}></div>
            </div>
        </div>
    )
}

export default StatItem
