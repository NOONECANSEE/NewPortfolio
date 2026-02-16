"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

import {
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /* Mouse Spotlight */
  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* Scroll Depth */
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 500], [0, 120]);

  /* Floating Icons */
  const floatingIcons = [
    { Icon: SiReact, x: "12%", y: "25%", size: 40 },
    { Icon: SiNextdotjs, x: "85%", y: "35%", size: 38 },
    { Icon: SiMongodb, x: "18%", y: "80%", size: 36 },
    { Icon: SiPostgresql, x: "75%", y: "75%", size: 40 },
    { Icon: FaAws, x: "50%", y: "10%", size: 42 },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-44 px-6 overflow-hidden bg-[#020617]">

      {/* ===== Mouse Spotlight ===== */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(
            600px at ${mouse.x}px ${mouse.y}px,
            rgba(34,211,238,0.15),
            transparent 80%
          )`,
        }}
      />

      {/* ===== Grid Background ===== */}
      <motion.div
        style={{ y: ySlow }}
        className="absolute inset-0 opacity-[0.05]"
      >
        <img
          src="/grid.svg"
          className="w-full h-full object-cover"
          alt="grid"
        />
      </motion.div>

      {/* ===== Floating Icons ===== */}
      {floatingIcons.map(({ Icon, x, y, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-300/40"
          style={{ left: x, top: y, fontSize: size }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 14 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon />
        </motion.div>
      ))}

      {/* ===== Avatar Card ===== */}
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        perspective={1200}
        glareEnable
        glareMaxOpacity={0.2}
        scale={1.05}
        className="relative z-10"
      >
        <div className="relative p-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500">

          <div
            className="
              p-6 rounded-full
              bg-[#020617]
              backdrop-blur-xl
              border border-white/10
              shadow-[0_0_80px_rgba(34,211,238,0.35)]
            "
          >
            <img
              src="/avatar.jpeg"
              className="w-32 h-32 rounded-full"
              alt="avatar"
            />
          </div>

          {/* Status Pulse */}
          {/* <span className="absolute bottom-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-ping" />
          <span className="absolute bottom-4 right-4 w-4 h-4 bg-green-400 rounded-full" /> */}

        </div>
      </Tilt>

      {/* ===== Heading ===== */}
      <h1 className="text-5xl md:text-7xl font-bold mt-12 leading-tight z-10">
        Full Stack
        <span
          className="
            block
            bg-gradient-to-r
            from-cyan-300 via-indigo-400 to-cyan-300
            bg-[length:300%_300%]
            animate-gradient
            bg-clip-text text-transparent
          "
        >
          Developer
        </span>
      </h1>

      {/* ===== Subtitle ===== */}
      <p className="text-gray-400 max-w-2xl text-lg mt-6 z-10">
        I architect scalable SaaS platforms, high-performance APIs,
        and production-grade mobile applications.
      </p>

      {/* ===== CTA ===== */}
      <div className="flex gap-5 mt-12 z-10">

        <a
          href="#projects"
          className="
            px-8 py-3 rounded-2xl
            bg-gradient-to-r from-cyan-400 to-indigo-500
            text-black font-semibold
            shadow-lg shadow-cyan-500/30
            hover:scale-105 transition
          "
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="
            px-8 py-3 rounded-2xl
            border border-white/20
            hover:bg-white/5
            transition backdrop-blur-xl
          "
        >
          Download Resume
        </a>

      </div>

      {/* ===== Stats ===== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 z-10">

        {[
          ["2+", "Years Experience"],
          ["15+", "Projects Delivered"],
          ["50K+", "Users Impacted"],
          ["5+", "SaaS Platforms"],
        ].map((stat, i) => (

          <motion.div
            key={i}
            whileHover={{ y: -8, scale: 1.05 }}
            className="
              text-center
              border border-white/10
              rounded-xl px-6 py-6
              bg-white/5 backdrop-blur-xl
              hover:border-cyan-400/40
              hover:shadow-cyan-400/20
              hover:shadow-lg
              transition
            "
          >
            <h3 className="text-3xl font-bold text-cyan-400">
              {stat[0]}
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              {stat[1]}
            </p>
          </motion.div>

        ))}

      </div>


    </section>
  );
}
