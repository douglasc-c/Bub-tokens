import React from 'react'

interface DataProps {
  params: {
    title: string
    status: boolean
  }
}

export default async function Status({ params }: DataProps) {
  const { title, status } = params
  const bgColor = status ? 'bg-green-500' : 'bg-red-500'

  return (
    <ul>
      <li>
        <a
          className={`items-center py-1 px-2 rounded-lg ${bgColor} text-white font-semibold`}
        >
          {title}
        </a>
      </li>
    </ul>
  )
}
