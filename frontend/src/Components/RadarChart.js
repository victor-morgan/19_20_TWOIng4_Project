import React, { Component } from 'react';
import './Widget.css';

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';


class radarChart extends Component {
    
    render() {const data = [
    {
      "subject": "Nord",
      "A": 58,
      "B": 72,
      "fullMark": 100
    },
    {
      "subject": "Alsace",
      "A": 63,
      "B": 66,
      "fullMark": 100
    },
    {
      "subject": "PACA",
      "A": 31,
      "B": 43,
      "fullMark": 100
    },
    {
      "subject": "Basque",
      "A": 23,
      "B": 18,
      "fullMark": 100
    },
    {
      "subject": "Gironde",
      "A": 27,
      "B": 45,
      "fullMark": 100
    },
    {
      "subject": "Bretagne",
      "A": 78,
      "B": 81,
      "fullMark": 100
    }
  ]
        return (

  <RadarChart outerRadius={90} width={300} height={250} data={data}>
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis angle={30} domain={[0, 100]} />
    <Radar name="2018" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    <Radar name="2019" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
    <Legend />
  </RadarChart>

);
}
}

export default radarChart;