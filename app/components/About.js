"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

export default function AboutPage() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  /* Cursor Glow */
  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="bg-[#020617] text-white min-h-screen overflow-hidden relative">
      
      {/* CURSOR GLOW */}
      <div
        className="fixed w-96 h-96 bg-cyan-400/10 blur-[140px] rounded-full pointer-events-none z-0"
        style={{ left: pos.x - 200, top: pos.y - 200 }}
      />

      {/* PAGE TITLE */}
      <section className="pt-40 pb-24 px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          About Me
        </motion.h1>

        <div className="h-px w-32 mx-auto mt-6 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </section>

      {/* SUMMARY + HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto px-6 pb-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              border border-white/10
              rounded-3xl p-10
              bg-white/5 backdrop-blur-xl
            "
          >
            <h2 className="text-2xl font-semibold mb-6">
              Engineering Scalable SaaS Products
            </h2>

            <p className="text-gray-400 leading-8 mb-6">
              I’m a Full Stack Developer focused on building scalable
              SaaS platforms, subscription systems, and mobile
              applications designed for real-world business impact.
            </p>

            <p className="text-gray-400 leading-8 mb-6">
              Over the last 2 years, I’ve implemented multi-tenant
              architectures, Razorpay payment gateways, recurring
              subscription billing, and RBAC access systems managing
              Admin, Agent, and User workflows.
            </p>

            <p className="text-gray-400 leading-8">
              Alongside web platforms, I’ve built React Native mobile
              apps featuring real-time tracking, secure authentication,
              and live production deployments.
            </p>
          </motion.div>

          {/* HIGHLIGHT CARDS */}
          <div className="grid gap-6">
            {[
              "Multi-Tenant SaaS Architecture",
              "RBAC Access Control Systems",
              "Razorpay Payment Integration",
              "Subscription Billing Models",
              "React Native Production Apps",
            ].map((item, i) => (
              <Tilt key={i} tiltMaxAngleX={8} tiltMaxAngleY={8}>
                <div
                  className="
                    border border-white/10
                    rounded-2xl p-6
                    bg-white/5 backdrop-blur-xl
                    hover:border-cyan-400/40
                    transition
                  "
                >
                  <p className="text-sm text-gray-300">{item}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION FLOW */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
          Subscription & Payment Flow
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {[
            "User Signup",
            "Plan Selection",
            "Razorpay Payment",
            "Subscription Activated",
            "Recurring Billing",
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="
                text-center
                border border-white/10
                rounded-2xl p-6
                bg-white/5 backdrop-blur-xl
                hover:border-cyan-400/40
                transition
              "
            >
              <div className="text-cyan-400 font-bold mb-2">
                Step {i + 1}
              </div>
              <p className="text-sm text-gray-300">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RBAC SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
          RBAC Architecture
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["Super Admin", "Platform & billing control"],
            ["Admin", "Organization operations"],
            ["Agent", "Bookings & margins"],
            ["User", "App services access"],
          ].map((role, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="
                text-center
                border border-white/10
                rounded-2xl p-6
                bg-white/5 backdrop-blur-xl
                hover:border-cyan-400/40
                transition
              "
            >
              <h3 className="text-cyan-400 font-semibold mb-2">
                {role[0]}
              </h3>
              <p className="text-sm text-gray-400">
                {role[1]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            ["2+", "Years Experience"],
            ["15+", "Projects Delivered"],
            ["50K+", "Users Impacted"],
            ["5+", "SaaS Platforms"],
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              className="
                text-center
                border border-white/10
                rounded-2xl p-8
                bg-white/5 backdrop-blur-xl
                hover:border-cyan-400/40
                transition
              "
            >
              <h3 className="text-3xl font-bold text-cyan-400">
                {stat[0]}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {stat[1]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>


   
    </main>
  );
}
