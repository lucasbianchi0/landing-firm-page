import React from "react";

interface IBtnProps {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  content: string;
}

const Button = ({
  backgroundColor,
  textColor,
  content,
  borderColor,
}: IBtnProps) => {
  return (
    <button
      className="px-3 md:px-7 py-2 border rounded-full font-medium"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        borderColor: borderColor,
      }}
    >
      {content}
    </button>
  );
};

export default Button;

{
  /* <a
href="#"
class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
>
Get Started Today
</a> */
}
