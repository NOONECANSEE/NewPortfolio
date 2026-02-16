"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";

export default function ProjectsPage() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [openIndex, setOpenIndex] = useState(null);

  

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  /* ---------------- FEATURED PROJECT ---------------- */

  const featured = {
    title: "Trackk.org — Fleet Operations SaaS Platform",
    desc: `Multi-tenant SaaS ecosystem engineered to manage fleets,
    automate payroll, control access hierarchies and operate logistics
    infrastructures at enterprise scale.`,

    metrics: [
      { value: "40K+", label: "Trips Managed" },
      { value: "₹12L+", label: "Payroll Automated" },
      { value: "6+", label: "Organizations" },
      { value: "99.9%", label: "Uptime" },
    ],

    systems: [
      "Multi-tenant organization isolation",
      "RBAC hierarchies",
      "Subscription lifecycle engine",
      "Automated payroll workflows",
      "Fleet dashboards",
      "Driver payout systems",
    ],

    infra: [
      "AWS EC2 + RDS",
      "S3 storage",
      "Razorpay billing",
      "PostgreSQL clusters",
      "Prisma ORM",
    ],

    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  };

  /* ---------------- SECONDARY PROJECTS ---------------- */

 /* ---------------- SECONDARY PROJECTS ---------------- */

const projects = [
  {
    title: "Bhejo Gaadi — Ride Booking SaaS",
    desc: "Multi-tenant ride booking ecosystem for transport agencies with agent commission automation.",

    impact: [
      "Live ride booking ops",
      "Commission automation",
      "Fleet onboarding",
      "Trip lifecycle tracking",
    ],

    systems: [
      "Ride orchestration",
      "Driver assignment",
      "Fare engine",
      "Commission ledger",
    ],

    infra: [
      "AWS compute",
      "PostgreSQL",
      "Redis caching",
      "Prisma ORM",
    ],

    tech: ["Next.js", "Node.js", "PostgreSQL"],
  },

  {
    title: "Trackk — Fleet Management App",
    desc: "Enterprise fleet management ecosystem across mobile + admin web platforms.",

    impact: [
      "Fleet monitoring",
      "Attendance automation",
      "Hub mapping",
      "Salary workflows",
    ],

    systems: [
      "Vehicle lifecycle",
      "Driver verification",
      "Attendance capture",
      "Payroll engine",
    ],

    infra: [
      "MongoDB",
      "Node APIs",
      "Expo mobile",
      "AWS storage",
    ],

    tech: ["React Native", "Node.js", "MongoDB"],
  },

  /* ----------- ADDED PROJECT 3 ----------- */

  {
    title: "Recruitment Job Portal — Hiring Platform",
    desc: "Full-stack recruitment ecosystem connecting candidates and recruiters with lifecycle hiring workflows.",

    impact: [
      "End-to-end hiring lifecycle",
      "Recruiter workflow automation",
      "Candidate discovery tools",
      "Application tracking systems",
    ],

    systems: [
      "Role-based dashboards",
      "Application review engine",
      "Recruiter shortlisting",
      "Admin moderation panel",
    ],

    infra: [
      "MongoDB database",
      "REST API services",
      "Cloud media storage",
      "JWT authentication",
    ],

    tech: ["React.js", "Node.js", "MongoDB"],
  },

  /* ----------- ADDED PROJECT 4 ----------- */

  {
    title: "Pickkup.io — Corporate Website Platform",
    desc: "High-performance corporate web platform built for brand visibility, SEO reach and marketing conversions.",

    impact: [
      "Improved SEO visibility",
      "Conversion landing flows",
      "Responsive brand presence",
      "Marketing scalability",
    ],

    systems: [
      "Corporate CMS structure",
      "Landing funnel architecture",
      "Content delivery optimization",
      "Brand storytelling pages",
    ],

    infra: [
      "Vercel hosting",
      "Global CDN delivery",
      "SEO optimization stack",
      "Analytics integration",
    ],

    tech: ["React.js", "Tailwind CSS"],
  },
];

  return (
    <main className="bg-[#020617] text-white min-h-screen overflow-hidden relative">
      {/* ===== TOP GRADIENT DIVIDER ===== */}
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

    

      {/* ---------------- HEADER ---------------- */}

      <section className="pt-40 pb-24 px-6 text-center relative z-10">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Product Engineering Case Studies
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Enterprise SaaS platforms, logistics infrastructures,
          and automation ecosystems engineered for scale,
          reliability and operational impact.
        </p>

      </section>

      {/* ---------------- FEATURED ---------------- */}

      <section className="max-w-7xl mx-auto px-6 pb-32 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          p-10 md:p-14 rounded-3xl
          border border-white/10
          bg-gradient-to-b from-white/5 to-white/[0.02]
          backdrop-blur-2xl
        "
        >

          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mb-6" />

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {featured.title}
          </h2>

          <p className="text-gray-400 max-w-3xl mb-10">
            {featured.desc}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">

            {featured.metrics.map((m, i) => (
              <div key={i}>
                <h3 className="text-3xl font-bold">{m.value}</h3>
                <p className="text-xs text-gray-400">{m.label}</p>
              </div>
            ))}

          </div>

          {/* Systems + Infra */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">

            <List title="Systems Engineered" items={featured.systems} />
            <List title="Deployment Infrastructure" items={featured.infra} />

          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-3 mb-10">
            {featured.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500">
            <ExternalLink size={16} />
            View Full Case Study
          </button>

        </motion.div>

      </section>

      {/* ---------------- SECONDARY GRID ---------------- */}

      <section className="max-w-6xl mx-auto px-6 pb-40 relative z-10">

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {projects.map((p, i) => {
            const isOpen = openIndex === i;

            return (
       <div
  key={i}
  className="
  self-start
  border border-white/10 rounded-3xl p-8
  bg-gradient-to-b from-white/5 to-white/[0.02]
  backdrop-blur-xl
"
>



                <div className="w-10 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mb-4" />

                <h3 className="text-lg font-semibold mb-2">
                  {p.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6">
                  {p.desc}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, k) => (
                    <span
                      key={k}
                      className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Toggle */}
                <button
                  onClick={() => toggle(i)}
                  className="flex items-center gap-2 text-sm text-cyan-400"
                >
                  View Case Study
                  <ChevronDown
                    size={16}
                    className={`transition ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Collapse */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >

                      <div className="border-t border-white/10 my-8" />

                      {/* Impact */}
                      <TagSection title="Impact" items={p.impact} />

                      {/* Systems + Infra */}
                      <div className="grid grid-cols-2 gap-8 mb-10">
                        <List title="Systems" items={p.systems} />
                        <List title="Infrastructure" items={p.infra} />
                      </div>

                      {/* Architecture */}
                      <ArchitectureDiagram />

                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

        </div>

      </section>

    </main>
  );
}

/* ---------------- REUSABLE COMPONENTS ---------------- */

function List({ title, items }) {
  return (
    <div>
      <h4 className="text-sm text-gray-400 mb-3">{title}</h4>
      <div className="space-y-2 text-sm text-gray-300">
        {items.map((s, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-cyan-400">▹</span>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

function TagSection({ title, items }) {
  return (
    <div className="mb-8">
      <h4 className="text-sm text-gray-400 mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((m, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 bg-indigo-500/10 border border-indigo-400/20 rounded-full"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- ARCHITECTURE DIAGRAM ---------------- */

function ArchitectureDiagram() {
  return (
    <div>

      <h4 className="text-sm text-gray-400 mb-6">
        System Architecture
      </h4>

      <div className="grid grid-cols-3 gap-4 text-center text-xs">

        <Node label="Client Apps" />
        <Node label="API Gateway" />
        <Node label="Auth Service" />

        <Arrow />
        <Arrow />
        <Arrow />

        <Node label="Core Services" />
        <Node label="Queue / Jobs" />
        <Node label="Database" />

      </div>

    </div>
  );
}

function Node({ label }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
      {label}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center text-gray-500">
      ↓
    </div>
  );
}
