import type { Metadata } from "next";
import { Images } from "lucide-react";
import AnimatedSection from "../_components/ui/AnimatedSection";
import GalerieClient from "../_components/ui/GalerieClient";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Découvrez La Patinoire en images : séances publiques, hockey, patinage artistique et événements.",
};

export default function Galerie() {
  return (
    <div>
      <div className="page-hero">
        <div className="container" style={{ paddingTop: "5rem", width: "100%" }}>
          <AnimatedSection>
            <div className="section-label">
              <Images size={13} />
              <span>Photos</span>
            </div>
            <h1>
              Notre <span className="gradient-text">Galerie</span>
            </h1>
            <p style={{ color: "rgba(185,223,255,0.8)", fontSize: "1.1rem", marginTop: "0.75rem", maxWidth: "480px" }}>
              Aperçu de nos installations et des moments partagés sur la glace.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container" style={{ padding: "4rem 1.5rem" }}>
        <GalerieClient />
      </div>
    </div>
  );
}


