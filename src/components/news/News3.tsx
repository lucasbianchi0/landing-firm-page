"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "../blog/BlogCard";
import axios from "axios";
import { Article } from "@/types/news";
import TextContent from "../reusable/TextContent";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";
import { noticias } from "../../data/noticias";
import Link from "next/link";
import BlogCardPlaceholder from "@/app/blog-estatico/BlogCardPlaceholder";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const News3 = () => {
  const [news, setNews] = useState<Article[]>([]);

  const [loading, setLoading] = useState(false);

  const getUltimasNoticias = () => {
    return noticias.slice(-3).reverse();
  };

  // useEffect(() => {
  //   console.log("hola");
  //   const fetchPost = async () => {
  //     const noticias = getUltimasNoticias();
  //     console.log(noticias);
  //     setNews(noticias);
  //     setLoading(false);
  //   };

  //   fetchPost();
  // }, []);

  return (
    <div className="md:container sectionStyle">
      <div className=" flex w-[90%] sm:w-full mx-auto justify-between items-end">
        <TextContent
          title={"Lo último en firma digital"}
          subtitle="Descubre más"
          icon={StairsOutlinedIcon}
          position={"left"}
        />
        <Link href="/blog-estatico" className="hidden lg:flex">
          <p className="text-blue-500 font-semibold underline flex w-full">
            Ver todo el blog <TrendingFlatIcon />
          </p>
        </Link>
      </div>

      {loading ? (
        <div>
          <div className="hidden gap-y-5 gap-8 py-10 mx-auto md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {Array.from({ length: 3 }).map((_, index) => (
              <BlogCardPlaceholder key={index} />
            ))}
          </div>
          <div className="flex gap-3 px-5 py-10 mx-auto overflow-x-auto bg-white snap-x snap-mandatory scroll-pl-6 scrollbar-hide md:hidden">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="shrink-0 w-[90%] snap-center">
                <BlogCardPlaceholder />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="hidden gap-5 py-10 mx-auto md:grid md:grid-cols-3 ">
            {noticias.slice(-3).map((article) => {
              return (
                <Link key={article.id} href={`/blog-estatico/${article.id}`}>
                  <BlogCard
                    title={article.title}
                    descriptionPreview={article.descriptionPreview}
                    imageUrl={article.image}
                  />
                </Link>
              );
            })}
          </div>
          <div className="flex gap-3 px-5 py-10 mx-auto overflow-x-auto snap-x snap-mandatory scroll-pl-6 scrollbar-hide md:hidden">
            {noticias.map((article) => {
              return (
                <Link
                  href={`/blog-estatico/${article.id}`}
                  key={article.id}
                  className="shrink-0 w-[90%] snap-center"
                >
                  <BlogCard
                    title={article.title}
                    descriptionPreview={article.descriptionPreview}
                    imageUrl={article.image}
                  />
                </Link>
              );
            })}
          </div>

          <Link href="/blog-estatico" className=" lg:hidden">
            <p className="w-full text-gray-700 font-semibold lg:hidden text-center underline">
              Ver todo el blog <TrendingFlatIcon />
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default News3;
