import React from "react";
import "./style.css";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import home1 from "../../assets/home-section/home1.png";
import home2 from "../../assets/home-section/home2.png";
import home3 from "../../assets/home-section/home3.png";
import home4 from "../../assets/home-section/home4.png";
import home5 from "../../assets/home-section/home5.png";
const HomeSection = () => {
  return (
    <div id="home" className="bg-home-eventy w-full bg-customColor-biru text-white pt-[100px] pb-[100px]">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex md:items-start flex-wrap justify-center">
          <div className="keterangan-home lg:mr-24 pl-5 md:pl-0 w-[80%] md:w-[65%] lg:w-[60%] xl:w-[45%] xl:min-w-[512px] pt-10">
            <h1 data-aos="fade-up" data-aos-duration="1000" className="title-home mb-[20px] font-normal leading-none text-[1.7rem] sm:text-[2.5rem] md:text-[3rem]">
              Teknologi <br /> Event Management Berbasis Platform
            </h1>
            <h5 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" className="mb-[20px] leading-none font-medium text-[1.2rem]">
              Menyediakan layanan dan fasilitas untuk berbagai kebutuhan manajemen event secara virtual dan hybrid
            </h5>
            <ul data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
              <li>Event Website & Platform</li>
              <li>Event Registration & Ticketing</li>
              <li>Live Broadcasting System</li>
              <li>Data Report & Insight</li>
              <li>Expo Hall & Sponsors</li>
            </ul>
          </div>
          <div className=" swipper w-[80%] md:w-[65%] lg:w-[60%] xl:w-[45%] p-5 ">
            <Swiper effect={"cards"} grabCursor={true} navigation={false} modules={[EffectCards]} className="mySwiper">
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl">
                  <img src={home1} alt="coba" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl">
                  <img src={home2} alt="coba" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl">
                  <img src={home3} alt="coba" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl">
                  <img src={home4} alt="coba" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl">
                  <img src={home5} alt="coba" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
