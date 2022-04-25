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
import HomeHybrid from "../../component/home-hybrid";
import HybridEvent from "../../component/hybrid-event";
import PaketHybrid from "../../component/detail-paket-hybrid";
import HomeBroadcast from "../../component/home-broadcast";
import DetailBroadcast from "../../component/detail-paket-broadcast";
import YukGabung from "../../component/yuk-gabung";
import Portfolio from "../../component/portfolio";
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

      <section className="home_hybrid_event">
        <HomeHybrid />
      </section>

      <section className="hybrid_event">
        <HybridEvent />
      </section>

      <section className="detail_paket">
        <PaketHybrid />
      </section>

      <section className="Virtual_Event">
        <VirtualEvent />
      </section>

      <section className="testimonial">
        <Testimonial />
      </section>

      <section>
        <Portfolio/>
      </section>

      <section className="Yuk_Bergabung">
        <YukGabung/>
      </section>
    </Fragment>
  );
};

export default Home;
