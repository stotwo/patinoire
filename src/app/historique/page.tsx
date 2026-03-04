import type { Metadata } from "next";
import { Snowflake } from "lucide-react";
import AnimatedSection from "../_components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Historique",
  description:
    "Découvrez l'histoire de La Patinoire à travers les décennies, depuis son inauguration en 1973.",
};

const timelineItems = [
  {
    year: "1973",
    title: "Inauguration officielle",
    desc: "Ouverture du complexe sportif dans sa configuration originale, attirant immédiatement un large public passionné de glisse urbaine.",
  },
  {
    year: "1988",
    title: "Rénovation de la piste",
    desc: "Installation d'un nouveau système de réfrigération dernière génération pour offrir une qualité de glace exceptionnelle tout au long de la saison.",
  },
  {
    year: "2005",
    title: "Modernisation des infrastructures",
    desc: "Réaménagement complet de la zone d'accueil, ajout d'espaces dédiés aux clubs sportifs et création de la zone de location automatisée.",
  },
  {
    year: "2024",
    title: "Vers un futur durable",
    desc: "Intégration de solutions écologiques pour réduire l'empreinte carbone et amélioration du confort visiteurs avec un tout nouveau design d'intérieur.",
  },
];

export default function Historique() {
  return (
    <div>
      <div className="page-hero">
        <div className="container" style={{ paddingTop: "5rem", width: "100%" }}>
          <AnimatedSection>
            <div className="section-label">
              <Snowflake size={13} />
              <span>Depuis 1973</span>
            </div>
            <h1>
              Notre <span className="gradient-text">Histoire</span>
            </h1>
            <p
              style={{
                color: "rgba(185, 223, 255, 0.8)",
                fontSize: "1.1rem",
                marginTop: "0.75rem",
                maxWidth: "520px",
              }}
            >
              Un lieu dédié à la glisse depuis plusieurs décennies.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container" style={{ padding: "5rem 1.5rem", maxWidth: "800px" }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "calc(80px + 0.5px)",
              top: 0,
              bottom: 0,
              width: "1px",
              background:
                "linear-gradient(to bottom, transparent, rgba(12,141,232,0.4) 10%, rgba(12,141,232,0.2) 90%, transparent)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {timelineItems.map((item, idx) => (
              <AnimatedSection key={item.year} delay={idx * 0.12}>
                <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: "80px", textAlign: "right" }}>
                    <span
                      style={{
                        display: "inline-block",
                        fontWeight: 800,
                        fontSize: "1.1rem",
                        background: "linear-gradient(135deg, #7cc4fd, #b9dfff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <div style={{ position: "relative", paddingLeft: "2rem" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "-0.5rem",
                        top: "0.4rem",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "#0c8de8",
                        border: "2px solid rgba(12,141,232,0.3)",
                        boxShadow: "0 0 12px rgba(12,141,232,0.5)",
                      }}
                    />
                    <div
                      className="glass-card"
                      style={{ padding: "1.5rem 1.75rem" }}
                    >
                      <h3
                        style={{
                          color: "#f0f7ff",
                          fontSize: "1.1rem",
                          marginBottom: "0.625rem",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          color: "rgba(148,173,199,0.85)",
                          fontSize: "0.9rem",
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


