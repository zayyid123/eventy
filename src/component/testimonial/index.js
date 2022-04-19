import React from "react";
import myStyle from "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

const Testimonial = () => {
  const allData = [
    {
      name: "Alex Chandra",
      jabatan: "Kementerian Perindustrian",
      testimoni:
        "Tim Evorty sangat suportif. Sangat membantu kami dalam mengembangkan event yang bersifat virtual. Fitur-fitur yang disediakan dalam web event pun cukup variatif dan membantu kami. Semoga kedepan bisa bekerjasama lagi dengan Evorty. Terima kasih",
      logo: "https://d1bzsjp5fzkb7z.cloudfront.net/website/default/images/logo/testimonial/img_logo_kementrian@2x.png",
    },
    {
      name: "Neira Ardaneshwari Budiono",
      jabatan: "Head Committee DESIRE 2021",
      testimoni: "Tim Evorty gercep dalam memproses perbaikan. Overall satisfied banget kok. Platform nya juga keren banget, kerjaan cepat kelar semua, responsif sama kebutuhan kita",
      logo: "https://d1bzsjp5fzkb7z.cloudfront.net/website/default/images/logo/testimonial/img_logo_unfpa@2x.png",
    },
    {
      name: "dr.Pradana Nurhadi Sp.U (K)",
      jabatan: "Head Committee MCUE 14",
      testimoni: "Saya pribadi selaku ketua committe MCUE mengucapkan banyak terimakasih kepada Evorty, karena pihak Evorty bisa bekerja dengan baik!",
      logo: "https://d1bzsjp5fzkb7z.cloudfront.net/website/default/images/logo/testimonial/img_logo_rssa@2x.png",
    },
    {
      name: "Yohanes Peter Wijaya",
      jabatan: "Director Orient EuroPharma Indonesia",
      testimoni: `Please extend my big thank you to Evorty team.. So happy for today's launch.. Kudos to them.`,
      logo: "https://d1bzsjp5fzkb7z.cloudfront.net/website/default/images/logo/testimonial/img_logo_oep@2x.png",
    },
    {
      name: "Tommy Hermawan",
      jabatan: "Kiad Kreatif",
      testimoni: "Secara konsep dengan acara kami sudah bagus dan sesuai kebutuhan",
      logo: "https://d1bzsjp5fzkb7z.cloudfront.net/website/default/images/logo/testimonial/img_logo_kiad@2x.png",
    },
  ];

  return (
    <div className="bg-customColor-biru">
      <div className="flex flex-col items-center justify-center max-w-5xl mx-5 lg:mx-auto pb-10">
        <div className="text-center">
          <h1 data-aos="fade-up" className="testimonial-title mb-[80px] mt-[80px] text-white font-semibold leading-none text-[2rem]">
            Testimonial Customer Evorty
          </h1>
        </div>
        <div data-aos="fade-up" className="w-[300px] sm:w-[500px] md:w-[600px] lg:w-[800px] text-customColor-biruTua">
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            grabCursor={true}
            modules={[Pagination]}
            className="mySwiper2 max-h-[450px] sm:max-h-[380px] md:max-h-[300px] lg:max-h-[280px]"
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            {allData.map((res, index) => (
              <SwiperSlide key={index + res.name} className="flex max-w-[280px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[700px]  justify-center items-center m-[auto]">
                <div className="flex justify-center items-center flex-col sm:flex-row">
                  <div className=" md:p-[10px] lg:p-[30px]">
                    <img className="min-w-[188px] max-h-[188px]" src={res.logo} alt={res.name}></img>
                  </div>
                  <div>
                    <p>{res.testimoni}</p>
                    <br />
                    <h1 className="leading-none mb-3 font-semibold text-[1.2rem]">{res.name}</h1>
                    <h5 className="italic">{res.jabatan}</h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
