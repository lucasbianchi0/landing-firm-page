import React from "react";
import IndustryItem from "./IndustryItem";
import Button from "../Button";
import AccountBalanceTwoToneIcon from "@mui/icons-material/AccountBalanceTwoTone";
import PaymentTwoToneIcon from "@mui/icons-material/PaymentTwoTone";
import HealthAndSafetyTwoToneIcon from "@mui/icons-material/HealthAndSafetyTwoTone";
import LocalHospitalTwoToneIcon from "@mui/icons-material/LocalHospitalTwoTone";
import WifiTwoToneIcon from "@mui/icons-material/WifiTwoTone";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DirectionsCarFilledTwoToneIcon from "@mui/icons-material/DirectionsCarFilledTwoTone";
import MedicalServicesTwoToneIcon from "@mui/icons-material/MedicalServicesTwoTone";
import StoreTwoToneIcon from "@mui/icons-material/StoreTwoTone";

const Industries2 = () => {
  const industries = [
    {
      title: "Logística",
      icon: LocalShippingTwoToneIcon,
      color: "#A3C6FF",
      hoverClass: "industry-item-hover-blue-soft",
    },
    {
      title: "Retail",
      icon: StoreTwoToneIcon,
      color: "#FFD1A3",
      hoverClass: "industry-item-hover-orange-soft",
    },
    {
      title: "Educación",
      icon: EditTwoToneIcon,
      color: "#A3FFD1",
      hoverClass: "industry-item-hover-green-soft",
    },
    {
      title: "Automotriz",
      icon: DirectionsCarFilledTwoToneIcon,
      color: "#FFC6A3",
      hoverClass: "industry-item-hover-pink-soft",
    },
    {
      title: "Farmacéutica",
      icon: MedicalServicesTwoToneIcon,
      color: "#D1A3FF",
      hoverClass: "industry-item-hover-purple-soft",
    },
    {
      title: "Banca",
      icon: AccountBalanceTwoToneIcon,
      color: "#FFD1D1",
      hoverClass: "industry-item-hover-pale-pink",
    },
    {
      title: "Fintech",
      icon: PaymentTwoToneIcon,
      color: "#A3D1FF",
      hoverClass: "industry-item-hover-light-blue",
    },
    {
      title: "Seguros",
      icon: HealthAndSafetyTwoToneIcon,
      color: "#FFE6A3",
      hoverClass: "industry-item-hover-yellow-soft",
    },

    {
      title: "Telecomunicaciones",
      icon: WifiTwoToneIcon,
      color: "#A3FFE6",
      hoverClass: "industry-item-hover-teal",
    },
  ];

  return (
    <section className="py-10 relative z-50 bg-[#1D293B] overflow-hidden ">
      {/* <div className="absolute inset-0 bg-black/60 " style={{ zIndex: -5 }} />
      <video
        className="absolute top-0 left-0 object-cover w-full h-full -z-10"
        autoPlay
        loop
        muted
        playsinline
        preload="auto"
        style={{
          animation: "slowVideo 60s linear infinite",
          WebkitAnimation: "slowVideo 60s linear infinite",
        }}
      >
        <source src="/background.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video> */}
      {/* <div className=" absolute gradient bottom-0 right-40 h-[450px] rounded-full w-[400px] blur-[7rem] z-1"></div> */}

      <div className="container flex flex-col-reverse gap-2 md:flex-row md:justify-between">
        <div className="grid flex-1 grid-cols-2 gap-6 mt-10 md:mt-0 md:grid-cols-3 md:p-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex items-center h-full p-4 transition border-none shadow-lg bg-zinc-900 rounded-xl hover:shadow-xl hover:border-blue-700/20 hover:shadow-blue-700/20"
              //   style={{ border: `2px solid ${industry.color}` }}
            >
              <IndustryItem
                title={industry.title}
                icon={industry.icon}
                color={industry.color}
                delay={index * 0.2}
              />
            </div>
          ))}
        </div>
        <div className="z-10 flex flex-col flex-1 space-y-4 md:items-end">
          <p className="md:text-right subtitle">Especialistas</p>
          <h2 className="text-[42px] md:text-[60px] title md:text-right">
            <span className="text-white">Especialistas</span>

            <br />
            <span className="text-white">en estas</span>
            <br />
            <span
              className="text-white"
              //   style={{
              //     background: "linear-gradient(to top, #000000, #4C96FF)",
              //     WebkitBackgroundClip: "text",
              //     WebkitTextFillColor: "transparent",
              //   }}
            >
              industrias
            </span>
          </h2>

          <p className="!text-white md:text-right text-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            veniam sed doloremque minus dolore aliquid temporibus quaerat, quam
            perspiciatis porro itaque eveniet hic natus magnam.
          </p>
          {/* <div className="pt-2">
            <Button
              backgroundColor={"#2A5189"}
              textColor={"white"}
              content={"Hablar con especialista"}
              borderColor="#2A5189"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Industries2;
