import React, { Component } from 'react';
import './Widget.css';

import { Pie, PieChart } from 'recharts';


class pieChart extends Component {


    render() {


const data01 = [
    {
      "name": "Group A",
      "value": 7
    },
    {
      "name": "Group B",
      "value": 5
    },
    {
      "name": "Group C",
      "value": 6
    },
    {
      "name": "Group D",
      "value": 4
    },
    {
      "name": "Group E",
      "value": 9
    },
    {
      "name": "Group F",
      "value": 6
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 30
    },
    {
      "name": "Group B",
      "value": 75
    },
    {
      "name": "Group C",
      "value": 102
    },
    {
      "name": "Group D",
      "value": 137
    },
    {
      "name": "Group E",
      "value": 192
    },
    {
      "name": "Group F",
      "value": 156
    }
  ];
      
   return (
                              
  <PieChart width={300} height={250}>
    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
    <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={90} fill="#82ca9d" label />
  </PieChart>

   );

    }
}

export default pieChart;