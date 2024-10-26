"use client";
import { getPostById } from "@/api/blog";
import BlogCard from "@/components/blog/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/news/NewsCard";
import { Article } from "@/types/news";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Note = ({ params }: { params: { id: number } }) => {
  const [post, setPost] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    if (params.id) {
      const fetchBlog = async () => {
        const blogId = Array.isArray(params.id) ? params.id[0] : params.id;
        const response = await getPostById(blogId);
        if (response && response.data) {
          setPost(response);
        }
        setLoading(false); // Finaliza la carga después de recibir la respuesta
      };
      fetchBlog();
    }
  }, [params.id]);

  return (
    <div className="bg-[E7EFF8] pt-6">
      <Navbar version={"blue"} />

      <div className="mt-10 space-y-4 container lg:!max-w-[60%]  pb-[150px] ">
        {loading ? ( // Muestra un spinner o mensaje de carga
          <div className="flex justify-center items-center h-[400px]">
            <p className="text-lg">Cargando...</p>
            {/* Puedes usar un spinner aquí, por ejemplo: */}
            {/* <div className="spinner"></div> */}
          </div>
        ) : (
          <div className="flex flex-col items-start md:justify-center w-full gap-4 md:mx-auto ">
            <p className="subtitle">Especialistas</p>
            <h2
              className="text-start text-[44px] flex flex-col md:text-[56px] title gap-2 leading-none"
              style={{
                lineHeight: "1.2",
                whiteSpace: "pre-line",
                background:
                  "repeating-linear-gradient(to top, #000000 0, #4C96FF 1.2em)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {post?.attributes?.title}
            </h2>
            <p className="pt-2 md:py-4 text-zinc-800 text-lg">
              {post?.attributes?.description}
            </p>

            {/* Foto */}
            <figure className="relative h-[400px] w-full">
              <Image
                src={`${process.env.NEXT_PUBLIC_RENDER_API_URL}/${post?.attributes?.Image.data[0]?.attributes.url}`}
                alt=""
                fill
                className="object-cover"
              />
            </figure>

            <div>
              <p className="text-pretty leading-relaxed text-lg">
                {/* Contenido del post */}
                {/* {post?.attributes.content}{" "} */}
                {/* Aquí debes incluir el contenido real */}
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Note;
