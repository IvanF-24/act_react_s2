"use client";

export default function TarjetaCondicional({
  titulo,
  contenido,
  activo = false,
}) {
  const style = {
    backgroundColor: activo ? "#0070f3" : "#f3f4f6", // azul si activo, gris si no
    color: activo ? "#ffffff" : "#111111",          // texto blanco si activo
    border: activo ? "2px solid #005bb5" : "2px solid #d1d5db",
    width: "300px",
    padding: "16px",
    margin: "12px 0",
    borderRadius: "12px",
    boxShadow: activo
      ? "0 6px 16px rgba(0, 0, 0, 0.2)"
      : "0 3px 8px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  };

  return (
    <div style={style}>
      <h2 style={{ marginBottom: "8px" }}>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
}
