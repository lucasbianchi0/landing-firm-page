"use client";
import React, { useRef, useState, useEffect } from "react";
import TimelineList1 from "./Timelist1";
import Image from "next/image";
import TextContent from "../reusable/TextContent";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";
import { motion, useInView } from "framer-motion";

const Steps5 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const images = [
    "/AccedraProceso.jpg",
    "/AccedraProceso02.jpg",
    "/AccedraProceso03.jpg",
    "/AccedraProceso04.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section className="bg-[#aebef1] sectionStyle overflow-hidden">
      <div className="container bg-white p-2 rounded-2xl  !py-10">
        <div className="md:hidden mb-8">
          <TextContent
            title={"Como funciona"}
            subtitle="Especialistas"
            icon={StairsOutlinedIcon}
            position={"left"}
          />
        </div>
        <div className="flex flex-col-reverse gap-2 md:gap-10 md:flex-row md:justify-between justify-center ">
          <div className="w-full md:w-[40%]">
            <div className="hidden md:flex">
              <TextContent
                title={"Como funciona"}
                subtitle="Especialistas"
                description={
                  "La firma biométrica ofrece una serie de beneficios clave que la han convertido en una opción."
                }
                icon={StairsOutlinedIcon}
                position={"left"}
              />
            </div>
            <TimelineList1 />
          </div>

          {/* Solución de contenedor */}
          <div
            className="relative md:flex-1 md:mt-0 overflow-visible"
            ref={ref}
          >
            <div className="relative flex rounded-2xl p-5 bg-red-300 overflow-visible">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}
                className="drop-shadow-lg overflow-hidden relative w-full md:w-[170%] h-auto aspect-[16/9] border-4 rounded-[12px] md:rounded-[24px] !border-[#1f2937]"
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={`Descripción ${currentImageIndex + 1}`}
                  className="w-full h-auto object-cover"
                  fill
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps5;
