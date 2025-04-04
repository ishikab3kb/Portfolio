"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeading from "./PageHeading";
import weatherApp from "../../public/assets/weather app.jpg";
import gpt3 from "../../public/assets/gpt3.png";
import restaurant from "../../public/assets/restaurant.png";
import ecommerce from "../../public/assets/ecommerce.png";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  // Portfolio categories
  const categories = ["ALL", "VANILLA JS", "REACT", "NEXT", "FULLSTACK"];

  // Portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: "Weather App",
      category: "REACT",
      image: weatherApp,
      link: "https://weather-magic.netlify.app/",
    },
    {
      id: 2,
      title: "GPT3",
      category: "REACT",
      image: gpt3,
      link: "https://worldofgpt3.netlify.app/",
    },
    {
      id: 3,
      title: "Restaurant Page",
      category: "React",
      image: restaurant,
      link: "https://relaxed-shortbread-29fb80.netlify.app/",
    },
    {
      id: 4,
      title: "Ecommerce Site",
      category: "FULLSTACK",
      image: ecommerce,
      link: "https://shopito-ecommerce-app.netlify.app/",
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
          <a href={item.link} key={item.id}>
            <div className="group relative overflow-hidden rounded-lg cursor-pointer">
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
          </a>
        ))}
      </div>
    </div>
  );
}
