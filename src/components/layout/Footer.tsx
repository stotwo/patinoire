import Link from "next/link";
import { Snowflake, MapPin, Phone, Mail, Instagram, Facebook, ExternalLink } from "lucide-react";

const footerLinks = {
  pratique: [
    { href: "/infos", label: "Heures & Tarifs" },
    { href: "/affutage-des-patins", label: "Affûtage des patins" },
    { href: "/anniversaires", label: "Anniversaires" },
    { href: "/galerie", label: "Galerie" },
  ],
  infos: [
    { href: "/historique", label: "Notre Histoire" },
    { href: "/liens", label: "Partenaires" },
    { href: "/reglement", label: "Règlement intérieur" },
    { href: "/contact", label: "Nous contacter" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(124, 196, 253, 0.1)",
        background: "linear-gradient(180deg, #060d1a 0%, #030812 100%)",
        paddingTop: "4rem",
        paddingBottom: "0",
        marginTop: "6rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            paddingBottom: "3rem",
          }}
        >
          <div style={{ maxWidth: "280px" }}>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontWeight: 800,
                fontSize: "1.1rem",
                color: "#f0f7ff",
                marginBottom: "1rem",
              }}
            >
              <Snowflake size={18} style={{ color: "#7cc4fd" }} strokeWidth={2.5} />
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
            <p
              style={{
                color: "rgba(148, 173, 199, 0.8)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Le complexe sportif sur glace de référence. Ouvert d'octobre à fin mars.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  background: "rgba(124, 196, 253, 0.08)",
                  border: "1px solid rgba(124, 196, 253, 0.15)",
                  borderRadius: "0.5rem",
                  color: "#7cc4fd",
                  transition: "all 0.2s ease",
                }}
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  background: "rgba(124, 196, 253, 0.08)",
                  border: "1px solid rgba(124, 196, 253, 0.15)",
                  borderRadius: "0.5rem",
                  color: "#7cc4fd",
                  transition: "all 0.2s ease",
                }}
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4
              style={{
                color: "#f0f7ff",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Pratique
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {footerLinks.pratique.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(148, 173, 199, 0.8)",
                      fontSize: "0.9rem",
                      transition: "color 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                color: "#f0f7ff",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Informations
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {footerLinks.infos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(148, 173, 199, 0.8)",
                      fontSize: "0.9rem",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                color: "#f0f7ff",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </h4>
            <address
              style={{
                fontStyle: "normal",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                <MapPin size={15} style={{ color: "#7cc4fd", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ color: "rgba(148, 173, 199, 0.8)", fontSize: "0.875rem" }}>
                  Belgique
                </span>
              </div>
              <div style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
                <Phone size={15} style={{ color: "#7cc4fd", flexShrink: 0 }} />
                <span style={{ color: "rgba(148, 173, 199, 0.8)", fontSize: "0.875rem" }}>
                  +32 (0) X XX XX XX
                </span>
              </div>
              <div style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
                <Mail size={15} style={{ color: "#7cc4fd", flexShrink: 0 }} />
                <a
                  href="mailto:info@lapatinoire.com"
                  style={{ color: "rgba(148, 173, 199, 0.8)", fontSize: "0.875rem" }}
                >
                  info@lapatinoire.com
                </a>
              </div>
            </address>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(124, 196, 253, 0.08)",
            padding: "1.5rem 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "rgba(148, 173, 199, 0.5)", fontSize: "0.8rem" }}>
            © {currentYear} La Patinoire. Tous droits réservés.
          </p>
          <p style={{ color: "rgba(148, 173, 199, 0.4)", fontSize: "0.75rem" }}>
            Informations non contractuelles.
          </p>
        </div>
      </div>
    </footer>
  );
}
