import React from 'react'
import './style.css'

// img
import ve1 from '../../assets/icon-virtual-or-hybrid/ve1.png'
import hb2 from '../../assets/icon-virtual-or-hybrid/hb2.png'

const VirtualOrHybird = () => {
  return (
    <div className='bg-virtual-or-hybird bg-customColor-biru text-white'>
        <div className='width-full max-w-5xl mx-auto pt-[80px] pb-[80px] text-center'>
            <div data-aos="fade-up" data-aos-duration="1000" className='max-w-[500px] mx-5 lg:mx-auto'>
                <h1 className='virtual-hybird-title mb-[35px] font-semibold leading-none text-[2rem]'>Virtual atau Hybrid?</h1>
                <h5 className='mb-[15px] leading-none font-semibold text-[1.2rem]'>Pilihan event seperti apa yang ingin Anda jalankan?</h5>
                <h5 className='mb-[40px] leading-1 font-tight text-[1rem]'>Dengan berbagai kebutuhan dan tujuan terlaksananya sebuah event, Evorty menawarkan berbagai inovasi berbasis teknologi yang siap membantu mencapai tujuan pelaksanaan event Anda.</h5>
            </div>
            <div className='flex justify-center mx-auto flex-wrap'>
                <div data-aos="zoom-in" data-aos-duration="1000" className='myCard w-[300px] sm:w-[500px] text-customColor-biruTua bg-white rounded-[10px] md:max-w-[41%] m-5'>
                        <img src={ve1} alt='card 1'/>
                    <div className='p-[2rem] text-justify'>
                        <h3 className='mb-[15px] leading-none font-semibold text-[1.7rem]'>Virtual Event by Evorty</h3>
                        <p className='leading-1 font-normal text-[1rem]'>Sebuah platform event yang memiliki variasi fitur interaksi menarik, mudah digunakan bagi peserta event dan event planner, serta membantu meningkatkan value event Anda.</p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className='myCard w-[300px] sm:w-[500px] text-customColor-biruTua bg-white rounded-[10px] md:max-w-[41%] m-5'>
                    <img src={hb2} alt='card 2'/>
                    <div className='p-[2rem] text-justify'>
                        <h3 className='mb-[15px] leading-none font-semibold text-[1.7rem]'>Hybrid Event by Evorty</h3>
                        <p className='leading-1 font-normal text-[1rem]'>Sebuah solusi bagi Event Planner yang ingin memadukan pelaksanaan event secara online dan Offline serta ingin meruntuhkan batasan dalam hal ukuran lokasi serta jumlah peserta yang dapat hadir dalam penyelenggaraan sebuah event.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VirtualOrHybird