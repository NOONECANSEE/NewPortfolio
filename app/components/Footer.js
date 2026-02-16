"use client";

import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-white relative">
      {/* Gradient Divider */}
      <div
        className="
        h-px w-full
        bg-gradient-to-r from-transparent via-indigo-500 to-transparent
        opacity-40
      "
      />

      {/* ================= MAIN ================= */}

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Engineering</h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Architecting SaaS platforms, logistics ecosystems, and operational
              infrastructures designed for scale, automation, and performance.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>

            <ul className="space-y-2 text-sm text-gray-400">
              <FooterLink label="Projects" />
              <FooterLink label="Services" />
              <FooterLink label="CTA" />
              <FooterLink label="Contact" />
            </ul>
          </div>

          {/* CAPABILITIES */}
          <div>
            <h4 className="font-semibold mb-4">Capabilities</h4>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>SaaS Platforms</li>
              <li>Fleet Systems</li>
              <li>Subscription Infra</li>
              <li>Backend Architecture</li>
              <li>Cloud Deployment</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>

            <div className="flex gap-4">
              <SocialIcon icon={Mail} link="mailto:singlaanshu405@gmail.com" />
              <SocialIcon
                icon={Linkedin}
                link="https://www.linkedin.com/in/anshusingla11"
              />

              <SocialIcon icon={Github} />
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}

      <div
        className="
        border-t border-white/10
        py-6 px-6
        text-center text-sm text-gray-500
      "
      >
        © {new Date().getFullYear()} Product Engineering Portfolio. Built with
        Next.js · Node.js · Cloud Infrastructure.
      </div>
    </footer>
  );
}

/* ================= FOOTER LINK ================= */

function FooterLink({ label }) {
  return (
    <li>
      <a href="#" className="hover:text-white transition">
        {label}
      </a>
    </li>
  );
}

/* ================= SOCIAL ICON ================= */

function SocialIcon({ icon: Icon, link  }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
      w-10 h-10 flex items-center justify-center
      rounded-xl
      bg-white/5
      border border-white/10
      hover:bg-white/10
      transition
    "
    >
      <Icon size={18} />
    </a>
  );
}
