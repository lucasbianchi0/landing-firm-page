import React from "react";

const BlogCard = () => {
  return (
    <article className="!m-0 overflow-hidden bg-[#B8B8B8]/10  border-2 border-white rounded-lg shadow-md ">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="object-cover w-full h-56"
      />
      {/* <figure className="relative w-full h-56 ">
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="object-cover "
          fill
        />
      </figure> */}

      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="text-lg font-medium text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </a>

        <p className="mt-2 text-gray-500 line-clamp-3 text-sm/relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
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
