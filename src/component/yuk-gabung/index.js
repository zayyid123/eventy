import React from 'react'

// icon
import icon1 from '../../assets/icon-yuk-gabung/icon1.png'
import icon2 from '../../assets/icon-yuk-gabung/icon2.png'
import icon3 from '../../assets/icon-yuk-gabung/icon3.png'
import icon4 from '../../assets/icon-yuk-gabung/icon4.png'
import icon5 from '../../assets/icon-yuk-gabung/icon5.png'
import icon6 from '../../assets/icon-yuk-gabung/icon6.png'
import icon7 from '../../assets/icon-yuk-gabung/icon7.png'
import icon8 from '../../assets/icon-yuk-gabung/icon8.png'
import icon9 from '../../assets/icon-yuk-gabung/icon9.png'
import icon10 from '../../assets/icon-yuk-gabung/icon10.png'
import icon11 from '../../assets/icon-yuk-gabung/icon11.png'
import icon12 from '../../assets/icon-yuk-gabung/icon12.png'
import icon13 from '../../assets/icon-yuk-gabung/icon13.png'
import icon14 from '../../assets/icon-yuk-gabung/icon14.png'
import icon15 from '../../assets/icon-yuk-gabung/icon15.png'
import icon16 from '../../assets/icon-yuk-gabung/icon16.png'
import icon17 from '../../assets/icon-yuk-gabung/icon17.png'
import icon18 from '../../assets/icon-yuk-gabung/icon18.png'
import icon19 from '../../assets/icon-yuk-gabung/icon19.png'
import icon20 from '../../assets/icon-yuk-gabung/icon20.png'
import icon21 from '../../assets/icon-yuk-gabung/icon21.png'
import icon22 from '../../assets/icon-yuk-gabung/icon22.png'
import icon23 from '../../assets/icon-yuk-gabung/icon23.png'
import icon24 from '../../assets/icon-yuk-gabung/icon24.png'
import icon25 from '../../assets/icon-yuk-gabung/icon25.png'
import icon26 from '../../assets/icon-yuk-gabung/icon26.png'
import icon27 from '../../assets/icon-yuk-gabung/icon27.png'
import icon28 from '../../assets/icon-yuk-gabung/icon28.png'
import icon29 from '../../assets/icon-yuk-gabung/icon29.png'
import icon30 from '../../assets/icon-yuk-gabung/icon30.png'
import iconArrow from '../../assets/icon-yuk-gabung/icon-arrow.svg'

const allIcon = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9,icon10,icon11,icon12, icon13,icon14,icon15,icon16,icon17,icon18,icon19,icon20,icon21,icon22,icon23, icon24, icon25, icon26, icon27, icon28, icon29, icon30]

const YukGabung = () => {
    const [show, setshow] = React.useState(false)

    const handleClick = () => {
        setshow(!show)
    }

  return (
    <div className='text-customColor-biruTua bg-customColor-bgWhite'>
        <div className='max-w-5xl mx-5 lg:mx-auto pb-[80px]'>
            <div>
                <h1 data-aos="fade-up" data-aos-duration="1000" className='pb-[40px] pt-[80px] text-center font-semibold leading-none text-[2rem]'>Yuk Bergabung dengan Ratusan Customer Evorty</h1>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-wrap justify-center overflow-hidden' style={show ? {height: '100%'} : {height: '219px'}}>
                {
                    allIcon.map((item, index) =>
                        <div key={index+'my_icon'} className='w-[45%] md:w-[16%] m-2'>
                            <div className='bg-white shadow-lg py-[10px] px-[15px] rounded-[10px] '>
                                <img className='w-[100%] h-[70px] object-contain' src={item} alt="my icon"/>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='flex justify-center mt-5'>
                <button onClick={handleClick} className='flex justify-center flex-col items-center text-center'>
                    <h5>Tampilkan Lebih {show ? 'Sedikit' : 'Banyak'}</h5>
                    <img src={iconArrow} className={`mt-3 ${show ? 'rotate-180' : ''}`} alt='icon arrow'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default YukGabung