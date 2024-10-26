import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import BenefitsIndustry from "./BenefitsIndustry";
import Footer from "@/components/Footer";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const IndustryPage = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <Navbar version="light" />
      <section className="container flex flex-col md:flex-row justify-start w-full gap-1 md:gap-10 mt-4 md:mt-10">
        <div className="container flex flex-col items-start md:justify-center md:flex-1 gap-4 md:mx-auto py-4 md:py-0">
          <div className="flex gap-3 items-center">
            <span className="w-auto p-2 bg-blue-200 text-blue-400 rounded-md border-2 border-white">
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
            <p className="subtitle">Especialistas</p>
          </div>
          <h2 className="text-start text-[44px] flex flex-col md:text-[56px] title gap-2">
            <span
              style={{
                background: "linear-gradient(to top, #000000, #4C96FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Fintech
            </span>
            <span className="text-[#172B4D] w-full">
              Lorem, ipsum dolor sit amet consectetur
            </span>
          </h2>
          <p className="pt-2 md:pt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos sed sequi ex assumenda omnis hic quis quam quo culpa
            rerum! Voluptatem tempora id beatae assumenda tempore obcaecati eos
            aspernatur natus minus, non, exercitationem, voluptatum hic.
          </p>
        </div>
        <figure className="relative h-[250px] md:h-[500px] container md:flex-1 lg:max-w-[80%]">
          <Image
            src="/fintech.webp"
            alt=""
            fill
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </figure>
      </section>

      {/* seccion 2 */}
      <div className="py-[100px] md:pt-0 w-full">
        <BenefitsIndustry />
      </div>
      <Footer />
    </div>
  );
};

export default IndustryPage;

// titulo
// descripcion
// imagenHero
// y una lista de objetos de 3 beneficios que debe contener un titulo y una descripcion
// imagenBeneficio
