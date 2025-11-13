'use client'

import React, { useState } from 'react'

interface PhoneNumberInputProps {
  value: string
  onChange: (value: string) => void
  error?: string
}

export default function PhoneNumberInput({ value, onChange, error }: PhoneNumberInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '')
    if (input.length <= 10) {
      onChange(input)
    }
  }

  return (
    <div className="w-full">
      <label className="block text-body mb-2 text-text-dark">Enter mobile number</label>
      <div className="flex items-center bg-white rounded-lg border-2 border-light-grey focus-within:border-primary-orange transition-colors">
        <span className="px-4 text-body text-text-dark">+91</span>
        <input
          type="tel"
          value={value}
          onChange={handleChange}
          placeholder="9876543210"
          maxLength={10}
          className="flex-1 py-3 px-2 text-body outline-none rounded-r-lg"
        />
      </div>
      {error && <p className="text-small text-error-red mt-1">{error}</p>}
    </div>
  )
}
