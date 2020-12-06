
import React , {Component} from 'react';
import Navbar from "./Components/Navbar/Navbar.js";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import "./App.css";
import destination from './Components/Pages/Destination';
import details from './Components/Pages/Details';
import booking from './Components/Pages/Booking';
import contact from './Components/Pages/Contact';
import Frontpage from './FrontPage';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
            <Switch>
              <Route path='/destination' exact component={destination}></Route>
              <Route path='/details' exact component={details} />
              <Route path='/booking' exact component={booking} />
              <Route path='/contact' exact component={contact} />
              <Route path='/' exact component={Frontpage} />
            </Switch>
      </Router>

    </div>
    
  );
}

export default App;
