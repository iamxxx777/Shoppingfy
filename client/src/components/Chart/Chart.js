import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import "./Chart.css"

const Chart = ({ data }) => {
    return (
        <div className="charts">
            <div className="charts_container">
                <h2>Yearly Summary</h2>
                <LineChart width={500} height={280} data={data}>
                    <Line type="monotone" dataKey="value" stroke="#F9A109" margin={{ top: 5, right: 20, bottom: 5, left: 0 }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                </LineChart>
            </div>
        </div>
    )
}

export default Chart
