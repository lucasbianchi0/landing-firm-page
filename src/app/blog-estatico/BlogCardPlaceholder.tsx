import React from "react";

const BlogCardPlaceholder = () => {
  return (
    <div
      role="status"
      className="p-4 border border-gray-200 animate-pulse md:p-6 rounded-2xl shadow-md "
    >
      <div className="flex items-center justify-center h-[200px] mb-4 bg-gray-200 rounded dark:bg-gray-300">
        <div className="h-[200px] bg-zinc-200"></div>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 w-48 mb-5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-200 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-200 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-200"></div>
      <div className="flex gap-3 mt-5">
        <div className="h-2 bg-gray-200 rounded-full w-16 dark:bg-gray-200">
          {" "}
        </div>
        <div className="h-2 bg-gray-200 rounded-full w-16 dark:bg-gray-200">
          {" "}
        </div>
      </div>
    </div>
  );
};

export default BlogCardPlaceholder;
