'use client'

import React from 'react'
import { Star, MapPin, Clock, Award } from 'lucide-react'

interface CookProfileProps {
  name: string
  rating: number
  totalReviews: number
  totalOrders: number
  distance: string
  specialties: string[]
  bio: string
  verified?: boolean
}

export default function CookProfile({
  name,
  rating,
  totalReviews,
  totalOrders,
  distance,
  specialties,
  bio,
  verified = false
}: CookProfileProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-20 h-20 bg-primary-orange rounded-full flex items-center justify-center">
          <span className="text-h1 text-white font-bold">{name.charAt(0)}</span>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-h1 font-bold text-text-dark">{name}</h2>
            {verified && (
              <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center">
                <Award size={14} className="text-white" fill="white" />
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center gap-1">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span className="text-body font-semibold">{rating}</span>
              <span className="text-small text-gray-500">({totalReviews} reviews)</span>
            </div>

            <div className="flex items-center gap-1 text-gray-500">
              <MapPin size={14} />
              <span className="text-small">{distance}</span>
            </div>
          </div>

          <p className="text-small text-gray-600">{totalOrders}+ orders completed</p>
        </div>
      </div>

      <p className="text-body text-gray-600 mb-4">{bio}</p>

      <div>
        <h3 className="text-body font-semibold text-text-dark mb-2">Specialties</h3>
        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-warm-white border border-primary-orange text-primary-orange rounded-full text-small"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
