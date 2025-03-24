"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeading from "./PageHeading";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  // Portfolio categories
  const categories = ["ALL", "LOGO", "VIDEO", "GRAPHIC DESIGN", "MOCKUP"];

  // Portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: "Paper Craft",
      category: "MOCKUP",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Lucky Cat",
      category: "LOGO",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Hardware Tools",
      category: "MOCKUP",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Fortune Cookies",
      category: "GRAPHIC DESIGN",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Paper Butterfly",
      category: "VIDEO",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Origami Flower",
      category: "GRAPHIC DESIGN",
      image: "/placeholder.svg",
    },
  ];

  // Filter items based on active category
  const filteredItems =
    activeFilter === "ALL"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div>
      {/* Background Text */}
      <PageHeading bgText="WORK" headingw="MY" headingy="PORTFOLIO" />

      {/* Filter Navigation */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className={`text-lg font-medium transition-colors ${
              activeFilter === category
                ? "text-amber-400"
                : "text-white hover:text-amber-400"
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
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              width={500}
              height={350}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-amber-400/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="text-black/70">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
