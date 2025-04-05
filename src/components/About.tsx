"use client";

import { Download } from "lucide-react";
import PageHeading from "./PageHeading";
import ActionButton from "./ActionButton";
import { PERSONAL_INFO, SKILLS, STATS, TIMELINE } from "@/utils/constants";
import CircularProgress from "./CircularProgress";
import { useTheme } from "@/context/ThemeContext";

export default function About() {
  const { state } = useTheme();

  const handleDownloadCV = () => {
    // Direct download using window.open
    window.open("/assets/Ishika Jain SDE-1 Frontend Eng.pdf", "_blank");
  };

  return (
    <div className="flex flex-col justify-center max-w-full">
      {/* Background Text */}
      <PageHeading bgText="RESUME" headingw="ABOUT" headingy="ME" />

      {/* Personal Info Section */}
      <div className="mb-16 h-full w-full">
        <h3 className="text-xl font-bold mb-6">PERSONAL INFO</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Personal details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PERSONAL_INFO.map((info, index) => (
              <div key={index} className="flex gap-1 items-center flex-wrap">
                <span
                  className={`text-sm font-light ${
                    state.isDark ? "text-zinc-300" : "text-zinc-600"
                  }`}
                >
                  {info.label}
                </span>
                <span className="text-sm font-medium">{info.value}</span>
              </div>
            ))}

            <div className="sm:col-span-2 mt-4">
              <ActionButton
                text="DOWNLOAD CV"
                icon={Download}
                action={handleDownloadCV}
              />
            </div>
          </div>

          {/* Right column - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, index) => (
              <div
                key={index}
                className={`${
                  state.isDark ? "bg-zinc-900" : "bg-zinc-200"
                } p-6 rounded-md flex flex-col items-center justify-center`}
              >
                <div className="text-3xl font-bold text-amber-400 mb-1">
                  {stat.value}
                  <span className="text-amber-400">{stat.plus ? "+" : ""}</span>
                </div>
                <div className="text-xs text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <h3 className="text-xl font-bold mb-6 text-center">MY SKILLS</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <CircularProgress percentage={skill.percentage} />
              <span className="mt-2 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience & Education Section */}
      <div>
        <h3 className="text-xl font-bold mb-6 text-center">
          EXPERIENCE & EDUCATION
        </h3>

        <div className="relative max-w-4xl mx-auto">
          {/* Center timeline line */}
          <div className="absolute left-1/2 top-0 w-px h-full bg-zinc-700 transform -translate-x-1/2"></div>

          {/* Timeline items */}
          {TIMELINE.map((item, index) => (
            <div key={index} className="flex mb-12">
              {/* Left side - Experience */}
              <div className="w-1/2 pr-8">
                {item && item.type === "experience" && (
                  <div className="relative flex flex-col items-end">
                    <div className="text-right flex flex-col items-end">
                      <div
                        className={`mb-2 text-xs justify-end rounded-full p-1 w-fit ${
                          state.isDark
                            ? "bg-zinc-700 text-zinc-300"
                            : "bg-zinc-300 text-zinc-700"
                        }`}
                      >
                        {item.year}
                      </div>
                      <h4 className="text-lg font-bold mb-1">
                        {item.title} —{" "}
                        <span className="font-normal">{item.company}</span>
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Center dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>

              {/* Right side - Education */}
              <div className="w-1/2 pl-8">
                {item && item.type === "education" && (
                  <div className="relative">
                    <div
                      className={`mb-2 text-amber-400 text-xs rounded-full p-1 w-fit ${
                        state.isDark
                          ? "bg-zinc-700 text-zinc-300"
                          : "bg-zinc-300 text-zinc-700"
                      }`}
                    >
                      {item.year}
                    </div>
                    <h4 className="text-lg font-bold mb-1">
                      {item.title} —{" "}
                      <span className="font-normal">{item.company}</span>
                    </h4>
                    <p className="text-zinc-400 text-sm">{item.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
