import React from "react";
import "./style.css";

// icon
import instagram from '../../assets/icon-footer/instagram.svg';
import youtube from '../../assets/icon-footer/youtube.svg';
import faq from '../../assets/icon-footer/faq.svg';

const Footer = () => {
  return(
    <div className="bg-customColor-biru text-white text-center">
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto pt-4 pb-2">
        <div>
          <h5><span className="font-semibold text-[1rem]">Eventy Office</span> at</h5>
          <h5>Jalan Durian Utara III, Pedalangan, Semarang, Jawa Tengah 50268</h5>
          <h5>Senin - Sabtu 09.00 - 17.00 WIB</h5>
        </div>
        <div className="flex flex-wrap justify-center max-w-[400px] m-3">
          {/* ig */}
          <div className="instagram flex rounded-[20px] items-center bg-[#5ebfff] mr-5 mb-3 pr-3">
            <img className="w-[40px]" src={instagram} alt='instagram icon'></img>
            <h5 className="pl-2 font-semibold text-[1rem]">eventy.id</h5>
          </div>

          {/* yt */}
          <div className="youtube flex rounded-[20px] items-center bg-[#5ebfff] mr-5 mb-3 pr-3">
            <img className="w-[40px]" src={youtube} alt='youtube icon'></img>
            <h5 className="pl-2 font-semibold text-[1rem]">EVENTY</h5>
          </div>

          {/* faq */}
          <div className="faq flex rounded-[20px] items-center bg-white text-customColor-biruTua mr-5 mb-3 py-2 px-6">
            <img className="w-[20px]" src={faq} alt='faq icon'></img>
            <h5 className="pl-2 font-semibold text-[1rem]" >FAQ</h5>
          </div>
        </div>
        <p className="font-thin text-[0.8rem]">Copyright © 2022 Eventy.id All rights reserved</p>
      </div>
    </div>
  )
};

export default Footer;
