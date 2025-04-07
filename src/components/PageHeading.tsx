import { useTheme } from "@/context/ThemeContext";
import React from "react";

type Props = {
  bgText: string;
  headingw: string;
  headingy: string;
};

const PageHeading = ({ bgText, headingw, headingy }: Props) => {
  const { state } = useTheme();
  return (
    <div className="flex justify-center relative">
      <h1
        className={`text-5xl sm:text-7xl font-bold ${
          state.isDark ? "text-zinc-800/50" : "text-zinc-300/50"
        } text-center absolute top-0 select-none md:text-9xl`}
      >
        {bgText}
      </h1>

      {/* Main Heading */}
      <div className="text-center mb-16 md:pt-5 mt-3 z-1">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
          {headingw} <span className="text-amber-400">{headingy}</span>
        </h2>
      </div>
    </div>
  );
};

export default PageHeading;
