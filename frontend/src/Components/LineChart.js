import React, { Component } from 'react';
import './Widget.css';

import { LineChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Line } from 'recharts';

class lineChart extends Component {


    render() {

const data = [
    {
      "name": "06/18",
      "Fr": 27,
      "Es": 31,
      "amt": 2400
    },
    {
      "name": "07/18",
      "Fr": 29,
      "Es": 33,
      "amt": 2210
    },
    {
      "name": "08/18",
      "Fr": 31,
      "Es": 35,
      "amt": 2290
    },
    {
      "name": "09/18",
      "Fr": 26,
      "Es": 25,
      "amt": 2000
    },
    {
      "name": "10/18",
      "Fr": 18,
      "Es": 20,
      "amt": 2181
    },
    {
      "name": "11/18",
      "Fr": 11,
      "Es": 14,
      "amt": 2500
    },
    {
      "name": "12/18",
      "Fr": 6,
      "Es": 8,
      "amt": 2100
    }
  ]
    
        return ( 
  
  <LineChart width={500} height={250} data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="Fr" stroke="#8884d8" />
    <Line type="monotone" dataKey="Es" stroke="#82ca9d" />
  </LineChart>

        );

    }
}

export default lineChart;