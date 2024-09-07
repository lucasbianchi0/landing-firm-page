import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="hidden relative z-40 -translate-y-[60px] rounded-t-[50px] md:rounded-t-[100px] bg-white">
      <section className="relative -translate-y-[60px] md:-translate-y-[90px] z-20 selection:border border-white h-[200px] md:h-[300px] rounded-2xl overflow-hidden container">
        <figure className="relative w-full h-full overflow-hidden rounded-2xl group">
          <Image
            alt="min-h-screen"
            src="/banner.png"
            loading="eager"
            fill
            className="object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-125"
          />
        </figure>

        <article className="absolute bottom-0 md:top-0 left-0 flex flex-col gap-1 md:gap-3 w-[80%] md:w-[50%] px-4 py-4 md:py-10 md:px-16">
          <h4 className="text-2xl md:text-[40px] font-bold md:font-medium">
            Lorem, ipsum dolor.
          </h4>
          <span className="text-md md:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </span>
          <input
            type="email"
            className="w-full p-3 mt-3 text-sm border-gray-200 shadow-sm md:mt-4 rounded-2xl md:p-4"
            placeholder="Enter email"
          />
        </article>
      </section>
    </div>
  );
};

export default Banner;
