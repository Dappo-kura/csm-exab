"use client";

import { useEffect } from "react";

export function PWARegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      // GitHub Pages対応: basePathを考慮
      const basePath = process.env.NODE_ENV === "production" ? "/csm-exab" : "";
      const swPath = `${basePath}/sw.js`;
      
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register(swPath)
          .then((registration) => {
            console.log("SW registered: ", registration);
          })
          .catch((registrationError) => {
            console.log("SW registration failed: ", registrationError);
          });
      });
    }
  }, []);

  return null;
}
