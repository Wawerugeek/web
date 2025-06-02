"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaCode, FaServer, FaCloud, FaDocker } from "react-icons/fa";
import { SiKubernetes, SiAwslambda, SiGooglecloud } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useTheme();

const textArray = [
    "Hello, I'm Steve—a detail-oriented professional blending administrative expertise with technical prowess in backend development and AI workflows.",
    "I optimize operations by automating workflows (Zapier, Google Scripts), documenting systems, and supporting engineering teams with precision.",
    "Skilled in Python, REST APIs, and DevOps tools, I bridge the gap between technical teams and business stakeholders.",
    "A proactive problem-solver, I streamline processes using Notion, Jira, and agile methodologies to enhance productivity.",
    "Passionate about technical writing, I create clear documentation and SOPs to empower team collaboration.",
    "From scheduling sprints to troubleshooting backend systems, I thrive in dynamic, tech-driven environments."
];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovering]);

  // Tech stack animation items
  const techItems = [
    { icon: <FaCode className="text-2xl" />, name: "Frontend" },
    { icon: <FaServer className="text-2xl" />, name: "Backend" },
    { icon: <FaDocker className="text-2xl" />, name: "Docker" },
    { icon: <SiKubernetes className="text-2xl" />, name: "K8s" },
    { icon: <SiAwslambda className="text-2xl" />, name: "AWS" },
    { icon: <SiGooglecloud className="text-2xl" />, name: "GCP" },
    { icon: <FaCloud className="text-2xl" />, name: "Cloud" }
  ];

  const textColor = theme === "light" ? "black" : "#7FFF00";
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-900";
  const buttonBg = theme === "light" ? "bg-gray-900" : "bg-emerald-500";
  const buttonHover = theme === "light" ? "hover:bg-gray-950" : "hover:bg-emerald-600";
  const rotatingTextColor = theme === "light" ? "#059669" : "#7FFF00"; // Emerald green for light, bright green for dark

  return (
    <motion.section
      ref={ref}
      id="home"
      className="mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Profile image with more sophisticated animation */}
        <motion.div
          className="relative mb-8 group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
         <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-emerald-500/30 transition-all duration-300">
    <Image
      src="/stevepic.jpg"
      alt="Steve Profile"
      layout="fill"
      objectFit="cover"
      quality="100"
      priority={true}
      className="group-hover:scale-105 transition-transform duration-500"
    />
  </div>
  <motion.span
    className="absolute -bottom-3 -right-3 text-6xl"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 125,
      delay: 0.2,
      duration: 0.7,
    }}
  >
    👋
  </motion.span>
  <motion.div
    className="absolute -inset-5 rounded-full border-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
  />
        </motion.div>

        {/* Animated headline text */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Stephen Waweru
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Web designer, administative assisant, and full-stack developer. 
        </motion.h2>

        {/* Rotating text with improved animation */}
        <div 
          className="min-h-[120px] sm:min-h-[80px] w-full mb-10 px-4 text-lg sm:text-xl font-medium !leading-[1.5]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTextIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{ color: rotatingTextColor }}
              className={`${textColor} max-w-2xl mx-auto`}
            >
              {textArray[currentTextIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Tech stack animation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {techItems.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center justify-center p-3 rounded-xl ${bgColor} shadow-md dark:shadow-gray-800/50`}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Action buttons with improved styling */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="#contact"
            className={`group ${buttonBg} text-white px-8 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 ${buttonHover} active:scale-105 transition shadow-lg`}
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            <span className="font-medium">Get In Touch</span>
            <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex gap-4">
            <a
              className={`group ${bgColor} p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition shadow-md border border-gray-200 dark:border-gray-700`}
              href="/cv.pdf"
              download
            >
              <HiDownload className="opacity-80 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              className={`${bgColor} p-4 rounded-full shadow-md focus:scale-110 hover:scale-110 active:scale-105 transition border border-gray-200 dark:border-gray-700`}
              href="https://www.linkedin.com/in/waweru7/"
              target="_blank"
            >
              <BsLinkedin className="text-blue-600 dark:text-blue-400" />
            </a>

            <a
              className={`${bgColor} p-4 rounded-full shadow-md focus:scale-110 hover:scale-110 active:scale-105 transition border border-gray-200 dark:border-gray-700`}
              href="https://github.com/Wawerugeek?tab=repositories&q=&type=&language=&sort="
              target="_blank"
            >
              <FaGithubSquare className="text-gray-800 dark:text-gray-200" />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-sm text-gray-500 mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-gray-400 rounded-full mt-1"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}