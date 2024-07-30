'use client'

import Image from 'next/image'

interface SectionButtonProps {
  params: {
    title: string
    image: string
    active: boolean
    onClick: () => void
  }
}

export default function SectionButton({ params }: SectionButtonProps) {
  const { title, image, active, onClick } = params

  return (
    <div
      className={`flex flex-col items-center text-center justify-center h-28 w-full p-5 rounded-lg border border-gray-200 ${active ? 'bg-gray-100' : 'bg-gray-50'}`}
      onClick={onClick}
    >
      <Image
        src={`/images/svg/${image}.svg`}
        alt="Icon"
        width={30}
        height={30}
      />
      <a className="font-semibold text-sm mt-3">{title}</a>
    </div>
  )
}
