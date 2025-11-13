'use client'

import React, { useState } from 'react'
import PhoneNumberInput from '@/components/PhoneNumberInput'
import OTPInput from '@/components/OTPInput'
import Button from '@/components/Button'

export default function LoginPage() {
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const validatePhone = (phone: string) => {
    return /^[6-9]\d{9}$/.test(phone)
  }

  const handleSendOTP = () => {
    if (!validatePhone(phoneNumber)) {
      setError('Please enter a valid 10-digit mobile number')
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStep('otp')
      setError('')
    }, 1500)
  }

  const handleVerifyOTP = (otp: string) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      window.location.href = '/'
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-h1 text-white font-bold">HB</span>
          </div>
          <h1 className="text-h1 font-bold text-text-dark mb-2">Welcome to Home Bite</h1>
          <p className="text-body text-gray-600">
            {step === 'phone'
              ? 'Enter your mobile number to get started'
              : 'Enter the OTP sent to +91 ' + phoneNumber}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {step === 'phone' ? (
            <>
              <PhoneNumberInput
                value={phoneNumber}
                onChange={(value) => {
                  setPhoneNumber(value)
                  setError('')
                }}
                error={error}
              />

              <Button
                fullWidth
                onClick={handleSendOTP}
                loading={loading}
                disabled={phoneNumber.length !== 10}
                size="large"
              >
                Send OTP
              </Button>

              <p className="text-small text-gray-500 text-center mt-4">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </>
          ) : (
            <>
              <div className="mb-6">
                <OTPInput length={6} onComplete={handleVerifyOTP} />
              </div>

              <Button
                fullWidth
                variant="text"
                onClick={() => setStep('phone')}
              >
                Change Number
              </Button>

              <p className="text-small text-gray-500 text-center mt-4">
                Didn't receive OTP?{' '}
                <button className="text-primary-orange font-medium hover:underline">
                  Resend
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
