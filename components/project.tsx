"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss, SiReact } from "react-icons/si";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { theme } = useTheme();

  const bgColor = theme === "light" ? "bg-white" : "bg-gray-900";
  const borderColor = theme === "light" ? "border-gray-200" : "border-gray-700";
  const cardBgColor = theme === "light" ? "bg-gray-50" : "bg-gray-800";
  const textColor = theme === "light" ? "text-gray-700" : "text-gray-300";
  const hoverEffect = theme === "light" ? "hover:shadow-xl" : "hover:shadow-lg hover:shadow-emerald-500/20";

  // Tech stack icons mapping
  const techIcons = {
    nextjs: <TbBrandNextjs className="text-2xl" />,
    typescript: <SiTypescript className="text-2xl text-blue-600" />,
    tailwind: <SiTailwindcss className="text-2xl text-cyan-500" />,
    react: <SiReact className="text-2xl text-blue-500" />,
    figma: <FiFigma className="text-2xl text-purple-500" />
  };

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="relative max-w-[75rem] px-4 sm:px-8 py-20 mx-auto overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative background elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-blob"></div>
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10">
        {/* Animated section heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading>Featured Projects</SectionHeading>
          <p className={`mb-16 text-center max-w-2xl mx-auto ${textColor}`}>
            Here are some of my proudest creations. Each project represents unique challenges and innovative solutions.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className={`relative group rounded-2xl overflow-hidden border ${borderColor} ${cardBgColor} transition-all duration-300 ${hoverEffect}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Project image with overlay */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className={`p-2 rounded-full ${bgColor} shadow-sm border ${borderColor} hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
                        aria-label="GitHub repository"
                      >
                        <FaGithub className="text-lg" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className={`p-2 rounded-full ${bgColor} shadow-sm border ${borderColor} hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
                        aria-label="Live demo"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>

                <p className={`mb-4 ${textColor}`}>{project.description}</p>

                {/* Tech stack */}
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2 text-gray-500 dark:text-gray-400">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${bgColor} border ${borderColor}`}
                      >
                        {techIcons[tag.toLowerCase()] || <span className="w-5 h-5"></span>}
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/Wawerugeek?tab=repositories"
            target="_blank"
            className={`inline-flex items-center px-6 py-3 rounded-full font-medium ${bgColor} border ${borderColor} shadow-sm hover:shadow-md transition-all group`}
          >
            <span>View All Projects</span>
            <FaGithub className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}