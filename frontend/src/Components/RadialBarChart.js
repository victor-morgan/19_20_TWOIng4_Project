import React, { Component } from 'react';
import './Widget.css';

import { RadialBar, Legend, RadialBarChart , Tooltip} from 'recharts';

class radialbarChart extends Component {


    render() {


const data = [
    {
      "name": "0-5",
      "Jours": 28,
      "pv": 2400,
      "fill": "#8884d8"
    },
    {
      "name": "5-10",
      "Jours": 49,
      "pv": 4567,
      "fill": "#83a6ed"
    },
    {
      "name": "10-15",
      "Jours": 62,
      "pv": 1398,
      "fill": "#8dd1e1"
    },
    {
      "name": "15-20",
      "Jours": 73,
      "pv": 9800,
      "fill": "#82ca9d"
    },
    {
      "name": "20-25",
      "Jours": 77,
      "pv": 3908,
      "fill": "#a4de6c"
    },
    {
      "name": "25-30",
      "Jours": 52,
      "pv": 4800,
      "fill": "#d0ed57"
    },
    {
      "name": "30+",
      "Jours": 24,
      "pv": 4800,
      "fill": "#ffc658"
    }
  ]
    
  return (
                              
  <RadialBarChart 
    width={300} 
    height={250} 
    innerRadius="30%" 
    outerRadius="160%" 
    data={data} 
    startAngle={180} 
    endAngle={0}
  >
    <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='Jours' />
    <Legend iconSize={10} width={300} height={80} layout='horizontal' horizontalAlign='middle' align="left" />
    <Tooltip />
  </RadialBarChart>

  );
    }
}

export default radialbarChart;