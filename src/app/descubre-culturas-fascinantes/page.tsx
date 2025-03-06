"use client"
import { useState } from 'react'

export default function DescubreCulturasFascinantes() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    const accommodationTypes = [
        { name: 'Hoteles', color: 'bg-blue-100' },
        { name: 'Departamentos', color: 'bg-green-100' },
        { name: 'Resorts', color: 'bg-yellow-100' },
        { name: 'Villas', color: 'bg-purple-100' },
    ]

    const destinations = [
        { name: 'Mar del Plata', properties: 1663 },
        { name: 'Buenos Aires', properties: 5128 },
        { name: 'Villa Carlos Paz', properties: 851 },
        { name: 'San Carlos de Bariloche', properties: 999 },
        { name: 'Villa Gesell', properties: 487 },
        { name: 'Córdoba', properties: 1354 },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sección de tipos de alojamiento */}
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Buscar por tipo de alojamiento</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {accommodationTypes.map((type) => (
                        <div
                            key={type.name}
                            className={`p-6 rounded-lg shadow-md transition-transform duration-300 ${type.color} ${hoveredCard === type.name ? 'transform scale-105' : ''
                                }`}
                            onMouseEnter={() => setHoveredCard(type.name)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <h3 className="text-xl font-semibold text-gray-800">{type.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sección de destinos en Argentina */}
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Descubrí Misiones</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {destinations.map((destination) => (
                        <div
                            key={destination.name}
                            className={`p-6 rounded-lg shadow-md bg-white transition-transform duration-300 ${hoveredCard === destination.name ? 'transform scale-105' : ''
                                }`}
                            onMouseEnter={() => setHoveredCard(destination.name)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
                            <p className="text-gray-600">{destination.properties} propiedades</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}