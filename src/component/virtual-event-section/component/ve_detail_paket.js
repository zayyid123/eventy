import React from "react";

// icon
import iconchecked from "../../../assets/icon-virtual-event/icon_checked.png";
import iconfalse from "../../../assets/icon-virtual-event/icon_false.png";
import VirtualEventComDetail from "./com_detail_ve";

const IconChecked = () => {
  return <img className="w-[15px] mx-auto" src={iconchecked} alt="icon checked" />;
};

const IconFalse = () => {
  return <img className="w-[15px] mx-auto" src={iconfalse} alt="icon false" />;
};

const VirtualEventDetailPaket = () => {
  const [btn, setbtn] = React.useState("Eksklusif");

  const style = {
    btnActive: "text-[16px] px-4 py-[5px] bg-customColor-kuning font-bold rounded-lg m-1 shadow-xl",
    btnNoActive: "text-[16px] px-4 py-[5px] text-gray-500 rounded-lg ",
  };
  const detailData = [
    {
      name: "Landing Page",
      eksklusif: true,
      platinum: true,
      premium: true,
      standard: true,
      basic: true,
    },
    {
      name: "Registration & Login",
      eksklusif: true,
      platinum: true,
      premium: true,
      standard: true,
      basic: true,
    },
    {
      name: "Exhibition (up to 20 booth)",
      eksklusif: true,
      platinum: true,
      premium: false,
      standard: "Up to 30 Booth",
      basic: false,
    },
    {
      name: "Main Stage",
      eksklusif: true,
      platinum: "*Optional",
      premium: true,
      standard: false,
      basic: "*Optional",
    },
    {
      name: "Classroom",
      eksklusif: true,
      platinum: "*Optional",
      premium: true,
      standard: false,
      basic: "*Optional",
    },
    {
      name: "Schedules + Speakers",
      eksklusif: true,
      platinum: true,
      premium: true,
      standard: false,
      basic: false,
    },
    {
      name: "Attachment files",
      eksklusif: true,
      platinum: true,
      premium: true,
      standard: true,
      basic: true,
    },
    {
      name: "Full Access Backoffice",
      eksklusif: true,
      platinum: true,
      premium: true,
      standard: true,
      basic: true,
    },
    {
      name: "Public & Conversation Chat",
      eksklusif: true,
      platinum: true,
      premium: true,
      standard: true,
      basic: true,
    },
    {
      name: "Quiz & Polling",
      eksklusif: true,
      platinum: true,
      premium: true,
      standard: false,
      basic: true,
    },
    {
      name: "Blast Email",
      eksklusif: true,
      platinum: true,
      premium: true,
      standard: true,
      basic: true,
    },
    {
      name: "Customizable Branding",
      eksklusif: true,
      platinum: true,
      premium: true,
      standard: true,
      basic: true,
    },
    {
      name: "Accessible in any device",
      eksklusif: true,
      platinum: true,
      premium: true,
      standard: true,
      basic: true,
    },
    {
      name: "Sponsor Display",
      eksklusif: true,
      platinum: true,
      premium: true,
      standard: true,
      basic: true,
    },
    {
      name: "Up to 4000 participants",
      eksklusif: true,
      platinum: true,
      premium: true,
      standard: true,
      basic: true,
    },
  ];

  return (
    <div id="detail-paket-virtual" className="bg-detail-ve bg-white text-customColor-biruTua">
      <div className="max-w-5xl mx-5 lg:mx-auto">
        <VirtualEventComDetail />
        <br />
        <div data-aos="fade-up" data-aos-duration="1000" className="text-center max-w-[700px] mx-auto">
          <h1 className="ve-home-title mt-[50px] mb-[30px] font-bold leading-none text-[2.2rem]">Detail Paket</h1>
          <h5 className="mb-[50px] font-normal leading-normal text-[1.1rem]">Pilihan - pilihan menu dan fitur pada platform Evorty yang bisa Anda pilih sesuai kebutuhan dan rencana event Anda</h5>
        </div>
        <div className="max-w-[1100px] mx-auto">
          <table data-aos="zoom-in" data-aos-duration="1000" className="hidden lg:block m-[-4px] myTable rounded-bl-lg rounded-br-lg">
            <thead>
              <tr className="text-white">
                <th className="px-[110px] py-5 bg-customColor-biru rounded-tl-lg">Servis</th>
                <th className="px-11 py-5 bg-[#F4B14A]">Eksklusif</th>
                <th className="px-11 py-5 bg-customColor-biru">Platinum</th>
                <th className="px-11 py-5 bg-[#2f98d6]">Premium</th>
                <th className="px-11 py-5 bg-customColor-biru">Standard</th>
                <th className="px-11 py-5 bg-[#2f98d6] rounded-tr-lg">Basic</th>
              </tr>
            </thead>
            <tbody>
              {detailData.map((item, index) => (
                <tr key={index + item.name}>
                  <td className="p-8 text-[.9rem] " style={index === 2 || index === 3 || index === 4 ? { fontWeight: "600" } : {}}>
                    {item.name}
                  </td>
                  <td className="text-center bg-[#F6F1D0]">{item.eksklusif ? <IconChecked /> : <IconFalse />}</td>
                  <td className="text-center font-semibold">{item.platinum === "*Optional" ? item.platinum : item.platinum ? <IconChecked /> : <IconFalse />}</td>
                  <td className="text-center bg-[#CDEDFE]">{item.premium ? <IconChecked /> : <IconFalse />}</td>
                  <td className="text-center font-semibold">{item.standard === "Up to 30 Booth" ? item.standard : item.standard ? <IconChecked /> : <IconFalse />}</td>
                  <td className="text-center font-semibold bg-[#CDEDFE]">{item.basic === "*Optional" ? item.basic : item.basic ? <IconChecked /> : <IconFalse />}</td>
                </tr>
              ))}
              <tr>
                <td className="p-5"></td>
              </tr>
            </tbody>
          </table>

          {/* mobile */}
          <div data-aos="fade-up" data-aos-duration="1000" className="lg:hidden flex justify-center flex-wrap">
            <button
              className={`${btn === "Eksklusif" ? style.btnActive : style.btnNoActive}`}
              onClick={() => {
                setbtn("Eksklusif");
              }}
            >
              Eksklusif
            </button>
            <button
              className={`${btn === "Platinum" ? style.btnActive : style.btnNoActive}`}
              onClick={() => {
                setbtn("Platinum");
              }}
            >
              Platinum
            </button>
            <button
              className={`${btn === "Premium" ? style.btnActive : style.btnNoActive}`}
              onClick={() => {
                setbtn("Premium");
              }}
            >
              Premium
            </button>
            <button
              className={`${btn === "Standard" ? style.btnActive : style.btnNoActive}`}
              onClick={() => {
                setbtn("Standard");
              }}
            >
              Standard
            </button>
            <button
              className={`${btn === "Basic" ? style.btnActive : style.btnNoActive}`}
              onClick={() => {
                setbtn("Basic");
              }}
            >
              Basic
            </button>
          </div>

          <br />

          <div className="lg:hidden flex justify-center">
            <table data-aos="zoom-in" data-aos-duration="1000" className="myTable w-[90%]">
              <thead>
                <tr className="text-white">
                  <td className="text-center py-5 bg-customColor-biru rounded-tl-lg">Servis</td>
                  <td
                    className=" py-5 text-center w-[30%] rounded-tr-lg"
                    style={btn === "Eksklusif" ? { backgroundColor: "#F4B14A" } : btn === "Platinum" || btn === "Standard" ? { backgroundColor: "#28b7fb" } : btn === "Premium" || btn === "Basic" ? { backgroundColor: "#2f98d6" } : {}}
                  >
                    {btn}
                  </td>
                </tr>
              </thead>
              <tbody>
                {detailData.map((item, index) => (
                  <tr key={index + "mobiletable"}>
                    <td className="p-8 text-[.9rem] " style={index === 2 || index === 3 || index === 4 ? { fontWeight: "600" } : {}}>
                      {item.name}
                    </td>
                    <td className="text-center" style={btn === "Eksklusif" ? { backgroundColor: "#F6F1D0" } : btn === "Premium" || btn === "Basic" ? { backgroundColor: "#CDEDFE" } : {}}>
                      {btn === "Eksklusif" ? (
                        item.eksklusif ? (
                          <IconChecked />
                        ) : (
                          <IconFalse />
                        )
                      ) : btn === "Platinum" ? (
                        item.platinum === "*Optional" ? (
                          item.platinum
                        ) : item.platinum ? (
                          <IconChecked />
                        ) : (
                          <IconFalse />
                        )
                      ) : btn === "Premium" ? (
                        item.platinum ? (
                          <IconChecked />
                        ) : (
                          <IconFalse />
                        )
                      ) : btn === "Standard" ? (
                        item.standard === "Up to 30 Booth" ? (
                          item.standard
                        ) : item.standard ? (
                          <IconChecked />
                        ) : (
                          <IconFalse />
                        )
                      ) : btn === "Basic" ? (
                        item.basic === "*Optional" ? (
                          item.basic
                        ) : item.basic ? (
                          <IconChecked />
                        ) : (
                          <IconFalse />
                        )
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <br />
          <div data-aos="zoom-in" data-aos-duration="1000" className="w-[90%] lg:w-[100%] mx-auto text-center">
            <h1 className="shadow-[2px 18px 54px -6px rgb(191 219 255 / 50%)] py-3 bg-[#cb3838] text-white rounded-[10px]">Opsional pada masing-masing package hanya bisa pilih salah satu Servis saja</h1>
          </div>

          <br />
          <br />
          <br />
          <div data-aos="fade-up" data-aos-duration="1000" className="w-[240px] mx-auto">
            <a href="https://wa.me/+6285811326661" className="bg-customColor-kuning rounded-xl hover:shadow-xl items-center">
              <h1 className="bg-customColor-kuning rounded-xl hover:shadow-xl px-7 py-3 text-center text-customColor-biruTua font-bold text-md">Lihat Penawaran Harga</h1>
            </a>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default VirtualEventDetailPaket;
