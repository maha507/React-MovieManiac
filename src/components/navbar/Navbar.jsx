import React from "react";
import "./navbar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/star2.png";
import Party from "../../assets/tada.png";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Moviemaniac</h1>
      <div className="navbar_links">
        <a href="">
          Popular
          <img src={Fire} alt="fire emoji" className="navbar_emoji"></img>
        </a>
        <a href="">
          Top Rated
          <img src={Star} alt="star emoji" className="navbar_emoji"></img>
        </a>
        <a href="">
          Upcomimg
          <img src={Party} alt="party emoji" className="navbar_emoji"></img>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
