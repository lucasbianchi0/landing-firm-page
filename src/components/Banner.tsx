import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative z-40 -translate-y-[60px] rounded-t-[100px] bg-white">
      <section className="relative -translate-y-[90px] z-20 selection:border border-white h-[300px] mx-auto w-[90%] rounded-2xl overflow-hidden">
        <figure className="relative w-full h-full rounded-2xl overflow-hidden group bg-red-300">
          <Image
            alt="min-h-screen"
            src="/banner.png"
            loading="eager"
            fill
            className="object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-125"
            style={{
              objectFit: "cover",
            }}
          />
        </figure>

        <article className="absolute top-0 left-0 flex flex-col gap-4 w-[50%] py-10 px-16">
          <h4 className="text-[40px] font-medium">Lorem, ipsum dolor.</h4>
          <span className="text-[18px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </span>
          <input
            type="email"
            className="w-full rounded-2xl border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
          />
        </article>
      </section>
    </div>
  );
};

export default Banner;
