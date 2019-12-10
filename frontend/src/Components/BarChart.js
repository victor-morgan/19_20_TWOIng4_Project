import React, { Component } from 'react';
import './Widget.css';

import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar} from 'recharts';

class barChart extends Component {


    render() {


const data = [
    {
      "name": "06/19",
      "France": 4000,
      "Allemagne": 2400,
      "amt": 2400
    },
    {
      "name": "07/19",
      "France": 3000,
      "Allemagne": 1398,
      "amt": 2210
    },
    {
      "name": "08/19",
      "France": 2000,
      "Allemagne": 9800,
      "amt": 2290
    },
    {
      "name": "09/19",
      "France": 2780,
      "Allemagne": 3908,
      "amt": 2000
    },
    {
      "name": "10/19",
      "France": 1890,
      "Allemagne": 4800,
      "amt": 2181
    },
    {
      "name": "11/19",
      "France": 2390,
      "Allemagne": 3800,
      "amt": 2500
    },
    {
      "name": "12/19",
      "France": 3490,
      "Allemagne": 4300,
      "amt": 2100
    }
  ]
    
  return (
                              
  <BarChart width={500} height={250} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="Allemagne" fill="#8884d8" />
    <Bar dataKey="France" fill="#82ca9d" />
    </BarChart>
        
        );
    }

}

export default barChart;