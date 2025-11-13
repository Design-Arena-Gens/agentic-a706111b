'use client'

import React from 'react'
import { Clock, MapPin, CheckCircle, XCircle } from 'lucide-react'

interface OrderCardProps {
  orderId: string
  items: { title: string; quantity: number }[]
  status: 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled'
  cookName: string
  total: number
  orderDate: string
  deliveryTime?: string
}

export default function OrderCard({
  orderId,
  items,
  status,
  cookName,
  total,
  orderDate,
  deliveryTime
}: OrderCardProps) {
  const statusConfig = {
    pending: { color: 'text-gray-500', bg: 'bg-gray-100', label: 'Pending' },
    confirmed: { color: 'text-blue-600', bg: 'bg-blue-100', label: 'Confirmed' },
    preparing: { color: 'text-primary-orange', bg: 'bg-orange-100', label: 'Preparing' },
    'out-for-delivery': { color: 'text-purple-600', bg: 'bg-purple-100', label: 'Out for Delivery' },
    delivered: { color: 'text-success-green', bg: 'bg-green-100', label: 'Delivered' },
    cancelled: { color: 'text-error-red', bg: 'bg-red-100', label: 'Cancelled' }
  }

  const config = statusConfig[status]

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-light-grey">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-small text-gray-500">Order #{orderId}</p>
          <p className="text-body font-semibold text-text-dark mt-1">by {cookName}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-small font-medium ${config.bg} ${config.color}`}>
          {config.label}
        </span>
      </div>

      <div className="space-y-2 mb-3">
        {items.map((item, index) => (
          <p key={index} className="text-body text-gray-600">
            {item.quantity}x {item.title}
          </p>
        ))}
      </div>

      <div className="flex items-center gap-4 text-small text-gray-500 mb-3">
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{orderDate}</span>
        </div>
        {deliveryTime && (
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{deliveryTime}</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-light-grey">
        <span className="text-h2 font-bold text-text-dark">₹{total.toFixed(2)}</span>
        {status === 'delivered' ? (
          <button className="px-4 py-2 bg-primary-orange text-white rounded-lg text-small font-medium hover:bg-opacity-90 transition-colors">
            Reorder
          </button>
        ) : status === 'out-for-delivery' ? (
          <button className="px-4 py-2 bg-primary-green text-white rounded-lg text-small font-medium hover:bg-opacity-90 transition-colors">
            Track Order
          </button>
        ) : null}
      </div>
    </div>
  )
}
