import React from "react";
import BlogCard from "../blog/BlogCard";

const News2 = () => {
  return (
    <div className="md:container sectionStyle">
      <div className="w-[92%] mx-auto flex flex-col items-start md:!w-[40%] md:mx-0 space-y-4 md:items-start">
        <p className="text-left md:text-left subtitle">Especialistas</p>
        <h2 className="text-[44px] text-left md:text-[56px] md:text-left title   ">
          {/* <span className="text-[#172B4D] w-full">Conecta con las</span> */}
          <span
            className=""
            style={{
              background: "linear-gradient(to top, #000000, #4C96FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Conecta con las ultimas noticias
          </span>
        </h2>
      </div>
      <div className="hidden gap-16 py-10 mx-auto md:grid md:grid-cols-3 ">
        {Array.from({ length: 3 }).map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>

      <div className="flex gap-3 px-5 py-10 mx-auto overflow-x-auto bg-white snap-x snap-mandatory scroll-pl-6 scrollbar-hide md:hidden">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="shrink-0 w-[90%] snap-center">
            <BlogCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News2;
