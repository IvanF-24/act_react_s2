"use client";

export default function TarjetaDinamica({ titulo, contenido, colorFondo, colorTexto, ancho }) {
  const style = {
    backgroundColor: colorFondo,
    color: colorTexto,
    width: ancho,
    padding: "16px",
    margin: "12px 0",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const hoverStyle = {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 18px rgba(0, 0, 0, 0.15)",
  };

  return (
    <div
      style={style}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, style)}
    >
      <h2 style={{ marginBottom: "8px" }}>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
}
