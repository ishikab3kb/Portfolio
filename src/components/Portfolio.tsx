"use client";
import { useState } from "react";
import Navbar from "./Navbar";

import Contact from "./Contact";
import About from "./About";
import Work from "./Work";
import Home from "./HeroContent";
import { useTheme } from "@/context/ThemeContext";

const ElementToDisplay = ({ tab }: { tab: string }) => {
  switch (tab) {
    case "Home":
      return <Home />;
    case "Contact":
      return <Contact />;
    case "About":
      return <About />;
    case "Portfolio":
      return <Work />;
  }
};

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const { state } = useTheme();

  return (
    <div className={`w-full h-full ${state.isDark ? "bg-black" : "bg-white"}`}>
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div
        className={`w-full h-full ${
          state.isDark ? "text-white" : "text-black"
        }`}
      >
        {/* Main Content */}
        <div className="container mx-auto pl-5 pr-5 md:pr-18 pt-4 min-h-screen flex justify-center items-center">
          <ElementToDisplay tab={selectedTab} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
