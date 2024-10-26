import { ArticleAttributes } from "@/types/news";
import Image from "next/image";
import React from "react";

interface BlogCardProps {
  title: string;
  descriptionPreview?: string;
  imageUrl: string;
  tags?: string[];
}

const BlogCard = ({
  title,
  descriptionPreview,
  imageUrl: image,
  tags,
}: BlogCardProps) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  console.log(image);
  return (
    <article className="!m-0 overflow-hidden bg-[#B8B8B8]/10  rounded-2xl shadow-md ">
      <figure className="relative h-[200px] w-auto">
        <Image
          className="object-cover"
          src={`${image}`}
          alt={`${image}`}
          fill
        />
      </figure>

      <div className="p-4 sm:p-6 sm:pt-5.5 sm:pb-5">
        <h3 className="text-lg font-medium text-gray-900 clamp-2-title !leading-tight">
          {title}
        </h3>

        <p className="mt-2 text-gray-500 line-clamp-3 text-sm/relaxed clamp-3 leading-none">
          {descriptionPreview}
        </p>
        <div className="flex flex-wrap gap-2 mt-8">
          <span className="shadow-lg whitespace-nowrap rounded-full bg-[#85B0EE] px-2.5 py-0.5 text-xs text-[#2A5189]">
            Snippet
          </span>

          <span className="shadow-lg whitespace-nowrap rounded-full bg-[#85B0EE] px-2.5 py-0.5 text-xs text-[#2A5189]">
            JavaScript
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
