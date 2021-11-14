import StatItem from "./StatItem"

const CategoryStats = ({ data, title }) => {    
    return (
        <div className="stat_category">
            <h2>{title ? title : ""}</h2>
            {data && data.map((stat, i) => <StatItem key={i} data={stat} />)}
        </div>
    )
}

export default CategoryStats
