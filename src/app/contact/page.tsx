import type { Metadata } from "next";
import { MapPin, Phone, Mail, Users, MessageCircle } from "lucide-react";
import AnimatedSection from "../_components/ui/AnimatedSection";
import ContactForm from "../_components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez la Patinoire pour toute demande d'informations, devis ou organisation d'événement.",
};

const contactCards = [
  {
    icon: <MapPin size={20} />,
    title: "Où nous trouver ?",
    content: (
      <>
        <p>Belgique</p>
      </>
    ),
  },
  {
    icon: <Phone size={20} />,
    title: "Appelez-nous",
    content: (
      <p>Secrétariat : +32 (0) X XX XX XX</p>
    ),
  },
  {
    icon: <Mail size={20} />,
    title: "Écrivez-nous",
    content: (
      <>
        <a href="mailto:info@lapatinoire.be" style={{ color: "#7cc4fd" }}>info@lapatinoire.be</a>
      </>
    ),
  },
  {
    icon: <Users size={20} />,
    title: "Clubs affiliés",
    content: (
      <>
        <p style={{ marginBottom: "0.375rem" }}>
          <strong style={{ color: "#b9dfff", fontSize: "0.82rem" }}>Patinage Artistique</strong>
          <br /><span style={{ fontSize: "0.82rem" }}>Coordonnées disponibles sur demande</span>
        </p>
        <p>
          <strong style={{ color: "#b9dfff", fontSize: "0.82rem" }}>Hockey sur glace</strong>
          <br /><span style={{ fontSize: "0.82rem" }}>Coordonnées disponibles sur demande</span>
        </p>
      </>
    ),
  },
];

export default function Contact() {
  return (
    <div>
      <div className="page-hero">
        <div className="container" style={{ paddingTop: "5rem", width: "100%" }}>
          <AnimatedSection>
            <div className="section-label">
              <MessageCircle size={13} />
              <span>Contactez-nous</span>
            </div>
            <h1>
              Nous <span className="gradient-text">Contacter</span>
            </h1>
            <p style={{ color: "rgba(185,223,255,0.8)", fontSize: "1.1rem", marginTop: "0.75rem", maxWidth: "480px" }}>
              Notre équipe est là pour répondre à toutes vos questions.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container" style={{ padding: "4rem 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2.5rem",
          }}
        >
          <AnimatedSection>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {contactCards.map((card, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(12,141,232,0.12)",
                      border: "1px solid rgba(12,141,232,0.2)",
                      borderRadius: "0.625rem",
                      padding: "0.5rem",
                      color: "#7cc4fd",
                      flexShrink: 0,
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#f0f7ff",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {card.title}
                    </p>
                    <div style={{ color: "rgba(148,173,199,0.85)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                      {card.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h2 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}


