import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Chart = ({ data }) => {

    return (
        <div className="charts">
            <div className="charts_container">
                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" margin={{ top: 5, right: 20, bottom: 5, left: 0 }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>
        </div>
    )
}

export default Chart
