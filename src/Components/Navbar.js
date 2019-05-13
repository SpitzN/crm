import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css'

class Navbar extends Component {
  render() {
    return (
        
      <div className="navbar">
        <Link to='/clients'>
          <span>Clients</span>
        </Link>
        <Link to='/actions'>
          <span>Actions</span>
        </Link>
        <Link to='/analytics'>
          <span>Analytics</span>
        </Link>
      </div>
    );
  }
}

export default Navbar;
