'use client'

import { useState } from 'react'
import Section from '../buttons/section'

interface SectionsButtonProps {
  params: {
    texts: {
      tokenSummary: string
      token: string
      structure: string
      guaranteesRisks: string
    }
  }
  onActiveButtonChange: (activeButton: string) => void
}

export default function SectionsButton({
  params,
  onActiveButtonChange,
}: SectionsButtonProps) {
  const { texts } = params
  const [activeButton, setActiveButton] = useState<string>(texts.tokenSummary)

  const handleButtonClick = (buttonTitle: string) => {
    setActiveButton(buttonTitle)
    onActiveButtonChange(buttonTitle)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full items-center justify-between">
      <Section
        params={{
          title: texts.tokenSummary,
          image: 'qrCode',
          active: activeButton === texts.tokenSummary,
          onClick: () => handleButtonClick(texts.tokenSummary),
        }}
      />

      <Section
        params={{
          title: texts.token,
          image: 'archive',
          active: activeButton === texts.token,
          onClick: () => handleButtonClick(texts.token),
        }}
      />

      <Section
        params={{
          title: texts.structure,
          image: 'lightning',
          active: activeButton === texts.structure,
          onClick: () => handleButtonClick(texts.structure),
        }}
      />

      <Section
        params={{
          title: texts.guaranteesRisks,
          image: 'protect',
          active: activeButton === texts.guaranteesRisks,
          onClick: () => handleButtonClick(texts.guaranteesRisks),
        }}
      />
    </div>
  )
}
