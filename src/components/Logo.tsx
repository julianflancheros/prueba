// components/Logo.tsx
const Logo = ({ className = "", ...props }) => {
  const neonColor = "#18F07D"; // El color verde de tu marca

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={`w-16 h-16 ${className}`} // Tamaño por defecto con Tailwind
      {...props}
    >
      {/* Si el header ya es negro, no necesitas este rect de fondo */}
      {/* <rect width="200" height="200" fill="#000000"/> */}

      {/* Marco */}
      <rect
        x="15" y="15" width="170" height="170"
        fill="none"
        stroke={neonColor}
        strokeWidth="4"
      />

      {/* Texto */}
      <text
        x="50%" y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="110"
        fontWeight="bold"
        letterSpacing="-2"
        fill={neonColor}
        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
      >
        JL
      </text>
    </svg>
  );
};

export default Logo;