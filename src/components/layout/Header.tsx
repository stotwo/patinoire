"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Snowflake } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/infos", label: "Infos & Tarifs" },
  { href: "/historique", label: "Historique" },
  { href: "/anniversaires", label: "Anniversaires" },
  { href: "/galerie", label: "Galerie" },
  { href: "/affutage-des-patins", label: "Affûtage" },
  { href: "/liens", label: "Partenaires" },
  { href: "/reglement", label: "Règlement" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(3, 8, 18, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(124, 196, 253, 0.1)"
          : "1px solid transparent",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontWeight: 800,
            fontSize: "1.15rem",
            letterSpacing: "-0.02em",
            color: "#f0f7ff",
          }}
        >
          <Snowflake
            size={20}
            style={{ color: "#7cc4fd" }}
            strokeWidth={2.5}
          />
          <span>
            LA{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7cc4fd, #b9dfff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              PATINOIRE
            </span>
          </span>
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "0.45rem 0.75rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "rgba(224, 240, 255, 0.75)",
                borderRadius: "0.5rem",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#f0f7ff";
                (e.target as HTMLAnchorElement).style.background = "rgba(124, 196, 253, 0.08)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "rgba(224, 240, 255, 0.75)";
                (e.target as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          style={{
            display: "none",
            background: "rgba(124, 196, 253, 0.1)",
            border: "1px solid rgba(124, 196, 253, 0.2)",
            borderRadius: "0.5rem",
            padding: "0.5rem",
            color: "#7cc4fd",
            cursor: "pointer",
          }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: "72px",
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(3, 8, 18, 0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              padding: "2rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              overflowY: "auto",
            }}
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "block",
                    padding: "1rem 1.25rem",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#e0f0ff",
                    borderRadius: "0.75rem",
                    border: "1px solid rgba(124, 196, 253, 0.1)",
                    background: "rgba(124, 196, 253, 0.04)",
                    transition: "all 0.2s ease",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
