import "./stats.css"

const StatItem = ({data, color}) => {
    return (
        <div className="stat_item">
            <div className="stat_head">
                <h3>{data.name}</h3>
                <h4>{data.value}%</h4>
            </div>
            <div className="range">
                <div className="stat_range" style={{width: `${data.value}%`, background: `${color}`}}></div>
            </div>
        </div>
    )
}

export default StatItem
