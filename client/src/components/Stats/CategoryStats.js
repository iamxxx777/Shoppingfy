import StatItem from "./StatItem"

const CategoryStats = ({ data, title, color }) => {    
    return (
        <div className="stat_category">
            <h2>{title ? title : ""}</h2>
            {data && data.map((stat, i) => <StatItem key={i} data={stat} color={color} />)}
        </div>
    )
}

export default CategoryStats
