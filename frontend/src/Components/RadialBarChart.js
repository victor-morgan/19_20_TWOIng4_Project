import React, { Component } from 'react';
import './Widget.css';

import { RadialBar, Legend, RadialBarChart , Tooltip} from 'recharts';

class radialbarChart extends Component {


    render() {


const data = [
    {
      "name": "18-24",
      "uv": 31.47,
      "pv": 2400,
      "fill": "#8884d8"
    },
    {
      "name": "25-29",
      "uv": 26.69,
      "pv": 4567,
      "fill": "#83a6ed"
    },
    {
      "name": "30-34",
      "uv": -15.69,
      "pv": 1398,
      "fill": "#8dd1e1"
    },
    {
      "name": "35-39",
      "uv": 8.22,
      "pv": 9800,
      "fill": "#82ca9d"
    },
    {
      "name": "40-49",
      "uv": -8.63,
      "pv": 3908,
      "fill": "#a4de6c"
    },
    {
      "name": "50+",
      "uv": -2.63,
      "pv": 4800,
      "fill": "#d0ed57"
    },
    {
      "name": "unknow",
      "uv": 6.67,
      "pv": 4800,
      "fill": "#ffc658"
    }
  ]
    
  return (
                              
  <RadialBarChart 
    width={300} 
    height={250} 
    innerRadius="20%" 
    outerRadius="90%" 
    data={data} 
    startAngle={180} 
    endAngle={0}
  >
    <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
    <Legend iconSize={10} width={100} height={180} layout='vertical' verticalAlign='middle' align="left" />
    <Tooltip />
  </RadialBarChart>

  );
    }
}

export default radialbarChart;