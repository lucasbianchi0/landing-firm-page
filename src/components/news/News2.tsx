"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "../blog/BlogCard";
import axios from "axios";
import { Article, ArticlesResponse } from "@/types/news";
import TextContent from "../reusable/TextContent";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";

const News2 = () => {
  const [news, setNews] = useState<Article[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get<ArticlesResponse>(
        `${process.env.NEXT_PUBLIC_RENDER_API_URL}/api/blogs?sort[0]=createdAt:desc&pagination[page]=1&pagination[pageSize]=3&populate=Image&populate=Tags`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
          },
        }
      );
      console.log(response.data);
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
      <div className="hidden md:flex">
        <TextContent
          title={"Lo ultimo en firma digital"}
          subtitle="Especialistas"
          icon={StairsOutlinedIcon}
          position={"left"}
        />
      </div>

      <div className="hidden gap-16 py-10 mx-auto md:grid md:grid-cols-3 ">
        {news.map((article) => {
          const imageUrl = `${process.env.NEXT_PUBLIC_RENDER_API_URL}${article.attributes.Image.data[0]?.attributes.url}`;

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
