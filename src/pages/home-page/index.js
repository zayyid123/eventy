import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import HomeSection from "../../component/home-section";
import AboutSection from "../../component/about-section";
import VirtualOrHybird from "../../component/virtual-or-hybird-section";
import SolusiEventy from "../../component/solusi-eventy-section";
import WhyChosen from "../../component/why-chosen-section";
import PilihanTipe from "../../component/pilihan-tipe-section";
import Testimonial from "../../component/testimonial";
import VirtualEvent from "../../component/virtual-event-section";




const Home = () => {
  return (
    <Fragment>
      <section className="home">
        <HomeSection />
      </section>

      <section className="about_eventy">
        <AboutSection />
      </section>

      <section className="virtual_or_hybird">
        <VirtualOrHybird />
      </section>

      <section className="solusi_eventy">
        <SolusiEventy />
      </section>

      <section className="pilihan_tipe">
        <PilihanTipe />
      </section>

      <section className="kenapa_pilih">
        <WhyChosen />
      </section>

      <section className="testimonial">
        <Testimonial/>
      </section>

      <section className="home_hybrid_event"></section>

      <section className="hybrid_event"></section>

      <section className="detail_paket"></section>

      <section className="Virtual_Event">
        <VirtualEvent/>
      </section>

      <section className="Pilihan_Tampilan"></section>

      <section className="Expo_Hall"></section>

      <section className="Virtual_Event"></section>

      <section className="Detail_Paket"></section>

      <section className="Broadcast"></section>

      <section className="Detail_Paket"></section>

      <section className="Yuk_Bergabung"></section>
    </Fragment>
  );
};

export default Home;
