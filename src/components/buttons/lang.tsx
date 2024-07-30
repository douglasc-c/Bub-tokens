'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

interface ButtonLangProps {
  params: {
    title: string
    path: string
    locale: string
  }
}

export default function ButtonLang({ params }: ButtonLangProps) {
  const { title, path, locale } = params
  const pathname = usePathname()
  const isActive = path === '/' + locale

  const parts = pathname.split('/')
  const route = parts.slice(2).join('/')

  const newPathname = `${path}/${route}`

  return (
    <ul>
      <li>
        <a
          href={newPathname}
          className={`flex items-center p-2 hover:border-black duration-300 hover:scale-110 ${isActive ? 'border-b-2 border-black' : 'border-b-2 border-white'}`}
        >
          {title}
        </a>
      </li>
    </ul>
  )
}
