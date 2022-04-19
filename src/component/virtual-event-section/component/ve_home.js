import { useState, useEffect } from "react";
import "./style_home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";
import { Controller } from "swiper";

// icon
import landing from "../../../assets/icon-virtual-event/img_icon_landing.svg";
import regis from "../../../assets/icon-virtual-event/img_icon_regis.svg";
import lobby from "../../../assets/icon-virtual-event/img_icon_lobby.svg";
import exhib from "../../../assets/icon-virtual-event/img_icon_exhib.svg";
import stage from "../../../assets/icon-virtual-event/img_icon_stage.svg";
import classrom from "../../../assets/icon-virtual-event/img_icon_class.svg";
import features from "../../../assets/icon-virtual-event/img_icon_features.svg";
import report from "../../../assets/icon-virtual-event/img_icon_report.svg";
import iconArrow from "../../../assets/icon-virtual-event/arrow.svg";

// img
import imgLanding from "../../../assets/icon-virtual-event/home/virtualConf.png";
import imgRegis from "../../../assets/icon-virtual-event/home/expoHall.png";
import imgLobby from "../../../assets/icon-virtual-event/home/virtualEnvi.png";
import imgExhib from "../../../assets/icon-virtual-event/home/exhib.png";
import imgStage from "../../../assets/icon-virtual-event/home/stage.png";
import imgClass from "../../../assets/icon-virtual-event/home/class.png";
import imgFeatures from "../../../assets/icon-virtual-event/home/features.png";
import imgReport from "../../../assets/icon-virtual-event/home/report.png";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const VirtualEventHome = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const dataScroll = [
    {
      name: "Virtual Conference",
      link: imgLanding,
      icon: landing,
    },
    {
      name: "Expo Hall",
      link: imgRegis,
      icon: regis,
    },
    {
      name: "Virttual Environment",
      link: imgLobby,
      icon: lobby,
    },
    // {
    //   name: "Exhibition",
    //   link: imgExhib,
    //   icon: exhib,
    // },
    // {
    //   name: "Main Stage",
    //   link: imgStage,
    //   icon: stage,
    // },
    // {
    //   name: "Class Room",
    //   link: imgClass,
    //   icon: classrom,
    // },
    // {
    //   name: "Interaction Features",
    //   link: imgFeatures,
    //   icon: features,
    // },
    // {
    //   name: "Report & Insight Data Event",
    //   link: imgReport,
    //   icon: report,
    // },
  ];

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="home-virtual" className="bg-home-ve bg-customColor-biru text-white ">
      <div className="max-w-5xl mx-5 lg:mx-auto text-center pb-9">
        <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col">
          {/* first */}
          <div className="max-w-[850px] mx-auto">
            <h1 className="ve-home-title mt-[50px] mb-[30px] font-bold leading-none text-[2rem] lg:text-[3rem]">Virtual Event</h1>
            <h5 className="mb-[30px] font-semibold leading-none text-[1.3rem]">Virtual Event by Evorty</h5>
            <p className="mb-[50px] font-normal leading-normal text-[1.1rem]">
              Menyediakan platform berbasis web sebagai partner pengelolaan virtual event untuk memberikan pengalaman yang menyenangkan dan memudahkan aktivitas peserta event.
            </p>
          </div>

          {/* second */}
          <div className="flex flex-col">
            <h5 className=" mb-[10px] font-semibold leading-none text-[1.2rem]">Platform Evorty meliputi:</h5>
            <div className="relative ">
              <Swiper
                slidesPerView={windowDimensions.width >= 990 ? 3 : windowDimensions.width >= 760 ? 2 : 1}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  el: ".my-custom-pagination-div",
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Controller]}
                controller={{ control: controlledSwiper }}
                onSwiper={setControlledSwiper}
                className="swiper w-[87%]"
              >
                {dataScroll.map((res, index) => (
                  <SwiperSlide key={index + res.name} className="mb-1">
                    <div className="bg-white p-3 rounded-[10px] text-customColor-biruTua">
                      <img src={res.link} alt={res.name} />
                      <div className="flex justify-center">
                        <img className="mt-3" src={res.icon} alt={`icon ${res.name}`} />
                        <p className="font-semibold text-[1.rem] mt-3 ml-2">{res.name}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="my-custom-pagination-div" />
              </Swiper>

              <div className="hidden xl:flex relative w-[100%] justify-between mx-auto top-[-219px]">
                {/* next */}
                <div
                  className=" cursor-pointer bg-white w-[50px] h-[50px] flex justify-center items-center rounded-[50%] top-[-210px] left-[-70px]"
                  onClick={() => {
                    controlledSwiper.slideNext();
                  }}
                >
                  <img className="w-[30px] h-[30px]" src={iconArrow} alt="icon arrow next" />
                </div>

                {/* prev */}
                <div
                  className=" cursor-pointer bg-white w-[50px] h-[50px] flex justify-center items-center rounded-[50%] origin-center rotate-180 top-[-260px] right-[-1050px]"
                  onClick={() => {
                    controlledSwiper.slidePrev();
                  }}
                >
                  <img className="w-[30px] h-[30px]" src={iconArrow} alt="icon arrow next" />
                </div>
              </div>
            </div>
          </div>

          <br />
          {/* third */}
          <div>
            <a href="#detail-paket-virtual" className="bg-white font-semibold text-[1.5rem] px-[30px] text-customColor-biruTua rounded-[12px] py-1">
              Detail Paket
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualEventHome;
