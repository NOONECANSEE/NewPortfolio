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
  const [pos, setPos] = useState({ x: 0, y: 0 });

  /* Mouse Light */
  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* Scroll Depth */
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 500], [0, 120]);

  /* Free Floating Icons */
  const floatingIcons = [
    { Icon: SiReact, x: "10%", y: "20%", size: 40 },
    { Icon: SiNextdotjs, x: "80%", y: "30%", size: 38 },
    { Icon: SiMongodb, x: "20%", y: "75%", size: 36 },
    { Icon: SiPostgresql, x: "70%", y: "70%", size: 40 },
    { Icon: FaAws, x: "50%", y: "15%", size: 42 },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-40 px-6 overflow-hidden bg-[#020617]">

      {/* Magnetic Cursor Glow */}
      <div
        className="
          fixed w-[600px] h-[600px]
          bg-cyan-400/10 blur-[160px]
          rounded-full pointer-events-none z-0
        "
        style={{ left: pos.x - 300, top: pos.y - 300 }}
      />

      {/* Grid Background */}
      <motion.div
        style={{ y: ySlow }}
        className="absolute inset-0 opacity-[0.05]"
      >
        <img
          src="/grid.svg"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Free Floating Icons */}
      {floatingIcons.map(({ Icon, x, y, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-300/40"
          style={{
            left: x,
            top: y,
            fontSize: size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon />
        </motion.div>
      ))}

      {/* Avatar 3D Card */}
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        perspective={1200}
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.05}
        className="relative z-10"
      >
        <div
          className="
            p-6 rounded-3xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-[0_0_60px_rgba(34,211,238,0.25)]
          "
        >
          <img
            src="/avatar.jpeg"
            className="w-32 h-32 rounded-full"
          />
        </div>
      </Tilt>

      {/* Availability Badge */}
      <span
        className="
          mt-8 px-4 py-1 text-xs rounded-full
          bg-cyan-400/10 text-cyan-300
          border border-cyan-400/30
          backdrop-blur-xl z-10
        "
      >
        ● Available for Work
      </span>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-bold mt-10 leading-tight z-10">
        Full Stack
        <span
          className="
            block
            bg-gradient-to-r
            from-cyan-300 via-indigo-400 to-cyan-300
            bg-[length:200%_200%]
            animate-[gradient_6s_ease_infinite]
            bg-clip-text text-transparent
          "
        >
          Developer
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 max-w-2xl text-lg mt-6 z-10">
        I architect scalable SaaS platforms, high-performance APIs,
        and production-grade mobile applications.
      </p>

      {/* CTA */}
      <div className="flex gap-4 mt-12 z-10">
        <a
          href="#projects"
          className="
            px-8 py-3 rounded-2xl
            bg-cyan-400/10 border border-cyan-400/30
            backdrop-blur-xl
            hover:bg-cyan-400/20 transition
          "
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="
            px-8 py-3 rounded-2xl
            border border-white/20
            hover:bg-white/5 transition
          "
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
