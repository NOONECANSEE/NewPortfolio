"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress, scrollY } = useScroll();

  /* Navbar shrink on scroll */
  const height = useTransform(scrollY, [0, 120], [80, 64]);
  const backdrop = useTransform(
    scrollY,
    [0, 120],
    ["rgba(2,6,23,0.4)", "rgba(2,6,23,0.8)"]
  );

  const links = ["about", "projects", "tech", "contact"];

  return (
    <>
      {/* NAVBAR WRAPPER */}
      <motion.div
        style={{ height, background: backdrop }}
        className="
          fixed top-0 left-0 right-0 z-[100]
          backdrop-blur-xl
          border-b border-white/10
          flex items-center
        "
      >
        {/* Scroll Progress Bar */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="
            absolute bottom-0 left-0 right-0
            h-[2px] origin-left
            bg-gradient-to-r from-cyan-400 to-indigo-500
          "
        />

        {/* Content */}
        <div className="flex items-center justify-between w-full px-6 md:px-12">

          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="
              text-xl md:text-2xl font-bold
              bg-gradient-to-r
              from-cyan-300 via-indigo-400 to-cyan-300
              bg-[length:200%_200%]
              animate-[gradient_6s_ease_infinite]
              bg-clip-text text-transparent
              cursor-pointer
            "
          >
            Anshu Singla
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">

            {links.map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                whileHover={{ y: -2 }}
                className="
                  relative group
                  text-gray-300
                  hover:text-white
                  transition
                "
              >
                {item.toUpperCase()}

                {/* Hover Beam Line */}
                <span
                  className="
                    absolute left-0 -bottom-2 h-[2px] w-0
                    bg-gradient-to-r from-cyan-400 to-indigo-500
                    transition-all duration-300
                    group-hover:w-full
                  "
                />

                {/* Glow Line */}
                <span
                  className="
                    absolute left-0 -bottom-2 h-[6px] w-0
                    bg-cyan-400/40 blur-md
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </motion.a>
            ))}

            {/* Resume Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/resume.pdf"
              className="
                px-4 py-2 rounded-xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                hover:border-cyan-400/40
                hover:bg-cyan-400/10
                transition
              "
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.div>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="
            fixed top-[80px] left-0 right-0 z-[90]
            md:hidden
            backdrop-blur-xl
            bg-[#020617]/95
            border-b border-white/10
          "
        >
          <div className="flex flex-col items-center gap-8 py-10">

            {links.map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setMenuOpen(false)}
                className="
                  text-gray-300
                  hover:text-white
                  transition
                "
              >
                {item.toUpperCase()}
              </motion.a>
            ))}

            {/* Divider */}
            <div className="w-1/2 h-px bg-white/10" />

            <a
              href="/resume.pdf"
              className="
                px-6 py-2 rounded-xl
                border border-white/20
                hover:bg-white/5
                transition
              "
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
