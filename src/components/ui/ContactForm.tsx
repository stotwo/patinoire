"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: "3rem 2rem",
          textAlign: "center",
        }}
      >
        <CheckCircle size={48} style={{ color: "#0c8de8" }} />
        <h3 style={{ color: "#f0f7ff", fontSize: "1.2rem" }}>Message envoyé !</h3>
        <p style={{ color: "rgba(148,173,199,0.8)", fontSize: "0.9rem" }}>
          Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        {[
          { id: "name", label: "Nom complet", type: "text", placeholder: "Jean Dupont" },
          { id: "email", label: "Email", type: "email", placeholder: "jean@exemple.com" },
        ].map((field) => (
          <div key={field.id} style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
            <label
              htmlFor={field.id}
              style={{ color: "rgba(185,223,255,0.8)", fontSize: "0.82rem", fontWeight: 600 }}
            >
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              required
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(124,196,253,0.15)",
                borderRadius: "0.625rem",
                padding: "0.75rem 1rem",
                color: "#f0f7ff",
                fontSize: "0.9rem",
                fontFamily: "inherit",
                outline: "none",
                transition: "border-color 0.2s ease",
                width: "100%",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(12,141,232,0.5)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(124,196,253,0.15)";
              }}
            />
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
        <label
          htmlFor="subject"
          style={{ color: "rgba(185,223,255,0.8)", fontSize: "0.82rem", fontWeight: 600 }}
        >
          Sujet
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Demande d'informations / Anniversaire / Devis..."
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(124,196,253,0.15)",
            borderRadius: "0.625rem",
            padding: "0.75rem 1rem",
            color: "#f0f7ff",
            fontSize: "0.9rem",
            fontFamily: "inherit",
            outline: "none",
            transition: "border-color 0.2s ease",
          }}
          onFocus={(e) => { e.target.style.borderColor = "rgba(12,141,232,0.5)"; }}
          onBlur={(e) => { e.target.style.borderColor = "rgba(124,196,253,0.15)"; }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
        <label
          htmlFor="message"
          style={{ color: "rgba(185,223,255,0.8)", fontSize: "0.82rem", fontWeight: 600 }}
        >
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Comment pouvons-nous vous aider ?"
          required
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(124,196,253,0.15)",
            borderRadius: "0.625rem",
            padding: "0.75rem 1rem",
            color: "#f0f7ff",
            fontSize: "0.9rem",
            fontFamily: "inherit",
            outline: "none",
            transition: "border-color 0.2s ease",
            resize: "vertical",
            minHeight: "140px",
          }}
          onFocus={(e) => { e.target.style.borderColor = "rgba(12,141,232,0.5)"; }}
          onBlur={(e) => { e.target.style.borderColor = "rgba(124,196,253,0.15)"; }}
        />
      </div>

      <button
        type="submit"
        className="btn-primary"
        style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: "0.5rem" }}
      >
        <Send size={16} />
        Envoyer le message
      </button>
    </form>
  );
}
