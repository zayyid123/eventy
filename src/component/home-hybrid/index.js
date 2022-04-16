import React, { Fragment } from "react";
import "./style.css";
const HomeHybrid = () => {
  return (
    <Fragment>
      <div id="home-hybrid" className="bg-home-hybrid bg-customColor-biru">
        <div className="w-full max-w-5xl mx-auto justify-center flex items-center flex-col py-[6rem]">
          <div id="title">
            <h1 data-aos="fade-up" data-aos-duration="1000" className="md:text-[46px] text-[36px] text-white mb-[30px] ">
              Hybrid Event
            </h1>
          </div>
          <h6 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" className="text-white text-[20px] font-semibold mb-[30px] text-center mx-3">
            Hybrid Event by Evorty Solusi inovatif untuk kebutuhan event Anda
          </h6>
          <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" className="text-white text-[18px] w-[75%] text-center mb-[100px]">
            Menyediakan layanan integrasi on site dan virtual yang semakin terasa nyata. Dilengkapi dengan tampilan interaktif visual yang memanjakan pengunjung, serta membantu meningkatkan engagement yang lebih tinggi antara pengunjung dan
            penyelenggara event.
          </p>
          <a href="#detail-paket-hybrid" data-aos-duration="1000" className="bg-white text-customColor-biruTua text-[20px] font-semibold px-[30px] py-1 rounded-xl">
            Detail Paket
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeHybrid;
