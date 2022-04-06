import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "./style.css"

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

const Home = () => {
  return (
    <Fragment>
        <h1 className="text-3xl font-bold underline" data-aos="fade-up" >Home</h1>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://d1bzsjp5fzkb7z.cloudfront.net/website/uploads/banners/71e743501d1e3691f704738a58a8dbc5.png" alt='swiper'/>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    </Fragment>
  )
}

export default Home