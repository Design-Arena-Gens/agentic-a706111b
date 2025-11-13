'use client'

import React from 'react'
import { Star } from 'lucide-react'

interface ReviewCardProps {
  userName: string
  rating: number
  date: string
  comment: string
  helpful?: number
}

export default function ReviewCard({ userName, rating, date, comment, helpful = 0 }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 border border-light-grey">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-orange rounded-full flex items-center justify-center">
            <span className="text-body text-white font-semibold">{userName.charAt(0)}</span>
          </div>
          <div>
            <p className="text-body font-semibold text-text-dark">{userName}</p>
            <p className="text-small text-gray-500">{date}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={14}
              className={index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>
      </div>

      <p className="text-body text-gray-600 mb-3">{comment}</p>

      {helpful > 0 && (
        <p className="text-small text-gray-500">{helpful} people found this helpful</p>
      )}
    </div>
  )
}
