'use client'

import React from 'react'
import { MapPin, Menu, ShoppingCart } from 'lucide-react'

interface HeaderProps {
  cartCount?: number
  location?: string
  onMenuClick?: () => void
  onCartClick?: () => void
  onLocationClick?: () => void
}

export default function Header({
  cartCount = 0,
  location = 'Select location',
  onMenuClick,
  onCartClick,
  onLocationClick
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={onMenuClick} className="p-2 hover:bg-light-grey rounded-lg transition-colors">
            <Menu size={24} className="text-text-dark" />
          </button>

          <div className="flex-1 mx-4">
            <button
              onClick={onLocationClick}
              className="flex items-center gap-2 px-4 py-2 hover:bg-light-grey rounded-lg transition-colors"
            >
              <MapPin size={20} className="text-primary-orange" />
              <div className="text-left">
                <p className="text-small text-gray-500">Deliver to</p>
                <p className="text-body font-semibold text-text-dark">{location}</p>
              </div>
            </button>
          </div>

          <button onClick={onCartClick} className="relative p-2 hover:bg-light-grey rounded-lg transition-colors">
            <ShoppingCart size={24} className="text-text-dark" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-orange text-white text-xs font-bold rounded-full flex items-center justify-center">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
