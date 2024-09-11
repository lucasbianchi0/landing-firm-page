import BlogCard from "@/components/blog/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/news/NewsCard";
import Image from "next/image";
import React from "react";

const Note = () => {
  return (
    <div className="bg-[E7EFF8]">
      <Navbar />

      <div className="space-y-4 container pb-[150px] ">
        <div className="flex flex-col items-start md:justify-center w-full gap-4 md:mx-auto ">
          <p className="subtitle">Especialistas</p>
          <h2 className="text-start text-[44px] flex flex-col md:text-[56px] title gap-2">
            <span
              style={{
                background: "linear-gradient(to top, #000000, #4C96FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Fintech
            </span>
            <span className="text-[#172B4D] w-full">
              Lorem, ipsum dolor sit amet consectetur
            </span>
          </h2>
          <p className="pt-2 md:pt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos sed sequi ex assumenda omnis hic quis quam quo culpa
            rerum! Voluptatem tempora id beatae assumenda tempore obcaecati eos
            aspernatur natus minus, non, exercitationem, voluptatum hic.
          </p>
        </div>

        {/* foto */}
        <figure className="container relative h-[400px] w-full">
          <Image src="/fintech.webp" alt="" fill />
        </figure>

        <div>
          <p className="text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            aliquid animi eligendi ipsam doloribus deserunt eveniet harum aut
            quaerat labore, nobis nulla vitae itaque voluptatem quisquam impedit
            corporis enim officiis dolorum sed tempora. Id sequi quia assumenda,
            in pariatur dolores facere sunt nihil nobis, provident voluptatum?
            Quo sit id tenetur a assumenda animi quis ad minima sequi iusto,
            inventore nihil sed impedit optio. Dolorem odit odio necessitatibus
            enim soluta delectus accusamus iure optio placeat omnis, ipsam,
            expedita, autem quis labore at obcaecati asperiores corrupti!
            Ducimus fugit, magnam pariatur quaerat totam soluta fuga voluptas
            dignissimos quam quas dicta deleniti libero architecto a et!
            Consequuntur incidunt ea, vero id laudantium dolor dignissimos
            dolore doloremque molestias nam illo fugit odio, aut ut adipisci
            impedit? Iste illo doloremque dolorum voluptas minima ut
            necessitatibus et voluptatibus aliquid at est illum corrupti
            suscipit, ipsam, quibusdam eius corporis sapiente ea fugit enim
            reiciendis nesciunt, ullam distinctio voluptate. Corporis tenetur
            animi voluptatem pariatur, nobis deserunt voluptate maxime eius odio
            aperiam tempore molestias mollitia libero tempora asperiores aliquid
            voluptas sunt, non alias iusto provident quos voluptatibus
            perferendis iste. Repellendus doloremque quasi obcaecati eligendi
            magni dolorum, minus odio id. Accusantium expedita nihil
            voluptatibus, provident voluptas recusandae consequatur suscipit
            veritatis similique!
          </p>
        </div>

        {/* <div className="hidden md:flex w-[90%] mx-auto gap-5 justify-center py-10">
          {Array.from({ length: 4 }).map((_, index) => (
            <BlogCard key={index} />
          ))}
        </div>

        <div className="bg-white container mx-auto py-10 flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-pl-6 scrollbar-hide md:hidden">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="shrink-0 w-[90%] snap-center">
              <BlogCard />
            </div>
          ))}
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Note;
