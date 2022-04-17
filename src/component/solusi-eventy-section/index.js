import React, { Fragment, useState } from "react";
import solusi1 from "../../assets/icon-solusi/1solusi.svg";
import solusi2 from "../../assets/icon-solusi/2solusi.svg";
import solusi3 from "../../assets/icon-solusi/3solusi.svg";
import solusi4 from "../../assets/icon-solusi/4solusi.svg";
import solusi5 from "../../assets/icon-solusi/5solusi.svg";
import solusi11 from "../../assets/icon-solusi/11solusi.svg";
import solusi22 from "../../assets/icon-solusi/22solusi.svg";
import solusi33 from "../../assets/icon-solusi/33solusi.svg";
import solusi44 from "../../assets/icon-solusi/44solusi.svg";
import solusi111 from "../../assets/icon-solusi/111solusi.svg";
import "./style.css";
const SolusiEventy = () => {
  const praEvent = [
    {
      title: "Pilihan Fitur dan Tampilan Platform Eksklusif untuk Experience Lebih Maksimal",
      description: "Didukung berbagai pilihan fitur interaksi dengan desain intuitif yang user friendly untuk memaksimalkan experience peserta saat mengikuti event.",
      img: solusi1,
    },
    {
      title: "Kemudahan Proses Registrasi/Checkin",
      description: "Tersedia form registrasi bebas custom sesuai kebutuhan event yang memudahkan proses collect data peserta.",
      img: solusi2,
    },
    {
      title: "Service Payment Gateway System",
      description: "Mempermudah proses ticketing peserta, dengan pilihan metode pembayaran melalui platform payment gateway QRIS, M- Banking, CC, dll.",
      img: solusi3,
    },
    {
      title: "Akses menu Back Office bagi Event Control Center",
      description: "Penyelenggara dapat mengelola dan memantau keseluruhan event secara mudah dan realtime melalui Menu Back Office.",
      img: solusi4,
    },
    {
      title: "Technical Support",
      description: "Dedicated tim berkompetensi di bidang terkait kemudahan untuk proses revisi konten.",
      img: solusi5,
    },
  ];
  const duringEvent = [
    {
      title: "Kemudahan Mengelola Exposure Brand",
      description: "Tersedia berbagai pilihan desain Booth Exhibition yang membantu agar Brand Awareness, Leads dan Penjualan event Anda meningkat.",
      img: solusi11,
    },
    {
      title: "Pengelolaan Eksistensi sponsor lebih optimal",
      description: "Tersedia space khusus bagi sponsor yang bisa terhubung ke booth, website, atau marketplace milik sponsor acara.",
      img: solusi22,
    },
    {
      title: "Produksi Video Streaming dan Broadcast Berkualitas",
      description: "Menyuguhkan tayangan video streaming dan live broadcast ke seluruh peserta dari berbagai macam sumber dan tipe event.",
      img: solusi33,
    },
    {
      title: "Variasi Fitur Interaksi yang Menarik",
      description: "Beberapa fitur untuk interaksi yang tersedia Public chat, Polling, Quiz, dan Attachment file.",
      img: solusi44,
    },
  ];
  const pascaEvent = [
    {
      title: "Kemudahan dalam Mengelola Data secara",
      addons: "Real Time",
      description: "Tersedia dashboard untuk menginformasikan dan mengelola data peserta:",
      detail: [
        {
          list: "Report dan Insight data Register & Login",
        },
        {
          list: "Report Visitor Booth",
        },
        {
          list: "Report Visitor Main Stage",
        },
        {
          list: "Report Visitor Class Room",
        },
        {
          list: "Report Quiz & Polling",
        },
        {
          list: "Report Chat (Conversation & Public Chat)",
        },
      ],
      img: solusi111,
    },
  ];
  const [card, setCard] = useState(praEvent);
  const [show, setShow] = useState("pra");

  const changeShow = (data, state) => {
    setShow(data);
    setCard(state);
  };

  return (
    <Fragment>
      <div id="bg" className={`py-[80px] bg-customColor-bgWhite`}>
        <div className="max-w-5xl mx-auto flex flex-col justify-center items-center ">
          <h1 data-aos="fade-up" data-aos-duration="1000" id="title" className="text-[2rem] text-customColor-biruTua mb-[30px] text-center mt-[40px]">
            Solusi dari Evorty untuk Event Anda
          </h1>
          <div data-aos="fade-up" data-aos-duration="1000" className="flex justify-center items-center ">
            <button
              onClick={() => {
                changeShow("pra", praEvent);
              }}
              className={`${show === "pra" ? style.btnActive : style.btnNoActive} `}
            >
              Pra event
            </button>
            <button
              onClick={() => {
                changeShow("during", duringEvent);
              }}
              className={`${show === "during" ? style.btnActive : style.btnNoActive}`}
            >
              During Event
            </button>
            <button
              onClick={() => {
                changeShow("pasca", pascaEvent);
              }}
              className={`${show === "pasca" ? style.btnActive : style.btnNoActive}`}
            >
              Pasca Event
            </button>
          </div>
          <div data-aos="zoom-in" data-aos-duration="100" id="cardParent" className="items-stretch flex w-full lg:flex-row justify-center items-center flex-wrap content-start   p-5">
            {card.map((data, index) => {
              return (
                <div key={data.title} className="max-w-[400px] card self-auto flex flex-col lg:flex-row md:w-[30rem] bg-white rounded-xl shadow-xl mx-[9px] mb-[15px] ">
                  <div className=" flex-none  bg-customColor-biru  px-[20px] py-[25px] rounded-xl">
                    <div className="flex justify-center items-center">
                      <img src={`${data.img}`} className={`w-[80px] h-[80px]`} alt="icon" />
                    </div>
                  </div>
                  <div className="flex flex-col p-[25px] rounded-xl">
                    <h6 className={`text-[16px] font-bold text-customColor-biruTua mb-[10px]`}>{data.title}</h6>
                    {show === "pasca" && <h6 className={`text-[16px] font-bold text-customColor-biruTua mb-[10px] italic`}>{data.addons}</h6>}
                    <p className="text-customColor-biruTua">{data.description}</p>
                    <ul className="list-disc px-5">
                      {show === "pasca" &&
                        data.detail.map((dat, index) => {
                          return <li key={index}>{dat.list}</li>;
                        })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const style = {
  btnActive: "md:text-[16px] text-[14px] md:px-4 md:py-[5px] py-[5px] px-[10px] bg-customColor-kuning font-bold rounded-lg m-1 shadow-xl",
  btnNoActive: "md:text-[16px] text-[14px] md:px-4 md:py-[5px] py-[5px] px-[10px] text-gray-500 rounded-lg ",
};
export default SolusiEventy;