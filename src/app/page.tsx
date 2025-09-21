import TarjetaGlobal from "@/app/components/TarjetaGlobal";
import TarjetaModulo from "@/app/components/TarjetaModulo";
import TarjetaDinamica from "@/app/components/TarjetaDinamica";
import TarjetaTailwind from "@/app/components/TarjetaTailwind";
import TarjetaCondicional from "@/app/components/TarjetaCondicional";

export default function Home() {
  return (
    <main className="p-8 space-y-12">
      {/* Tarjeta con CSS Global */}
      <section>
        <h1 className="text-2xl font-bold mb-4">1️⃣ Tarjeta con CSS Global</h1>
        <TarjetaGlobal
          titulo="Global Card"
          contenido="Este componente usa clases globales definidas en globals.css."
          color="#0070f3"
        />
      </section>

      {/* Tarjeta con CSS Modules */}
      <section>
        <h1 className="text-2xl font-bold mb-4">2️⃣ Tarjeta con CSS Modules</h1>
        <TarjetaModulo
          nombre="Módulo Inventario"
          descripcion="Este componente utiliza estilos encapsulados con módulos CSS."
          categoria="Logística"
          variante="secundaria"
        />
      </section>

      {/* Tarjeta con estilos en línea dinámicos */}
      <section>
        <h1 className="text-2xl font-bold mb-4">
          3️⃣ Tarjeta con Estilos en Línea Dinámicos
        </h1>
        <TarjetaDinamica
          titulo="Tarjeta Azul"
          contenido="El fondo, el texto y el ancho se definen mediante props dinámicos."
          colorFondo="#0070f3"
          colorTexto="#ffffff"
          ancho="300px"
        />
        <TarjetaCondicional
          titulo="Tarjeta Condicional"
          contenido="Los estilos cambian automáticamente según la prop activo."
          activo={true}
        />
      </section>

      {/* Tarjeta con Tailwind CSS */}
      <section>
        <h1 className="text-2xl font-bold mb-4">4️⃣ Tarjeta con Tailwind CSS</h1>
        <div className="flex flex-wrap gap-4">
          <TarjetaTailwind
            titulo="Gestión de Usuarios"
            descripcion="Ejemplo de tarjeta estilizada con utilidades de Tailwind."
            imagen=""
            etiqueta="Autenticación"
          />
          <TarjetaTailwind
            titulo="Reportes"
            descripcion="Otra tarjeta demostrando el diseño moderno con Tailwind."
            imagen=""
            etiqueta="Análisis"
          />
        </div>
      </section>
    </main>
  );
}
