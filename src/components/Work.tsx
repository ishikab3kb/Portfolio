"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeading from "./PageHeading";

import { useTheme } from "@/context/ThemeContext";
import { CATEGORIES, PORTFOLIO_ITEMS } from "@/utils/constants";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const { state } = useTheme();

  // Portfolio categories

  const filteredItems =
    activeFilter === "ALL"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="w-[98%]">
      {/* Background Text */}
      <PageHeading bgText="WORK" headingw="MY" headingy="PORTFOLIO" />

      {/* Filter Navigation */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            className={`text-lg font-medium transition-colors hover:text-amber-400
              ${
                activeFilter === category
                  ? "text-amber-400"
                  : state.isDark
                  ? "text-white"
                  : "text-zinc-700"
              }`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <a href={item.link} key={item.id}>
            <div className="group relative overflow-hidden rounded-lg cursor-pointer">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={450}
                height={350}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 ${
                  state.isDark ? "bg-amber-400" : "bg-amber-200"
                } flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-black">{item.title}</h3>
                  <p className="text-black/70">{item.category}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
