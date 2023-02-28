import React from "react";
import "../css/centersection.css";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navheader">
      <Link className='route-link' to="/homepage">
      <span>Home</span>
      </Link>
      <span>Profile</span>
      <span>Logout
        <i className="fa-solid fa-right-from-bracket"></i>
      </span>
     </div>
    );
};

export default Navbar;