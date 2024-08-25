import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <section className="h-full w-full pt-10 md:pt-16 gap-5 md:gap-3 bg-[#E4EDF7] min-h-[100vh] rounded-t-[70px] bottomSection">
      <p className="text-center subtitle">Ultimo momento</p>
      <h2
        className=" text-center text-[48px] title"
        style={{
          background: "linear-gradient(to top, #000000, #4C96FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        News destacadas
      </h2>
      <div className="hidden md:flex w-[90%] mx-auto gap-5 justify-center py-10">
        {Array.from({ length: 3 }).map((_, index) => (
          <NewsCard key={index} />
        ))}
      </div>

      <div className="container mx-auto py-10 flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-pl-6 scrollbar-hide md:hidden">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="shrink-0 w-[90%] snap-center">
            <NewsCard />
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
