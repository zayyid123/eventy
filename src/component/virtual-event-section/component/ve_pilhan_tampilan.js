import React from "react";

// icon
import icon2d from "../../../assets/icon-virtual-event/img_badge_2D.svg";
import icon3d from "../../../assets/icon-virtual-event/img_badge_3D.svg";

// img
import img2d from "../../../assets/icon-virtual-event/home/virtualConf.png";
import img3d from "../../../assets/icon-virtual-event/home/expoHall.png";

const VirtualEventPilihan = () => {
  return (
    <div id="pilihan-tampilan-virtual" className="bg-white text-customColor-biruTua ">
      <div className="max-w-5xl mx-5 lg:mx-auto text-center">
        <div data-aos="fade-up" data-aos-duration="1000" className="max-w-[950px] mx-auto mt-[120px]">
          <h1 className="ve-home-title mt-[50px] mb-[30px] font-bold leading-none text-[2rem] lg:text-[2.2rem]">Pilihan Tampilan Platform Virtual Event</h1>
          <h5 className="mb-[50px] font-normal leading-normal text-[1.1rem]">
            Untuk mendapatkan pengalaman virtual event yang luar biasa sesuai rencana event yang Anda inginkan, Evorty menyediakan 2 tampilan platform dalam format desain 2D dan 3D 360° seperti tampilan berikut:
          </h5>
        </div>
        <div className="flex flex-wrap">
          <div data-aos="zoom-in" data-aos-duration="1000" className="w-[100%] lg:w-1/2">
            <div className="mx-auto p-[16px] w-[70%] lg:w-[100%]">
              <img src={img2d} alt="gambar 1" />
              <img className="relative mx-auto top-[-35px] lg:mx-0 lg:top-[-77px] lg:left-[-25px]" src={icon2d} alt="icon 2d" />
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="w-[100%] lg:w-1/2">
            <div className="mx-auto p-[16px] w-[70%] lg:w-[100%]">
              <img src={img3d} alt="gambar 2" />
              <img className="relative mx-auto top-[-35px] lg:mx-0 lg:top-[-77px] lg:left-[-25px]" src={icon3d} alt="icon 2d" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualEventPilihan;
