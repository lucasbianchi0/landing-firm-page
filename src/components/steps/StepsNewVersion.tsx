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
    "/pasos/iniciar.jpg",
    "/pasos/crear2.jpg",
    "/pasos/datos.jpg",
    "/pasos/firmar.jpg",
    "/pasos/firmar2.jpg",
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
      <div className="w-full container md:rounded-2xl overflow-hidden">
        <div className="mb-8">
          <TextContent
            title={"Como funciona"}
            subtitle="Especialistas"
            icon={StairsOutlinedIcon}
            position={"left"}
          />
        </div>
        <div className="flex flex-col-reverse gap-y-8 lg:gap-10 lg:grid lg:grid-cols-12 lg:justify-between justify-center lg:items-start ">
          <div className="w-full lg:w-full lg:col-span-5">
            <TimelineListDark
              onChangeImage={onChangeImage}
              highlightedIndex={currentImageIndex}
            />
          </div>

          <div
            className="relative lg:h-full lg:mt-0 lg:!my-auto col-span-7"
            ref={ref}
          >
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : 100,
              }}
              transition={{ duration: 0.5 }}
              className="drop-shadow-lg overflow-hidden object-contain h-[300px] w-auto relative lg:h-full md:w-[80%] lg:w-[70%] lg:mx-auto "
            >
              <Image
                src={images[currentImageIndex]}
                alt={`Descripción ${currentImageIndex + 1}`}
                className="w-auto h-auto border-[14px] rounded-[12px] lg:rounded-[24px] !border-gray-600 object-contain"
                // height={500}
                // width={500}
                fill
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsNewVersion;
