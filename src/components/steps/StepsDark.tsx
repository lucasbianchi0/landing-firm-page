"use client";
import React, { useRef, useState, useEffect } from "react";
import TimelineList from "./TimelineList";
import Image from "next/image";
import TextContent from "../reusable/TextContent";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";
import { motion, useInView, color } from "framer-motion";
import TimelineListDark from "./TimelineListDark";

const StepsDark = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const images = [
    // "/pasos/iniciar.png",
    "/pasos/05.png",
    "/pasos/crear2.png",
    "/pasos/datos.png",
    "/pasos/firmar.png",
    "/pasos/firmar2.png",
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
    <section className="py-0 md:sectionStyle overflow-hidden">
      <div className="w-full lg:container bg-[#25262B] md:rounded-2xl overflow-hidden">
        <div className="container lg:!w-[92%] py-10">
          <div className="md:hidden mb-8 ">
            <TextContent
              title={"Como funciona"}
              subtitle="Especialistas"
              icon={StairsOutlinedIcon}
              position={"left"}
              color={"white"}
            />
          </div>
          <div className="flex flex-col-reverse gap-2 lg:gap-10 lg:grid lg:grid-cols-2 lg:justify-between justify-center ">
            <div className="w-full lg:w-full">
              <div className="hidden lg:flex">
                <TextContent
                  title={"Como funciona"}
                  subtitle="Es simple"
                  icon={StairsOutlinedIcon}
                  position={"left"}
                  color={"white"}
                />
              </div>
              {/* Pass currentImageIndex as a prop to TimelineList */}
              {/* <TimelineList highlightedIndex={currentImageIndex} /> */}
              <TimelineListDark
                onChangeImage={onChangeImage}
                highlightedIndex={currentImageIndex}
              />
            </div>

            <div
              className="relative flex-1 sm:w-[70%] mx-auto h-full lg:mt-0 lg:!my-auto"
              ref={ref}
            >
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}
                className="drop-shadow-lg overflow-hidden w-auto relative h-[300px] sm:h-[400px] lg:h-full sm:w-auto"
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={`Descripción ${currentImageIndex + 1}`}
                  className="w-full h-auto"
                  fill
                />
              </motion.div>
            </div>
            {/* <div className="relative md:flex-1 md:mt-0 lg:!my-auto" ref={ref}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}
                className="drop-shadow-lg overflow-hidden w-auto relative md:w-[170%] h-auto aspect-[16/9] border-[6px] rounded-[12px] md:rounded-[24px] !border-gray-600"
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={`Descripción ${currentImageIndex + 1}`}
                  className="w-full md:h-auto md:object-contain lg:-translate-x-1"
                  fill
                />
              </motion.div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsDark;
