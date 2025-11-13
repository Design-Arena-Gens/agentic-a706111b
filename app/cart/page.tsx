'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import CartItem from '@/components/CartItem'
import OrderSummary from '@/components/OrderSummary'
import Button from '@/components/Button'
import { ArrowLeft } from 'lucide-react'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      title: 'Paneer Butter Masala',
      cookName: 'Priya Sharma',
      price: 180,
      quantity: 2
    },
    {
      id: '2',
      title: 'Hyderabadi Biryani',
      cookName: 'Fatima Khan',
      price: 250,
      quantity: 1
    }
  ])

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    )
  }

  const handleRemove = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = 30
  const tax = subtotal * 0.05

  return (
    <div className="min-h-screen bg-warm-white">
      <Header cartCount={cartItems.length} location="Indiranagar, Bangalore" />

      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => window.history.back()}
            className="p-2 hover:bg-white rounded-lg transition-colors"
          >
            <ArrowLeft size={24} className="text-text-dark" />
          </button>
          <h1 className="text-h1 font-bold text-text-dark">Your Cart</h1>
          <span className="text-body text-gray-500">({cartItems.length} items)</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-32 h-32 bg-light-grey rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🛒</span>
            </div>
            <h2 className="text-h2 font-semibold text-text-dark mb-2">Your cart is empty</h2>
            <p className="text-body text-gray-600 mb-6">Add some delicious meals to get started</p>
            <Button onClick={() => window.location.href = '/'}>
              Browse Meals
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  {...item}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <OrderSummary
                  subtotal={subtotal}
                  deliveryFee={deliveryFee}
                  tax={tax}
                  discount={0}
                />

                <Button fullWidth size="large" onClick={() => window.location.href = '/checkout'}>
                  Proceed to Checkout
                </Button>

                <p className="text-small text-gray-500 text-center mt-4">
                  Free delivery on orders above ₹500
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
