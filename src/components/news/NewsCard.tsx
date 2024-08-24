import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = () => {
  return (
    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow h-[350px] w-full">
      <figure className=" relative w-full h-[350px]">
        <Image src="/new1.png" alt="" fill />
      </figure>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/70 to-transparent"></div>

      <div className="p-5 absolute bottom-0 left-0 text-white">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Link href="/" className="underline text-md">
          Ver mas
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
