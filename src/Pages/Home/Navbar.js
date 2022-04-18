import React from "react";
import "./Navbar.css";
import { Link, withRouter, useNavigate, Navigate } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav_box">
          <h1>E-commerce Application</h1>
        <div className="out"><Link to="/viewAllAddress">
          <span className="span1">Address</span>
        </Link></div><div className="out"><Link to="/Customer">
          <span className="span1">Customer</span>
        </Link></div><div className="out"><Link to="/Order">
          <span className="span1">Order</span>
        </Link></div>
          <div className="out"><Link to="/">
          <span className="span1">Sign out</span>
        </Link></div>
      </div>
    </nav>
  );
};

export default Navbar;
