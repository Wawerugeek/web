"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section 
      id="experience" 
      ref={ref} 
      className="relative scroll-mt-28 mb-28 sm:mb-40 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-20 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 to-transparent rounded-full blur-3xl -z-10" />
      
      <SectionHeading>
        <div className="flex items-center gap-2">
          <FaBriefcase className="text-2xl text-purple-500" />
          <span>Professional Journey</span>
        </div>
      </SectionHeading>

      <motion.div 
        className="relative"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/30 via-blue-500/30 to-emerald-500/30 -z-10" />

        {experiencesData.map((exp, index) => (
          <motion.div
            key={index}
            className="relative pl-16 md:pl-0 md:even:pl-16 mb-12 last:mb-0"
            variants={item}
          >
            {/* Timeline dot */}
            <div className={`absolute top-1 left-6 md:left-1/2 w-4 h-4 rounded-full ${exp.type === 'work' ? 'bg-purple-500' : 'bg-blue-500'} -translate-x-1/2 ring-4 ${theme === 'light' ? 'ring-white' : 'ring-gray-900'}`} />

            <div className={`bg-white/5 backdrop-blur-sm p-6 rounded-2xl border ${theme === 'light' ? 'border-gray-200' : 'border-white/10'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-3">
                <h3 className="text-xl font-semibold text-white">
                  {exp.title}
                </h3>
                <div className={`px-3 py-1 text-sm rounded-full ${exp.type === 'work' ? 'bg-purple-500/20 text-purple-300' : 'bg-blue-500/20 text-blue-300'}`}>
                  {exp.date}
                </div>
              </div>

              <div className="flex items-center gap-2 text-white/80 mb-4">
                {exp.type === 'work' ? (
                  <FaBriefcase className="text-purple-500/80" />
                ) : (
                  <FaGraduationCap className="text-blue-500/80" />
                )}
                <span>{exp.location}</span>
              </div>

              <p className={`${theme === 'light' ? 'text-gray-700' : 'text-white/75'}`}>
                {exp.description}
              </p>

              {exp.skills && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className={`px-2 py-1 text-xs rounded-full ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-white/10 text-white/80'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}