"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const projects = [
    {
      title: "Bhejo Gaadi — SaaS Ride Booking Platform",
      desc: "Full-stack multi-tenant ride booking SaaS platform enabling agents to register and book rides for customers while earning margins per booking.",

      image: "/projects/bhejo-gaadi.png",

      features: [
        "Organization-based schema for multi-tenant SaaS architecture",
        "Live driver & vehicle tracking system",
        "Agent ride booking with margin calculation",
        "Responsive dashboard & booking workflows",
      ],

      metrics: "Production-ready live SaaS product",

      tech: ["Next.js", "Node.js", "Express", "Prisma", "PostgreSQL"],

      github: "#",
      live: "#",
    },

    {
      title: "Job Portal Application",
      desc: "Full-stack job portal enabling candidates and recruiters to connect, manage applications, and streamline hiring workflows.",

      image: "/projects/job-portal.png",

      features: [
        "Regex-powered job search & filtering",
        "Role-based access (Admin / Recruiter / Candidate)",
        "Application tracking system",
        "Recruiter shortlist & candidate review",
      ],

      metrics: "Full hiring lifecycle platform",

      tech: ["React.js", "Node.js", "MongoDB", "REST APIs"],

      github: "#",
      live: "#",
    },

    {
      title: "Driver Management Mobile App",
      desc: "React Native mobile application for managing driver attendance, vehicle tracking, and document verification.",

      image: "/projects/mobile-app.png",

      features: [
        "Role-based authentication (Superadmin / Admin / Driver)",
        "Real-time GPS vehicle tracking",
        "Attendance via number plate scanning",
        "IDfy document verification integration",
        "Push notifications & fleet monitoring",
      ],

      metrics: "Published production mobile app",

      tech: ["React Native", "Expo", "Node.js", "MongoDB"],

      github: "#",
      live: "#",
    },

    {
      title: "Company Website",
      desc: "Responsive corporate website built with performance optimization and SEO best practices.",

      image: "/projects/company-site.png",

      features: [
        "Fully responsive UI",
        "SEO optimization",
        "Cross-device compatibility",
        "Performance-focused build",
      ],

      metrics: "Optimized corporate web presence",

      tech: ["React.js", "Tailwind CSS"],

      github: "#",
      live: "#",
    },
  ];

  const stacks = [
    {
      title: "Frontend",
      items: [
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "React Native", icon: SiReact, color: "text-cyan-400" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express", icon: SiExpress, color: "text-gray-300" },
        { name: "Prisma", icon: SiPrisma, color: "text-indigo-400" },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      ],
    },
    {
      title: "Cloud",
      items: [
        { name: "AWS", icon: FaAws, color: "text-yellow-400" },
        { name: "Lambda", icon: FaAws, color: "text-orange-400" },
        { name: "S3", icon: FaAws, color: "text-yellow-500" },
      ],
    },
  ];

  const techIcons = [
    { icon: SiReact, color: "text-cyan-400" },
    { icon: SiNextdotjs, color: "text-white" },
    { icon: SiTailwindcss, color: "text-sky-400" },
    { icon: SiNodedotjs, color: "text-green-500" },
    { icon: SiExpress, color: "text-gray-300" },
    { icon: SiPrisma, color: "text-indigo-400" },
    { icon: SiMongodb, color: "text-green-400" },
    { icon: SiPostgresql, color: "text-blue-400" },
    { icon: FaAws, color: "text-yellow-400" },
  ];

  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 500], [0, 200]);

  const floatingIcons = [
    { Icon: SiReact, x: "10%", y: "20%" },
    { Icon: SiNextdotjs, x: "80%", y: "30%" },
    { Icon: SiMongodb, x: "20%", y: "75%" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-black text-white min-h-screen font-sans scroll-smooth">
      <div
        className="fixed w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full pointer-events-none z-0"
        style={{ left: pos.x - 200, top: pos.y - 200 }}
      />

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 right-0 z-[100]">
        {/* Scroll Progress Bar */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="h-1 origin-left bg-gradient-to-r from-purple-500 to-blue-500"
        />

        {/* Actual Navbar */}
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="
      flex items-center justify-between
      px-6 md:px-12 py-4
      bg-black/60 backdrop-blur-xl
      border-b border-white/10
    "
        >
          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Anshu Singla
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["about", "projects", "tech", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="relative group">
                {item.toUpperCase()}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all group-hover:w-full" />
              </a>
            ))}

            <a
              href="/resume.pdf"
              className="border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10 transition"
            >
              Resume
            </a>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <Menu />
          </button>
        </motion.nav>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
      md:hidden
      flex flex-col items-center gap-6 py-6
      bg-black border-b border-gray-800
    "
        >
          {["about", "projects", "tech", "contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
              {item.toUpperCase()}
            </a>
          ))}
        </motion.div>
      )}

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-36 px-6 relative overflow-hidden">
        {/* BACKGROUND GRID */}
        <div className="absolute inset-0 opacity-20 z-0">
          <img
            src="/grid.svg"
            alt="grid"
            className="w-full h-full object-cover"
          />
        </div>

        {/* GRADIENT ORBS */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full" />

        <div className="flex flex-col items-center">
          {/* Avatar */}
          <img
            src="/avatar.jpeg"
            className="w-32 h-32 rounded-full border 
               border-purple-500/40 shadow-xl mb-6"
          />
          {/* FLOATING ICONS */}
          {floatingIcons.map(({ Icon, x, y }, i) => (
            <motion.div
              key={i}
              className="absolute text-5xl text-white/10 z-10"
              style={{ left: x, top: y }}
              animate={{ y: [0, -25, 0] }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                repeatType: "mirror", // 🔥 smooth reverse
                ease: "easeInOut",
              }}
            >
              <Icon />
            </motion.div>
          ))}

          {/* Availability */}
          <span
            className="px-4 py-1 text-xs rounded-full 
                   bg-green-500/10 text-green-400 
                   border border-green-500/30 mb-6"
          >
            Available for Work
          </span>
        </div>

        {/* Glow */}
        <motion.div
          style={{ y: glowY }}
          className="absolute w-[500px] h-[500px] 
             bg-purple-600/20 blur-[120px] 
             rounded-full"
        />

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Full Stack
          <span
            className="
  block
  bg-gradient-to-r
  from-purple-400 via-blue-500 to-purple-400
  bg-[length:200%_200%]
  animate-gradient
  bg-clip-text text-transparent
"
          >
            Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-2xl text-lg"
        >
          I build scalable SaaS platforms, serverless APIs, and mobile
          applications using MERN, Next.js, PostgreSQL, Prisma & AWS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 mt-10"
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-2xl font-medium hover:scale-105 transition shadow-lg"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="border border-gray-600 px-8 py-3 rounded-2xl hover:bg-gray-900 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </section>

      {/* TECH MARQUEE */}
      <section className="relative overflow-hidden py-10 border-y border-white/10 bg-black">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-16 text-5xl opacity-40 whitespace-nowrap"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16">
              {techIcons.map(({ icon: Icon, color }, i) => (
                <Icon key={i} className={color} />
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT PREMIUM */}
      {/* ABOUT — PREMIUM TEXT SECTION */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative py-32 px-6 overflow-hidden"
      >
        {/* BACKGROUND GLOW ORBS */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

          {/* GRADIENT DIVIDER */}
          <div className="h-1 w-24 mx-auto mb-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />

          {/* CONTENT */}
          <p className="text-gray-400 leading-8 text-lg mb-6">
            I’m a{" "}
            <span className="text-white font-medium">Full Stack Developer</span>{" "}
            specializing in building scalable SaaS platforms, high-performance
            APIs, and production-grade mobile applications.
          </p>

          <p className="text-gray-400 leading-8 text-lg mb-6">
            With <span className="text-white font-medium">2+ years</span> of
            hands-on experience, I’ve architected and deployed multi-tenant SaaS
            systems, subscription billing platforms, and real-time tracking
            applications using modern technologies like Next.js, Node.js,
            PostgreSQL, Prisma, and AWS.
          </p>

          <p className="text-gray-400 leading-8 text-lg">
            I focus on clean architecture, performance optimization, and
            delivering secure, scalable systems that create measurable business
            impact.
          </p>

          {/* STATS STRIP */}
          <div className="grid grid-cols-3 gap-6 mt-14">
            {[
              ["2+", "Years Experience"],
              ["15+", "Projects Delivered"],
              ["50K+", "Users Impacted"],
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.03 }}
                className="
            border border-white/10
            rounded-xl p-6
            bg-black/40 backdrop-blur-xl
            hover:border-purple-500/40
            transition
          "
              >
                <h3 className="text-2xl font-bold text-purple-400">
                  {item[0]}
                </h3>

                <p className="text-gray-400 text-sm mt-1">{item[1]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent my-20" />

      {/* EXPERIENCE */}

      <section id="experience" className="relative py-32 px-6 overflow-hidden">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full" />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Experience
          </h2>

          {/* EXPERIENCE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
        border border-white/10
        rounded-3xl p-8 md:p-12
        bg-black/40 backdrop-blur-xl
        hover:border-purple-500/40
        hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]
        transition
        relative overflow-hidden
      "
          >
            {/* CARD GLOW */}
            <div
              className="
        absolute inset-0 opacity-0 hover:opacity-100
        bg-gradient-to-r from-purple-500/10 to-blue-500/10
        transition
      "
            />

            {/* HEADER */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h3 className="text-2xl font-semibold">
                  Frontend & Mobile Developer
                </h3>

                <p className="text-gray-400 mt-1">Pickkup.io</p>
              </div>

              {/* DURATION BADGE */}
              <span
                className="
          mt-4 md:mt-0
          px-4 py-2 text-sm
          bg-purple-500/10
          border border-purple-500/30
          rounded-full text-purple-400
          w-fit
        "
              >
                June 2024 — Present
              </span>
            </div>

            {/* IMPACT STATS */}
            <div className="grid grid-cols-3 gap-6 mb-10 relative z-10">
              {[
                ["5+", "Apps Built"],
                ["2+", "SaaS Platforms"],
                ["Production", "Deployments"],
              ].map((item, i) => (
                <div
                  key={i}
                  className="
              border border-white/10
              rounded-xl p-4
              bg-black/40 backdrop-blur-xl
              text-center
            "
                >
                  <h4 className="text-lg font-bold text-purple-400">
                    {item[0]}
                  </h4>
                  <p className="text-gray-400 text-xs">{item[1]}</p>
                </div>
              ))}
            </div>

            {/* RESPONSIBILITIES */}
            <ul className="space-y-3 text-gray-400 text-sm relative z-10">
              {[
                "Developed scalable web applications using React.js & Next.js.",
                "Built and published a production mobile app with React Native (Expo).",
                "Architected a multi-tenant SaaS platform using Prisma & PostgreSQL.",
                "Developed a job portal with REST APIs & MongoDB.",
                "Optimized corporate website performance & SEO.",
                "Collaborated with cross-functional teams in Agile sprints.",
                "Delivered full-stack features from UI to backend APIs.",
              ].map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-purple-400">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech" className="py-32 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
            Tech Stack
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {stacks.map((stack, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.04 }}
                className="
                group
                border border-white/10
                rounded-2xl p-6
                bg-black/40 backdrop-blur-xl
                hover:border-purple-500/40
                transition relative overflow-hidden
              "
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition
                              bg-gradient-to-r from-purple-500/10 to-blue-500/10"
                />

                {/* Title */}
                <h3 className="font-semibold mb-6 text-lg relative z-10">
                  {stack.title}
                </h3>

                {/* Items */}
                <ul className="space-y-4 relative z-10">
                  {stack.items.map((item, j) => {
                    const Icon = item.icon;

                    return (
                      <li
                        key={j}
                        className="
                        flex items-center gap-3
                        text-gray-300 text-sm
                        group/item
                      "
                      >
                        {/* Icon */}
                        <Icon
                          className={`text-xl ${item.color}
                                    group-hover/item:scale-125
                                    transition`}
                        />

                        {/* Name */}
                        <span className="group-hover/item:text-white transition">
                          {item.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent my-20" />

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Featured Projects
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {projects.map((project, i) => (
            // <Tilt
            //   key={i}
            //   glareEnable={true}
            //   glareMaxOpacity={0.15}
            //   scale={1.02}
            //   transitionSpeed={2500}
            //   className="rounded-3xl"
            // >
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="
    group relative rounded-3xl overflow-hidden
    border border-gray-800
    bg-black/40 backdrop-blur-xl
    shadow-2xl
  "
            >
              {/* Glow Background */}
              <div
                className="
    absolute inset-0 opacity-0 group-hover:opacity-100
    transition duration-500
    bg-gradient-to-r from-purple-500/10 to-blue-500/10
  "
              />

              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
        w-full h-full object-cover
        group-hover:scale-110
        transition duration-700
      "
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Floating Buttons */}
                <div
                  className="
      absolute top-4 right-4 flex gap-2
      opacity-0 group-hover:opacity-100
      transition
    "
                >
                  <a className="p-2 bg-black/70 rounded-lg backdrop-blur">
                    <Github size={16} />
                  </a>

                  <a className="p-2 bg-black/70 rounded-lg backdrop-blur">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 relative z-10">
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>

                {/* Features */}
                <ul className="text-gray-400 text-sm space-y-1 mb-4">
                  {project.features.map((f, j) => (
                    <li key={j}>• {f}</li>
                  ))}
                </ul>

                {/* Metrics */}
                <p className="text-xs text-purple-400 mb-4">
                  {project.metrics}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, k) => (
                    <span
                      key={k}
                      className="
            px-3 py-1 text-xs
            bg-gray-800/80
            border border-gray-700
            rounded-full
            hover:border-purple-500/40
            transition
          "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="
          flex items-center gap-2 text-sm
          px-4 py-2 rounded-xl
          bg-gray-900 hover:bg-gray-800
          transition
        "
                  >
                    <Github size={16} /> Code
                  </a>

                  <a
                    href={project.live}
                    className="
          flex items-center gap-2 text-sm
          px-4 py-2 rounded-xl
          bg-gradient-to-r from-purple-500 to-blue-500
          hover:opacity-90 transition
        "
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            </motion.div>
            // </Tilt>
          ))}
        </motion.div>
      </section>
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent my-20" />

      {/* SERVICES */}
      {/* SERVICES — PREMIUM */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-600/10 blur-[140px] rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Services
          </h2>

          <p className="text-gray-500 text-center mb-20">
            Solutions I deliver to build scalable digital products
          </p>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "SaaS Development",
                desc: "Scalable multi-tenant SaaS platforms with subscription billing and cloud deployment.",
                icon: "☁️",
              },
              {
                title: "API Development",
                desc: "Secure, high-performance REST & serverless APIs with scalable architecture.",
                icon: "⚡",
              },
              {
                title: "Mobile Apps",
                desc: "Production-ready React Native mobile apps with real-time integrations.",
                icon: "📱",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="
            group relative
            border border-white/10
            rounded-3xl p-8
            bg-black/40 backdrop-blur-xl
            hover:border-purple-500/40
            hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]
            transition overflow-hidden
          "
              >
                {/* HOVER GLOW */}
                <div
                  className="
              absolute inset-0 opacity-0
              group-hover:opacity-100
              bg-gradient-to-r
              from-purple-500/10 to-blue-500/10
              transition duration-500
            "
                />

                {/* ICON */}
                <div
                  className="
            text-4xl mb-6
            opacity-80
            group-hover:scale-110
            transition
          "
                >
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-sm leading-6">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent my-20" />

      {/* CONTACT */}

      <section
        id="contact"
        className="
    relative py-32 px-6
    bg-gradient-to-b from-black to-gray-950
    overflow-hidden
    text-center
  "
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute top-10 left-1/3 w-72 h-72 bg-purple-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-blue-600/10 blur-[140px] rounded-full" />

        <div className="max-w-3xl mx-auto relative z-10">
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Build Something Great
          </h2>

          <p className="text-gray-400 mb-12">
            I’m available for freelance projects, SaaS development, and
            full-time opportunities.
          </p>

          {/* CONTACT CARD */}
          <div
            className="
        border border-white/10
        rounded-3xl p-10
        bg-black/40 backdrop-blur-xl
        shadow-2xl
      "
          >
            {/* EMAIL */}
            <p className="text-gray-400 text-sm mb-3">Reach me directly at</p>

            <h3
              className="
        text-lg font-semibold
        text-transparent bg-clip-text
        bg-gradient-to-r from-purple-400 to-blue-500
        mb-8
      "
            >
              anshusingla405@gmail.com
            </h3>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-6 mb-10">
              {[
                { Icon: Github, link: "#" },
                { Icon: Linkedin, link: "#" },
                { Icon: Mail, link: "mailto:anshusingla405@gmail.com" },
              ].map(({ Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  whileHover={{ y: -6, scale: 1.15 }}
                  transition={{ duration: 0.2 }}
                  className="
              p-4
              border border-white/10
              rounded-2xl
              bg-white/5 backdrop-blur-xl
              hover:border-purple-500/40
              hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
              transition
            "
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* CTA BUTTON */}
            <motion.a
              href="mailto:anshusingla405@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="
          inline-block
          px-8 py-3
          rounded-2xl
          bg-gradient-to-r from-purple-500 to-blue-500
          font-medium
          shadow-lg
          hover:opacity-90
          transition
        "
            >
              Hire Me
            </motion.a>
          </div>
        </div>
      </section>

      {/* CTA — PREMIUM FINAL CONVERSION */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* BACKGROUND GRADIENT */}
        <div
          className="
    absolute inset-0
    bg-gradient-to-r
    from-purple-600/20
    via-blue-600/20
    to-purple-600/20
  "
        />

        {/* GLOW ORBS */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-600/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-600/20 blur-[140px] rounded-full" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* GLASS CARD */}
          <div
            className="
      border border-white/10
      rounded-3xl
      p-12
      bg-black/40 backdrop-blur-xl
      shadow-2xl
    "
          >
            {/* AVAILABILITY BADGE */}
            <div
              className="
        inline-block
        px-4 py-1 mb-6
        text-xs rounded-full
        bg-green-500/10 text-green-400
        border border-green-500/30
      "
            >
              ● Available for Work
            </div>

            {/* HEADLINE */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let’s Build Something Great
            </h2>

            {/* SUBTEXT */}
            <p className="text-gray-400 mb-10">
              Open for freelance projects, SaaS development, and full-time
              opportunities.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* HIRE BUTTON */}
              <a
                href="#contact"
                className="
            px-8 py-3
            rounded-2xl
            bg-gradient-to-r from-purple-500 to-blue-500
            font-medium
            shadow-lg
            hover:scale-105
            hover:opacity-90
            transition
          "
              >
                Hire Me
              </a>

              {/* RESUME BUTTON */}
              <a
                href="/resume.pdf"
                className="
            px-8 py-3
            rounded-2xl
            border border-white/20
            hover:bg-white/10
            transition
          "
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* FOOTER — PREMIUM MINIMAL */}
      <footer className="relative py-12 px-6 border-t border-white/10 overflow-hidden">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-600/10 blur-[140px] rounded-full" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* BRAND */}
          <h3
            className="
        text-lg font-semibold mb-4
        text-transparent bg-clip-text
        bg-gradient-to-r from-purple-400 to-blue-500
      "
          >
            Anshu Singla
          </h3>

          {/* NAV LINKS */}
          <div className="flex justify-center gap-6 text-sm text-gray-500 mb-6">
            {["About", "Projects", "Tech", "Contact"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-5 mb-6">
            {[
              { Icon: Github, link: "#" },
              { Icon: Linkedin, link: "#" },
              { Icon: Mail, link: "mailto:anshusingla405@gmail.com" },
            ].map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                className="
            p-2 rounded-lg
            bg-white/5
            border border-white/10
            hover:border-purple-500/40
            hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]
            transition
          "
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* COPYRIGHT */}
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Anshu Singla • Built with Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
