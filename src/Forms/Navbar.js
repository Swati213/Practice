import React from "react";
import { NavLink } from "react-router-dom";
import "./page.css";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        
      <div className="nav_btn">

            <NavLink className="rounded" exact activeClassName="active_class" to="/">
              Personal
            </NavLink>
            <NavLink  className="rounded" exact to="/education">
              Education
            </NavLink>
            <NavLink className="rounded" exact  to="/password">
              Password
            </NavLink>
            </div> 
          </div>
        
      </div>
    
  );
};

export default Navbar;