import type { Metadata } from "next";
import { ShieldCheck, AlertTriangle } from "lucide-react";
import AnimatedSection from "../_components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Règlement Intérieur",
  description: "Règlement d'ordre intérieur de La Patinoire. Consignes de sécurité et de bonne conduite sur la glace.",
};

const rules = [
  "Une tenue correcte et décente est exigée dans l'établissement.",
  "Il est interdit de boire ou de manger sur la piste.",
  "Il est interdit de fumer dans un établissement sportif, vestiaires et cafétéria compris.",
  "Patiner à une allure excessive est interdit durant le patinage général. Le patinage de vitesse est seulement autorisé lors des minutes de vitesse.",
  "Il est interdit de patiner dans le sens contraire. Faire des trous ou des coulées est sanctionné par la mise à la porte immédiate.",
  "Faire des chaînes de plus de 3 personnes n'est pas autorisé.",
  "Pratiquer le patinage artistique, le Freestyle, le hockey ou s'adonner à des jeux dangereux est interdit.",
  "Il est interdit de faire et de lancer des boules de neige.",
  "Le tour de piste n'est pas autorisé aux personnes non munies de patins ou d'un ticket d'entrée patinage.",
  "Des bancs sont à votre disposition autour de la piste. S'asseoir sur la rambarde n'est pas autorisé.",
  "Mettre des patins engage votre propre responsabilité civile et l'acceptation de tout risque pouvant survenir du fait du déséquilibre engendré par le port de patins.",
  "Afin d'assurer la sécurité et la tranquillité de sa clientèle, un circuit d'enregistrement vidéo a été installé et tout fauteur de trouble verbal ou physique sera expulsé.",
  "Toute personne déclenchant le système d'alarme sans raison valable sera expulsée définitivement.",
];

export default function Reglement() {
  return (
    <div>
      <div className="page-hero">
        <div className="container" style={{ paddingTop: "5rem", width: "100%" }}>
          <AnimatedSection>
            <div className="section-label">
              <ShieldCheck size={13} />
              <span>Sécurité</span>
            </div>
            <h1>
              <span className="gradient-text">Règlement</span> d&apos;ordre intérieur
            </h1>
            <p style={{ color: "rgba(185,223,255,0.8)", fontSize: "1.1rem", marginTop: "0.75rem", maxWidth: "520px" }}>
              Consignes de sécurité et de bonne conduite sur la glace.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container" style={{ padding: "4rem 1.5rem", maxWidth: "780px" }}>
        <AnimatedSection>
          <div className="glass-card" style={{ padding: "2.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "2rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid rgba(124,196,253,0.1)",
              }}
            >
              <ShieldCheck size={20} style={{ color: "#7cc4fd" }} />
              <h2 style={{ fontSize: "1.1rem", margin: 0, color: "#f0f7ff" }}>
                Extrait du Règlement
              </h2>
            </div>

            <ol
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                counterReset: "rule-counter",
                listStyle: "none",
              }}
            >
              {rules.map((rule, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.03}>
                  <li
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      padding: "0.875rem 1rem",
                      background: "rgba(255,255,255,0.025)",
                      borderRadius: "0.5rem",
                      border: "1px solid rgba(124,196,253,0.06)",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: "24px",
                        height: "24px",
                        background: "rgba(12,141,232,0.12)",
                        border: "1px solid rgba(12,141,232,0.2)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "#7cc4fd",
                        marginTop: "1px",
                      }}
                    >
                      {idx + 1}
                    </span>
                    <p style={{ color: "rgba(185,223,255,0.85)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
                      {rule}
                    </p>
                  </li>
                </AnimatedSection>
              ))}
            </ol>

            <div
              style={{
                marginTop: "2rem",
                padding: "1.25rem 1.5rem",
                background: "rgba(12,141,232,0.06)",
                border: "1px solid rgba(12,141,232,0.15)",
                borderRadius: "0.75rem",
                display: "flex",
                gap: "0.875rem",
                alignItems: "flex-start",
              }}
            >
              <AlertTriangle size={16} style={{ color: "#7cc4fd", flexShrink: 0, marginTop: "2px" }} />
              <p style={{ color: "rgba(148,173,199,0.8)", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>
                Si vous estimez avoir été injustement traité lors de votre venue, veuillez nous
                contacter via notre{" "}
                <a href="/contact" style={{ color: "#7cc4fd", fontWeight: 600 }}>
                  formulaire de contact
                </a>
                .
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}


