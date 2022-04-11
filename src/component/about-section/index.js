import React, { useState } from "react";
import "./style.css";
import platfom from "../../assets/icon-about/tampilan_platform.svg";
import hybird from "../../assets/icon-about/hybrid.svg";
import sponsor from "../../assets/icon-about/fitur_pendukung.svg";
import broadcasting from "../../assets/icon-about/broadcasting.svg";
import arrow from "../../assets/icon-about/arrow.svg";
const AboutSection = () => {
  const [myPlatform, setmyPlatform] = useState(false);
  const [myHybird, setmyHybird] = useState(false);
  const [mySponsor, setmySponsor] = useState(false);
  const [myBroadcast, setmyBroadcast] = useState(false);

  return (
    <div>
      <div className="width-full max-w-5xl mx-auto pt-[80px] pb-[80px] text-center text-customColor-biruTua">
        <div className="max-w-[860px] mx-auto">
          <h1 className="about-title mb-[25px] font-semibold leading-none text-[2rem]">Tentang Eventy</h1>
          <h5 className="mb-[25px] leading-none font-normal text-[1.2rem]">Eventy adalah expertise event management yang membantu dan mempermudah para Event Planner mencapai tujuan terlaksananya sebuah event</h5>
          <h5 className="mb-[35px] leading-none font-semibold text-[1.2rem]">Dengan bantuan teknologi dan inovasi sebagai berikut:</h5>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* platform */}
          <div className="mr-[10px] ml-[10px]">
            <div className="w-[225px] h-[225px] relative overflow-hidden" onMouseEnter={() => setmyPlatform(true)} onMouseLeave={() => setmyPlatform(false)}>
              <img src={platfom} alt="platform" className="mb-[2rem] width-full"></img>
              <div className="inner" style={myPlatform ? { top: "0" } : { top: "100%" }}>
                <a href="#f" className="flex items-center text-[1.2rem] bg-customColor-biruTua text-white px-[25px] py-[10px] font-semibold rounded-[10px]" style={{ boxShadow: "0 4px 14px rgb(0 0 0 / 20%)" }}>
                  Selengkapnya
                  <img src={arrow} alt="arrow" style={{ transform: "rotate(-90deg)" }} className="ml-[5px]" />
                </a>
              </div>
            </div>
            <h5 className="font-semibold text-[1rem] mt-[15px]">Tampilan Platform 2D & 3D</h5>
          </div>

          {/* hybird */}
          <div className="mr-[10px] ml-[10px]">
            <div className="w-[225px] h-[225px] relative overflow-hidden" onMouseEnter={() => setmyHybird(true)} onMouseLeave={() => setmyHybird(false)}>
              <img src={hybird} alt="hybird" className="mb-[2rem] width-full"></img>
              <div className="inner" style={myHybird ? { top: "0" } : { top: "100%" }}>
                <a href="#f" className="flex items-center text-[1.2rem] bg-customColor-biruTua text-white px-[25px] py-[10px] font-semibold rounded-[10px]" style={{ boxShadow: "0 4px 14px rgb(0 0 0 / 20%)" }}>
                  Selengkapnya
                  <img src={arrow} alt="arrow" style={{ transform: "rotate(-90deg)" }} className="ml-[5px]" />
                </a>
              </div>
            </div>
            <h5 className="font-semibold text-[1rem] mt-[15px]">Hybrid Event</h5>
          </div>

          {/* sponsor */}
          <div className="mr-[10px] ml-[10px]">
            <div className="w-[225px] h-[225px] relative overflow-hidden" onMouseEnter={() => setmySponsor(true)} onMouseLeave={() => setmySponsor(false)}>
              <img src={sponsor} alt="sponsor" className="mb-[2rem] width-full"></img>
              <div className="inner" style={mySponsor ? { top: "0" } : { top: "100%" }}>
                <a href="#f" className="flex items-center text-[1.2rem] bg-customColor-biruTua text-white px-[25px] py-[10px] font-semibold rounded-[10px]" style={{ boxShadow: "0 4px 14px rgb(0 0 0 / 20%)" }}>
                  Selengkapnya
                  <img src={arrow} alt="arrow" style={{ transform: "rotate(-90deg)" }} className="ml-[5px]" />
                </a>
              </div>
            </div>
            <h5 className="font-semibold text-[1rem] mt-[15px]">Expo Hall & Sponsors</h5>
          </div>

          {/* broadcast */}
          <div className="mr-[10px] ml-[10px]">
            <div className="w-[225px] h-[225px] relative overflow-hidden" onMouseEnter={() => setmyBroadcast(true)} onMouseLeave={() => setmyBroadcast(false)}>
              <img src={broadcasting} alt="broadcast" className="mb-[2rem] width-full"></img>
              <div className="inner" style={myBroadcast ? { top: "0" } : { top: "100%" }}>
                <a href="#f" className="flex items-center text-[1.2rem] bg-customColor-biruTua text-white px-[25px] py-[10px] font-semibold rounded-[10px]" style={{ boxShadow: "0 4px 14px rgb(0 0 0 / 20%)" }}>
                  Selengkapnya
                  <img src={arrow} alt="arrow" style={{ transform: "rotate(-90deg)" }} className="ml-[5px]" />
                </a>
              </div>
            </div>
            <h5 className="font-semibold text-[1rem] mt-[15px]">Live Broadcasting System</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
