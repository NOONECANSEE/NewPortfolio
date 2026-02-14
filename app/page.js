"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Menu } from "lucide-react";
import { useState, useEffect } from "react";
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
      title: "SaaS CRM Platform",
      desc: "Multi-tenant CRM with analytics & automation.",
      image: "/projects/crm.png",
      features: [
        "Role-based access control",
        "Sales analytics dashboard",
        "Workflow automation",
      ],
      metrics: "Handled 50K+ users",
      tech: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
      github: "#",
      live: "#",
    },

    {
      title: "SaaS CRM Platform",
      desc: "Multi-tenant CRM with analytics & automation.",
      image: "/projects/crm.png",
      features: [
        "Role-based access control",
        "Sales analytics dashboard",
        "Workflow automation",
      ],
      metrics: "Handled 50K+ users",
      tech: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
      github: "#",
      live: "#",
    },

    {
      title: "SaaS CRM Platform",
      desc: "Multi-tenant CRM with analytics & automation.",
      image: "/projects/crm.png",
      features: [
        "Role-based access control",
        "Sales analytics dashboard",
        "Workflow automation",
      ],
      metrics: "Handled 50K+ users",
      tech: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
      github: "#",
      live: "#",
    },

    {
      title: "SaaS CRM Platform",
      desc: "Multi-tenant CRM with analytics & automation.",
      image: "/projects/crm.png",
      features: [
        "Role-based access control",
        "Sales analytics dashboard",
        "Workflow automation",
      ],
      metrics: "Handled 50K+ users",
      tech: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
      github: "#",
      live: "#",
    },

    {
      title: "SaaS CRM Platform",
      desc: "Multi-tenant CRM with analytics & automation.",
      image: "/projects/crm.png",
      features: [
        "Role-based access control",
        "Sales analytics dashboard",
        "Workflow automation",
      ],
      metrics: "Handled 50K+ users",
      tech: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
      github: "#",
      live: "#",
    },

    {
      title: "SaaS CRM Platform",
      desc: "Multi-tenant CRM with analytics & automation.",
      image: "/projects/crm.png",
      features: [
        "Role-based access control",
        "Sales analytics dashboard",
        "Workflow automation",
      ],
      metrics: "Handled 50K+ users",
      tech: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
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
            src="/avatar.png"
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
          <span className="block bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
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


      {/* ABOUT */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-28 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 leading-8 text-lg">
          Full Stack Developer with 2 years of experience delivering SaaS
          products and mobile applications. I specialize in serverless systems,
          scalable APIs, and production‑grade cloud deployments.
        </p>
      </motion.section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Experience</h2>

          <div className="space-y-8">
            {[
              {
                role: "Full Stack Developer",
                company: "Freelance / Contract",
                duration: "2024 — Present",
                points: [
                  "Built multi-tenant SaaS CRM platform",
                  "Developed serverless APIs handling 1M+ requests",
                  "Deployed scalable infra on AWS",
                ],
              },
              {
                role: "MERN Stack Developer",
                company: "Startup Collaboration",
                duration: "2023 — 2024",
                points: [
                  "Built real-time social platform",
                  "Implemented WebSocket chat system",
                  "Optimized MongoDB queries by 40%",
                ],
              },
            ].map((job, i) => (
              <div
                key={i}
                className="border border-gray-800 rounded-2xl p-6 bg-black/40"
              >
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  {job.company} • {job.duration}
                </p>

                <ul className="text-gray-400 text-sm space-y-2">
                  {job.points.map((p, j) => (
                    <li key={j}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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

      {/* STATS */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
          {[
            ["2+", "Years Experience"],
            ["15+", "Projects Delivered"],
            ["50K+", "Users Impacted"],
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-800 p-6 rounded-xl bg-black/40"
            >
              <h3 className="text-2xl font-bold text-purple-400">{item[0]}</h3>
              <p className="text-gray-400 text-sm">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
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
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden border border-gray-800 bg-black/40 backdrop-blur-xl shadow-2xl"
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
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

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, k) => (
                    <span
                      key={k}
                      className="px-3 py-1 text-xs bg-gray-800/80 border border-gray-700 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 transition"
                  >
                    <Github size={16} /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Services</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "SaaS Development",
              desc: "Scalable multi-tenant SaaS platforms.",
            },
            {
              title: "API Development",
              desc: "Secure & high-performance APIs.",
            },
            {
              title: "Mobile Apps",
              desc: "React Native production apps.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="border border-gray-800 rounded-2xl p-6 bg-black/40"
            >
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 px-6 bg-gradient-to-b from-black to-gray-950 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400 mb-10">
          Let’s build scalable products together.
        </p>

        <div className="flex justify-center gap-8">
          {[Github, Linkedin, Mail].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-4 border border-gray-800 rounded-2xl hover:border-purple-500/40 transition cursor-pointer"
            >
              <Icon />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Something Great</h2>

        <p className="text-gray-400 mb-8">
          Available for freelance & full-time roles.
        </p>

        <a className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-2xl">
          Hire Me
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
        © {new Date().getFullYear()} Anshu Singla • Built with Next.js
      </footer>
    </div>
  );
}
