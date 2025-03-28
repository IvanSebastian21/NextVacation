'use client'

import Link from 'next/link'

export default function PlanificaTuAventura() {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Sección de invitación a planear la aventura */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          ¿Listo para planear tu próxima aventura?
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          Diseña unas vacaciones perfectas que se ajusten a tus deseos y presupuesto.
        </p>
        <Link
          href="/planner-vacation"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Comenzar a planear
        </Link>
      </div>

      {/* Cuadrícula de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Destinos únicos</h3>
          <p className="text-gray-600">Descubre lugares increíbles que se adaptan a tus preferencias.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Experiencias personalizadas</h3>
          <p className="text-gray-600">Crea un itinerario que refleje tus intereses y estilo de viaje.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Planificación sin estrés</h3>
          <p className="text-gray-600">Simplificamos el proceso para que disfrutes cada paso del camino.</p>
        </div>
      </div>
    </section>
  )
}