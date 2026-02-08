"use client";
import { motion } from "framer-motion";

export const AnimatedLogo = () => {
  const neonColor = "#18F07D"; // Tu verde exacto

  // Configuración de la animación del trazo (el cuadrado)
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 0.2, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: 0.2, duration: 0.01 },
      },
    },
  };

  return (
    <motion.svg
      width="50" // Ajusta el tamaño aquí (ej. 100px)
      height="50"
      viewBox="0 0 200 200"
      initial="hidden"
      animate="visible"
      className="overflow-visible" // Importante para efectos de brillo si agregas luego
    >
      {/* 1. El Marco Cuadrado que se "dibuja" */}
      <motion.rect
        x="15"
        y="15"
        width="170"
        height="170"
        fill="none"
        stroke={neonColor}
        strokeWidth="4"
        variants={draw}
      />

      {/* 2. Las Letras JL (Aparecen con Fade In + Pequeño Zoom) */}
      <motion.text
        x="50%"
        y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="110"
        fontWeight="bold"
        letterSpacing="-2"
        fill={neonColor}
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease: "backOut" }} // Aparece después del cuadro
      >
        JL
      </motion.text>
    </motion.svg>
  );
};