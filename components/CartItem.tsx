'use client'

import React from 'react'
import { Plus, Minus, Trash2 } from 'lucide-react'

interface CartItemProps {
  id: string
  title: string
  cookName: string
  price: number
  quantity: number
  onQuantityChange: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

export default function CartItem({
  id,
  title,
  cookName,
  price,
  quantity,
  onQuantityChange,
  onRemove
}: CartItemProps) {
  const handleIncrease = () => {
    onQuantityChange(id, quantity + 1)
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(id, quantity - 1)
    }
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="w-20 h-20 bg-light-grey rounded-lg flex items-center justify-center">
        <span className="text-small text-gray-400">IMG</span>
      </div>

      <div className="flex-1">
        <h4 className="text-body font-semibold text-text-dark">{title}</h4>
        <p className="text-small text-gray-500">by {cookName}</p>
        <p className="text-body font-bold text-primary-orange mt-1">₹{price}</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-light-grey rounded-lg p-1">
          <button
            onClick={handleDecrease}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-white transition-colors"
          >
            <Minus size={16} className="text-text-dark" />
          </button>
          <span className="text-body font-medium w-8 text-center">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-white transition-colors"
          >
            <Plus size={16} className="text-text-dark" />
          </button>
        </div>

        <button
          onClick={() => onRemove(id)}
          className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-error-red hover:text-white transition-colors text-gray-400"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  )
}
