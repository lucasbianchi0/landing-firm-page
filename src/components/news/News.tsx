import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <section className="w-full py-20 gap-3 bg-[#E4EDF7] rounded-t-[70px]  pb-[200px]">
      <p className="text-center text-[hsl(215,76%,73%)] font-bold">
        Ultimo momento
      </p>
      <h2
        className="text-center text-[48px] font-semibold"
        style={{
          background: "linear-gradient(to top, #000000, #4C96FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        News destacadas
      </h2>
      <div className="w-[90%] mx-auto flex gap-3 justify-between py-10">
        {Array.from({ length: 3 }).map((_, index) => (
          <NewsCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default News;
