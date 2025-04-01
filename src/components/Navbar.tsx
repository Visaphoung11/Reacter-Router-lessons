import React from "react";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img src={logo} alt="" width="50px" />
      <ul>
        <NavLink to="/">
          <li>home</li>
        </NavLink>
        <NavLink to="/product">
          <li>product</li>
        </NavLink>
        <NavLink to="/about">
          {" "}
          <li>about</li>
        </NavLink>
        <NavLink to="/contact">
          {" "}
          <li>contact</li>
        </NavLink>
      </ul>
      <button onClick={() => navigate("/about", { replace: true })}>
        get started
      </button>
    </div>
  );
};

export default Navbar;
