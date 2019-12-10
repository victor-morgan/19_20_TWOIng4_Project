import React, { Component } from 'react';
import './Widget.css';

import { AreaChart, linearGradient, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';


class areaChart extends Component {


    render() {
const data = [
    {
      "name": "06/19",
      "Ch": 40,
      "Ja": 43,
      "amt": 2400
    },
    {
      "name": "07/19",
      "Ch": 37,
      "Ja": 32,
      "amt": 2210
    },
    {
      "name": "08/19",
      "Ch": 33,
      "Ja": 24,
      "amt": 2290
    },
    {
      "name": "09/19",
      "Ch": 39,
      "Ja": 36,
      "amt": 2000
    },
    {
      "name": "10/19",
      "Ch": 47,
      "Ja": 53,
      "amt": 2181
    },
    {
      "name": "11/19",
      "Ch": 53,
      "Ja": 66,
      "amt": 2500
    },
    {
      "name": "12/19",
      "Ch": 60,
      "Ja": 75,
      "amt": 2100
    }
  ]
    
           return (
                 
  <AreaChart width={500} height={250} data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
      </linearGradient>
    </defs>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="Ch" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
    <Area type="monotone" dataKey="Ja" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
  </AreaChart>
           );
    }

}

export default areaChart;