import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCode, FaTools, FaGlobe } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import multi from "@/public/multi.png";
import air from "@/public/air.png";
import Portfolio from "@/public/Portfolio.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance software developer. - Fiverr",
    location: "Remote",
    description:
      "Engaged in end-to-end web application development with React, Express, and Node.js, ensuring optimal UI/UX via responsive design using Tailwind CSS, and incorporating robust DevOps practices including Docker containerization and CI/CD pipelines for streamlined development and deployment.",
    icon: React.createElement(FaGlobe),
    date: "Jan 2022 - present",
  },
  {
    title: "Freelance software developer.- Upwork",
    location: "Remote",
    description:
      "Effectively employed Python and Flask to construct backend services and REST APIs, collaborated cross-functionally to integrate UI/UX seamlessly, automated deployment with Bash and Puppet, and actively participated in Agile methodologies to achieve client objectives..",
    icon: React.createElement(FaCode),
    date: "2021 - 2023",
  },
  {
    title: "Technician, Laptop Doctors",
    location: "Nairobi, Kenya",
    description:
      "Performed hardware repairs and replacements, diagnosed and resolved software-related issues, recovered data from damaged storage devices, and demonstrated soldering and desoldering expertise for electronic components on circuit boards.",
    icon: React.createElement(FaTools),
    date: "Jul 2017 - Aug 2022",
  },
  {
    title: "Intern – Infrastructure Support System Department",
    location: "Jomo Kenyatta University of Agriculture and Technology",
    description:
      "Monitored network performance, addressed connectivity challenges, and executed necessary upgrades and optimizations",
    icon: React.createElement(CgWorkAlt),
    date: "April 2019 - Aug 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Multi-vendor E-commerce app",
    description:
      "Developed a comprehensive multi-vendor ecommerce website that leveraged modern technologies.The website allows vendors to create their own storefronts and manage their products, while customers can browse, compare, and purchase products from different sellers",
    tags: ["HTML5", " CSS3", "React", "Node.js", "Express", "MongoDb"],
    imageUrl: multi,
  },
  {
    title: "Airbnb Clone",
    description:
      "Used Next.js 13 App Router to build a fully functional full stack Airbnb clone with seamless navigation and user experience",
    tags: ["Next.js", "React", "Tailwind", "Prisma", "MongoDB", "NextAuth"],
    imageUrl: air,
  },
  {
    title: "Portfolio website",
    description:
      "Portfolio web developed using Next.js 13 features such as App Router and server actions.It used context API for state management and TypeScript for robustness",
    tags: ["TypeScript", "Tailwind CSS", "Framer Motion", "React & Next.js (App Router & Server Actions)", "Framer"],
    imageUrl: Portfolio,
  },
] as const;

export const skillsData = [
{ name: "C", link: "https://github.com/Wawerugeek/alx-low_level_programming/tree/master/0x1A-hash_tables"},
{ name: "Python", link: "https://github.com/Wawerugeek/alx-higher_level_programming"},
{ name: "Javascript", link: "https://github.com/Wawerugeek/masterPortfolio/tree/main/portfolio"},
{ name: "TAILWIND CSS", link: "https://github.com/Wawerugeek/UI-UX_design_of_chatgpt3"},
{ name: "Sass", link: "https://github.com/Wawerugeek/Port/tree/main/frontend_react/src/container/About" },
{ name: "SQL", link: "https://github.com/Wawerugeek/alx-higher_level_programming/tree/main/0x0E-SQL_more_queries"},
{ name: "Shell", link: "https://github.com/Wawerugeek/alx-system_engineering-devops"},
{ name: "ReactJs", link: "https://github.com/Wawerugeek/UI-UX_design_of_chatgpt3"},
{ name: "Puppet", link: "https://github.com/Wawerugeek/alx-system_engineering-devops/blob/master/0x0C-web_server/7-puppet_install_nginx_web_server.pp"},
{ name: "UI/UX designing", link: "https://github.com/Wawerugeek/UI-UX_design_of_chatgpt3"},
{ name: "SQLalchemy", link: "https://google.com"},
{ name: "NodeJs", link: "" },
{ name: "Express", link: ""},
{ name: "Flask", link: ""},
{ name: "RESTful APIs", link: ""},
{ name: "MySQL", link: ""},
{ name: "PostgreSQL", link: ""},
{ name: "Mongodb", link: " "},
{ name: "Docker", link: ""},
{ name: "CI/CD", link: ""},
{ name: "webserver adminstration", link: ""},
{ name: "linux server administration", link: ""},




] as const;
