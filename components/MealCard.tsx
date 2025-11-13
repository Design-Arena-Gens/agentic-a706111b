'use client'

import React from 'react'
import { Star, Clock, MapPin, Heart } from 'lucide-react'

interface MealCardProps {
  id: string
  image: string
  title: string
  cookName: string
  rating: number
  reviews: number
  price: number
  prepTime: string
  distance?: string
  tags?: string[]
  onFavorite?: (id: string) => void
  isFavorite?: boolean
}

export default function MealCard({
  id,
  image,
  title,
  cookName,
  rating,
  reviews,
  price,
  prepTime,
  distance,
  tags = [],
  onFavorite,
  isFavorite = false
}: MealCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="w-full h-48 bg-light-grey flex items-center justify-center">
          <span className="text-gray-400 text-small">{title}</span>
        </div>
        <button
          onClick={() => onFavorite?.(id)}
          className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        >
          <Heart
            size={20}
            className={isFavorite ? 'fill-error-red text-error-red' : 'text-gray-400'}
          />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-h2 font-semibold text-text-dark mb-1">{title}</h3>
        <p className="text-small text-gray-500 mb-2">by {cookName}</p>

        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="text-small font-medium">{rating}</span>
            <span className="text-small text-gray-400">({reviews})</span>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <Clock size={14} />
            <span className="text-small">{prepTime}</span>
          </div>

          {distance && (
            <div className="flex items-center gap-1 text-gray-500">
              <MapPin size={14} />
              <span className="text-small">{distance}</span>
            </div>
          )}
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-light-grey rounded-full text-small text-gray-600">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-light-grey">
          <span className="text-h2 font-bold text-primary-orange">₹{price}</span>
          <button className="px-4 py-2 bg-primary-orange text-white rounded-lg text-small font-medium hover:bg-opacity-90 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
