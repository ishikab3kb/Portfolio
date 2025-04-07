"use client";
import { useState } from "react";
import {
  Sun,
  Home,
  User,
  Briefcase,
  Mail,
  MessageSquare,
  Moon,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  selectedTab: string;
  setSelectedTab: any;
};

const Navbar = ({ selectedTab, setSelectedTab }: Props) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { state, dispatch } = useTheme();
  return (
    <div className="relative z-20">
      {/* Theme Toggle */}
      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        className={`fixed top-4 right-6 p-2 rounded-full ${
          state.isDark
            ? "bg-zinc-800 hover:bg-amber-200"
            : "bg-zinc-200 hover:bg-zinc-500"
        } transition-colors`}
      >
        {state.isDark ? (
          <Sun className="w-5 h-5 text-amber-400" />
        ) : (
          <Moon className="w-5 h-5 text-amber-400" />
        )}
      </button>

      {/* Navigation Icons */}
      <div
        className={`fixed bottom-0 p-2 w-full justify-evenly ${
          state.isDark ? "bg-zinc-700 backdrop-brightness-0" : "bg-zinc-400"
        } md:right-6 md:top-1/2 md:w-fit md:bg-transparent md:-translate-y-1/2 md:p-0 flex md:flex-col gap-6`}
      >
        {[
          { icon: Home, label: "Home" },
          { icon: User, label: "About" },
          { icon: Briefcase, label: "Portfolio" },
          { icon: Mail, label: "Contact" },
          { icon: MessageSquare, label: "Chat" },
        ].map((item) => (
          <button
            key={item.label}
            className={`p-3 rounded-full flex flex-row-reverse items-center transition-colors 
                      ${
                        item.label === selectedTab
                          ? state.isDark
                            ? "bg-amber-400"
                            : "bg-amber-200"
                          : state.isDark
                          ? "bg-zinc-800 hover:bg-amber-400"
                          : "bg-zinc-200 hover:bg-amber-200"
                      } hover:gap-2
                    `}
            onClick={() => setSelectedTab(item.label)}
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <item.icon className="w-5 h-5" />
            <span
              className={`overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out ${
                hoveredItem === item.label ? "max-w-[200px]" : "max-w-[0]"
              } ${hoveredItem === item.label ? "opacity-100" : "opacity-0"}`}
              style={{
                // maxWidth: hoveredItem === item.label ? "200px" : "0",
                // opacity: hoveredItem === item.label ? 1 : 0,
                marginLeft: hoveredItem === item.label ? "0.75rem" : "0",
              }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
