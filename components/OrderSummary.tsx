'use client'

import React from 'react'

interface OrderSummaryProps {
  subtotal: number
  deliveryFee: number
  tax: number
  discount?: number
}

export default function OrderSummary({ subtotal, deliveryFee, tax, discount = 0 }: OrderSummaryProps) {
  const total = subtotal + deliveryFee + tax - discount

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-h2 font-semibold text-text-dark mb-4">Order Summary</h3>

      <div className="space-y-3">
        <div className="flex justify-between text-body">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">₹{subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-body">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-medium">₹{deliveryFee.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-body">
          <span className="text-gray-600">Tax & Charges</span>
          <span className="font-medium">₹{tax.toFixed(2)}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-body">
            <span className="text-success-green">Discount</span>
            <span className="font-medium text-success-green">-₹{discount.toFixed(2)}</span>
          </div>
        )}

        <div className="border-t border-light-grey pt-3">
          <div className="flex justify-between text-h2">
            <span className="font-bold text-text-dark">Total</span>
            <span className="font-bold text-primary-orange">₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
