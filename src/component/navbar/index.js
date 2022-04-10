import React, { Fragment, useState, useEffect } from "react";
import logoWhite from "../../assets/logo/eventy_logo_white.png";
import logoBlue from "../../assets/logo/eventy_logo_blue.png";
import "./style.css";
const Navbar = () => {
  const [change, onChange] = useState(false);
  const [count, setCount] = useState(document.documentElement.scrollTop);
  const [home, setHome] = useState(true);
  const [service, setService] = useState(false);
  const [stylePortofolio, setStylePortofolio] = useState(style.baseTheme);
  useEffect(() => {
    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.backgroundColor = "white";

        onChange(true);
      } else {
        document.getElementById("header").style.backgroundColor = "#28b7fb";
        onChange(false);
      }
      if (document.documentElement.scrollTop > 600 && document.documentElement.scrollTop < 1000) {
        setHome(false);
        setService(false);
        setStylePortofolio(style.onTheme);
        console.log(stylePortofolio);
      } else if (document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 600) {
        setHome(false);
        setService(true);
        setStylePortofolio(style.darkTheme);
      } else if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 200) {
        setHome(true);
        setService(false);
      }

      if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 50) {
        setStylePortofolio(style.baseTheme);
      } else if (document.documentElement.scrollTop > 50) {
        setStylePortofolio(style.darkTheme);
      }
    }
    window.onscroll = function () {
      scrollFunction();
    };
  }, [onChange]);

  return (
    <Fragment>
      <div id="header" className={`fixed w-full flex justify-evenly py-5 z-50 ${change && "shadow-lg"}`}>
        <img src={change ? logoBlue : logoWhite} alt="logo" id="logo" />
        <div className="flex w-1/3">
          <ul id="navbar" className="flex h-full w-full justify-evenly items-center">
            <div className={`${home ? "border-b-2 border-white hover:border-white" : "border-b-2 border-customColor-transparent hover:border-customColor-biruTua"}`}>
              <a className={change ? "text-customColor-biruTua " : "text-white"} href="#home">
                Home
              </a>
            </div>
            {console.log(service)}
            <div id="service" className="border-b-2 border-customColor-transparent">
              <a className={change ? "text-customColor-biruTua " : "text-white"} href="#services">
                Services
              </a>

              <svg id="panah" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={change ? "#054462" : "white"}>
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <div id="dropdown" className="absolute  inset-y-10 right-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill={change ? "#28b7fb" : "white"}>
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </div>
              <div id="dropdown" className="absolute inset-y-14 align-center shadow-xl">
                <div className={`relative flex flex-col py-2 px-2 w-40 justify-center items-center rounded-xl  shadow-xl ${change ? "bg-customColor-biru" : "bg-white"}`}>
                  <a className="text-md text-customColor-biruTua p-2" href="#">
                    Hybrid Event
                  </a>
                  <a className="text-md text-customColor-biruTua p-2" href="#">
                    Virtual Event
                  </a>
                  <a className="text-md text-customColor-biruTua p-2" href="#">
                    Brodcasting
                  </a>
                </div>
              </div>
            </div>
            <div className={`${stylePortofolio}`}>
              <a className={change ? "text-customColor-biruTua " : "text-white"} href="#portofolio">
                Portofolio
              </a>
            </div>
          </ul>
        </div>
        <button className=" px-8 bg-customColor-kuning rounded-xl hover:shadow-xl">
          <span className="text-center text-customColor-biruTua font-bold text-md">Request Penawaran</span>
        </button>
      </div>
    </Fragment>
  );
};
const style = {
  onTheme: "border-b-2 border-customColor-biruTua hover:border-customColor-biruTua bg-red-500",
  darkTheme: "border-b-2 border-customColor-transparent hover:border-customColor-biruTua",
  baseTheme: "border-b-2 border-customColor-transparent hover:border-white",
};
export default Navbar;
