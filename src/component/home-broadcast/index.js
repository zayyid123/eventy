import React, { Fragment } from "react";
import "./style.css";
import img1 from "../../assets/image-broadcast-event/broadcast-image1.png";
import img2 from "../../assets/image-broadcast-event/broadcast-image2.png";
const HomeBroadcast = () => {
  return (
    <Fragment>
      <div id="home-broadcast" className="bg-home-broadcast bg-customColor-biru pt-[60px]">
        <div className="max-w-5xl mx-auto flex flex-col items-center w-full">
          <div data-aos="fade-up" data-aos-duration="1000" className="flex items-center flex-col px-[15px] md:w-[70%] ">
            <h1 className="title-broadcast text-[46px] mb-[30px] text-white">Broadcast</h1>
            <p className="text-white text-[20px] mb-[20px] text-center">
              Broadcasting by Evorty adalah layanan pendukung streaming event yang membantu mengatur tampilan output event virtual Anda agar terlihat lebih menarik dan profesional.
            </p>
            <p className="text-white text-[20px] mb-[20px] text-center">Fasilitas live streaming bisa di design sesuai kebutuhan event Anda yang dilengkapi dengan berbagai alat dan aset pendukung yang telah disiapkan oleh Evorty.</p>
          </div>
          <a href="#detail-paket-broadcast" className="flex justify-center px-[30px] py-[4px] text-[20px] bg-white text-customColor-biruTua rounded-xl font-semibold mt-[50px]">
            Detail Paket
          </a>
          <div className="flex justify-center items-center py-[120px] flex-col">
            <img data-aos="zoom-in" data-aos-duration="1000" src={img1} className="w-[70%] mb-[30px]" alt="broadcast 1" />
            <img data-aos="zoom-in" data-aos-duration="1000" src={img2} className="w-[70%]" alt="broadcast 2" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeBroadcast;
