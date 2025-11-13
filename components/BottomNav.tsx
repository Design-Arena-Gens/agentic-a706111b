'use client'

import React from 'react'
import { Home, Search, Heart, User } from 'lucide-react'

interface BottomNavProps {
  activeTab: 'home' | 'search' | 'favorites' | 'profile'
  onTabChange: (tab: 'home' | 'search' | 'favorites' | 'profile') => void
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'favorites', icon: Heart, label: 'Favorites' },
    { id: 'profile', icon: User, label: 'Profile' },
  ] as const

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-light-grey shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around">
          {tabs.map(tab => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="flex-1 flex flex-col items-center gap-1 py-3 transition-colors"
              >
                <Icon
                  size={24}
                  className={isActive ? 'text-primary-orange' : 'text-gray-400'}
                  fill={isActive && tab.id === 'favorites' ? 'currentColor' : 'none'}
                />
                <span className={`text-small ${isActive ? 'text-primary-orange font-medium' : 'text-gray-400'}`}>
                  {tab.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
