import { SvgIconProps } from "@mui/material";
import React from "react";

interface IContentProps {
  // icon:
  title: string;
  description?: string;
  subtitle: string;
  icon: React.ComponentType<SvgIconProps>;
  position: string;
}

const TestingContent = ({
  title,
  description,
  subtitle,
  icon: Icon,
  position,
}: IContentProps) => {
  return (
    <div
      className={`flex flex-col ${
        position === "left"
          ? "md:justify-start"
          : "md:justify-end md:text-right"
      } `}
    >
      <div
        className={`flex items-center ${
          position === "left" ? "" : "md:flex-row-reverse"
        } gap-3  md:justify-start`}
      >
        <Icon style={{ fontSize: "1.8rem" }} className="text-[#006BFC]" />
        <p className=" text-[hsl(215,76%,73%)] font-bold">{subtitle}</p>
      </div>

      <h2
        style={{ whiteSpace: "pre-line" }}
        className={`text-[44px]  md:text-[56px] title ${
          position === "left" ? "bg-gradient-to-r" : "bg-gradient-to-l"
        }  from-[#11203A] to-[#4C96FF] bg-clip-text text-transparent`}
      >
        {title}
      </h2>
      <div className=" text-description">
        <span>{description}</span>
      </div>
    </div>
  );
};

export default TestingContent;

// import React from "react";

// const Testing = () => {
//   return (
//     <div className="flex hidden h-screen bg-violet-300">
//       <div className="bg-orange-300 sticky top-0 left-0 h-[200px] flex items-center justify-center w-1/4 bg-gray-200">
//         <p className="text-4xl font-bold">Texto corto</p>
//       </div>
//       <div className="bg-green-300 w-3/4 p-8 h-[1000px]">
//         <p className="text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus
//           in pede consequat congue. Mauris iaculis porttitor posuere. Praesent
//           id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at
//           risus et justo dignissim congue. Donec congue lacinia dui, a porttitor
//           lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget
//           odio ac lectus vestibulum faucibus eget in metus. In pellentesque
//           faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla
//           facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate,
//           ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas
//           est urna sit amet arcu. Class aptent taciti sociosqu ad litora
//           torquent per conubia nostra, per inceptos himenaeos. Sed molestie
//           augue sit amet leo consequat posuere. Vestibulum ante ipsum primis in
//           faucibus orci luctus et ultrices posuere cubilia Curae; Proin vel ante
//           a orci tempus eleifend ut et magna. Lorem ipsum dolor sit amet,
//           consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac
//           tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu
//           diam mattis viverra. Proin et urna eget neque et bibendum viverra.
//           Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
//           imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed
//           cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus
//           accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci
//           luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis
//           porttitor congue, elit erat euismod orci, ac placerat dolor lectus
//           quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus
//           metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum
//           fringilla pede sit amet augue. In turpis. Pellentesque posuere.
//           Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue
//           blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit
//           libero, sodales nec, volutpat a, suscipit non, turpis. Nullam
//           sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem
//           libero volutpat nibh, nec pellentesque velit pede
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Testing;
