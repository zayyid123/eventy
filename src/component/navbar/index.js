import React, { Fragment, useState, useEffect } from "react";
import logoWhite from "../../assets/logo/Asset 4.png";
import logoBlue from "../../assets/logo/Asset 3.png";
import "./style.css";
import AOS from "aos";
const Navbar = () => {
  AOS.init();
  const [change, onChange] = useState(false);
  const [count, setCount] = useState(document.documentElement.scrollTop);
  const [home, setHome] = useState(true);
  const [service, setService] = useState(false);
  const [stylePortofolio, setStylePortofolio] = useState(style.baseTheme);
  const [show, setShow] = useState(false);
  const [showChild, setShowChild] = useState(false);

  const dropdownBurger = () => {
    show ? setShow(false) : setShow(true);
  };
  const childButton = () => {
    showChild ? setShowChild(false) : setShowChild(true);
  };
  useEffect(() => {
    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.backgroundColor = "white";
        onChange(true);
      } else {
        document.getElementById("header").style.backgroundColor = "#233657";
        onChange(false);
      }
      if (document.documentElement.scrollTop > 600 && document.documentElement.scrollTop < 1000) {
        setHome(false);
        setService(false);
        setStylePortofolio(style.onTheme);
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
      <div id="burgerDrop" className={`md:hidden w-full z-50 fixed justify-between  md:justify-center itemns-center ${show ? "translate-y-16" : "-translate-y-full"}`}>
        <div id="parentBurger" className={` w-full  flex flex-col justify-center items-center ${change ? "bg-white" : "bg-customColor-biru"} shadow-xl`}>
          <div className={`p-2 mt-2 mb-2 mt-10`}>
            <a className={`text-lg p-2 ${change ? "text-customColor-biruTua" : "text-white"} `} href="#home">
              Home
            </a>
          </div>
          <div className={`p-2 flex-row flex items-center `}>
            <button
              className={`text-lg p-2 ${change ? "text-customColor-biruTua" : "text-white"} `}
              onClick={() => {
                childButton();
              }}
              href="#"
            >
              Services
            </button>
            <svg
              id="panahChild"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition duration-300 ease-in-out h-5 w-5 ${showChild ? "origin-center rotate-180" : "origin-center rotate-0"}`}
              viewBox="0 0 20 20"
              fill={change ? "#054462" : "white"}
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <div key={"1"} id="childDrop" className={`transition  flex-col mb-5 justify-center items-center w-full ${change ? "bg-customColor-biruMudaOnChange " : "bg-customColor-biruMuda"} ${showChild ? "flex" : "hidden"} `}>
            <a href="#home-hybrid" key={"2"} id="child" className={`w-full text-center text-md p-2 ${change ? "text-customColor-biruTua hover:bg-customColor-hoverBiruOnChange" : "text-white hover:bg-customColor-hoverBiru"} `}>
              Hybrid event
            </a>
            <a href="#home-virtual" key={"2"} id="child" className={`w-full text-center text-md p-2 ${change ? "text-customColor-biruTua hover:bg-customColor-hoverBiruOnChange" : "text-white hover:bg-customColor-hoverBiru"} `}>
              Virtual Event
            </a>
           
          </div>
          <div className={`p-2 mb-10`}>
            <a className={`text-lg p-2 ${change ? "text-customColor-biruTua" : "text-white"} `} href="#">
              Portofolio
            </a>
          </div>
          <button className="mb-10 px-8 py-2 bg-customColor-kuning rounded-xl hover:shadow-xl   justify-center items-center">
            <span className="text-center text-customColor-biruTua font-bold text-md">Request Penawaran</span>
          </button>
        </div>
      </div>
      <div id="header" className={`z-50 fixed w-full flex justify-between px-8 md:px-0 md:justify-evenly py-5 z-50 ${change && "shadow-lg"}`}>
        <a href="#home">
          <img src={change ? logoBlue : logoWhite} alt="logo" id="logo" />
        </a>
        <div className="flex md:w-1/3 w-0">
          <ul id="navbar" className="flex h-full w-full justify-evenly items-center md:flex hidden">
            <div className={`${home ? "border-b-2 border-white hover:border-white" : "border-b-2 border-customColor-transparent hover:border-customColor-biruTua"}`}>
              <a className={change ? "text-customColor-biruTua " : "text-white"} href="#home">
                Home
              </a>
            </div>
            <div id="service" className="border-b-2 border-customColor-transparent">
              <a className={change ? "text-customColor-biruTua " : "text-white"} href="#services">
                Services
              </a>

              <svg id="panah" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={change ? "#054462" : "white"}>
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <div id="dropdown" className="absolute  inset-y-10 right-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill={change ? "#233657" : "white"}>
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </div>
              <div id="dropdown" className="absolute inset-y-14 align-center shadow-xl ">
                <div className={`relative flex flex-col py-2  w-40 justify-center items-center rounded-xl  shadow-xl ${change ? "bg-customColor-biru" : "bg-white"}`}>
                  <a href="#home-hybrid" className={`w-full text-center text-md p-2 ${change ? "text-white" : "text-customColor-biruTua"} hover:bg-customColor-biruMudaOnChange`}>
                    Hybrid Event
                  </a>
                  <a href="#home-virtual" className={`w-full text-center text-md p-2 ${change ? "text-white" : "text-customColor-biruTua"} hover:bg-customColor-biruMudaOnChange`}>
                    Virtual Event
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
        <div className="hidden md:flex">
          <a href="https://wa.me/+6285811326661" className=" px-8 bg-customColor-kuning rounded-xl hover:shadow-xl  md:flex hidden justify-center items-center">
            <span className="text-center text-customColor-biruTua font-bold text-md">Request Penawaran</span>
          </a>
        </div>
        <button
          id="burger"
          onClick={() => {
            dropdownBurger();
          }}
          className="md:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke={change ? "#054462" : "white"} strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
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
