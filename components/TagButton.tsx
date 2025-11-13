'use client'

import React from 'react'

interface TagButtonProps {
  label: string
  selected?: boolean
  onClick: () => void
  icon?: React.ReactNode
}

export default function TagButton({ label, selected = false, onClick, icon }: TagButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-full text-small font-medium transition-all
        ${selected
          ? 'bg-primary-orange text-white shadow-md'
          : 'bg-white text-text-dark border-2 border-light-grey hover:border-primary-orange'
        }
      `}
    >
      {icon && <span className={selected ? 'text-white' : 'text-primary-orange'}>{icon}</span>}
      {label}
    </button>
  )
}
