'use client'

import React from 'react'
import { Search, Mic } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  showMicrophone?: boolean
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search home-cooked meals…",
  showMicrophone = false
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full py-3 pl-12 pr-12 text-body rounded-full bg-white border-2 border-light-grey focus:border-primary-orange focus:outline-none transition-colors"
      />
      {showMicrophone && (
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-orange transition-colors">
          <Mic size={20} />
        </button>
      )}
    </div>
  )
}
