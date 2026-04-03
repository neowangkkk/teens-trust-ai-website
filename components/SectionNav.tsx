'use client'

import { useEffect, useState } from 'react'

interface Section {
  id: string
  label: string
}

interface SectionNavProps {
  sections: Section[]
}

export default function SectionNav({ sections }: SectionNavProps) {
  const [active, setActive] = useState(sections[0]?.id || '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections])

  return (
    <nav className="hidden lg:block sticky top-24 self-start">
      <ul className="space-y-2 border-l-2 border-gray-200">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block pl-4 py-1 text-sm transition-colors ${
                active === id
                  ? 'text-accent border-l-2 border-accent -ml-[2px] font-semibold'
                  : 'text-navy/50 hover:text-navy/80'
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
