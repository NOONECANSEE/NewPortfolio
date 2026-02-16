"use client";

import { motion } from "framer-motion";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiExpo,
} from "react-icons/si";

import { FaAws, FaServer } from "react-icons/fa";
import { RiDatabase2Line } from "react-icons/ri";

export default function TechStackPage() {

  /* Tech Categories */
  const stacks = [
    {
      title: "Frontend Engineering",
      desc: "Building responsive, performant and scalable UI systems.",
      items: [
        { name: "React.js", icon: SiReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      ],
    },
    {
      title: "Backend & APIs",
      desc: "Designing scalable services & business logic layers.",
      items: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
        { name: "REST APIs", icon: FaServer, color: "text-indigo-400" },
      ],
    },
    {
      title: "Database Systems",
      desc: "Handling relational & document-based architectures.",
      items: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
        { name: "Prisma ORM", icon: SiPrisma, color: "text-indigo-400" },
      ],
    },
    {
      title: "Mobile Development",
      desc: "Building cross-platform production mobile apps.",
      items: [
        { name: "React Native", icon: SiReact, color: "text-cyan-400" },
        { name: "Expo", icon: SiExpo, color: "text-white" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
      ],
    },
    {
      title: "Cloud & DevOps",
      desc: "Deploying scalable cloud-native infrastructures.",
      items: [
        { name: "AWS", icon: FaAws, color: "text-orange-400" },
        { name: "S3 Storage", icon: FaAws, color: "text-yellow-400" },
        { name: "Lambda", icon: FaAws, color: "text-orange-300" },
      ],
    },
    {
      title: "Architecture & Systems",
      desc: "Designing enterprise-grade product architectures.",
      items: [
        {
          name: "Multi-Tenant SaaS",
          icon: RiDatabase2Line,
          color: "text-indigo-400",
        },
        {
          name: "RBAC Systems",
          icon: RiDatabase2Line,
          color: "text-purple-400",
        },
        {
          name: "Subscription Billing",
          icon: RiDatabase2Line,
          color: "text-cyan-400",
        },
      ],
    },
  ];

  return (
    <main className="bg-[#020617] text-white min-h-screen overflow-hidden relative">

      {/* ===== TOP GRADIENT DIVIDER (Same as other pages) ===== */}
      <div
        className="
          absolute top-0 left-0 w-full h-px
          bg-gradient-to-r
          from-transparent
          via-indigo-500
          to-transparent
          opacity-40
        "
      />

      {/* ===== PAGE HEADER ===== */}
      <section className="pt-40 pb-24 px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Tech Stack & Capabilities
        </motion.h1>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          My engineering toolkit focuses on building scalable SaaS platforms,
          high-performance APIs, real-time systems, and production-ready mobile
          applications.
        </p>

        <div className="h-px w-40 mx-auto mt-10 bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
      </section>

      {/* ===== STACK GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <div className="grid md:grid-cols-3 gap-10">
          {stacks.map((stack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                group
                border border-white/10
                rounded-3xl p-8
                bg-white/5 backdrop-blur-xl
                hover:border-indigo-400/40
                transition
              "
            >
              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {stack.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                {stack.desc}
              </p>

              {/* Tech Items */}
              <ul className="space-y-4">
                {stack.items.map((item, j) => {
                  const Icon = item.icon;

                  return (
                    <li
                      key={j}
                      className="
                        flex items-center gap-3
                        text-gray-300 text-sm
                        group-hover:text-white transition
                      "
                    >
                      <Icon className={`text-xl ${item.color}`} />
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
