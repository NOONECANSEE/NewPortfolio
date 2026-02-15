"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  CreditCard,
  Truck,
  Smartphone,
  Server,
  Database,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ServicesPage() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  /* Cursor Glow */
  useEffect(() => {
    const move = (e) => {
      requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* ---------------- SERVICES ---------------- */

  const services = [
    {
      title: "SaaS Platform Development",
      desc: "End-to-end multi-tenant SaaS infrastructures engineered for scalability and subscription operations.",
      impact: "Enterprise multi-tenant deployments",
      points: [
        "Multi-tenant architecture",
        "Organization isolation",
        "Admin dashboards",
        "Subscription workflows",
      ],
      tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
      icon: Cloud,
    },

    {
      title: "Subscription & Billing Systems",
      desc: "Revenue infrastructure powering automated billing and subscription lifecycle management.",
      impact: "Recurring revenue automation",
      points: [
        "Razorpay integration",
        "Plan management",
        "Invoice automation",
        "Webhook billing events",
      ],
      tech: ["Razorpay", "Webhooks", "Node.js"],
      icon: CreditCard,
    },

    {
      title: "Fleet & Logistics Platforms",
      desc: "Operational ecosystems for managing fleets, drivers, and logistics workflows.",
      impact: "Production fleet deployments",
      points: [
        "Vehicle lifecycle",
        "Driver management",
        "GPS tracking",
        "Payroll automation",
      ],
      tech: ["Realtime tracking", "Maps APIs"],
      icon: Truck,
    },

    {
      title: "Mobile App Engineering",
      desc: "Cross-platform mobile apps integrated with enterprise backend systems.",
      impact: "Live workforce mobile apps",
      points: [
        "React Native apps",
        "Attendance systems",
        "Push notifications",
        "Live tracking",
      ],
      tech: ["React Native", "Expo"],
      icon: Smartphone,
    },

    {
      title: "API & Backend Systems",
      desc: "Scalable backend infrastructures powering SaaS and enterprise platforms.",
      impact: "High-scale API systems",
      points: [
        "REST API development",
        "RBAC access systems",
        "Authentication flows",
        "Microservices",
      ],
      tech: ["Node.js", "Prisma", "MongoDB"],
      icon: Server,
    },

    {
      title: "Cloud & DevOps Deployment",
      desc: "Cloud-native infrastructure ensuring performance, scalability, and uptime.",
      impact: "Production AWS deployments",
      points: [
        "AWS infrastructure",
        "S3 storage",
        "Serverless functions",
        "CI/CD pipelines",
      ],
      tech: ["AWS", "Docker", "Vercel"],
      icon: Database,
    },
  ];

  return (
    <main className="bg-[#020617] text-white min-h-screen overflow-hidden">

      {/* Cursor Glow */}
      <div
        className="
          fixed pointer-events-none z-0
          w-40 h-40
          bg-gradient-to-r from-indigo-500/10 to-cyan-400/10
          blur-[100px] rounded-full
        "
        style={{ left: pos.x - 80, top: pos.y - 80 }}
      />

      {/* ---------------- HEADER ---------------- */}

      <section className="pt-40 pb-24 px-6 text-center relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Services & Capabilities
        </motion.h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Product engineering capabilities focused on SaaS platforms,
          logistics ecosystems, and revenue automation infrastructures.
        </p>

      </section>

      {/* ---------------- GRID ---------------- */}

      <section className="max-w-6xl mx-auto px-6 pb-32 relative z-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="
                  group relative
                  border border-white/10
                  rounded-3xl p-8
                  bg-gradient-to-b from-white/5 to-white/[0.02]
                  backdrop-blur-xl
                  hover:border-indigo-400/40
                  transition
                "
              >

                {/* Accent bar */}
                <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mb-6 opacity-70 group-hover:opacity-100" />

                {/* Icon */}
                <div
                  className="
                    w-12 h-12 flex items-center justify-center
                    rounded-xl mb-6
                    bg-gradient-to-r from-indigo-500/20 to-cyan-500/20
                    group-hover:scale-110 transition
                  "
                >
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3">
                  {service.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.desc}
                </p>

                {/* Impact */}
                <p className="text-xs text-cyan-400 mb-6">
                  {service.impact}
                </p>

                {/* Points */}
                <ul className="space-y-2 text-sm text-gray-300 mb-6">

                  {service.points.map((point, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-cyan-400">▹</span>
                      {point}
                    </li>
                  ))}

                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">

                  {service.tech.map((t, k) => (
                    <span
                      key={k}
                      className="
                        px-3 py-1 text-xs
                        bg-white/5 border border-white/10
                        rounded-full
                      "
                    >
                      {t}
                    </span>
                  ))}

                </div>

              </motion.div>
            );
          })}

        </div>
      </section>
    </main>
  );
}
