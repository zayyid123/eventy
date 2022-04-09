import React, { Fragment, useState, useEffect } from "react";
import logoWhite from "../../assets/logo/eventy_logo_white.png";
import logoBlue from "../../assets/logo/eventy_logo_blue.png";
import "./style.css";
const Navbar = () => {
  const [change, onChange] = useState(false);
  const [count, setCount] = useState(document.documentElement.scrollTop);
  console.log(count);
  useEffect(() => {
    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.backgroundColor = "white";
        onChange(true);
      } else {
        document.getElementById("header").style.backgroundColor = "#28b7fb";
        onChange(false);
      }
    }
    window.onscroll = function () {
      scrollFunction();
    };
  }, [onChange]);

  return (
    <Fragment>
      <div id="header" className="fixed flex justify-evenly py-5">
        <img src={change ? logoBlue : logoWhite} alt="logo" id="logo" />
        <div className="flex w-1/3">
          <ul id="navbar" className="flex h-full w-full justify-between items-center">
            <li className={change ? "text-customColor-biruTua " : "text-white"}>
              <a href="#home">Home</a>
            </li>
            <li className={change ? "text-customColor-biruTua " : "text-white"}>
              <a href="#services">Services</a>
            </li>
            <li className={change ? "text-customColor-biruTua " : "text-white"}>
              <a href="#portofolio">Portofolio</a>
            </li>
          </ul>
        </div>
        <button className=" px-8 bg-customColor-kuning rounded-xl hover:shadow-lg">
          <p className="text-center text-customColor-biruTua font-bold text-lg">Request Penawaran</p>
        </button>
      </div>
    </Fragment>
  );
};

export default Navbar;
