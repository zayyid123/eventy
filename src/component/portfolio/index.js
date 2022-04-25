import React from 'react'
import './style.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// icon
import iconSearch from '../../assets/icon-portfolio/img_icon_search.svg'
import iconPlay from '../../assets/icon-portfolio/play.svg'

const Portfolio = () => {
    const [btn, setbtn] = React.useState("Semua");
    const [valueSearch, setvalueSearch] = React.useState("");

    const style = {
        btnActive: "text-[16px] px-4 py-[5px] bg-customColor-kuning font-bold rounded-lg m-1 shadow-xl",
        btnNoActive: "text-[16px] px-4 py-[5px] text-gray-500 rounded-lg ",
    };
    const allData = [
        {
            name: 'IACC Working Conference XV',
            image: 'https://i.ytimg.com/vi/kXoVa7SaCaI/maxresdefault.jpg',
            link: 'https://youtu.be/kXoVa7SaCaI',
            type: 'Conference'
        },
        {
            name: 'Elevate Maybank Learning Festival 2021',
            image: 'https://i.ytimg.com/vi/wvaSzvkAJSM/maxresdefault.jpg',
            link: 'https://youtu.be/kXoVa7SaCaI',
            type: 'Exhibition'
        },
        {
            name: 'Geotourism Fest & International Conference 2021',
            image: 'https://i.ytimg.com/vi/kdMN1Bt5YOg/maxresdefault.jpg',
            link: 'https://youtu.be/kXoVa7SaCaI',
            type: 'Conference'
        },
        {
            name: 'Mandiri Autofiesta 15 - 21 Agustus 2020',
            image: 'https://i.ytimg.com/vi/i4SshpWEgtk/maxresdefault.jpg',
            link: 'https://youtu.be/kXoVa7SaCaI',
            type: 'Exhibition'
        },
        {
            name: 'Festival Ekonomi Syariah Kawasan Timur Indonesia Tahun 2020',
            image: 'https://i.ytimg.com/vi/4ZUc-uQwM9k/maxresdefault.jpg',
            link: 'https://youtu.be/kXoVa7SaCaI',
            type: 'Conference'
        },
        {
            name: 'CTI IT Infrastructure Summit 2020',
            image: 'https://i.ytimg.com/vi/Miyy4nqGs6A/maxresdefault.jpg',
            link: 'https://youtu.be/kXoVa7SaCaI',
            type: 'Conference'
        },
    ]

    const handleChange = (event) => {
        const value = event.target.value
        setvalueSearch(value)
    }

    React.useEffect(() => {
        
    }, [valueSearch])
    

  return (
    <div className='my-[30px] text-customColor-biruTua'>
        <div className='max-w-5xl mx-auto text-center md:text-left'>
            <div data-aos="fade-up" data-aos-duration="1000">
                <h1 data-aos="fade-up" data-aos-duration="1000" className='title-porto mt-[50px] mb-[30px] font-bold leading-none text-[2.2rem]'>Event Terbaru</h1>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        grabCursor={true}
                        className="mySwiper"
                    >
                        {
                            allData.map((item, index) =>
                                <SwiperSlide key={index+'item_porto'} className='mySwipperSlider' >
                                    <div
                                        className='w-[100%]' 
                                    >
                                        <div className='relative mb-[30px] cursor-pointer'>
                                            <div className='slider_content_porto'>
                                                <img src={item.image} alt={item.name}/>
                                            </div>
                                            <div className='absolute top-[45%] right-[45%] rounded-[50%] bg-white flex justify-center items-center w-[60px] h-[60px]'>
                                                <img src={iconPlay} alt={'icon play' + item.name}/>
                                            </div>
                                            <h5 className='text-[1.5rem] text-white absolute font-bold left-[60px] bottom-[60px]'>{item.name}</h5>
                                            <button className='absolute top-[30px] right-[30px] text-white bg-[hsla(0,0%,100%,.25)] px-[30px] py-[10px] rounded-md'>{item.type}</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
            <div>
                <h1 data-aos="fade-up" data-aos-duration="1000" className='title-porto mt-[50px] mb-[30px] font-bold leading-none text-[2.2rem]'>Evorty in Action</h1>
                <div className='flex flex-wrap justify-center md:justify-between'>
                    <div data-aos="fade-up" data-aos-duration="1000" className=" flex justify-center md:justify-start flex-wrap w-[100%] lg:w-[40%]">
                        <button
                            className={`${btn === "Semua" ? style.btnActive : style.btnNoActive}`}
                            onClick={() => {
                                setbtn("Semua");
                            }}
                        >
                            Semua
                        </button>

                        <button
                            className={`${btn === "Conference" ? style.btnActive : style.btnNoActive}`}
                            onClick={() => {
                                setbtn("Conference");
                            }}
                        >
                            Conference
                        </button>

                        <button
                            className={`${btn === "Exhibition" ? style.btnActive : style.btnNoActive}`}
                            onClick={() => {
                                setbtn("Exhibition");
                            }}
                        >
                            Exhibition
                        </button>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="1000" className='hidden lg:flex w-[30%]'>
                        <input onChange={handleChange} className='bg-[#e9f7fe] rounded-[10px] px-[15px] py-[5px] border-[none]' type='text' placeholder='Cari Video'/>
                        <button className='drop-shadow-lg bg-customColor-biruMuda rounded-[10px] flex justify-center items-center w-[42px] h-[42px] border-none ml-[10px]'>
                            <img src={iconSearch} alt='icon search porto'/>
                        </button>
                    </div>
                </div>

                <div className='flex flex-wrap justify-center md:justify-between'>
                    <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-wrap justify-center lg:justify-start items-start text-center mt-4'>
                        {
                            allData.filter(data => data.name.toLowerCase().includes(valueSearch.toLowerCase())).map((item, index) =>
                                <div 
                                    key={index+'item_porto'} 
                                    className='w-[90%] sm:w-[40%] md:w-[31%] m-2' 
                                    style={ 
                                        btn === 'Semua' ? {} :
                                        btn === item.type ? {} : {display: 'none'}
                                    }
                                >
                                    <div className='relative mb-[30px] cursor-pointer'>
                                        <img src={item.image} alt={item.name}/>
                                        <div className='absolute top-[15px] right-[15px] rounded-[50%] bg-white flex justify-center items-center w-[40px] h-[40px]'>
                                            <img src={iconPlay} alt={'icon play' + item.name}/>
                                        </div>
                                        <h5 className='text-[16px] font-bold text-customColor-biruTua mb-[10px] mt-3'>{item.name}</h5>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio