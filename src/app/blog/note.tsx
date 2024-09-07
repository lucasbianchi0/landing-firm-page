import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const NewBlogPage = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />
      <section>
        <div className="md:w-[50%] mx-auto mt-20 flex-1 container flex flex-col items-center gap-4">
          <p className="subtitle">Especialistas</p>
          <h2 className="text-[44px] flex md:text-[70px] title gap-2 ">
            <span
              style={{
                background: "linear-gradient(to top, #000000, #4C96FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Accedra
            </span>
            <span className="text-[#172B4D] w-full">Blog </span>
          </h2>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            veniam sed doloremque minus dolore aliquid temporibus quaerat, quam
            perspiciatis porro itaque eveniet hic natus magnam.
          </p>
        </div>
        <figure className="relative w-full h-full ">
          <Image src="/fintech.webp" alt="" fill />
        </figure>
      </section>
    </div>
  );
};

export default NewBlogPage;
