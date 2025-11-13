'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import BottomNav from '@/components/BottomNav'
import OrderCard from '@/components/OrderCard'
import { ArrowLeft } from 'lucide-react'

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<'home' | 'search' | 'favorites' | 'profile'>('profile')

  const orders = [
    {
      orderId: 'HB12345',
      items: [
        { title: 'Paneer Butter Masala', quantity: 2 },
        { title: 'Naan', quantity: 4 }
      ],
      status: 'out-for-delivery' as const,
      cookName: 'Priya Sharma',
      total: 390,
      orderDate: 'Today, 12:30 PM',
      deliveryTime: '15-20 min'
    },
    {
      orderId: 'HB12344',
      items: [
        { title: 'Hyderabadi Biryani', quantity: 1 }
      ],
      status: 'delivered' as const,
      cookName: 'Fatima Khan',
      total: 280,
      orderDate: 'Yesterday, 8:15 PM'
    },
    {
      orderId: 'HB12343',
      items: [
        { title: 'Dal Makhani with Rice', quantity: 2 }
      ],
      status: 'delivered' as const,
      cookName: 'Anjali Verma',
      total: 330,
      orderDate: '15 Jan, 7:45 PM'
    },
    {
      orderId: 'HB12342',
      items: [
        { title: 'Masala Dosa', quantity: 3 },
        { title: 'Filter Coffee', quantity: 3 }
      ],
      status: 'cancelled' as const,
      cookName: 'Lakshmi Iyer',
      total: 420,
      orderDate: '14 Jan, 9:00 AM'
    }
  ]

  return (
    <div className="min-h-screen bg-warm-white pb-20">
      <Header cartCount={2} location="Indiranagar, Bangalore" />

      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => window.history.back()}
            className="p-2 hover:bg-white rounded-lg transition-colors"
          >
            <ArrowLeft size={24} className="text-text-dark" />
          </button>
          <h1 className="text-h1 font-bold text-text-dark">My Orders</h1>
        </div>

        <div className="space-y-4">
          {orders.map(order => (
            <OrderCard key={order.orderId} {...order} />
          ))}
        </div>

        {orders.length === 0 && (
          <div className="text-center py-16">
            <div className="w-32 h-32 bg-light-grey rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">📦</span>
            </div>
            <h2 className="text-h2 font-semibold text-text-dark mb-2">No orders yet</h2>
            <p className="text-body text-gray-600">Start ordering delicious home-cooked meals</p>
          </div>
        )}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
