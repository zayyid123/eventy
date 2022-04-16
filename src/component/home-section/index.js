import React from "react";
import "./style.css";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

const HomeSection = () => {
  return (
    <div className="bg-home-eventy w-full bg-customColor-biru text-white pt-[110px] pb-10">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex md:items-start flex-wrap md:justify-center">
          <div className="keterangan-home pl-5 md:pl-0 w-[80%] md:w-[65%] lg:w-[60%] xl:w-[45%] xl:min-w-[512px] pt-10">
            <h1 data-aos="fade-up" data-aos-duration="1000" className="title-home mb-[20px] font-normal leading-none text-[1.7rem] sm:text-[2.5rem] md:text-[3rem]">
              Teknologi <br /> Event Management Berbasis Platform
            </h1>
            <h5 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" className="mb-[20px] leading-none font-medium text-[1.5rem]">Menyediakan layanan dan fasilitas untuk berbagai kebutuhan manajemen event secara virtual dan hybrid</h5>
            <ul data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
              <li>Event Website & Platform</li>
              <li>Event Registration & Ticketing</li>
              <li>Live Broadcasting System</li>
              <li>Data Report & Insight</li>
              <li>Expo Hall & Sponsors</li>
            </ul>
          </div>
          <div className="swipper w-[80%] md:w-[65%] lg:w-[60%] xl:w-[45%] p-5 ">
            <Swiper effect={"cards"} grabCursor={true} navigation={false} modules={[EffectCards]} className="mySwiper">
              <SwiperSlide>
                <img src="https://d1bzsjp5fzkb7z.cloudfront.net/website/uploads/banners/4a12d11904d69a3fee632a64b0f97271.png" alt="coba" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://d1bzsjp5fzkb7z.cloudfront.net/website/uploads/banners/71e743501d1e3691f704738a58a8dbc5.png" alt="coba" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://d1bzsjp5fzkb7z.cloudfront.net/website/uploads/banners/bc7e13ac2c8c0707234d6bd4fbb838bd.png" alt="coba" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
