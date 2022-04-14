import React from 'react'
import './style_home.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

// icon
import landing from '../../../assets/icon-virtual-event/img_icon_landing.svg'
import regis from '../../../assets/icon-virtual-event/img_icon_regis.svg'
import lobby from '../../../assets/icon-virtual-event/img_icon_lobby.svg'
import exhib from '../../../assets/icon-virtual-event/img_icon_exhib.svg'
import stage from '../../../assets/icon-virtual-event/img_icon_stage.svg'
import classrom from '../../../assets/icon-virtual-event/img_icon_class.svg'
import features from '../../../assets/icon-virtual-event/img_icon_features.svg'
import report from '../../../assets/icon-virtual-event/img_icon_report.svg'


const VirtualEventHome = () => {
  const dataScroll = [
    {
      name: 'Landing Page',
      link: 'https://eventy.id/_nuxt/img/img_landing_page@2x.724457b.png',
      icon: landing
    },
    {
      name: 'Registrasi',
      link: 'https://eventy.id/_nuxt/img/img_regis@2x.0644756.png',
      icon: regis
    },
    {
      name: 'Lobby',
      link: 'https://eventy.id/_nuxt/img/img_lobby@2x.d870bdc.png',
      icon: lobby
    },
    {
      name: 'Exhibition',
      link: 'https://eventy.id/_nuxt/img/img_exhib@2x.656cf24.png',
      icon: exhib
    },
    {
      name: 'Main Stage',
      link: 'https://eventy.id/_nuxt/img/img_stage@2x.fe25f33.png',
      icon: stage
    },
    {
      name: 'Class Room',
      link: 'https://eventy.id/_nuxt/img/img_class@2x.7ad9e21.png',
      icon: classrom
    },
    {
      name: 'Interaction Features',
      link: 'https://eventy.id/_nuxt/img/img_features@2x.2fb56e0.png',
      icon: features
    },
    {
      name: 'Report & Insight Data Event',
      link: 'https://eventy.id/_nuxt/img/img_report@2x.ab3352d.png',
      icon: report
    }
  ]
  
  return (
    <div className='bg-customColor-biru text-white'>
      <div className='max-w-5xl mx-auto text-center'>
        <div className='flex flex-col'>
          {/* first */}
          <div className='max-w-[850px] mx-auto'>
            <h1 className='ve-home-title mt-[50px] mb-[30px] font-bold leading-none text-[3rem]'>Virtual Event</h1>
            <h5 className='mb-[30px] font-semibold leading-none text-[1.3rem]'>Virtual Event by Eventy</h5>
            <p className='mb-[50px] font-normal leading-none text-[1.1rem]'>Menyediakan platform berbasis web sebagai partner pengelolaan virtual event untuk memberikan pengalaman yang menyenangkan dan memudahkan aktivitas peserta event.</p>
          </div>

          {/* second */}
          <div className='flex flex-col'>
            <h5 className=' mb-[10px] font-semibold leading-none text-[1.2rem]' >Platform Eventy meliputi:</h5>
            <div>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="swiper"
              >
                <div className='overflow-hidden'>
                  {
                    dataScroll.map((res, index) =>
                      <SwiperSlide key={index+res.name}>
                        <div className='bg-white p-3 rounded-[10px] text-customColor-biruTua'>
                          <img src={res.link} alt={res.name}/>
                          <div className='flex justify-center'>
                            <img className='mt-3' src={res.icon} alt={`icon ${res.name}`}/>
                            <p className='font-semibold text-[1.rem] mt-3 ml-2'>{res.name}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  }
                </div>
              </Swiper>
            </div>
          </div>

          <br/>
          {/* third */}
          <div>
            <button>Detail Paket</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VirtualEventHome