'use client'

import React from 'react'
import { Home, Briefcase, MapPin, Edit2, Trash2 } from 'lucide-react'

interface AddressCardProps {
  id: string
  type: 'home' | 'work' | 'other'
  label?: string
  address: string
  isDefault?: boolean
  onEdit: (id: string) => void
  onDelete: (id: string) => void
  onSelect?: (id: string) => void
  selected?: boolean
}

export default function AddressCard({
  id,
  type,
  label,
  address,
  isDefault = false,
  onEdit,
  onDelete,
  onSelect,
  selected = false
}: AddressCardProps) {
  const icons = {
    home: Home,
    work: Briefcase,
    other: MapPin
  }

  const Icon = icons[type]

  return (
    <div
      onClick={() => onSelect?.(id)}
      className={`
        bg-white rounded-lg p-4 border-2 transition-all cursor-pointer
        ${selected ? 'border-primary-orange' : 'border-light-grey hover:border-primary-orange'}
      `}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selected ? 'bg-primary-orange' : 'bg-light-grey'}`}>
          <Icon size={20} className={selected ? 'text-white' : 'text-gray-600'} />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-body font-semibold text-text-dark capitalize">{label || type}</h4>
            {isDefault && (
              <span className="px-2 py-0.5 bg-primary-green text-white rounded-full text-small">
                Default
              </span>
            )}
          </div>
          <p className="text-body text-gray-600">{address}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-3 border-t border-light-grey">
        <button
          onClick={(e) => {
            e.stopPropagation()
            onEdit(id)
          }}
          className="flex-1 flex items-center justify-center gap-2 py-2 text-primary-orange hover:bg-warm-white rounded-lg transition-colors"
        >
          <Edit2 size={16} />
          <span className="text-small font-medium">Edit</span>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onDelete(id)
          }}
          className="flex-1 flex items-center justify-center gap-2 py-2 text-error-red hover:bg-red-50 rounded-lg transition-colors"
        >
          <Trash2 size={16} />
          <span className="text-small font-medium">Delete</span>
        </button>
      </div>
    </div>
  )
}
