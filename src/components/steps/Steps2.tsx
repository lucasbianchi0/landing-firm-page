"use client";
import React from "react";
import Timeline from "./Timeline";
import TimelineList from "./TimelineList";
import Image from "next/image";
import TextContent from "../reusable/TextContent";
import IntegrationInstructionsTwoToneIcon from "@mui/icons-material/IntegrationInstructionsTwoTone";

const Steps2 = () => {
  return (
    <section className="container bg-[#FFFFFF] sectionStyle">
      <div className="w-full ">
        <TextContent
          title={"Paso a paso"}
          subtitle="Especialistas"
          icon={IntegrationInstructionsTwoToneIcon}
          position={"center"}
        />
      </div>

      <div className="flex flex-col gap-10 md:flex-row md:justify-between sectionStyle">
        <div className="relative flex-1 mt-5 md:mt-0">
          <div className="relative h-auto border-8 rounded-xl border-gray-800">
            <Image
              src="/step1.jpg"
              alt="Descripción"
              layout="responsive"
              width={1000}
              height={600}
              className="w-full h-auto rounded-xl"
            />
          </div>
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
