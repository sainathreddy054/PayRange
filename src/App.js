import React from 'react';
import LoginComponent from './Components/Login/LoginComponent'
import MachinesComponent from './Components/Machines/MachinesComponent'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Route path='/' exact='true' component={LoginComponent} />
        <Route path='/login' exact='true' component={LoginComponent} />
        <Route path='/machines' exact='true' component={MachinesComponent} />
        </div>
      </Router>

    </div>
  );
}

export default App;
