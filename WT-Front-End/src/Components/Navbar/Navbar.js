import React, { Component } from 'react';
import {useState} from 'react';
import {Link} from "react-router-dom";
import { Button } from "../Button/Buttons.js";
import "./Navbar.css";



class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
                        this.setState({ clicked: !this.state.clicked });
                      };
  
  
  render() {
   
    return (
      <nav className="NavbarItems">
          {/* name on the left hand side of page along with logo */}
              
              <h1 className="navbar-logo">
                  <i class="fab fa-instagram" ></i>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-pinterest-p"></i>
                  <i class="fab fa-youtube"></i>
               </h1>
               
        {/* The hamburger menu icon */}
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <hr class="HR"></hr>




      <div class='menu-items'>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to='/destination' className='nav-links'>DESTINATIONS</Link>
          </li>
          <li>
            <Link to='/details' className='nav-links'>DETAILS</Link>
          </li>
          <li>
            <Link to='/booking' className='nav-links'>BOOK YOUR TRIP</Link>
          </li>
          <li>
            <Link to='/contact' className='nav-links'>CONTACT US</Link>
          </li>
          <li>
            <Link to='/' className='nav-links'>HOME</Link>
          </li>
        </ul>
        </div>




      </nav>
    );
  }
}

export default Navbar;
