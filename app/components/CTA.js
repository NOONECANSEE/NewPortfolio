"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CTAPage() {
  const [pos, setPos] = useState({ x: 0, y: 0 });


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


      {/* ================= HERO ================= */}

      <section className="pt-44 pb-32 px-6 text-center relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="
          text-4xl md:text-6xl font-bold
          leading-tight max-w-4xl mx-auto
        "
        >
          Architecting Platforms That <br />

          <span className="
            bg-gradient-to-r from-indigo-400 to-cyan-400
            bg-clip-text text-transparent
          ">
            Scale Beyond Operations
          </span>

        </motion.h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
          Engineering multi-tenant SaaS platforms, logistics
          infrastructures, and subscription systems designed
          for performance, automation, and real-world operational impact.
        </p>

      </section>


      {/* ================= VALUE PILLARS ================= */}

      <section className="max-w-6xl mx-auto px-6 pb-32 relative z-10">

        <div className="grid md:grid-cols-3 gap-10">

          <Pillar
            title="Multi-Tenant SaaS Systems"
            desc="Architecting organization-isolated platforms with access hierarchies, subscription lifecycles, and scalable backend infrastructures."
          />

          <Pillar
            title="Logistics & Workforce Ecosystems"
            desc="Engineering fleet, driver, and operational systems with real-time visibility, automation workflows, and execution tracking."
          />

          <Pillar
            title="Subscription & Billing Engines"
            desc="Building automated revenue systems including billing lifecycles, payouts, and payment gateway integrations."
          />

        </div>

      </section>

      {/* ================= COLLABORATION STRIP ================= */}

      <section className="max-w-5xl mx-auto px-6 pb-32 text-center relative z-10">

        <div
          className="
          border border-white/10
          rounded-3xl p-12
          bg-gradient-to-r from-indigo-500/10 to-cyan-500/10
          backdrop-blur-xl
        "
        >

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Built Through Product Collaboration
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Partnering with founders, product teams, and organizations
            to design, build, and scale platforms that power real
            operational workflows.
          </p>

        </div>

      </section>

      {/* ================= CLOSING ================= */}

      <section className="pb-40 px-6 text-center relative z-10">

        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
          If you’re building platforms that demand scale,
          automation, and reliability — let’s connect.
        </p>

      </section>

    </main>
  );
}

/* ================= METRIC ================= */

function Metric({ value, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold mb-2">
        {value}
      </h3>
      <p className="text-gray-400 text-sm">
        {label}
      </p>
    </motion.div>
  );
}

/* ================= PILLAR ================= */

function Pillar({ title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="
      border border-white/10
      rounded-3xl p-8
      bg-gradient-to-b from-white/5 to-white/[0.02]
      backdrop-blur-xl
      hover:border-indigo-400/40
      transition
    "
    >

      <h3 className="font-semibold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {desc}
      </p>

    </motion.div>
  );
}
