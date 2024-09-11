import { ArticleAttributes } from "@/types/news";
import Image from "next/image";
import React from "react";

const BlogCard = ({
  title,
  descriptionPreview,
  Image: image,
}: ArticleAttributes) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const imageUrl = `${baseUrl}${image.data[0]?.attributes?.url}`;
  const imageAlt = image?.data[0]?.attributes?.alternativeText || "Image";

  console.log(imageUrl);

  return (
    <article className="!m-0 overflow-hidden bg-[#B8B8B8]/10  border-2 border-white rounded-2xl shadow-md ">
      {/* <figure className="relative h-[250px] w-auto">
        <Image className="object-cover" src={imageUrl} alt={imageAlt} fill />
      </figure> */}

      <div className="p-4 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>

        <p className="mt-2 text-gray-500 line-clamp-3 text-sm/relaxed">
          {descriptionPreview}
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-blue-600 group"
        >
          Find out more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </a>
        <div className="flex flex-wrap gap-2 mt-4">
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
