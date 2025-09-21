"use client";

export default function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
    <div className="flex flex-col w-64 m-2 p-4 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      {imagen && (
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
      )}
      <h2 className="text-lg font-bold text-gray-800 mb-2">{titulo}</h2>
      <p className="text-sm text-gray-600 flex-grow">{descripcion}</p>
      {etiqueta && (
        <span className="mt-3 inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {etiqueta}
        </span>
      )}
    </div>
  );
}
