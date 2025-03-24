"use client";
import { useState } from "react";
import { Sun, Home, User, Briefcase, Mail, MessageSquare } from "lucide-react";

type Props = {
  selectedTab: string;
  setSelectedTab: any;
};

const Navbar = ({ selectedTab, setSelectedTab }: Props) => {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="z-10">
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-6 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
      >
        <Sun className="w-5 h-5 text-amber-400" />
      </button>

      {/* Navigation Icons */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6">
        {[
          { icon: Home, label: "Home" },
          { icon: User, label: "About" },
          { icon: Briefcase, label: "Portfolio" },
          { icon: Mail, label: "Contact" },
          { icon: MessageSquare, label: "Chat" },
        ].map((item, index) => (
          <button
            key={index}
            className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors group relative"
            onClick={() => setSelectedTab(item.label)}
          >
            <item.icon className="w-5 h-5" />
            <span className="absolute right-full mr-2 bg-zinc-800 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
