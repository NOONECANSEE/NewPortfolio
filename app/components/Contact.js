"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  Calendar,
  MessageCircle,
  Copy,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function PremiumContactPage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const email = "singlaanshu405@gmail.com";

  /* Mouse spotlight */
  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <main className="relative bg-[#020617] text-white min-h-screen overflow-hidden">

      {/* ===== Cursor Spotlight ===== */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(
            600px at ${mouse.x}px ${mouse.y}px,
            rgba(99,102,241,0.15),
            transparent 80%
          )`,
        }}
      />

      {/* ===== Gradient Top Divider ===== */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-40" />

      {/* ===== Ambient Orbs ===== */}
      <motion.div
        className="absolute top-40 left-10 w-72 h-72 bg-indigo-500/10 blur-[140px] rounded-full"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-400/10 blur-[160px] rounded-full"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* Grid + Noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* ================= HERO ================= */}
      <section className="pt-44 pb-28 px-6 text-center relative z-10 max-w-5xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Let’s Engineer Something
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Scalable & Impactful
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Available for product engineering roles, SaaS builds,
          infrastructure architecture, and long-term consulting
          partnerships.
        </motion.p>

      </section>

      {/* ================= CONTACT GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-28 relative z-10">

        <div className="grid md:grid-cols-3 gap-8">

          <ContactCard
            icon={Mail}
            title="Email"
            value={email}
            link={`mailto:${email}`}
          />

          <ContactCard
            icon={Linkedin}
            title="LinkedIn"
            value="Connect professionally"
            link="https://www.linkedin.com/in/anshusingla11"
          />

          <ContactCard
            icon={Github}
            title="GitHub"
            value="Explore repositories"
            link="#"
          />

        </div>

      </section>

      {/* ================= ENGAGEMENT PANEL ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-28 relative z-10">

        <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-indigo-500/40 via-cyan-400/40 to-purple-500/40">

          <div className="rounded-3xl bg-[#020617]/90 backdrop-blur-xl p-10">

            <div className="grid md:grid-cols-2 gap-14 items-center">

              {/* Scope */}
              <div>
                <h2 className="text-2xl font-semibold mb-8">
                  Engagement Scope
                </h2>

                <ul className="space-y-4 text-gray-300">
                  {[
                    "SaaS Platform Engineering",
                    "Logistics & Fleet Systems",
                    "Subscription Infrastructure",
                    "Backend Architecture",
                    "Scaling & Consulting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="space-y-5">

                <Availability />

                <ActionButton
                  icon={Calendar}
                  label="Book Strategy Call"
                  link="#"
                />

                <ActionButton
                  icon={MessageCircle}
                  label="WhatsApp Chat"
                  link="https://wa.me/7986558520"
                />

                <ActionButton
                  icon={Phone}
                  label="Schedule Phone Call"
                  link="#"
                />

              </div>

            </div>
          </div>
        </div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="pb-32 px-6 text-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6">
            Prefer async communication?
          </h2>

          <div className="flex items-center justify-center gap-4">

            <a
              href={`mailto:${email}`}
              className="text-lg font-medium bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
            >
              {email}
            </a>

            <button
              onClick={copyEmail}
              className="p-2 rounded-lg border border-white/10 hover:border-indigo-400/40 transition"
            >
              <Copy size={16} />
            </button>

          </div>
        </motion.div>

      </section>

    </main>
  );
}

/* ================= CONTACT CARD ================= */

function ContactCard({ icon: Icon, title, value, link }) {
  return (
    <motion.a
      href={link}
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl p-[1px] bg-gradient-to-r from-white/10 to-white/5"
    >
      <div className="rounded-3xl p-8 bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl h-full">

        <motion.div
          whileHover={{ rotate: 8, scale: 1.1 }}
          className="relative w-14 h-14 flex items-center justify-center rounded-2xl mb-6 bg-gradient-to-r from-indigo-500/20 via-cyan-400/20 to-purple-500/20"
        >
          <Icon size={24} />
          <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-indigo-400/40 blur-sm" />
        </motion.div>

        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{value}</p>

      </div>
    </motion.a>
  );
}

/* ================= AVAILABILITY ================= */

function Availability() {
  return (
    <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-gradient-to-r from-green-400/10 to-emerald-400/10 border border-green-400/20">
      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
      <p className="text-sm font-medium text-green-300">
        Available for select high-impact projects
      </p>
    </div>
  );
}

/* ================= ACTION BUTTON ================= */

function ActionButton({ icon: Icon, label, link }) {
  return (
    <motion.a
      href={link}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-indigo-400/40 transition font-medium"
    >
      <Icon size={18} />
      {label}
    </motion.a>
  );
}
