"use client";
import React from "react";
import Timeline from "./Timeline";
import TimelineList from "./TimelineList";
import Image from "next/image";

const Steps2 = () => {
  return (
    <section className="container bg-[#FFFFFF] sectionStyle">
      <div className="w-full md:w-[60%]">
        <div className="flex items-center gap-3">
          <Image src="/tituloPasos.png" alt="tit" height={60} width={60} />
          <p className="text-left text-[hsl(215,76%,73%)] font-bold ">
            Lorem ipsum
          </p>
        </div>

        <h2
          className="text-left text-[48px] font-semibold"
          style={{
            background: "linear-gradient(to top, #000000, #4C96FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Beneficios Lorem, ipsum.
        </h2>
      </div>

      <div className="flex flex-col gap-10 md:py-10 md:flex-row md:justify-between">
        <div className="flex-1">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-xl h-[172px] max-w-[301px] md:h-[394px] md:max-w-[612px]">
            <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png"
                className="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png"
                className="hidden dark:block h-[140px] md:h-[462px] w-full rounded-xl"
                alt=""
              />
            </div>
          </div>
          {/* <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div> */}
          {/* <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div> */}
        </div>
        <TimelineList />
      </div>
    </section>
  );
};

export default Steps2;

{
  /* <figure className="relative h-[500px] w-full rounded-xl"> */
}
{
  /* <Image src="/firmaex.jpg" fill alt="" className="object-cover" /> */
}
{
  /* <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[582px] md:max-w-[512px]">
            <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[554px] bg-white dark:bg-gray-800">
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[582px] md:max-w-[512px]">
                <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[554px] bg-white dark:bg-gray-800">
                  <img
                    src="/firmaex.jpg"
                    className="object-cover h-full"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>
          </div> */
}

{
  /* </figure> */
}
