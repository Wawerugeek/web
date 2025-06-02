"use client";

import React from "react";
import { ReactNode } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FaPaperPlane, FaLinkedin, FaGithub, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";



interface SubmitBtnProps {
  children: ReactNode;
}


export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative mb-20 sm:mb-28 w-[min(100%,60rem)] mx-auto px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Decorative background elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 to-transparent rounded-full blur-3xl -z-10" />

      <SectionHeading>
        <span className="relative">
          Get In Touch
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </span>
      </SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        {/* Contact Information */}
        <motion.div 
          className="space-y-6"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Direct Contact</h3>
            
            <div className="space-y-4">
              <a
                href="mailto:stevemuiruri84@gmail.com"
                className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-sm text-white/70">stevemuiruri84@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+254712345678"
                className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                  <FaPhone className="text-white text-lg" />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-sm text-white/70">+254 701 313 327 </p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Social Profiles</h3>
            <div className="grid grid-cols-2 gap-3">
              <motion.a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 rounded-lg transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaLinkedin className="text-[#0A66C2] text-xl" />
                <span className="text-white">LinkedIn</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700 rounded-lg transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaGithub className="text-white text-xl" />
                <span className="text-white">GitHub</span>
              </motion.a>
              
              <motion.a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 border border-[#1DA1F2]/30 rounded-lg transition-colors"
                whileHover={{ y: -2 }}
              >
                <FaTwitter className="text-[#1DA1F2] text-xl" />
                <span className="text-white">Twitter</span>
              </motion.a>
              
              <motion.a
                href="https://upwork.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-[#14A800]/10 hover:bg-[#14A800]/20 border border-[#14A800]/30 rounded-lg transition-colors"
                whileHover={{ y: -2 }}
              >
                <SiUpwork className="text-[#14A800] text-xl" />
                <span className="text-white">Upwork</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully! I'll get back to you ASAP!");
          }}
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Send Me a Message</h3>
          
          <div className="space-y-4">
            <div>
              <input
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white/30 transition-all"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email address"
              />
            </div>
            
            <div>
              <textarea
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white/30 transition-all min-h-[150px]"
                name="message"
                placeholder="Your message here..."
                required
                maxLength={5000}
              />
            </div>
            
            <div className="pt-2">
              <SubmitBtn>
                <span className="flex items-center gap-2">
                  <FaPaperPlane className="text-sm" />
                  Send Message
                </span>
              </SubmitBtn>
            </div>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}