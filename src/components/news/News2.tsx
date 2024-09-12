"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "../blog/BlogCard";
import axios from "axios";
import { Article, ArticlesResponse } from "@/types/news";

const News2 = () => {
  const [news, setNews] = useState<Article[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get<ArticlesResponse>(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?sort[0]=createdAt:desc&pagination[page]=1&pagination[pageSize]=3&populate=Image`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
          },
        }
      );
      setNews(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        {news.map((article) => {
          const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.attributes.Image.data[0]?.attributes.url}`;

          return (
            <BlogCard
              key={article.id}
              title={article.attributes.title}
              descriptionPreview={article.attributes.descriptionPreview}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>

      <div className="flex gap-3 px-5 py-10 mx-auto overflow-x-auto bg-white snap-x snap-mandatory scroll-pl-6 scrollbar-hide md:hidden">
        {news.map((article) => {
          const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.attributes.Image.data[0]?.attributes.url}`;
          return (
            <div key={article.id} className="shrink-0 w-[90%] snap-center">
              <BlogCard
                title={article.attributes.title}
                descriptionPreview={article.attributes.descriptionPreview}
                imageUrl={imageUrl}
              />
            </div>
          );
        })}
      </div>

      {/* <div className="flex gap-3 px-5 py-10 mx-auto overflow-x-auto bg-white snap-x snap-mandatory scroll-pl-6 scrollbar-hide md:hidden">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="shrink-0 w-[90%] snap-center">
            <p>sape</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default News2;

{
  /* <div className="hidden gap-16 py-10 mx-auto md:grid md:grid-cols-3 ">
        {Array.from({ length: 3 }).map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div> */
}
