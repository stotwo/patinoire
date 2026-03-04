"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Instagram } from "lucide-react";

const images = [
  {
    id: 1,
    src: "/images/galerie/patinage_1.png",
    alt: "Vue panoramique de la patinoire",
    span: "large",
  },
  {
    id: 2,
    src: "/images/galerie/patinage_2.png",
    alt: "Match de hockey sur glace",
    span: "normal",
  },
  {
    id: 3,
    src: "/images/galerie/patinage_3.png",
    alt: "Patinage artistique",
    span: "normal",
  },
  {
    id: 4,
    src: "/images/galerie/patinage_4.png",
    alt: "Séance famille sur la glace",
    span: "normal",
  },
  {
    id: 5,
    src: "/images/galerie/patinage_3.png",
    alt: "Détail patinage artistique",
    span: "tall",
  },
  {
    id: 6,
    src: "/images/galerie/patinage_1.png",
    alt: "Surface de la glace",
    span: "normal",
  },
  {
    id: 7,
    src: "/images/galerie/patinage_4.png",
    alt: "Cours de patinage",
    span: "normal",
  },
  {
    id: 8,
    src: "/images/galerie/patinage_2.png",
    alt: "Action hockey sur glace",
    span: "large",
  },
];

export default function GalerieClient() {
  const [selected, setSelected] = useState<(typeof images)[0] | null>(null);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gridAutoRows: "220px",
          gap: "0.75rem",
        }}
      >
        {images.map((img, idx) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            onClick={() => setSelected(img)}
            style={{
              position: "relative",
              borderRadius: "0.75rem",
              overflow: "hidden",
              cursor: "pointer",
              border: "1px solid rgba(124,196,253,0.1)",
              gridColumn: img.span === "large" ? "span 2" : "span 1",
              gridRow: img.span === "tall" ? "span 2" : "span 1",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(3,8,18,0.7) 0%, transparent 50%)",
                opacity: 0,
                transition: "opacity 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="gallery-overlay"
            >
              <ZoomIn size={28} style={{ color: "#fff" }} />
            </div>
            <span
              style={{
                position: "absolute",
                bottom: "0.75rem",
                left: "0.875rem",
                right: "0.875rem",
                color: "#f0f7ff",
                fontSize: "0.82rem",
                fontWeight: 500,
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
              className="gallery-caption"
            >
              {img.alt}
            </span>
          </motion.div>
        ))}
      </div>

      <div
        style={{
          marginTop: "3rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <p style={{ color: "rgba(148,173,199,0.75)", fontSize: "0.9rem" }}>
          Plus de photos et vidéos exclusives sur notre page Instagram
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
        >
          <Instagram size={18} />
          Suivre sur Instagram
        </a>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(3,8,18,0.94)",
              zIndex: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              backdropFilter: "blur(8px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "900px",
                maxHeight: "85vh",
                width: "100%",
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid rgba(124,196,253,0.15)",
              }}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                width={900}
                height={600}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "85vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "rgba(3,8,18,0.8)",
                  border: "1px solid rgba(124,196,253,0.2)",
                  borderRadius: "0.5rem",
                  padding: "0.5rem",
                  color: "#f0f7ff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={20} />
              </button>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(3,8,18,0.9) 0%, transparent 100%)",
                  padding: "2rem 1.5rem 1.25rem",
                }}
              >
                <p style={{ color: "#f0f7ff", fontSize: "0.9rem", fontWeight: 500 }}>
                  {selected.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-overlay:hover,
        [data-gallery-item]:hover .gallery-overlay {
          opacity: 1 !important;
        }
        [data-gallery-item]:hover .gallery-caption {
          opacity: 1 !important;
        }
        div[style*="cursor: pointer"]:hover img {
          transform: scale(1.05);
        }
        div[style*="cursor: pointer"]:hover .gallery-overlay {
          opacity: 1 !important;
        }
        div[style*="cursor: pointer"]:hover .gallery-caption {
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
}
