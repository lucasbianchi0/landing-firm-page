import { ArticlesResponse } from "@/types/news";
import axios from "axios";

export const getBlogData = async () => {
  try {
    const response = await axios.get<ArticlesResponse>(
      `${process.env.NEXT_PUBLIC_RENDER_API_URL}/api/blogs?sort[0]=createdAt:desc&pagination[page]=1&pagination[pageSize]=3&populate=Image&populate=Tags`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getPostById = async (id: string | number) => {
  try {
    const response = await axios.get<ArticlesResponse>(
      `${process.env.NEXT_PUBLIC_RENDER_API_URL}/api/blogs/${id}?populate=Image&populate=Tags`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
