"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import PageHeading from "./PageHeading";
import ActionButton from "./ActionButton";

export default function About() {
  // Personal info data
  const personalInfo = [
    { label: "First Name:", value: "Steve" },
    { label: "Last Name:", value: "Milner" },
    { label: "Age:", value: "27 Years" },
    { label: "Nationality:", value: "Tunisian" },
    { label: "Freelance:", value: "Available" },
    { label: "Address:", value: "Tunis" },
    { label: "Phone:", value: "+21621184010" },
    { label: "Email:", value: "you@mail.com" },
    { label: "Skype:", value: "steve.milner" },
    { label: "Languages:", value: "French, English" },
  ];

  // Stats data
  const stats = [
    { value: "12", label: "YEARS OF EXPERIENCE", plus: true },
    { value: "97", label: "COMPLETED PROJECTS", plus: true },
    { value: "81", label: "HAPPY CUSTOMERS", plus: true },
    { value: "53", label: "AWARDS WON", plus: true },
  ];

  // Skills data
  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "JAVASCRIPT", percentage: 89 },
    { name: "CSS", percentage: 70 },
    { name: "PHP", percentage: 66 },
    { name: "WORDPRESS", percentage: 95 },
    { name: "JQUERY", percentage: 50 },
    { name: "ANGULAR", percentage: 65 },
    { name: "REACT", percentage: 45 },
  ];

  // Experience & Education data
  const timeline = [
    {
      year: "2018 - PRESENT",
      title: "WEB DEVELOPER",
      company: "ENVATO",
      description:
        "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
    },
    {
      year: "2013 - 2018",
      title: "UI/UX DESIGNER",
      company: "THEMEFOREST",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod duis aute irure dolor.",
    },
    {
      year: "2005 - 2013",
      title: "CONSULTANT",
      company: "WEICHENG",
      description:
        "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt.",
    },
    {
      year: "2015",
      title: "ENGINEERING DEGREE",
      company: "OXFORD UNIVERSITY",
      description:
        "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
    },
    {
      year: "2012",
      title: "MASTER DEGREE",
      company: "KIEV UNIVERSITY",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod duis aute irure dolor.",
    },
    {
      year: "2009",
      title: "BACHELOR DEGREE",
      company: "TUNIS HIGH SCHOOL",
      description:
        "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt.",
    },
  ];

  // Function to render circular progress
  const CircularProgress = ({ percentage }: { percentage: number }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <svg className="w-24 h-24" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="#333"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="#fbbf24"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
        {/* Percentage text */}
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="18"
          fontWeight="bold"
        >
          {percentage}%
        </text>
      </svg>
    );
  };

  return (
    <div className="flex flex-col justify-center">
      {/* Background Text */}
      <PageHeading bgText="RESUME" headingw="ABOUT" headingy="ME" />

      {/* Personal Info Section */}
      <div className="mb-16">
        <h3 className="text-xl font-bold mb-6">PERSONAL INFOS</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Personal details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalInfo.map((info, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-sm">{info.label}</span>
                <span className="font-medium">{info.value}</span>
              </div>
            ))}

            <div className="sm:col-span-2 mt-4">
              <ActionButton text="DOWNLOAD CV" icon={Download} />
            </div>
          </div>

          {/* Right column - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-md flex flex-col items-center justify-center"
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
          {skills.map((skill, index) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Experience */}
          <div>
            {timeline.slice(0, 3).map((item, index) => (
              <div key={index} className="relative pl-8 pb-8">
                {/* Yellow circle */}
                <div className="absolute left-0 top-0 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                {/* Vertical line */}
                {index < 2 && (
                  <div className="absolute left-3 top-6 w-px h-full bg-zinc-700"></div>
                )}
                {/* Content */}
                <div className="mb-2 text-amber-400 text-sm font-medium">
                  {item.year}
                </div>
                <h4 className="text-lg font-bold mb-1">
                  {item.title} —{" "}
                  <span className="font-normal">{item.company}</span>
                </h4>
                <p className="text-zinc-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right column - Education */}
          <div>
            {timeline.slice(3, 6).map((item, index) => (
              <div key={index} className="relative pl-8 pb-8">
                {/* Yellow circle */}
                <div className="absolute left-0 top-0 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                {/* Vertical line */}
                {index < 2 && (
                  <div className="absolute left-3 top-6 w-px h-full bg-zinc-700"></div>
                )}
                {/* Content */}
                <div className="mb-2 text-amber-400 text-sm font-medium">
                  {item.year}
                </div>
                <h4 className="text-lg font-bold mb-1">
                  {item.title} —{" "}
                  <span className="font-normal">{item.company}</span>
                </h4>
                <p className="text-zinc-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
