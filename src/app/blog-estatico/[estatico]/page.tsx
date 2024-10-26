"use client";
import { getPostById } from "@/api/blog";
import BlogCard from "@/components/blog/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import News2 from "@/components/news/News2";
import NewsCard from "@/components/news/NewsCard";
import { noticias } from "@/data/noticias";
import { Article } from "@/types/news";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export interface User {
  userImage: string;
  name: string;
}

export interface Post {
  id: number;
  date: string;
  title: string;
  description: string;
  user: User;
  tags: string[];
  image: string;
  content: string;
}

export interface NoteProps {
  params: {
    estatico: number;
  };
}

const Note = ({ params }: NoteProps) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  const getNoticiaById = (id: number) => {
    return noticias.find((noticia) => noticia.id === id) || null;
  };

  useEffect(() => {
    console.log("hola");
    console.log(params.estatico);
    const fetchPost = async () => {
      const noticiaId = Number(params.estatico);
      const noticia = getNoticiaById(noticiaId);
      console.log(noticia);
      setPost(noticia);
      setLoading(false);
    };

    fetchPost();
  }, [params.estatico]);

  return (
    <div className="bg-[#E7EFF8] pt-6">
      <Navbar version={"blue"} />

      <div className="pt-10 container flex flex-col gap-8 md:!w-[70%] mx-auto pb-[150px] ">
        <div className="flex flex-col gap-2 mt-5">
          <p className=" text-sm text-[#8E8E8E] uppercase">{post?.date}</p>
          <h2 className="text-start text-[44px] flex flex-col md:text-[48px] text-[#172B4D] montserrat font-semibold gap-2 leading-tight ">
            {post?.title}
          </h2>

          <p className="text-xl text-zinc-500">{post?.description}</p>

          <div className="flex gap-4 items-center mt-1">
            <figure className="relative h-[36px] w-[36px] rounded-full ">
              <Image
                src={post?.user.userImage as string}
                alt=""
                fill
                className="rounded-full object-cover"
              />
            </figure>
            <p className="text-[#8E8E8E] uppercase"> por {post?.user.name}</p>
          </div>

          <div className="w-full flex flex-wrap gap-3 mt-6 mb-3">
            {post?.tags.map((tag, index) => (
              <span
                key={index}
                className="uppercase shadow-lg whitespace-nowrap rounded-full bg-[#60A1FE] px-6 py-1.5 text-xs text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            <figure className="relative h-[400px] w-full">
              {post && (
                <Image src={post.image} alt="" fill className="object-cover" />
              )}{" "}
            </figure>

            <div>
              <p className="text-pretty leading-relaxed text-lg">
                {post?.content}
              </p>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Note;
