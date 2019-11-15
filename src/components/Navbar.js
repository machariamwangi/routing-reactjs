import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="blue darken-3">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">MeetsUP</Link>
              <ul id="nav-main" className="right hide-on-med-and-down">
                <li><Link to="/"><i className="fa fa-users"></i>MeetsUP</Link></li>
                <li><Link to="badges.html">About</Link></li>
                {/* <li><Link to="collapsible.html"></Link></li> */}
              </ul>
            </div>
          </nav>
                
        );
    }
}
export default Navbar;