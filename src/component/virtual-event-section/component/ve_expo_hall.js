import React from "react";

// img
import imgExpoDesktop from "../../../assets/icon-virtual-event/expo/expo_desktop.png";
import imgExpoMobile from "../../../assets/icon-virtual-event/expo/expo_mobile.png";

const VirtualEventExpoHall = () => {
  return (
    <div id="expo-hall" className="bg-expo-ve bg-customColor-biru text-white">
      <div className="max-w-5xl mx-auto text-center">
        <div data-aos="fade-up" data-aos-duration="1000" className="pt-[60px] pb-[40px] flex flex-col items-center">
          <h1 className="ve-home-title mt-[50px] mb-[40px] font-bold leading-none text-[2.2rem]">Expo Hall & Sponsors</h1>
          <img className="hidden lg:block" src={imgExpoDesktop} alt="expo hall" />
          <img className="block w-[70%] lg:hidden md:max-w-[700px]" src={imgExpoMobile} alt="expo hall 2" />
        </div>
      </div>
    </div>
  );
};

export default VirtualEventExpoHall;
