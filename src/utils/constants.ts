import weatherApp from "../../public/assets/weather app.jpg";
import gpt3 from "../../public/assets/gpt3.jpg";
import restaurant from "../../public/assets/restaurant.png";
import ecommerce from "../../public/assets/ecommerce.png";
import todoapp from "../../public/assets/todoapp.jpg";

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
  { value: "2", label: "YEARS OF EXPERIENCE", plus: true },
  { value: "10", label: "COMPLETED PROJECTS", plus: true },
  { value: "81", label: "HAPPY CUSTOMERS", plus: true },
  { value: "53", label: "AWARDS WON", plus: true },
];

export const SKILLS = [
  { name: "HTML", percentage: 95 },
  { name: "JAVASCRIPT", percentage: 89 },
  { name: "CSS", percentage: 87 },
  { name: "REACT", percentage: 82 },
  { name: "NODE.JS", percentage: 54 },
  { name: "DJANGO", percentage: 60 },
  { name: "PYTHON", percentage: 70 },
  { name: "NEXT", percentage: 65 },
];

export const TIMELINE = [
  {
    year: "2024 - PRESENT",
    title: "FRONTEND DEVELOPER",
    company: "CHAKR INNOVATION",
    type: "experience",
    description:
      "Developed dynamic experiment dashboards in Next.js, integrating complex nested forms, interactive D3.js visualizations, and advanced filtering systems, improving user experience and productivity. Implemented secure authentication with JWT and SSO, enabling seamless integration with Django.",
  },
  {
    year: "2023 - 2024",
    title: "ASSOCIATE CONSULTANT",
    company: "CAPGEMINI",
    type: "experience",
    description:
      "Developed interactive dashboards in Palantir for Airbus, visualizing airline activities and improving workflow efficiency for users. Enhanced UI/UX with dynamic graphs and tables for better data insights.",
  },
  {
    year: "2022 - 2023",
    title: "SENIOR ANALYST",
    company: "CAPGEMINI",
    type: "experience",
    description:
      "Developed an interactive ad-browsing experience for Disney+ Hotstar, boosting viewer engagement by 20%, and led frontend development for HSBC’s Data Pipeline project, optimizing data access and increasing business conversions by 25%.",
  },
  {
    year: "2018 - 2022",
    title: "BACHELORS IN TECHNOLOGY",
    company: "LNM INSTITUTE OF INFORMATION TECHNOLOGY",
    type: "education",
    description:
      "Completed a bachelor's in Mechanical Engineering and developed a strong interest in frontend development while working on a summer project in college. Transitioned into building dynamic web applications, focusing on intuitive UI/UX and interactive dashboards.",
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
  {
    id: 5,
    title: "TO DO App",
    category: "FULLSTACK",
    image: todoapp,
    link: "https://inquisitive-bombolone-9c7ea0.netlify.app/",
  },
];
