import React, { Fragment } from "react";
import logo from "../../assets/logo_eventy.png";
import "./style.css";
const Navbar = () => {
  return (
    <Fragment>
      <div className="flex bg-customColor-biru justify-evenly">
        <img src={logo} alt="logo" />
        <div className="flex">
          <ul id="navbar">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portofolio">Portofolio</a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
