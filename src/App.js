import React from 'react';

import './App.css';
import Header from './component/fakeData/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Lunch from './component/fakeData/Lunch/Lunch';
import Dinner from './component/fakeData/Dinner/Dinner';
import Breakfast from './component/fakeData/Breakfast/Breakfast';

function App() {
  return (
    <div className="App">
   <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Lunch</Link>
            </li>
            <li>
              <Link to="/Dinner">Dinner</Link>
            </li>
            <li>
              <Link to="/Breakfast">Users</Link>
            </li>
          </ul>
        </nav>

 
        <Switch>
          <Route path="/Breakfast">
            <Breakfast />
          </Route>
          <Route path="/Dinner">
            <Dinner />
          </Route>
          <Route path="/">
            <Lunch/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
