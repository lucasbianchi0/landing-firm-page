"use client";
import { getBlogData } from "@/api/blog";
import BlogCard from "@/components/blog/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { noticias } from "@/data/noticias";
import { Article } from "@/types/news";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BlogCardPlaceholder from "./BlogCardPlaceholder";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const Blog = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  // const fetchData = async () => {
  //   try {
  //     const response = await getBlogData();
  //     if (response && response.data) {
  //       console.log(response.data);
  //       setNews(response.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="h-full min-h-[100vh] bg-[#E8EFF8] pt-6">
      <Navbar version={"blue"} />
      <div className="container">
        {noticias.length > 0 && (
          <div className="flex flex-col lg:flex-row bg-blue gap-2 lg:gap-10 mt-10 sm:md-20 ">
            <figure className="relative h-[250px] lg:h-[400px] w-full lg:w-[50%] rounded-lg">
              <Image
                src={noticias[noticias.length - 1].image}
                alt=""
                fill
                className="object-cover rounded-xl"
              />
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 absolute top-4 left-4 rounded-full shadow-lg">
                <p className="py-3 px-5 font-bold text-white flex gap-1 items-center italic shadow-effect hover:text-blue-300">
                  New
                  <ErrorOutlineIcon className="shadow-effect shadow-lg transform transition-transform duration-200 hover:scale-110 hover:text-blue-300" />
                </p>
              </div>
            </figure>

            <div className="relative flex-1 flex flex-col gap-3 pb-5 sm:py-4 ">
              <h3 className="inline-flex text-xl sm:text-[30px]  lg:text-[40px] font-semibold text-gray-900 !leading-tight clamp-3-title">
                {noticias[noticias.length - 1].title}
              </h3>

              <p className="text-xl text-[#2C2C2C] hidden lg:!inline-flex">
                {noticias[noticias.length - 1].description}
              </p>
              <div className="flex gap-3 items-center mt-1">
                <figure className="relative h-[24px] w-[24px] rounded-full">
                  <Image
                    src={noticias[noticias.length - 1].user.userImage}
                    alt=""
                    fill
                    className="rounded-full object-cover"
                  />
                </figure>
                <p className="text-sm sm:text-base lg:text-sm sm:flex text-[#8E8E8E] capitalize">
                  Juan Carlos / 03 de octubre 2024
                  {/* {noticias[noticias.length - 1].date}{" "} */}
                </p>
              </div>

              <p className="mt-7 hidden lg:inline-flex items-center gap-1 text-lg font-medium text-blue-600 group">
                Ver mas
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </p>
            </div>
          </div>
        )}

        <h2 className="font-semibold text-xl mt-10 sm:mt-20 sm:text-[34px] montserrat">
          Otros articulos
        </h2>

        {/* {loading ? (
          <div className="gap-y-5 gap-5 py-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <BlogCardPlaceholder key={index} />
            ))}
          </div>
        ) : ( */}

        <div className="sm:gap-8 gap-y-6 sm:gap-y-8 py-4 hidden  sm:py-10 mx-auto sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {noticias
            .slice(0, -1)
            .reverse()
            .map((article, index) => (
              <Link key={index} href={`/blog-estatico/${article.id}`}>
                <BlogCard
                  title={article.title}
                  descriptionPreview={article.descriptionPreview}
                  imageUrl={article.image}
                />
              </Link>
            ))}
        </div>

        {/* mobile */}
        <div className=" mt-6 flex flex-col gap-y-4 sm:hidden">
          {noticias
            .slice(0, -1)
            .reverse()
            .map((article, index) => (
              <Link key={index} href={`/blog-estatico/${article.id}`}>
                <div className="flex gap-5 w-full border-b-2 border-b-zinc-300 pb-4">
                  <figure className="relative aspect-[16/9] w-[40%] ">
                    <Image
                      className="rounded-lg"
                      src={`${article.image}`}
                      alt={`${article.image}`}
                      fill
                    />
                  </figure>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium clamp-3-title leading-tight">
                      {article.title}
                    </h3>
                    <div className="flex gap-3 items-center mt-2">
                      <figure className="relative h-[20px] w-[20px] rounded-full">
                        <Image
                          src={noticias[noticias.length - 1].user.userImage}
                          alt=""
                          fill
                          className="rounded-full object-cover"
                        />
                      </figure>
                      <p className="text-sm sm:flex text-[#8E8E8E] capitalize">
                        03 de octubre 2024
                        {/* {noticias[noticias.length - 1].date}{" "} */}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        {/* )} */}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
