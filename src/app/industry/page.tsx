import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import BenefitsIndustry from "./BenefitsIndustry";
import Footer from "@/components/Footer";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import BookACall from "@/components/reusable/BookACall";

const IndustryPage = () => {
  return (
    <div className="bg-[#F9F9F9] pt-6">
      <Navbar version={"blue"} />
      <section className="container flex flex-col justify-start w-full mt-4 lg:flex-row gap-y-8 md:gap-10 md:mt-10">
        <div className="container flex flex-col items-start gap-4 py-4 md:justify-center md:flex-1 md:mx-auto md:py-0">
          <div className="flex items-center gap-3">
            <span className="w-auto p-2 text-blue-400 bg-blue-200 border-2 border-white rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
            </span>
            <p className="subtitle">Fintech</p>
          </div>
          <h2
            className="text-start text-[44px] flex flex-col md:text-[56px] title gap-2"
            style={{
              lineHeight: "1.2",
              whiteSpace: "pre-line",
              background:
                "repeating-linear-gradient(to top, #000000 0, #4C96FF 1.2em)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Firma Biométrica para Fintech Segura y Rápida
          </h2>
          <p className="pt-2">
            Simplifica la autenticación y asegura transacciones en segundos con
            nuestra solución de firma biométrica, diseñada para el sector
            Fintech. Protege a tus usuarios y agiliza procesos sin comprometer
            la seguridad.
          </p>
          <button className="flex items-center gap-1 px-5 py-3 text-white rounded-full bg-gradient-to-r from-blue-600 to-blue-800 ">
            Hablar con especialista
            <PersonAddAltIcon className="w-4 h-4" />
          </button>
        </div>
        <figure className="relative  h-[250px] md:h-[500px] container md:flex-1 lg:max-w-[80%] ">
          <Image
            className="rounded-[40px]"
            src="/fintech.webp"
            alt=""
            fill
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </figure>
      </section>

      {/* seccion 2 */}
      <div className="w-full sectionStyle">
        <BenefitsIndustry />
      </div>
      <BookACall />

      <Footer />
    </div>
  );
};

export default IndustryPage;
