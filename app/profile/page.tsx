'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import BottomNav from '@/components/BottomNav'
import Button from '@/components/Button'
import { User, MapPin, Heart, Clock, Settings, HelpCircle, LogOut } from 'lucide-react'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'home' | 'search' | 'favorites' | 'profile'>('profile')

  const menuItems = [
    {
      icon: User,
      label: 'Edit Profile',
      href: '/profile/edit'
    },
    {
      icon: MapPin,
      label: 'Saved Addresses',
      href: '/addresses'
    },
    {
      icon: Heart,
      label: 'Favorite Meals',
      href: '/favorites'
    },
    {
      icon: Clock,
      label: 'Order History',
      href: '/orders'
    },
    {
      icon: Settings,
      label: 'Settings',
      href: '/settings'
    },
    {
      icon: HelpCircle,
      label: 'Help & Support',
      href: '/help'
    }
  ]

  return (
    <div className="min-h-screen bg-warm-white pb-20">
      <Header cartCount={2} location="Indiranagar, Bangalore" />

      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-primary-orange rounded-full flex items-center justify-center">
              <User size={32} className="text-white" />
            </div>

            <div className="flex-1">
              <h1 className="text-h1 font-bold text-text-dark">Rahul Kumar</h1>
              <p className="text-body text-gray-600">+91 9876543210</p>
              <p className="text-small text-gray-500">rahul.kumar@email.com</p>
            </div>

            <Button variant="outline" size="small" onClick={() => window.location.href = '/profile/edit'}>
              Edit
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-light-grey">
            <div className="text-center">
              <p className="text-h2 font-bold text-primary-orange">24</p>
              <p className="text-small text-gray-600">Orders</p>
            </div>
            <div className="text-center border-l border-r border-light-grey">
              <p className="text-h2 font-bold text-primary-orange">8</p>
              <p className="text-small text-gray-600">Favorites</p>
            </div>
            <div className="text-center">
              <p className="text-h2 font-bold text-primary-orange">3</p>
              <p className="text-small text-gray-600">Addresses</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={index}
                onClick={() => window.location.href = item.href}
                className="w-full flex items-center gap-4 p-4 hover:bg-light-grey transition-colors border-b border-light-grey last:border-b-0"
              >
                <div className="w-10 h-10 bg-light-grey rounded-full flex items-center justify-center">
                  <Icon size={20} className="text-gray-600" />
                </div>
                <span className="text-body font-medium text-text-dark flex-1 text-left">
                  {item.label}
                </span>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )
          })}
        </div>

        <div className="mt-6">
          <Button fullWidth variant="outline" onClick={() => console.log('Logout')}>
            <LogOut size={20} />
            Logout
          </Button>
        </div>

        <div className="text-center mt-6">
          <p className="text-small text-gray-500">Version 1.0.0</p>
        </div>
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
