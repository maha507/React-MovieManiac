import React from "react";
import "./Navbar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/star2.png";
import Party from "../../assets/tada.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Moviemaniac</h1>
      <div className="navbar_links">
        <NavLink to="/">
          Popular
          <img src={Fire} alt="fire emoji" className="navbar_emoji"></img>
        </NavLink>
        <NavLink to="/top_rated">
          Top Rated
          <img src={Star} alt="star emoji" className="navbar_emoji"></img>
        </NavLink>
        <NavLink to="/upcoming">
          Upcomimg
          <img src={Party} alt="party emoji" className="navbar_emoji"></img>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
