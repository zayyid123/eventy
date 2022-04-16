import React, { Fragment } from "react";
import "./style.css";
import img1 from "../../assets/paket-hybrid-icon/iconHybridPackage.svg";
import img2 from "../../assets/paket-hybrid-icon/iconHybridPackage2.svg";
import img3 from "../../assets/paket-hybrid-icon/iconHybridPackage3.svg";
const paketHybrid = () => {
  return (
    <Fragment>
      <div className="  bg-detailHybrid w-full items-center flex py-[100px] flex-col bg-customColor-bgWhite">
        <div className=" items-center flex flex-col mb-[60px]">
          <h1 className="title-detail-hybrid text-customColor-biruTua text-[36px]  mb-[30px]">Detail Paket</h1>
          <p className="text-[18px] font-medium text-customColor-biruTua text-center">Untuk mendukung pelaksanaan hybrid event, Evorty menyediakan servis sebagai berikut:</p>
        </div>
        <div className="flex w-full md:items-stretch items-center md:flex-row flex-col justify-center md:items-center">
          <div className="flex flex-col p-[30px] bg-white w-[90%] md:w-72 mx-3 mb-[20px] rounded-xl shadow-lg">
            <div className="flex mb-[20px]">
              <img src={img1} className="h-[36px] mr-[15px]" />
              <span className="text-[18px] font-bold text-customColor-biruTua">Package Exclusive Platform Virtual Event</span>
            </div>
            <ul className=" list-disc ml-[25px]">
              {exclusive.map((data, index) => {
                return (
                  <li key={index} className={`text-customColor-biruTua mb-[15px] ${data.bold ? "font-bold" : ""}`}>
                    {data.txt}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col p-[30px] bg-white w-[90%] md:w-72 mx-3 mb-[20px] rounded-xl shadow-lg">
            <div className="flex mb-[20px]">
              <img src={img2} className="h-[36px] mr-[15px]" />
              <span className="text-[18px] font-bold text-customColor-biruTua">Broadcast Package / day max 6 jam</span>
            </div>
            <ul className=" list-disc ml-[25px]">
              {broadcast.map((data, index) => {
                return (
                  <li key={index} className={`text-customColor-biruTua mb-[15px] ${data.bold ? "font-semibold" : ""}`}>
                    {data.txt}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col p-[30px] bg-white w-[90%] md:w-72 mx-3 mb-[20px] rounded-xl shadow-lg">
            <div className="flex mb-[20px]">
              <img src={img3} className="h-[36px] mr-[15px]" />
              <span className="text-[18px] font-bold text-customColor-biruTua">Package Basic Streaming Equipments/ day</span>
            </div>
            <ul className=" list-disc ml-[25px]">
              {basic.map((data, index) =>
                data.bold ? (
                  <li key={index} className={`text-customColor-biruTua mb-[15px]`}>
                    {data.txt}
                    <span className="font-semibold"> {data.boldText}</span>
                  </li>
                ) : (
                  <li key={index} className={`text-customColor-biruTua mb-[15px]`}>
                    {data.txt}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="w-[240px] mx-auto mt-[40px]">
          <button className="bg-customColor-kuning rounded-xl hover:shadow-xl items-center shadow-lg">
            <h1 className="px-7 py-3 text-center text-customColor-biruTua font-bold text-md">Lihat Penawaran Harga</h1>
          </button>
        </div>
      </div>
    </Fragment>
  );
};
const exclusive = [
  { txt: "Landing Page", bold: false },
  { txt: "Registration & Login", bold: false },
  { txt: "Exhibition (up to 20 booth)", bold: true },
  { txt: "Main Stage", bold: true },
  { txt: "Classroom", bold: true },
  { txt: "Schedules + Speakers + Attachment files", bold: false },
  { txt: "Full Access Backoffice (Dashboard,Report Database, Manage Content, etc", bold: false },
  { txt: "Public & Conversation Chat", bold: false },
  { txt: "Quiz & Polling", bold: false },
  { txt: "Blast Email", bold: false },
  { txt: "Customizable Branding", bold: false },
  { txt: "Accessible in any device", bold: false },
  { txt: "Sponsor Display", bold: false },
  { txt: "Up to 4000 participants", bold: false },
];
const broadcast = [
  { txt: "Monitor zoom operator", bold: false },
  { txt: "Stream Equipments", bold: false },
  { txt: "(1 Laptop broadcast, 1 Laptop Pendukung)", bold: false },
  { txt: "Stream Operator", bold: false },
  { txt: "Video Bumper", bold: false },
  { txt: "Video Speaker Introduction", bold: false },
  { txt: "Virtual Background", bold: false },
  { txt: "Video Slideshow", bold: false },
  { txt: "Opening ceremony animation", bold: false },
  { txt: "Full raw video capture 1080p", bold: false },
];
const basic = [
  { txt: "Kamera", bold: true, boldText: "1 unit" },
  { txt: "Lighting", bold: true, boldText: "3 unit" },
  { txt: "PC/Laptop Broadcast", bold: true, boldText: "1 unit" },
  { txt: "Laptop Pendukung", bold: true, boldText: "2 unit" },
  { txt: "Green Screen", bold: true, boldText: "5m" },
  { txt: "Monitor", bold: true, boldText: "2 unit" },
  { txt: "TV 32’/43’", bold: true, boldText: "1 unit" },
  { txt: "Wireless Video Transmitter", bold: false, boldText: "" },
  { txt: "4Manpower", bold: false, boldText: "" },
];
export default paketHybrid;
