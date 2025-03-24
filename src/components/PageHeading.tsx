import React from "react";

type Props = {
  bgText: string;
  headingw: string;
  headingy: string;
};

const PageHeading = ({ bgText, headingw, headingy }: Props) => {
  return (
    <div className="flex justify-center">
      <h1 className="text-7xl font-bold text-zinc-800/50 text-center absolute top-0 left-0 right-0 select-none md:text-9xl">
        {bgText}
      </h1>

      {/* Main Heading */}
      <div className="text-center mb-16 md:pt-5 z-1">
        <h2 className="text-4xl md:text-6xl font-bold">
          {headingw} <span className="text-amber-400">{headingy}</span>
        </h2>
      </div>
    </div>
  );
};

export default PageHeading;
