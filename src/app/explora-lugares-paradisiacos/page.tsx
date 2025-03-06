'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import DescubreCulturasFascinantes from './../descubre-culturas-fascinantes/page'

const carouselItems = [
  {
    image: 'https://catracalivre.com.br/wp-content/uploads/2024/01/salta-tolar-grande-01-1.jpg',
    legend: 'Explora lugares paradisíacos',
    link: '/explora-lugares-paradisiacos',
  },
  {
    image: 'https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2022/01/28/61f3c17b4171c.r_d.1056-639-5666.jpeg',
    legend: 'Descubre culturas fascinantes',
    link: '/descubre-culturas-fascinantes',
  },
  {
    image: 'https://eldiariodeviaje.ar/media/k2/items/cache/15812787389d5e520282cfe444c2e037_L.jpg',
    legend: 'Vive aventuras en la naturaleza',
    link: '/vive-aventuras-en-la-naturaleza',
  },
  {
    image: 'https://www.clarin.com/img/2021/05/21/F_JceNUx8_720x0__1.jpg',
    legend: 'Disfruta de la gastronomía local',
    link: '/disfruta-de-la-gastronomía-local',
  },
  {
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/29/84/5a/balcon-de-la-plaza.jpg?w=1200&h=-1&s=1',
    legend: 'Relájate en resorts de lujo',
    link: '/relajate-en-resorts-de-lujo',
  },
  {
    image: 'https://www.equusargentina.com/wp-content/uploads/2021/08/cabalgata-salta-equus-argentina-1440x793-1.jpg',
    legend: 'Crea recuerdos inolvidables',
    link: '/crea-recuerdos-inolvidables',
  },
  {
    image: 'https://www.motofichas.com/images/articulos/ktm/890-adventure/ktm-890-adventure-accion.jpg',
    legend: 'Viajes adventure',
    link: '/viajes-adventure',
  },
]

export default function ExploraLugaresParadisíacos() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Encabezado */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">TusVacacionesIdeales.com</div>
            <div className="space-x-4">
              <Link href="/register" className="text-gray-700 hover:text-blue-600">Registrá tu propiedad</Link>
              <Link href="/signup" className="text-gray-700 hover:text-blue-600">Crear una cuenta</Link>
              <Link href="/login" className="text-gray-700 hover:text-blue-600">Iniciar sesión</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Carrusel */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            style={{ pointerEvents: index === currentSlide ? 'auto' : 'none' }}
          >
            {/* Imagen del carrusel */}
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />

            {/* Efecto de gradiente más intenso en los costados */}
            <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            'linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 43%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.5) 90%)',
        }}
      ></div>

            {/* Leyenda arriba del carrusel */}
            <Link href={item.link}>
              <div className="absolute top-0 left-0 right-0 flex items-start justify-center bg-black bg-opacity-10 text-white pt-8">
                <p className="text-3xl font-semibold">{item.legend}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Sección de búsqueda */}
      <main className="container mx-auto px-6 py-1 -mt-72 relative z-10">
        <div className="bg-white/50 p-6 rounded-lg shadow-md max-w-2xl mx-auto backdrop-blur-sm"> {/* Más transparente */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="¿A dónde vas?"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Check-in — Check-out"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="2 adultos · 0 menores · 1 habitación"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <button className="w-full mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Buscar
          </button>
        </div>
      </main>

      {/* Sección de ofertas */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Ofertas</h2>
          <p className="text-xl text-gray-600 mb-6">
            Promociones, descuentos y ofertas especiales para vos
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Ahorrá en estadías en todo el mundo
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Empezá el año con espíritu aventurero y ahorrá un 15% o más con las Ofertas de Inicio de 2025.
            </p>
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Ahorrá 15% o más
            </button>
          </div>
        </div>
      </section>

      {/* Agregar el componente DescubreCulturasFascinantes aquí */}
      <DescubreCulturasFascinantes />

      {/* Pie de página */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Booking.com. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}