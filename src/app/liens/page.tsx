import type { Metadata } from "next";
import { ExternalLink, Link2 } from "lucide-react";
import AnimatedSection from "../_components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Partenaires",
  description: "Nos partenaires et liens utiles : clubs de hockey et patinage artistique.",
};

const partners = [
  {
    icon: "🏙️",
    title: "La Ville",
    desc: "Soutien institutionnel et partenaire majeur de notre infrastructure sportive.",
    link: "#",
    linkLabel: "Visiter le site",
  },
  {
    icon: "🏒",
    title: "Red Roosters Hockey",
    desc: "Le club de hockey résident pour les entraînements et compétitions régionales.",
    link: "#",
    linkLabel: "Voir le club",
  },
  {
    icon: "👥",
    title: "Groupe Facebook Officiel",
    desc: "Rejoignez la communauté de la Patinoire sur les réseaux sociaux pour les dernières actualités.",
    link: "#",
    linkLabel: "Rejoindre le groupe",
    external: true,
  },
  {
    icon: "⛸️",
    title: "École des Jeunes",
    desc: "Patinage Artistique · Hockey sur glace — coordonnées disponibles sur demande",
    link: "/contact",
    linkLabel: "Nous contacter",
  },
];

export default function Liens() {
  return (
    <div>
      <div className="page-hero">
        <div className="container" style={{ paddingTop: "5rem", width: "100%" }}>
          <AnimatedSection>
            <div className="section-label">
              <Link2 size={13} />
              <span>Liens utiles</span>
            </div>
            <h1>
              Nos <span className="gradient-text">Partenaires</span>
            </h1>
            <p style={{ color: "rgba(185,223,255,0.8)", fontSize: "1.1rem", marginTop: "0.75rem", maxWidth: "480px" }}>
              Découvrez nos clubs affiliés et partenaires institutionnels.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container" style={{ padding: "4rem 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {partners.map((p, idx) => (
            <AnimatedSection key={p.title} delay={idx * 0.1}>
              <div
                className="glass-card"
                style={{
                  padding: "2rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  transition: "border-color 0.25s ease, transform 0.25s ease",
                }}
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {p.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "1.05rem", color: "#f0f7ff", marginBottom: "0.5rem" }}>
                    {p.title}
                  </h3>
                  <p style={{ color: "rgba(148,173,199,0.8)", fontSize: "0.875rem", lineHeight: 1.65 }}>
                    {p.desc}
                  </p>
                </div>
                <a
                  href={p.link}
                  target={p.external ? "_blank" : undefined}
                  rel={p.external ? "noopener noreferrer" : undefined}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: "#7cc4fd",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    transition: "color 0.2s ease",
                    marginTop: "auto",
                  }}
                >
                  {p.linkLabel}
                  <ExternalLink size={13} />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}


