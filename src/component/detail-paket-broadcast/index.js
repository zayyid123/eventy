import React, { Fragment } from "react";
import "./style.css";
import img2 from "../../assets/paket-hybrid-icon/iconHybridPackage2.svg";
import img1 from "../../assets/detail-broadcast/detail-paket-broadcast.png";
const DetailBroadcast = () => {
  return (
    <Fragment>
      <div id="detail-paket-broadcast" className="py-[120px] px-3 bg-customColor-bgWhite ">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center md:w-[50%] mb-[5rem] ">
            <h1 className="title-detail-broadcast text-[36px] text-customColor-biruTua mb-[30px]">Detail Paket</h1>
            <p className="text-[18px] font-semibold text-center text-customColor-biruTua">
              Fitur-fitur dan peralatan broadcast atau live streaming pendukung yang disediakan sesuai kebutuhan event Anda, sudah termasuk beberapa poin dibawah ini:
            </p>
          </div>
          <div className="flex justify-center flex-col-reverse  md:flex-row items-center md:items-stretch">
            <div data-aos="zoom-in" data-aos-duration="1000" className="flex flex-col p-[30px] bg-white w-[90%] md:w-72    rounded-xl shadow-lg mx-4">
              <div className="flex mb-[20px]">
                <img src={img2} className="h-[36px] mr-[15px]" />
                <span className="text-[18px] font-bold text-customColor-biruTua">Broadcast Package / day max 6 jam</span>
              </div>
              <ul className=" list-disc ml-[25px]">
                {broadcast.map((data, index) => {
                  return (
                    <li key={index + data.txt} className={`text-customColor-biruTua mb-[15px] ${data.bold ? "font-semibold" : ""}`}>
                      {data.txt}
                    </li>
                  );
                })}
              </ul>
            </div>
            <img data-aos="zoom-in" data-aos-duration="1000" src={img1} className="md:w-[30rem] mx-4 w-[90%] m-5 md:m-0" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const broadcast = [
  { txt: "Live Streaming 6 Jam", bold: false },
  { txt: "Monitor zoom operator", bold: false },
  { txt: "Stream Equipments (1 Laptop broadcast, 1 Laptop Pendukung)", bold: false },
  { txt: "2 Stream Operators", bold: false },
  { txt: "Video Bumper", bold: false },
  { txt: "Video Speaker Introduction", bold: false },
  { txt: "Aset Frame Speakers", bold: false },
  { txt: "Virtual Background", bold: false },
  { txt: "Full raw video capture 1080p", bold: false },
];
export default DetailBroadcast;
