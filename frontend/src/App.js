import React from 'react';
import Barre from './Components/Barre.js';
import Widget from './Components/Widget.js';

import './App.css';
// import RadarChart from './Components/RadarChart.js';

class App extends React.Component{

  render(){
  return (
    <div className="App">
      
      <Barre/>
      <Widget/>
     
    </div>
  );
}
}

export default App;
