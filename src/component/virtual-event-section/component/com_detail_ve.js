import React, { Fragment, useState, useEffect } from "react";
import "./style.css";
import pic1 from "../../../assets/icon-virtual-event/detail/img1_ve.png";
import pic2 from "../../../assets/icon-virtual-event/detail/img2_ve.png";
import pic3 from "../../../assets/icon-virtual-event/detail/img3_ve.png";
import pic4 from "../../../assets/icon-virtual-event/detail/img4_ve.png";
const VirtualEventComDetail = () => {
  const satu = pic1;
  const dua = pic2;
  const tiga = pic3;
  const empat = pic4;
  const [active, setActive] = useState();

  const changeImage = (link, onActive) => {
    let screen = window.innerWidth;
    if (screen <= 1280) {
      active === onActive ? setActive("") : setActive(onActive);
    } else {
      setActive(onActive);
    }
  };
  useEffect(() => {
    let screen = window.innerWidth;
    if (screen <= 1280) {
      setActive("");
    } else {
      setActive("satu");
    }
  }, []);
  return (
    <Fragment>
      <div className="flex flex-col  pt-[120px] justify-center items-center">
        <div className="w-[75%] flex flex-col ">
          <h1 id="title" className="text-[36px] mb-[30px] text-black">
            Virtual Event
          </h1>
          <div data-aos="fade-up" data-aos-duration="1000" className="flex justify-between xl:justify-center items-center">
            <div id="buttonHybridEvent" className="flex flex-col items-center w-full xl:w-[500px] justify-start  items-stretch xl:mr-0">
              <button
                onClick={() => {
                  changeImage(satu, "satu");
                }}
                className={`relative flex flex-row justify-between items-center text-left text-left text-[16px] px-[20px] py-[15px] rounded-xl ${
                  active === "satu" ? "bg-customColor-biru text-white font-semibold shadow-lg shadow-customColor-biru onchange" : "bg-customColor-transparent text-gray-400"
                }`}
              >
                <p>Elevate Maybank Learning Festival 2021</p>
                <div className={`border-2  w-[18px] h-[18px] rounded-full hidden xl:flex justify-center items-center ml-3 ${active === "satu" ? "border-white" : "border-gray-400"}`}>
                  <div className={`rounded-full w-[10px] h-[10px] ${active === "satu" ? "bg-white" : ""}`}></div>
                </div>
                <div className="xl:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className={` h-5 w-5 flex xl:hidden panahHybrid ${active === "satu" ? "origin-center rotate-180" : "origin-center rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
              <div className={`relative w-full xl:hidden flex overflow-hidden hybridTrans justify-center px-3 ${active === "satu" ? "mt-[30px] sm:h-[15rem] h-[10rem] md:h-[20rem] xl:h-[30rem] lg:h-[25rem]" : "mt-0 h-0"}`}>
                <img src={satu} className={`w-full  h-full`} />
              </div>

              <button
                onClick={() => {
                  changeImage(dua, "dua");
                }}
                className={`flex flex-row justify-between items-center text-left text-[16px] px-[20px] py-[15px] rounded-xl ${
                  active === "dua" ? "bg-customColor-biru text-white font-semibold shadow-lg shadow-customColor-biru onchange" : "bg-customColor-transparent text-gray-400"
                }`}
              >
                <p>Karihome Grand Launch</p>
                <div className={`border-2  w-[18px] h-[18px] rounded-full hidden xl:flex justify-center items-center ml-3 ${active === "dua" ? "border-white" : "border-gray-400"}`}>
                  <div className={`rounded-full w-[10px] h-[10px] ${active === "dua" ? "bg-white" : ""}`}></div>
                </div>
                <div className="xl:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className={` h-5 w-5 flex  panahHybrid ${active === "dua" ? "origin-center rotate-180" : "origin-center rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
              <div className={`xl:hidden relative w-full flex overflow-hidden hybridTrans justify-center px-3 ${active === "dua" ? "mt-[30px] sm:h-[15rem] h-[10rem] md:h-[20rem] xl:h-[30rem] lg:h-[25rem]" : "mt-0 h-0"}`}>
                <img src={dua} className={`w-full  h-full`} />
              </div>

              <button
                onClick={() => {
                  changeImage(tiga, "tiga");
                }}
                className={`flex flex-row justify-between items-center text-left text-[16px] px-[20px] py-[15px] rounded-xl ${
                  active === "tiga" ? "bg-customColor-biru text-white font-semibold shadow-lg shadow-customColor-biru onchange" : "bg-customColor-transparent text-gray-400"
                }`}
              >
                <p>Conversa Qiscus 2021</p>
                <div className={`border-2  w-[18px] h-[18px] rounded-full hidden xl:flex justify-center items-center ml-3 ${active === "tiga" ? "border-white" : "border-gray-400"}`}>
                  <div className={`rounded-full w-[10px] h-[10px] ${active === "tiga" ? "bg-white" : ""}`}></div>
                </div>
                <div className="xl:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className={` h-5 w-5 flex  panahHybrid ${active === "tiga" ? "origin-center rotate-180" : "origin-center rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
              <div className={`xl:hidden relative w-full flex overflow-hidden hybridTrans justify-center px-3 ${active === "tiga" ? "mt-[30px] sm:h-[15rem] h-[10rem] md:h-[20rem] xl:h-[30rem] lg:h-[25rem]" : "mt-0 h-0"}`}>
                <img src={tiga} className={`w-full  h-full`} />
              </div>

              <button
                onClick={() => {
                  changeImage(empat, "empat");
                }}
                className={`flex flex-row justify-between items-center text-left text-[16px] px-[20px] py-[15px] rounded-xl ${
                  active === "empat" ? "bg-customColor-biru text-white font-semibold shadow-lg shadow-customColor-biru onchange" : "bg-customColor-transparent text-gray-400"
                }`}
              >
                <p>CTI IT Infrastructure Summit 2020</p>
                <div className={`border-2  w-[18px] h-[18px] rounded-full hidden xl:flex justify-center items-center ml-3 ${active === "empat" ? "border-white" : "border-gray-400"}`}>
                  <div className={`rounded-full w-[10px] h-[10px] ${active === "empat" ? "bg-white" : ""}`}></div>
                </div>
                <div className="xl:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className={` h-5 w-5 flex  panahHybrid ${active === "empat" ? "origin-center rotate-180" : "origin-center rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
              <div className={`xl:hidden relative w-full flex overflow-hidden hybridTrans justify-center px-3 ${active === "empat" ? "mt-[30px] sm:h-[15rem] h-[10rem] md:h-[20rem] xl:h-[30rem] lg:h-[25rem]" : "mt-0 h-0"}`}>
                <img src={empat} className={`w-full  h-full`} />
              </div>

              <a href="#" className="text-[14px] flex items-center font-semibold text-customColor-biru mt-5">
                Tampilkan Lebih Banyak
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="w-[35rem] hidden xl:flex h-[20rem] ml-5">
              {active === "satu" && (
                <div className={`rounded-xl overflow-hidden`}>
                  <img src={satu} className={`w-full onchange`} />
                </div>
              )}
              {active === "dua" && (
                <div className={`rounded-xl overflow-hidden`}>
                  <img src={dua} className={`w-full onchange`} />
                </div>
              )}
              {active === "tiga" && (
                <div className={`rounded-xl overflow-hidden`}>
                  <img src={tiga} className={`w-full onchange`} />
                </div>
              )}
              {active === "empat" && (
                <div className={`rounded-xl overflow-hidden`}>
                  <img src={empat} className={`w-full onchange`} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VirtualEventComDetail;
