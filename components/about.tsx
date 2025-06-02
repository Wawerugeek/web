"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { 
  FaCode, 
  FaServer, 
  FaCloud, 
  FaGraduationCap, 
  FaUserTie, 
  FaTools, 
  FaRobot 
} from "react-icons/fa";
import { 
  SiDocker, 
  SiPython, 
  SiNotion, 
  SiJira
} from "react-icons/si";
import { 
  BsFileText, 
  BsCalendarCheck 
} from "react-icons/bs";
import { GrGoogle } from "react-icons/gr"; // For Google Workspace
export default function About() {
  const { ref } = useSectionInView("About");

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.section
      ref={ref}
      className="relative mb-28 max-w-[60rem] mx-auto px-4 sm:px-6 text-center sm:mb-40 scroll-mt-28 overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* Decorative background elements */}
      <div className="absolute -top-40 -left-20 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 to-transparent rounded-full blur-3xl -z-10" />

      <SectionHeading>
        <div className="inline-flex items-center gap-2">
          <span className="text-purple-500">About</span> Me
        </div>
      </SectionHeading>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Main About Content */}
        <motion.div 
          className="lg:col-span-2 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg text-left"
          variants={item}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-purple-500/10 text-purple-500">
              <FaUserTie className="text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-white">Professional Profile</h3>
          </div>
          
          <p className="mb-4 text-white/90">
            I'm a <span className="text-purple-400 font-medium">detail-oriented professional</span> with a unique blend of administrative expertise and technical skills in backend development and AI workflows. Currently supporting engineering teams at <span className="font-medium">MindWorks AI Consultancy</span>, I bridge operational and technical domains.
          </p>
          
          <p className="mb-4 text-white/90">
            My core strength lies in <span className="text-emerald-400 font-medium">optimizing workflows</span> through automation (Zapier, Google Scripts), meticulous documentation, and cross-functional coordination. I've successfully streamlined processes for technical teams while maintaining administrative precision.
          </p>
          
          <p className="text-white/90">
            With a <span className="font-medium">BSc in Applied Physics & Computer Science</span> and ongoing Software Engineering training at <span className="font-medium">ALX Africa</span>, I combine technical knowledge (Python, APIs, Docker) with organizational skills to enhance team productivity in dynamic environments.
          </p>
        </motion.div>

        {/* Skills Highlights */}
        <motion.div 
          className="space-y-6"
          variants={item}
        >
          {/* Core Skills */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-blue-500/10 text-blue-500">
                <FaTools className="text-lg" />
              </div>
              <h3 className="text-lg font-semibold text-white">Key Skills</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <SiPython className="text-yellow-400 text-xl" />
                <span className="text-white/80">Python & Flask</span>
              </div>
              <div className="flex items-center gap-3">
                <SiNotion className="text-white text-xl" />
                <span className="text-white/80">Notion & Jira</span>
              </div>
              <div className="flex items-center gap-3">
                <GrGoogle className="text-green-400 text-xl" />
                <span className="text-white/80">Google Workspace</span>
              </div>
              <div className="flex items-center gap-3">
                <BsFileText className="text-blue-400 text-xl" />
                <span className="text-white/80">Technical Writing</span>
              </div>
              <div className="flex items-center gap-3">
                <BsCalendarCheck className="text-purple-400 text-xl" />
                <span className="text-white/80">Operations Coordination</span>
              </div>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-emerald-500/10 text-emerald-500">
                <FaRobot className="text-lg" />
              </div>
              <h3 className="text-lg font-semibold text-white">Experience</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white">MindWorks AI Consultancy</h4>
                <p className="text-sm text-white/70">Admin & Tech Ops Assistant</p>
                <p className="text-xs text-white/50">2023 - Present</p>
              </div>
              <div>
                <h4 className="font-medium text-white">InsightForge Research</h4>
                <p className="text-sm text-white/70">Virtual Research Coordinator</p>
                <p className="text-xs text-white/50">2022</p>
              </div>
              <div>
                <h4 className="font-medium text-white">Freelance</h4>
                <p className="text-sm text-white/70">Technical Documentation</p>
                <p className="text-xs text-white/50">2021 - Present</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Core Philosophy */}
      <motion.div 
        className="mt-12 bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-8 rounded-2xl border border-white/10 shadow-lg text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-semibold text-white mb-4">Work Philosophy</h3>
        <p className="text-white/90 max-w-3xl mx-auto">
          I believe in <span className="text-purple-400 font-medium">bridging technical and operational domains</span> through <span className="text-blue-400 font-medium">clear documentation</span> and <span className="text-emerald-400 font-medium">process optimization</span>. My hybrid skill set allows me to support engineering teams while ensuring smooth administrative workflows in tech-driven environments.
        </p>
      </motion.div>
    </motion.section>
  );
}