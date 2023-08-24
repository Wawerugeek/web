"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  I am an accomplished Full-Stack Software Developer with a fervent passion for software development.
  My skill set encompasses both backend and frontend technologies, along with proficiency in database management, UI/UX design, and DevOps practices.
  With a robust ability to craft robust web applications, optimize performance, and deliver exceptional user experiences,
  I bring a strong expertise in containerization, API development, and cloud technologies to the table.
  My goal is to leverage my expertise within a dynamic and innovative team environment, contributing to the creation of cutting-edge solutions.
</p>

<p className="mb-3">
  In my professional journey, I've excelled as a Freelancer Developer, contributing to the development and maintenance of web applications using React, Express, and Node.js.
  I've demonstrated my capability to create responsive UI designs for optimal user experiences using Tailwind CSS.
  With a track record of integrating front-end and back-end services, optimizing database structures, and implementing DevOps practices, including Docker containerization and CI/CD pipelines,
  I've ensured streamlined development and deployment.
</p>

<p>
  I am currently pursuing Software Engineering at Alx-Africa and hold a Bachelor of Science in Applied Physics and Computer Science from Multimedia University of Kenya.
</p>
    </motion.section>
  );
}
