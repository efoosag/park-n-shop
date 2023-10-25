import styled from "styled-components"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";



const ChartContainer = styled.div`
  padding: 20px;  
  box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
  -webkit-box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
  -moz-box-shadow: 6px 7px 24px -10px rgba(0,0,0,0.75);
`
const ChartTitle = styled.h3`
  margin-bottom: 20px;
`
const Chart = ({title, data, datakey, grid}) => {
  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart          
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" stroke="#5550bd"/>
          <YAxis />
          <Tooltip />
          <Legend />          
          <Line type="monotone" dataKey={datakey} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default Chart