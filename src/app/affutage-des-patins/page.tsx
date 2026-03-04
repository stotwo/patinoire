import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, Clock, Zap, ChevronRight, AlertTriangle } from "lucide-react";
import AnimatedSection from "../_components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Affûtage des Patins",
  description:
    "Service professionnel d'affûtage de patins à glace à La Patinoire. Standard (7€) ou Express (10€, 30 minutes).",
};

const options = [
  {
    icon: <Wrench size={24} />,
    price: "7 €",
    title: "Affûtage Standard",
    desc: "Déposez vos patins lors d'une séance publique.",
    delay: "Délai : 1 semaine",
    highlight: false,
  },
  {
    icon: <Zap size={24} />,
    price: "10 €",
    title: "Affûtage Express",
    desc: "Déposez vos patins lors d'une séance publique et nous les affûtons directement.",
    delay: "Délai : ± 30 minutes",
    highlight: true,
  },
];

export default function Affutage() {
  return (
    <div>
      <div className="page-hero">
        <div className="container" style={{ paddingTop: "5rem", width: "100%" }}>
          <AnimatedSection>
            <div className="section-label">
              <Wrench size={13} />
              <span>Service technique</span>
            </div>
            <h1>
              <span className="gradient-text">Affûtage</span> des patins
            </h1>
            <p
              style={{
                color: "rgba(185,223,255,0.8)",
                fontSize: "1.1rem",
                marginTop: "0.75rem",
                maxWidth: "520px",
              }}
            >
              Un patin bien affûté, c&apos;est la garantie d&apos;une glisse parfaite et d&apos;une
              meilleure sécurité sur la glace.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container" style={{ padding: "4rem 1.5rem", maxWidth: "800px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {options.map((opt, idx) => (
            <AnimatedSection key={opt.title} delay={idx * 0.1}>
              <div
                className="glass-card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "2rem",
                  border: opt.highlight
                    ? "1px solid rgba(12,141,232,0.35)"
                    : "1px solid rgba(124,196,253,0.15)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {opt.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "linear-gradient(90deg, transparent, #0c8de8, transparent)",
                    }}
                  />
                )}

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "1.5rem",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      background: opt.highlight
                        ? "rgba(12,141,232,0.18)"
                        : "rgba(12,141,232,0.1)",
                      border: `1px solid rgba(12,141,232,${opt.highlight ? "0.35" : "0.2"})`,
                      borderRadius: "0.75rem",
                      padding: "0.75rem",
                      color: "#7cc4fd",
                    }}
                  >
                    {opt.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #7cc4fd, #b9dfff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1,
                    }}
                  >
                    {opt.price}
                  </span>
                </div>

                <h3
                  style={{
                    color: "#f0f7ff",
                    fontSize: "1.1rem",
                    marginBottom: "0.625rem",
                  }}
                >
                  {opt.title}
                </h3>
                <p
                  style={{
                    color: "rgba(148,173,199,0.85)",
                    fontSize: "0.88rem",
                    lineHeight: 1.65,
                    marginBottom: "1rem",
                    flex: 1,
                  }}
                >
                  {opt.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.35rem 0.75rem",
                    background: "rgba(12,141,232,0.08)",
                    border: "1px solid rgba(12,141,232,0.15)",
                    borderRadius: "9999px",
                    width: "fit-content",
                    marginTop: "auto",
                  }}
                >
                  <Clock size={12} style={{ color: "#7cc4fd" }} />
                  <span style={{ color: "#7cc4fd", fontSize: "0.78rem", fontWeight: 600 }}>
                    {opt.delay}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.25}>
          <div
            style={{
              padding: "1.25rem 1.5rem",
              background: "rgba(255,200,50,0.05)",
              border: "1px solid rgba(255,200,50,0.15)",
              borderRadius: "0.875rem",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
              marginBottom: "2rem",
            }}
          >
            <AlertTriangle
              size={18}
              style={{ color: "rgba(250,180,50,0.8)", flexShrink: 0, marginTop: "2px" }}
            />
            <div>
              <p
                style={{
                  color: "rgba(250,200,80,0.9)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  marginBottom: "0.25rem",
                }}
              >
                Règle importante
              </p>
              <p style={{ color: "rgba(200,170,100,0.8)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                Nous n&apos;autorisons pas le dépôt et le retrait des patins en dehors des horaires
                de séances publiques. Merci de respecter cette règle.
              </p>
            </div>
          </div>

          <Link
            href="/infos"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#7cc4fd",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}
          >
            Voir les horaires des séances publiques
            <ChevronRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}


