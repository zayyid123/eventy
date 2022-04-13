import React from 'react'
import './style.css'

// icon
import exhibition from '../../assets/icon-pilihan-Tipe/icon_exhibition.svg'
import launching from '../../assets/icon-pilihan-Tipe/icon_launching.svg'
import conference from '../../assets/icon-pilihan-Tipe/icon_conference.svg'
import expo from '../../assets/icon-pilihan-Tipe/icon_expo.svg'
import workshop from '../../assets/icon-pilihan-Tipe/icon_workshop.svg'
import concert from '../../assets/icon-pilihan-Tipe/icon_concert.svg'

const PilihanTipe = () => {
    const lebarLayar = window.innerWidth;
    const dataTipe = [
        {
            name: 'Exhibition',
            link: exhibition
        },
        {
            name: 'Launching',
            link: launching
        },
        {
            name: 'Conference',
            link: conference
        },
        {
            name: 'Expo',
            link: expo
        },
        {
            name: 'Workshop',
            link: workshop
        },
        {
            name: 'Concert',
            link: concert
        },
    ]
    
  return (
    <div className='bg-customColor-biru text-white overflow-hidden '>
        <div className='flex flex-col w-full items-center max-w-5xl mx-auto lg:items-center lg:flex-row-reverse'>
            <div className='w-[80%] sm:w-[60%] mb-[10px] mt-[20px] lg:w-[33.3%] lg:mt-[10rem] lg:mb-[10rem] lg:ml-[2rem]'>
                <h1 className='title-pilihan-tipe text-[2rem] mb-[20px] text-center lg:text-left'>Pilihan Tipe Event</h1>
                <p className='text-center lg:text-left'>Lebih dari sekedar tampilan webinar biasa, Platform Eventy mampu mendukung pelaksanaan berbagai tipe event yang ingin Anda selenggarakan</p>
            </div>
            <div className='hidden w-[65.666667%] lg:block'>
                <div className='relative w-[100%] '>
                    <div className='flex flex-wrap w-[700px] absolute justify-center sliderEffect'>
                        {
                            dataTipe.map((item, index) =>
                                <div key={index+item.name} className='flex bg-white w-[305px] h-[305px] m-5 items-center justify-center flex-col rounded-[10px] exhibition' style={{margin: '0 10px 20px'}}>
                                    <div className='flex flex-col items-center text-customColor-biruTua text-center'>
                                        <img className='w-[80px]' src={item.link} alt={item.name} />
                                        <h5 className='mt-[30px]' >Event {item.name}</h5>
                                    </div>
                                </div>
                            )
                            
                        }
                        {
                            dataTipe.map((item, index) =>
                                <div key={index+item.name} className='flex bg-white w-[305px] h-[305px] m-5 items-center justify-center flex-col rounded-[10px] exhibition' style={{margin: '0 10px 20px'}}>
                                    <div className='flex flex-col items-center text-customColor-biruTua text-center'>
                                        <img className='w-[80px]' src={item.link} alt={item.name} />
                                        <h5 className='mt-[30px]' >Event {item.name}</h5>
                                    </div>
                                </div>
                            )
                            
                        }
                    </div>
                </div>
            </div>

            {/* when less width */}
            <div className='lg:hidden sm:w-[80%] w-[100%] mb-[20px]'>
                <div className='w-[100%] min-h-[360px] relative'>
                    <div className='flex flex-wrap md:justify-around sm:justify-center justify-center items-center'>
                        {
                            dataTipe.map((item, index) =>
                                <div key={index+item.name} className='flex bg-white w-[130px] h-[130px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] sm:m-2 m-1 items-center justify-center flex-col rounded-[10px] exhibition'>
                                    <div className='flex flex-col items-center text-customColor-biruTua text-center'>
                                        <img className='w-[50px] sm:w-[80px]' src={item.link} alt={item.name} />
                                        <h5 className='mt-[30px]' >Event {item.name}</h5>
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

export default PilihanTipe