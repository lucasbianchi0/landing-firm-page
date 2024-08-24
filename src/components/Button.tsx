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
      className={`px-7 py-2 border rounded-full font-medium`}
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
