'use client'

import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  type = 'button',
  loading = false
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2'

  const variantStyles = {
    primary: 'bg-primary-orange text-white hover:bg-opacity-90 disabled:bg-gray-300',
    secondary: 'bg-primary-green text-white hover:bg-opacity-90 disabled:bg-gray-300',
    outline: 'bg-transparent text-primary-orange border-2 border-primary-orange hover:bg-primary-orange hover:text-white disabled:border-gray-300 disabled:text-gray-300',
    text: 'bg-transparent text-primary-orange hover:bg-warm-white disabled:text-gray-300'
  }

  const sizeStyles = {
    small: 'px-4 py-2 text-small',
    medium: 'px-6 py-3 text-body',
    large: 'px-8 py-4 text-h2'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
      `}
    >
      {loading && (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  )
}
