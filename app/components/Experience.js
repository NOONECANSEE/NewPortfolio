"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function ExperiencePage() {
  return (
    <main className="bg-[#020617] text-white min-h-screen relative overflow-hidden">

      {/* ===== TOP GRADIENT DIVIDER (Same as About/Footer) ===== */}
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

      {/* ===== TITLE ===== */}
      <section className="pt-40 pb-24 text-center px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Professional Experience
        </motion.h1>

        <div className="h-px w-40 mx-auto mt-6 bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
      </section>

      {/* ===== TIMELINE WRAPPER ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-32 relative">

        {/* Timeline Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-400/30 to-transparent" />

        {/* EXPERIENCE NODE */}
        <div className="relative md:ml-0 ml-12">

          {/* Timeline Dot */}
          <div className="absolute -left-9 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-indigo-400 rounded-full shadow-lg shadow-indigo-500/40" />

          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                border border-white/10
                rounded-3xl p-12
                bg-gradient-to-br from-white/5 to-white/0
                backdrop-blur-xl
                hover:border-indigo-400/40
                transition
              "
            >
              {/* HEADER */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">
                    Frontend & Mobile Developer
                  </h2>

                  <p className="text-gray-400 mt-1">
                    Pickkup.io • June 2024 — Present
                  </p>
                </div>

                {/* ROLE BADGE */}
                <span
                  className="
                    mt-4 md:mt-0
                    px-4 py-2 text-sm
                    bg-indigo-500/10
                    border border-indigo-400/30
                    rounded-full text-indigo-400
                    w-fit
                  "
                >
                  Product Engineering
                </span>
              </div>

              {/* SUMMARY */}
              <p className="text-gray-400 mt-8 leading-7 max-w-3xl">
                Contributing to the development of production SaaS platforms,
                subscription infrastructures, and mobile applications used by
                real business operators. Focused on architecting monetizable
                systems integrating Razorpay payments, RBAC access control, and
                real-time operational tracking.
              </p>

              {/* PLATFORM & REVENUE SYSTEMS */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-6">
                  Platform & Revenue Systems
                </h3>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Multi-Tenant SaaS Architecture",
                    "Subscription Lifecycle Systems",
                    "Razorpay Payment Gateway",
                    "Webhook Billing Automation",
                    "RBAC Permission Infrastructure",
                    "Admin & Agent Dashboards",
                    "Booking & Ride Allocation Systems",
                    "Real-Time GPS Tracking",
                    "React Native Mobile Platforms",
                    "Operational Reporting Tools",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1 text-xs
                        border border-white/10
                        rounded-full
                        bg-white/5
                        hover:border-indigo-400/40
                        transition
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* RESPONSIBILITIES */}
              <div className="mt-16">
                <h3 className="text-lg font-semibold mb-10 tracking-wide text-white">
                  Key Responsibilities & Ownership
                </h3>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    "Architected scalable multi-tenant SaaS platforms powering real business operations",
                    "Designed subscription models, pricing tiers, and billing logic",
                    "Built complete Razorpay payment lifecycle integrations",
                    "Implemented webhook automation for billing & subscription events",
                    "Developed RBAC systems with hierarchical role permissions",
                    "Engineered admin & agent operational dashboards",
                    "Built and deployed React Native mobile applications",
                    "Implemented real-time GPS tracking & monitoring systems",
                    "Developed backend REST APIs & core business services",
                    "Delivered end-to-end product features in Agile environments",
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 6 }}
                      className="group flex items-start gap-4"
                    >
                      <div
                        className="
                          mt-1.5
                          w-2 h-2
                          rounded-full
                          bg-indigo-400
                          group-hover:scale-125
                          transition
                        "
                      />

                      <p
                        className="
                          text-gray-400
                          leading-relaxed
                          group-hover:text-gray-200
                          transition
                        "
                      >
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Divider Glow */}
                <div className="h-px w-full mt-14 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />
              </div>
            </motion.div>
          </Tilt>
        </div>
      </section>
    </main>
  );
}
