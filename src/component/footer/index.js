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
          <h5><span className="font-semibold text-[1rem]">Evorty Office</span> at</h5>
          <h5>Jl. Poin Mas Raya, No 08, Kota Depok, Jawa Barat</h5>
          <h5>Senin - Sabtu 09.00 - 17.00 WIB</h5>
        </div>
        <div className="flex flex-wrap justify-center max-w-[400px] m-3">
          {/* ig */}
          <div className="instagram rounded-[20px] bg-[#5ebfff] mr-5 mb-3 pr-3">
            <a className="flex items-center" href='https://instagram.com/4evorty?igshid=YmMyMTA2M2Y='>
              <img className="w-[40px]" src={instagram} alt='instagram icon'></img>
              <h5 className="pl-2 font-semibold text-[1rem]">Evorty.id</h5>
            </a>
          </div>

          {/* yt */}
          <div className="youtube rounded-[20px] bg-[#5ebfff] mr-5 mb-3 pr-3">
            <a className="flex items-center" href="https://youtube.com/channel/UC5imlvUNkuXxvHcctOzdW_A">
              <img className="w-[40px]" src={youtube} alt='youtube icon'></img>
              <h5 className="pl-2 font-semibold text-[1rem]">Evorty</h5>
            </a>
          </div>

          {/* faq */}
          <div className="faq flex rounded-[20px] items-center bg-white text-customColor-biruTua mr-5 mb-3 py-2 px-6">
            <img className="w-[20px]" src={faq} alt='faq icon'></img>
            <h5 className="pl-2 font-semibold text-[1rem]" >FAQ</h5>
          </div>
        </div>
        <p className="font-thin text-[0.8rem]">Copyright © 2022 Evorty.id All rights reserved</p>
      </div>
    </div>
  )
};

export default Footer;
