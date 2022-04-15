import React, { Fragment } from "react";
import "./style.css";
import img1 from "../../assets/image-broadcast-event/broadcast-image1.png";
import img2 from "../../assets/image-broadcast-event/broadcast-image2.png";
const HomeBroadcast = () => {
  return (
    <Fragment>
      <div className="bg-home-broadcast flex flex-col items-center w-full bg-customColor-biru pt-[60px]">
        <div className="flex items-center flex-col px-[15px] md:w-[70%] ">
          <h1 className="title-broadcast text-[46px] mb-[30px] text-white">Broadcast</h1>
          <p className="text-white text-[20px] mb-[20px] text-center">Broadcasting by Eventy adalah layanan pendukung streaming event yang membantu mengatur tampilan output event virtual Anda agar terlihat lebih menarik dan profesional.</p>
          <p className="text-white text-[20px] mb-[20px] text-center">Fasilitas live streaming bisa di design sesuai kebutuhan event Anda yang dilengkapi dengan berbagai alat dan aset pendukung yang telah disiapkan oleh Eventy.</p>
        </div>
        <a href="" className="flex justify-center px-[30px] py-[4px] text-[20px] bg-white text-customColor-biruTua rounded-xl font-semibold mt-[50px]">
          Detail Paket
        </a>
        <div className="flex justify-center items-center py-[120px] flex-col">
          <img src={img1} className="w-[70%] mb-[30px]" />
          <img src={img2} className="w-[70%]" />
        </div>
      </div>
    </Fragment>
  );
};

export default HomeBroadcast;
