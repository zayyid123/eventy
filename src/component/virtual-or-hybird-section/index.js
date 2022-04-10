import React from 'react'
import './style.css'

const VirtualOrHybird = () => {
  return (
    <div className='bg-customColor-biru text-white'>
        <div className='width-full max-w-5xl mx-auto pt-[80px] pb-[80px] text-center'>
            <div className='max-w-[500px] mx-auto'>
                <h1 className='virtual-hybird-title mb-[35px] font-semibold leading-none text-[2rem]'>Virtual atau Hybrid?</h1>
                <h5 className='mb-[15px] leading-none font-semibold text-[1.2rem]'>Pilihan event seperti apa yang ingin Anda jalankan?</h5>
                <h5 className='mb-[40px] leading-1 font-tight text-[1rem]'>Dengan berbagai kebutuhan dan tujuan terlaksananya sebuah event, Eventy menawarkan berbagai inovasi berbasis teknologi yang siap membantu mencapai tujuan pelaksanaan event Anda.</h5>
            </div>
            <div className='flex justify-center mx-auto flex-wrap'>
                <div className='myCard w-[300px] sm:w-[500px] text-customColor-biruTua bg-white rounded-[10px] md:max-w-[41%] m-5'>
                    <img src='https://eventy.id/_nuxt/img/img_virtual_event@2x.c3dc8cf.png' alt='card 1'/>
                    <div className='p-[2rem] text-justify'>
                        <h3 className='mb-[15px] leading-none font-semibold text-[1.7rem]'>Virtual Event by Eventy</h3>
                        <p className='leading-1 font-normal text-[1rem]'>Sebuah platform event yang memiliki variasi fitur interaksi menarik, mudah digunakan bagi peserta event dan event planner, serta membantu meningkatkan value event Anda.</p>
                    </div>
                </div>
                <div className='myCard w-[300px] sm:w-[500px] text-customColor-biruTua bg-white rounded-[10px] md:max-w-[41%] m-5'>
                    <img src='https://eventy.id/_nuxt/img/img_hybrid_event@2x.9ff6a00.png' alt='card 2'/>
                    <div className='p-[2rem] text-justify'>
                        <h3 className='mb-[15px] leading-none font-semibold text-[1.7rem]'>Hybrid Event by Eventy</h3>
                        <p className='leading-1 font-normal text-[1rem]'>Sebuah solusi bagi Event Planner yang ingin memadukan pelaksanaan event secara online dan Offline serta ingin meruntuhkan batasan dalam hal ukuran lokasi serta jumlah peserta yang dapat hadir dalam penyelenggaraan sebuah event.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VirtualOrHybird