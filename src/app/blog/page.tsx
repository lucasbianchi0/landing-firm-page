import BlogCard from "@/components/blog/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Blog = () => {
  return (
    <div className="h-full min-h-[100vh] pb-[200px] bg-[#FFFFFF]">
      <Navbar />
      <div className="md:w-[50%] mx-auto mt-20 flex-1 container flex flex-col items-center gap-4">
        <p className="subtitle">Especialistas</p>
        <h2 className="text-[44px] flex md:text-[70px] title gap-2 ">
          <span
            style={{
              background: "linear-gradient(to top, #000000, #4C96FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Accedra
          </span>
          <span className="text-[#172B4D] w-full">Blog </span>
        </h2>
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          veniam sed doloremque minus dolore aliquid temporibus quaerat, quam
          perspiciatis porro itaque eveniet hic natus magnam.
        </p>
      </div>

      <div className="container grid flex-col gap-5 mt-10 space-y-2 sm:grid-cols-2 md:space-y-5 lg:grid-cols-3 xl:grid-cols-4 md:gap-3 ">
        {Array.from({ length: 7 }).map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
