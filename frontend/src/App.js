import React from 'react';
import './App.css';
import Barre from './Components/Barre.js';
import Widget from './Components/Widget.js';
import Admin from './Admin.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';
// import RadarChart from './Components/RadarChart.js';

class App extends React.Component{

  render(){
  return (
    <Router>
    <div className="App">
      <Barre/>
      <Route path="/" exact={true} component={Widget}/>
      <Route path="/admin" component={Admin}/>
    </div>
    </Router>
  );
}
}

export default App;