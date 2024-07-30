import React from 'react'

interface DataProps {
  params: {
    title: string
    path: string
  }
}

export default async function Button({ params }: DataProps) {
  const { title, path } = params

  return (
    <ul>
      <li>
        <a
          href={path}
          className=" items-center py-1 px-2 text-sm rounded-lg bg-black text-white"
        >
          {title}
        </a>
      </li>
    </ul>
  )
}
