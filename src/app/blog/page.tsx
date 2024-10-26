// "use client";
// import { getBlogData } from "@/api/blog";
// import BlogCard from "@/components/blog/BlogCard";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import { Article } from "@/types/news";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const Blog = () => {
//   const [news, setNews] = useState<Article[]>([]);
//   const fetchData = async () => {
//     try {
//       const response = await getBlogData();
//       if (response && response.data) {
//         console.log(response.data);
//         setNews(response?.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="h-full min-h-[100vh] bg-[#F9F9F9] pt-6">
//       <Navbar version={"blue"} />
//       <div className="container">
//         <div className="md:w-[50%] mx-auto mt-20 flex-1 flex flex-col items-center gap-4">
//           <p className="subtitle">Especialistas</p>
//           <h2 className="text-[44px] flex md:text-[70px] title gap-2 leading-none">
//             <span
//               style={{
//                 background: "linear-gradient(to top, #000000, #4C96FF)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               Accedra
//             </span>
//             <span className="text-[#172B4D] w-full">Blog </span>
//           </h2>
//           <p className="text-center">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
//             veniam sed doloremque minus dolore aliquid temporibus quaerat, quam
//             perspiciatis porro itaque eveniet hic natus magnam.
//           </p>
//         </div>

//         {/* <div className="container grid flex-col gap-5 mt-10 space-y-2 sm:grid-cols-2 md:space-y-5 lg:grid-cols-3 xl:grid-cols-4 md:gap-3 "> */}
//         <div className=" gap-5 py-10 mx-auto grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4">
//           {[...Array(3)].map(() =>
//             news.map((article) => {
//               const imageUrl = `${process.env.NEXT_PUBLIC_RENDER_API_URL}${article.attributes.Image.data[0]?.attributes.url}`;
//               console.log(imageUrl);
//               console.log(article.id);
//               return (
//                 <Link
//                   key={article.id + Math.random()} // Asegúrate de que el key sea único
//                   href={`/blog/${article.id}`}
//                 >
//                   <BlogCard
//                     title={article.attributes.title}
//                     descriptionPreview={article.attributes.descriptionPreview}
//                     imageUrl={imageUrl}
//                   />
//                 </Link>
//               );
//             })
//           )}
//           {/* </div> */}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Blog;
