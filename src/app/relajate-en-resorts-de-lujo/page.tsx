// pages/explora-lugares-paradisíacos.tsx
import Link from 'next/link'

export default function RelajateEnResortsReLujos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">VacacionesIdeales</div>
            <div className="space-x-4">
              <Link href="/about" className="text-gray-700 hover:text-blue-600">Acerca de</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
              <Link href="/login" className="text-gray-700 hover:text-blue-600 transition duration-300">Login</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Explora lugares paradisíacos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Información del destino</h2>
            <p className="text-gray-600 mb-4">
              Descubre los lugares más hermosos del mundo, desde playas de arena blanca hasta montañas impresionantes.
            </p>
            <p className="text-gray-600 mb-4">
              Nuestros destinos paradisíacos incluyen:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Playas de ensueño</li>
              <li>Islas tropicales</li>
              <li>Reservas naturales</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mapa del destino</h2>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Mapa interactivo aquí</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 VacacionesIdeales. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}