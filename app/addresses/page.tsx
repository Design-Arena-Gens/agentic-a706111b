'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import AddressCard from '@/components/AddressCard'
import Button from '@/components/Button'
import { ArrowLeft, Plus } from 'lucide-react'

export default function AddressesPage() {
  const [addresses, setAddresses] = useState([
    {
      id: '1',
      type: 'home' as const,
      label: 'Home',
      address: '123, MG Road, Indiranagar, Bangalore, Karnataka - 560038',
      isDefault: true
    },
    {
      id: '2',
      type: 'work' as const,
      label: 'Office',
      address: 'Tower B, Tech Park, Whitefield, Bangalore, Karnataka - 560066',
      isDefault: false
    },
    {
      id: '3',
      type: 'other' as const,
      label: "Parent's House",
      address: '456, 5th Cross, Jayanagar, Bangalore, Karnataka - 560041',
      isDefault: false
    }
  ])

  const handleEdit = (id: string) => {
    console.log('Edit address:', id)
  }

  const handleDelete = (id: string) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id))
  }

  return (
    <div className="min-h-screen bg-warm-white">
      <Header cartCount={2} location="Indiranagar, Bangalore" />

      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => window.history.back()}
            className="p-2 hover:bg-white rounded-lg transition-colors"
          >
            <ArrowLeft size={24} className="text-text-dark" />
          </button>
          <h1 className="text-h1 font-bold text-text-dark flex-1">Saved Addresses</h1>
          <Button variant="primary" size="small">
            <Plus size={18} />
            Add New
          </Button>
        </div>

        <div className="space-y-4">
          {addresses.map(address => (
            <AddressCard
              key={address.id}
              {...address}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {addresses.length === 0 && (
          <div className="text-center py-16">
            <div className="w-32 h-32 bg-light-grey rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">📍</span>
            </div>
            <h2 className="text-h2 font-semibold text-text-dark mb-2">No addresses saved</h2>
            <p className="text-body text-gray-600 mb-6">Add your delivery addresses to order faster</p>
            <Button>
              <Plus size={18} />
              Add Address
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
