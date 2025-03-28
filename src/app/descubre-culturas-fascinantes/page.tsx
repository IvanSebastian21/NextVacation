"use client"
import { useState } from 'react'
import Image from 'next/image'

export default function DescubreCulturasFascinantes() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    const accommodationTypes = [
        { name: 'Hoteles', color: 'bg-blue-100', image: '/images/hoteles.jpg', link: '/alojamientos/hoteles' },
        { name: 'Departamentos', color: 'bg-green-100', image: '/images/departamentos.jpg', link: '/alojamientos/departamentos' },
        { name: 'Resorts', color: 'bg-yellow-100', image: '/images/resorts.jpg', link: '/alojamientos/resorts' },
        { name: 'Villas', color: 'bg-purple-100', image: '/images/villas.jpg', link: '/alojamientos/villas' },
    ]

    const destinations = [
        { name: 'Cataratas del Iguazú', properties: 1200, image: '/images/cataratas.jpg', link: '/destinos/cataratas' },
        { name: 'Ruinas de San Ignacio', properties: 300, image: '/images/san-ignacio.jpg', link: '/destinos/san-ignacio' },
        { name: 'Posadas', properties: 850, image: '/images/posadas.jpg', link: '/destinos/posadas' },
        { name: 'El Soberbio', properties: 200, image: '/images/el-soberbio.jpg', link: '/destinos/el-soberbio' },
        { name: 'Oberá', properties: 400, image: '/images/obera.jpg', link: '/destinos/obera' },
        { name: 'Apóstoles', properties: 150, image: '/images/apostoles.jpg', link: '/destinos/apostoles' },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sección de tipos de alojamiento */}
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Buscar por tipo de alojamiento</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {accommodationTypes.map((type) => (
                        <a
                            key={type.name}
                            href={type.link}
                            className={`p-6 rounded-lg shadow-md transition-transform duration-300 ${type.color} ${hoveredCard === type.name ? 'transform scale-105' : ''
                                }`}
                            onMouseEnter={() => setHoveredCard(type.name)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="relative h-40 mb-4">
                                <Image
                                    src={type.image}
                                    alt={type.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{type.name}</h3>
                        </a>
                    ))}
                </div>
            </section>

            {/* Sección de destinos en Misiones */}
            <section className="container mx-auto px-6 py-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Descubrí Misiones</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {destinations.map((destination) => (
                        <a
                            key={destination.name}
                            href={destination.link}
                            className={`p-6 rounded-lg shadow-md bg-white transition-transform duration-300 ${hoveredCard === destination.name ? 'transform scale-105' : ''
                                }`}
                            onMouseEnter={() => setHoveredCard(destination.name)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="relative h-40 mb-4">
                                <Image
                                    src={destination.image}
                                    alt={destination.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
                            <p className="text-gray-600">{destination.properties} propiedades</p>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    )
}