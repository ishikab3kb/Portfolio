"use client";
import { useState } from "react";
import Navbar from "./Navbar";

import Contact from "./Contact";
import About from "./About";
import Work from "./Work";
import Home from "./HeroContent";

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

  return (
    <div className="w-full h-full bg-black">
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className={`w-full h-full `}>
        <div className=" text-white">
          {/* Main Content */}
          <div className="container mx-auto pl-5 pr-15 pt-4 min-h-screen flex items-center">
            <ElementToDisplay tab={selectedTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
