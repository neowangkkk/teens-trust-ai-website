'use client'

import Image from 'next/image'
import { useState } from 'react'

interface PhotoGridProps {
  photos: { src: string; alt: string }[]
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setLightbox(i)}
            className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full aspect-video">
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-accent"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            &times;
          </button>
        </div>
      )}
    </>
  )
}
