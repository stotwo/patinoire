"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TABS = [
  { id: "horaires", label: "Horaires" },
  { id: "tarifs", label: "Tarifs" },
];

export default function Infos() {
  const [active, setActive] = useState("horaires");
  const [horType, setHorType] = useState("libres");

  return (
    <div className="container" style={{ padding: "4rem 1.5rem", maxWidth: "680px" }}>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginBottom: "3rem",
        }}
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            style={{
              padding: "0.55rem 1.5rem",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: "0.9rem",
              fontWeight: 600,
              transition: "all 0.2s ease",
              background: active === tab.id ? "rgba(12,141,232,0.18)" : "transparent",
              color: active === tab.id ? "#7cc4fd" : "rgba(148,173,199,0.55)",
              boxShadow: active === tab.id ? "0 0 0 1px rgba(12,141,232,0.3)" : "none",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {active === "horaires" && (
        <div>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
            {[
              { id: "libres", label: "Horaires libres" },
              { id: "cours", label: "Cours de patinage" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setHorType(t.id)}
                style={{
                  padding: "0.45rem 1.1rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  transition: "all 0.2s ease",
                  background: horType === t.id ? "rgba(12,141,232,0.18)" : "transparent",
                  color: horType === t.id ? "#7cc4fd" : "rgba(148,173,199,0.45)",
                  boxShadow: horType === t.id ? "0 0 0 1px rgba(12,141,232,0.3)" : "none",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {horType === "libres" && (
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {[
                  { day: "Mercredi", sessions: ["14h – 16h"] },
                  { day: "Vendredi", sessions: ["18h30 – 20h30"] },
                  { day: "Samedi", sessions: ["14h – 16h", "16h30 – 18h30"] },
                  { day: "Dimanche", sessions: ["10h30 – 12h30", "14h – 16h", "16h30 – 18h30"] },
                ].map((h) => (
                  <div
                    key={h.day}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                      padding: "1rem 1.25rem",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(124,196,253,0.08)",
                      borderRadius: "0.75rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ color: "#f0f7ff", fontWeight: 700, fontSize: "0.95rem", minWidth: "100px" }}>
                      {h.day}
                    </span>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      {h.sessions.map((s) => (
                        <span
                          key={s}
                          style={{
                            padding: "0.3rem 0.875rem",
                            background: "rgba(12,141,232,0.08)",
                            border: "1px solid rgba(12,141,232,0.15)",
                            borderRadius: "9999px",
                            color: "#b9dfff",
                            fontWeight: 600,
                            fontSize: "0.85rem",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ color: "rgba(148,173,199,0.35)", fontSize: "0.72rem", marginTop: "1.25rem" }}>
                Vacances scolaires &amp; fériés : horaires du samedi.
              </p>
            </div>
          )}

          {horType === "cours" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                { day: "Mercredi", sessions: ["16h30 – 17h30"], note: "Enfants" },
                { day: "Samedi", sessions: ["10h45 – 11h45"], note: "Enfants" },
                { day: "Dim. matin", sessions: ["9h00 – 10h00"], note: "Adultes" },
              ].map((c) => (
                <div
                  key={c.day}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    padding: "1rem 1.25rem",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(124,196,253,0.08)",
                    borderRadius: "0.75rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ color: "#f0f7ff", fontWeight: 700, fontSize: "0.95rem", minWidth: "100px" }}>{c.day}</span>
                  <div style={{ display: "flex", gap: "0.5rem", flex: 1 }}>
                    <span
                      style={{
                        padding: "0.3rem 0.875rem",
                        background: "rgba(12,141,232,0.08)",
                        border: "1px solid rgba(12,141,232,0.15)",
                        borderRadius: "9999px",
                        color: "#b9dfff",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                      }}
                    >
                      {c.sessions[0]}
                    </span>
                  </div>
                  <span style={{ color: "rgba(148,173,199,0.45)", fontSize: "0.78rem" }}>{c.note}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}


      {active === "tarifs" && (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "0.75rem", marginBottom: "1rem" }}>
            {[
              { label: "0 – 3 ans", price: "Gratuit", sub: "" },
              { label: "3 – 5 ans", price: "3,50 €", sub: "" },
              { label: "Enfant", price: "6,00 €", sub: "moins de 12 ans" },
              { label: "Adulte", price: "7,00 €", sub: "12 ans et plus", popular: true },
              { label: "Famille", price: "8,50 €", sub: "dès 4 pers. · patins inclus" },
              { label: "Location patins", price: "+ 3,00 €", sub: "en supplément" },
            ].map((t) => (
              <div
                key={t.label}
                style={{
                  padding: "1.375rem 1.25rem",
                  borderRadius: "0.875rem",
                  border: t.popular ? "1px solid rgba(12,141,232,0.4)" : "1px solid rgba(124,196,253,0.08)",
                  background: t.popular ? "rgba(12,141,232,0.09)" : "rgba(255,255,255,0.02)",
                  position: "relative",
                  textAlign: "center",
                }}
              >
                {t.popular && (
                  <span style={{
                    position: "absolute",
                    top: "-10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "0.15rem 0.75rem",
                    background: "linear-gradient(135deg, #0c8de8, #006ec6)",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    borderRadius: "9999px",
                    whiteSpace: "nowrap",
                  }}>
                    Le plus courant
                  </span>
                )}
                <p style={{ color: "rgba(148,173,199,0.55)", fontSize: "0.72rem", marginBottom: "0.4rem" }}>{t.label}</p>
                <p style={{ color: t.popular ? "#7cc4fd" : "#f0f7ff", fontWeight: 800, fontSize: "1.5rem", lineHeight: 1, marginBottom: "0.3rem" }}>{t.price}</p>
                {t.sub && <p style={{ color: "rgba(148,173,199,0.4)", fontSize: "0.68rem", lineHeight: 1.4 }}>{t.sub}</p>}
              </div>
            ))}
          </div>

          <p style={{ color: "rgba(148,173,199,0.35)", fontSize: "0.72rem", marginBottom: "2.5rem" }}>
            * Pas de tarif familial lors des séances de 14h – 16h.
          </p>

          <div
            style={{
              padding: "1.75rem 2rem",
              background: "rgba(12,141,232,0.06)",
              border: "1px solid rgba(12,141,232,0.12)",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p style={{ color: "#f0f7ff", fontWeight: 700, marginBottom: "0.2rem" }}>Anniversaire sur la glace ?</p>
              <p style={{ color: "rgba(148,173,199,0.6)", fontSize: "0.85rem" }}>Tarifs de groupe disponibles.</p>
            </div>
            <Link href="/anniversaires" className="btn-primary" style={{ whiteSpace: "nowrap" }}>
              En savoir plus <ArrowRight size={14} />
            </Link>
          </div>

          <p style={{ color: "rgba(148,173,199,0.3)", fontSize: "0.7rem", marginTop: "2rem", fontStyle: "italic" }}>
            Informations non contractuelles.
          </p>
        </div>
      )}
    </div>
  );
}
