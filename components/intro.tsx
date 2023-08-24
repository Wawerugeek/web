"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const textArray = [
    "Hello, I'm Steve, a full-stack software developer with a passion for software development and a comprehensive skill set encompassing backend and frontend technologies, database management, UI/UX design, and DevOps practices.", 
    "My proficiency lies in designing, developing, and maintaining full-stack web applications using a wide array of programming languages, frameworks, and libraries.",
    "I am Extremely logical, detail oriented with a keen attention to details and am always willing to collaborate in a team as well as exercise indepedent judgement and initiative.",
    "I create visually appealing and interactive user experiences through the incorporation of modern design principles and front-end technologies.",
    "I have experience in using and managing Continuous Integration and Continuous Delivery (CI/CD) technologies for web application and REST API development and deployment and third-party libraries and SDKs.",
    "I do also have experience with microservices architecture and containerization technologies( Docker ) and orchestration (Kubernetes). ",
    "I have Developed and launched applications on Cloud infrastructure (AWS and Google Cloud) using microservices architectures."

  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const sentence = textArray[currentTextIndex];
  const animationDuration = sentence.length * 0.05;
  
  useEffect(() => {
    const timer = setInterval (() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);

    }, animationDuration * 3000);

    return () => clearInterval(timer);
  }, [])

  const { theme } = useTheme();
  const textColor = theme === "light" ? "black" : "#7FFF00";

  return (
    <motion.section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/steve.jpeg"
              alt="Steve Profile"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      
      <div className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <motion.h1
          key={currentTextIndex}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          style={{
            color: textColor,
          }}
        >
          {textArray[currentTextIndex].split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.04 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>


      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/SteveCv.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/waweru7/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Wawerugeek?tab=repositories&q=&type=&language=&sort="
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </motion.section>
  );
}
