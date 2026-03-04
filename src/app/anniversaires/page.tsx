import type { Metadata } from "next";
import Link from "next/link";
import { PartyPopper, Users, Building2, HeartHandshake, AlertTriangle, ArrowRight } from "lucide-react";
import AnimatedSection from "../_components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Anniversaires",
  description:
    "Organisez un anniversaire inoubliable sur la glace à La Patinoire. Tarifs groupe, cafétéria incluse.",
};

const offers = [
  {
    icon: <Users size={22} />,
    title: "Petits groupes",
    desc: "Venez entre amis ou en famille lors de nos séances publiques. Profitez des tarifs famille dès 4 personnes.",
    badge: "Dès 4 personnes",
  },
  {
    icon: <PartyPopper size={22} />,
    title: "Groupes & Classes",
    desc: "Entrée, location de patins incluse pour les groupes. Minimum 15 personnes — sur devis personnalisé.",
    badge: "Min. 15 personnes",
    highlight: true,
  },
  {
    icon: <Building2 size={22} />,
    title: "Événements d'entreprise",
    desc: "Team building original sur la glace. Contactez-nous pour organiser votre événement corporate.",
    badge: "Sur demande",
  },
];

export default function Anniversaires() {
  return (
    <div>
      <div className="page-hero">
        <div className="container" style={{ paddingTop: "5rem", width: "100%" }}>
          <AnimatedSection>
            <div className="section-label">
              <PartyPopper size={13} />
              <span>Événements &amp; Anniversaires</span>
            </div>
            <h1>
              Fêtez votre{" "}
              <span className="gradient-text">Anniversaire</span>
            </h1>
            <p
              style={{
                color: "rgba(185, 223, 255, 0.8)",
                fontSize: "1.1rem",
                marginTop: "0.75rem",
                maxWidth: "520px",
              }}
            >
              Une journée amusante et originale sur la glace, pour toute la famille ou vos amis !
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container" style={{ padding: "4rem 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {offers.map((offer, idx) => (
            <AnimatedSection key={offer.title} delay={idx * 0.1}>
              <div
                className="glass-card"
                style={{
                  padding: "2rem",
                  height: "100%",
                  border: offer.highlight
                    ? "1px solid rgba(12,141,232,0.35)"
                    : "1px solid rgba(124,196,253,0.15)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {offer.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      left: 0,
                      height: "2px",
                      background: "linear-gradient(90deg, transparent, #0c8de8, transparent)",
                    }}
                  />
                )}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    background: offer.highlight
                      ? "rgba(12,141,232,0.18)"
                      : "rgba(12,141,232,0.1)",
                    border: `1px solid rgba(12,141,232,${offer.highlight ? "0.35" : "0.2"})`,
                    borderRadius: "0.75rem",
                    color: "#7cc4fd",
                    marginBottom: "1.25rem",
                  }}
                >
                  {offer.icon}
                </div>

                <span
                  style={{
                    display: "inline-block",
                    padding: "0.2rem 0.625rem",
                    background: "rgba(12,141,232,0.1)",
                    border: "1px solid rgba(12,141,232,0.18)",
                    borderRadius: "9999px",
                    fontSize: "0.72rem",
                    color: "#7cc4fd",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    marginBottom: "0.875rem",
                  }}
                >
                  {offer.badge}
                </span>

                <h3
                  style={{
                    color: "#f0f7ff",
                    fontSize: "1.1rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {offer.title}
                </h3>
                <p
                  style={{
                    color: "rgba(148,173,199,0.85)",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {offer.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.35}>
          <div
            style={{
              padding: "1.5rem 2rem",
              background: "rgba(255,200,50,0.05)",
              border: "1px solid rgba(255,200,50,0.15)",
              borderRadius: "0.875rem",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
              marginBottom: "2.5rem",
            }}
          >
            <AlertTriangle size={18} style={{ color: "rgba(250,180,50,0.8)", flexShrink: 0, marginTop: "2px" }} />
            <div>
              <p
                style={{
                  color: "rgba(250,200,80,0.9)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  marginBottom: "0.25rem",
                }}
              >
                Contactez-nous à l&apos;avance
              </p>
              <p style={{ color: "rgba(200,170,100,0.8)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                Pour les groupes de grande taille ou si vous souhaitez organiser quelque chose de
                spécial, veuillez nous contacter au préalable pour vérifier la disponibilité.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.45}>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(12,141,232,0.12) 0%, rgba(0,110,198,0.08) 100%)",
              border: "1px solid rgba(12,141,232,0.18)",
              borderRadius: "1.25rem",
              padding: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  marginBottom: "0.75rem",
                }}
              >
                <HeartHandshake size={20} style={{ color: "#7cc4fd" }} />
                <h2 style={{ fontSize: "1.4rem", margin: 0 }}>Prêt à organiser votre événement ?</h2>
              </div>
              <p style={{ color: "rgba(185,223,255,0.75)", fontSize: "0.9rem", maxWidth: "420px" }}>
                Notre équipe est à votre disposition pour vous aider à organiser un moment
                inoubliable sur la glace.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Nous contacter <ArrowRight size={16} />
              </Link>
              <Link href="/infos" className="btn-outline">
                Voir les tarifs
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}


