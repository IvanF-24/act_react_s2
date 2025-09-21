"use client";

import styles from "./TarjetaModulo.module.css";
import clsx from "clsx"; // opcional, facilita combinar clases

export default function TarjetaModulo({ nombre, descripcion, categoria, variante = "primaria" }) {
  const tarjetaClasses = clsx(styles.tarjeta, {
    [styles.tarjetaPrimaria]: variante === "primaria",
    [styles.tarjetaSecundaria]: variante === "secundaria",
    [styles.tarjetaExito]: variante === "exito",
  });

  return (
    <div className={tarjetaClasses}>
      <div className={styles.encabezado}>
        <h2 className={styles.titulo}>{nombre}</h2>
      </div>
      <p className={styles.descripcion}>{descripcion}</p>
      <span className={styles.categoria}>{categoria}</span>
    </div>
  );
}
