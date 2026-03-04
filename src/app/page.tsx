import Link from "next/link";
import { Clock, Calendar, Users, Coffee, ChevronRight, ArrowRight, Snowflake } from "lucide-react";
import AnimatedSection from "./_components/ui/AnimatedSection";

const scheduleData = [
  {
    day: "Mercredi",
    sessions: ["14h – 16h"],
    note: "Séance publique",
  },
  {
    day: "Vendredi",
    sessions: ["18h30 – 20h30"],
    note: "Soirée",
  },
  {
    day: "Samedi",
    sessions: ["14h – 16h", "16h30 – 18h30"],
    note: "La séance de 16h30 est la plus calme",
  },
  {
    day: "Dimanche",
    sessions: ["10h30 – 12h30", "14h – 16h", "16h30 – 18h30"],
    note: "10h30 : séance familiale",
  },
];

const features = [
  {
    icon: <Calendar size={24} />,
    title: "Sans réservation",
    desc: "Venez spontanément lors de nos séances publiques. Paiement Bancontact accepté.",
  },
  {
    icon: <Coffee size={24} />,
    title: "Cafétéria",
    desc: "Chocolats chauds crème fraîche et petite restauration sur place pour toute la famille.",
  },
  {
    icon: <Users size={24} />,
    title: "Tous niveaux",
    desc: "Cours pour enfants et adultes, affûtage de patins et séances calmes disponibles.",
  },
];

export default function Home() {
  return (
    <div>
      <section
        style={{
          position: "relative",
          minHeight: "calc(100vh - 72px)",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "linear-gradient(160deg, #030812 0%, #060f1e 40%, #091222 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 50% at 30% 60%, rgba(12,141,232,0.12) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="container"
          style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}
        >
          <div className="animate-fade-in" style={{ maxWidth: "680px" }}>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              <Snowflake size={13} />
              <span>Saison 2024 – 2025</span>
            </div>
            <h1
              style={{
                marginBottom: "1.5rem",
                background: "linear-gradient(160deg, #ffffff 30%, #b9dfff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              L&apos;excellence de la glisse à l&apos;état pur.
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "rgba(185, 223, 255, 0.8)",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
                maxWidth: "560px",
              }}
            >
              Espace sportif et événementiel sur glace. Patinez dans des conditions
              optimales — pour le loisir, l&apos;apprentissage ou la compétition.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/infos" className="btn-primary">
                Découvrir les tarifs
                <ArrowRight size={16} />
              </Link>
              <Link href="/galerie" className="btn-outline">
                Voir l&apos;espace
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: "rgba(124, 196, 253, 0.5)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
          }}
        >
          <span>SCROLL</span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background:
                "linear-gradient(to bottom, rgba(124,196,253,0.5), transparent)",
            }}
          />
        </div>
      </section>

      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <AnimatedSection style={{ marginBottom: "3rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div>
                <div className="section-label">
                  <Clock size={13} />
                  <span>Séances publiques</span>
                </div>
                <h2 style={{ margin: 0 }}>Nos horaires</h2>
              </div>
              <Link
                href="/infos"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "#7cc4fd",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                Tous les horaires & tarifs
                <ChevronRight size={16} />
              </Link>
            </div>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {scheduleData.map((item, idx) => (
              <AnimatedSection key={item.day} delay={idx * 0.08}>
                <div
                  className="glass-card"
                  style={{ padding: "1.5rem", height: "100%" }}
                >
                  <h3
                    style={{
                      color: "#7cc4fd",
                      fontSize: "1rem",
                      fontWeight: 700,
                      marginBottom: "0.875rem",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {item.day}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.375rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.sessions.map((s) => (
                      <span
                        key={s}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          padding: "0.35rem 0.75rem",
                          background: "rgba(12, 141, 232, 0.12)",
                          border: "1px solid rgba(12, 141, 232, 0.2)",
                          borderRadius: "0.375rem",
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: "#b9dfff",
                          width: "fit-content",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p
                    style={{
                      color: "rgba(148, 173, 199, 0.7)",
                      fontSize: "0.8rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.note}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <hr className="ice-divider" />

      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <AnimatedSection style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div
              className="section-label"
              style={{ display: "inline-flex", marginBottom: "1.25rem" }}
            >
              <Snowflake size={13} />
              <span>Pourquoi nous choisir</span>
            </div>
            <h2>Un accueil pour tous</h2>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {features.map((f, idx) => (
              <AnimatedSection key={f.title} delay={idx * 0.1}>
                <div
                  className="glass-card"
                  style={{
                    padding: "2rem",
                    transition: "transform 0.25s ease, border-color 0.25s ease",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "52px",
                      height: "52px",
                      background: "rgba(12, 141, 232, 0.12)",
                      border: "1px solid rgba(12, 141, 232, 0.25)",
                      borderRadius: "0.75rem",
                      color: "#7cc4fd",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {f.icon}
                  </div>
                  <h3 style={{ marginBottom: "0.75rem", fontSize: "1.1rem" }}>{f.title}</h3>
                  <p style={{ color: "rgba(148, 173, 199, 0.85)", lineHeight: 1.7, fontSize: "0.9rem" }}>
                    {f.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "2rem 0 5rem" }}>
        <div className="container">
          <AnimatedSection>
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(12,141,232,0.15) 0%, rgba(0,110,198,0.1) 100%)",
                border: "1px solid rgba(12, 141, 232, 0.2)",
                borderRadius: "1.25rem",
                padding: "3.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "2rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-30%",
                  right: "-10%",
                  width: "300px",
                  height: "300px",
                  background:
                    "radial-gradient(circle, rgba(12,141,232,0.15) 0%, transparent 70%)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              />
              <div style={{ maxWidth: "500px" }}>
                <h2 style={{ marginBottom: "0.75rem" }}>
                  Fêtez votre anniversaire sur la glace 🎂
                </h2>
                <p style={{ color: "rgba(185, 223, 255, 0.85)", lineHeight: 1.7 }}>
                  Un événement original pour toute la famille ou vos amis. Tarifs de groupe,
                  cafétéria incluse, moments inoubliables garantis.
                </p>
              </div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/anniversaires" className="btn-primary">
                  En savoir plus
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Nous contacter
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}


