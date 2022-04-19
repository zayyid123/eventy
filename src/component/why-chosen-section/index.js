import React from "react";
import "./style.css";
import Img from "../../assets/content/chosen.png";
import Imgs from "../../assets/content/checklist.svg";
const WhyChosen = () => {
  return (
    <div id="bgPilih" className="flex flex-col justify-center items-center ">
      <div className="max-w-5xl mx-5 lg:mx-auto">
        <h1 data-aos="fade-up" data-aos-duration="1000" id="title" className="text-[2rem] text-customColor-biruTua mb-[30px] text-center mt-[100px] text-center">
          Kenapa Pilih Platform Evorty
        </h1>
        <div className="flex md:flex-row flex-col justify-center items-center mb-[100px]">
          <div data-aos="zoom-in" data-aos-duration="1000" className="p-5">
            <img src={Img} className="w-[30rem] md:mr-10 mr-0" />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="p-5">
            <ul className="step relative flex flex-col justify-between">
              <li>
                <div className="w-[20px] mt-1 flex items-start justify-center">
                  <img src={Imgs} height="14px" width="14px" />
                </div>
                <p className="w-[90%] ml-[5px]">
                  Investasi lebih <span>hemat</span> dan <span>terjangkau</span>
                </p>
                <div className="absolute pt-[5px] flex lines w-[20px] h-full justify-center items-start">
                  <div className=" w-[2px] h-[170%] bg-customColor-kuning"></div>
                </div>
              </li>
              <li>
                <div className="w-[20px] mt-1 flex items-start justify-center">
                  <img src={Imgs} height="14px" width="14px" />
                </div>
                <p className="w-[90%] ml-[5px]">
                  Dapat diakses dari <span>berbagai perangkat</span>{" "}
                </p>
                <div className="absolute flex lines w-[20px] h-full justify-center items-center">
                  <div className=" w-[2px] h-[180%] bg-customColor-kuning"></div>
                </div>
              </li>
              <li>
                <div className="w-[20px] mt-1 flex items-start justify-center">
                  <img src={Imgs} height="14px" width="14px" />
                </div>
                <p className="w-[90%] ml-[5px]">
                  Dikerjakan oleh <span>profesional</span>{" "}
                </p>
                <div className="absolute flex lines w-[20px] h-full justify-center items-center">
                  <div className=" w-[2px] h-[180%] bg-customColor-kuning"></div>
                </div>
              </li>
              <li>
                <div className="w-[20px] mt-1 flex items-start justify-center">
                  <img src={Imgs} height="14px" width="14px" />
                </div>
                <p className="w-[90%] ml-[5px]">
                  <span>Mudah digunakan</span> oleh berbagai kalangan peserta event
                </p>
                <div className="absolute flex lines w-[20px] h-full justify-center items-center">
                  <div className=" w-[2px] h-[180%] bg-customColor-kuning"></div>
                </div>
              </li>
              <li>
                <div className="w-[20px] mt-1 flex items-start justify-center">
                  <img src={Imgs} height="14px" width="14px" />
                </div>
                <p className="w-[90%] ml-[5px] ">
                  <span>Fleksibel</span> dapat mendukung semua tipe event
                </p>
                <div className="absolute flex lines w-[20px] h-full justify-center items-start">
                  <div className=" w-[2px] h-[150%] bg-customColor-kuning"></div>
                </div>
              </li>
              <li>
                <div className="w-[20px] mt-1 flex items-start justify-center">
                  <img src={Imgs} height="14px" width="14px" />
                </div>
                <p className="w-[90%] ml-[5px]">
                  Didukung dengan <span>inovasi menu</span> dan <span>fitur menarik</span>
                </p>
                <div className="absolute flex lines top-[-90px] w-[20px] h-full justify-center items-start">
                  <div className=" w-[2px] h-[100px]  bg-customColor-kuning"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChosen;
