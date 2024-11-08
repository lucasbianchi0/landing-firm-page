"use client";
import React, { useRef, useState, useEffect } from "react";
import TimelineList from "./TimelineList";
import Image from "next/image";
import TextContent from "../reusable/TextContent";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";
import { motion, useInView, color } from "framer-motion";
import TimelineListDark from "./TimelineListDark";

const StepsNewVersion = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const images = [
    "/pasos/001.png",
    "/pasos/002.png",
    "/pasos/003.png",
    "/pasos/004.png",
    "/pasos/005.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onChangeImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    // }, 3000); // Change image every 3000 milliseconds (3 seconds)
    // return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section className="sectionStyle overflow-hidden">
      <div className="w-full container md:rounded-2xl ">
        <div className="mb-8">
          <TextContent
            title={"Como funciona"}
            subtitle="Especialistas"
            icon={StairsOutlinedIcon}
            position={"left"}
          />
        </div>
        <div className=" overflow-visible flex flex-col-reverse gap-y-8 lg:gap-10 lg:grid lg:grid-cols-12  justify-center lg:justify-between lg:items-start ">
          <div className=" w-full lg:w-full lg:col-span-5 z-10">
            <TimelineListDark
              onChangeImage={onChangeImage}
              highlightedIndex={currentImageIndex}
            />
          </div>


          <div
            className="relative w-full lg:h-full lg:mt-0 lg:!my-auto col-span-7 z-50 overflow-visible"
            ref={ref}
          >
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : 100,
              }}
              transition={{ duration: 0.5 }}
              className="flex h-[18.75rem] w-auto relative sm:h-[40.625rem] lg:w-auto lg:mx-auto bg-transparent z-50 "
            >
              <Image
                style={{
                  filter: "drop-shadow(0px 0.3125rem 0.9375rem rgba(0, 0, 0, 0.35))"
                }}
                src={images[currentImageIndex]}
                alt={`Descripción ${currentImageIndex + 1}`}
                className="w-auto h-full mx-auto bg-transparent"
                width={500}
                height={800}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsNewVersion;
