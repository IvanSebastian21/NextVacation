'use client'

import { useState } from 'react'
import Link from 'next/link'

const trendingDestinations = [
  {
    image: 'https://gpsviajes.com.ar/inicio/wp-content/uploads/2021/08/cataratas-iguazu-panoramica.jpeg', // Completa con la URL de la imagen
    name: ' Cataratas del Iguazú',
    link: '/bali-indonesia',
  },
  {
    image: 'https://lmdiario.com.ar/download/multimedia.normal.85240318f76ad50e.5275696e61732053616e2049676e6163696f203220c2a9207669616a65726f735f6e6f726d616c2e77656270.webp', // Completa con la URL de la imagen
    name: ' Ruinas de San Ignacio',
    link: '/santorini-grecia',
  },
  {
    image: 'https://i.pinimg.com/474x/7f/01/b9/7f01b98444c49b92383d3b6bfa8709d6.jpg', // Completa con la URL de la imagen
    name: 'Salto Encantado',
    link: '/kyoto-japon',
  },
  {
    image: 'https://i0.wp.com/enfoquemisiones.com/wp-content/uploads/2020/07/WhatsApp-Image-2020-06-17-at-21.44.18.jpeg?w=864&ssl=1', // Completa con la URL de la imagen
    name: 'El Soberbio',
    link: '/nueva-york-eeuu',
  },
  {
    image: 'https://incade.edu.ar/wp-content/uploads/2025/02/turismo-posadas-2-1.jpg', // Completa con la URL de la imagen
    name: 'Posadas',
    link: '/paris-francia',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Ober%C3%A1_-_nuevo_centro_c%C3%ADvico.jpg', // Completa con la URL de la imagen
    name: 'Oberá',
    link: '/rio-de-janeiro-brasil',
  },
]

export default function DestinosQueSonTendencia() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Destinos que son tendencia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingDestinations.map((destination, index) => (
            <Link key={index} href={destination.link}>
              <div
                className={`relative h-64 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ${
                  hoveredCard === destination.name ? 'transform scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(destination.name)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-xl font-semibold">{destination.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}