import weatherApp from "../../public/assets/weather app.jpg";
import gpt3 from "../../public/assets/gpt3.png";
import restaurant from "../../public/assets/restaurant.png";
import ecommerce from "../../public/assets/ecommerce.png";

export const PERSONAL_INFO = [
  { label: "First Name:", value: "Ishika" },
  { label: "Last Name:", value: "Jain" },
  { label: "Age:", value: "25 Years" },
  { label: "Nationality:", value: "Indian" },
  { label: "Freelance:", value: "Available" },
  { label: "Phone:", value: "+91 7690830782" },
  { label: "Email:", value: "ishikajain121126@gmail.com" },
  // { label: "Languages:", value: "Hindi, English" },
];

export const STATS = [
  { value: "12", label: "YEARS OF EXPERIENCE", plus: true },
  { value: "97", label: "COMPLETED PROJECTS", plus: true },
  { value: "81", label: "HAPPY CUSTOMERS", plus: true },
  { value: "53", label: "AWARDS WON", plus: true },
];

export const SKILLS = [
  { name: "HTML", percentage: 95 },
  { name: "JAVASCRIPT", percentage: 89 },
  { name: "CSS", percentage: 70 },
  { name: "NODE.JS", percentage: 66 },
  { name: "DJANGO", percentage: 95 },
  { name: "PYTHON", percentage: 50 },
  { name: "NEXT", percentage: 65 },
  { name: "REACT", percentage: 45 },
];

export const TIMELINE = [
  {
    year: "2024 - PRESENT",
    title: "FRONTEND DEVELOPER",
    company: "CHAKR INNOVATION",
    type: "experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
  },
  {
    year: "2023 - 2024",
    title: "ASSOCIATE CONSULTANT",
    company: "CAPGEMINI",
    type: "experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod duis aute irure dolor.",
  },
  {
    year: "2022 - 2023",
    title: "SENIOR ANALYST",
    company: "CAPGEMINI",
    type: "experience",
    description:
      "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt.",
  },
  {
    year: "2018 - 2022",
    title: "BACHELORS IN TECHNOLOGY",
    company: "LNM INSTITUTE OF INFORMATION TECHNOLOGY",
    type: "education",
    description:
      "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
  },
];

export const CATEGORIES = ["ALL", "FRONTEND", "FULLSTACK"];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Weather App",
    category: "FRONTEND",
    image: weatherApp,
    link: "https://weather-magic.netlify.app/",
  },
  {
    id: 2,
    title: "GPT3",
    category: "FRONTEND",
    image: gpt3,
    link: "https://worldofgpt3.netlify.app/",
  },
  {
    id: 3,
    title: "Restaurant Page",
    category: "FRONTEND",
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
];
