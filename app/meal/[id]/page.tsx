'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Button from '@/components/Button'
import CookProfile from '@/components/CookProfile'
import ReviewCard from '@/components/ReviewCard'
import { ArrowLeft, Star, Clock, Flame, Heart, Plus, Minus } from 'lucide-react'

export default function MealDetailPage() {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const meal = {
    title: 'Paneer Butter Masala',
    description: 'Rich and creamy paneer curry with butter and aromatic spices. Served with perfectly cooked basmati rice and fresh naan bread.',
    price: 180,
    rating: 4.8,
    reviews: 234,
    prepTime: '30 min',
    calories: 450,
    spiceLevel: 'Medium',
    servings: 2,
    tags: ['North Indian', 'Vegetarian', 'Popular'],
    ingredients: ['Paneer', 'Tomatoes', 'Cream', 'Butter', 'Spices', 'Onions', 'Garlic', 'Ginger']
  }

  const cook = {
    name: 'Priya Sharma',
    rating: 4.9,
    totalReviews: 567,
    totalOrders: 1200,
    distance: '2.5 km',
    specialties: ['North Indian', 'Punjabi', 'Mughlai'],
    bio: 'Home cook with 15 years of experience. Specializing in authentic North Indian cuisine with a modern twist.',
    verified: true
  }

  const reviews = [
    {
      userName: 'Amit Kumar',
      rating: 5,
      date: '2 days ago',
      comment: 'Absolutely delicious! The paneer was so soft and the gravy was perfectly creamy. Will order again!',
      helpful: 12
    },
    {
      userName: 'Sneha Reddy',
      rating: 4,
      date: '1 week ago',
      comment: 'Really good taste but could be slightly less oily. Overall great meal.',
      helpful: 8
    },
    {
      userName: 'Rajesh Patel',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Best paneer butter masala I have had in Bangalore. Priya is an amazing cook!',
      helpful: 15
    }
  ]

  return (
    <div className="min-h-screen bg-warm-white">
      <Header cartCount={2} location="Indiranagar, Bangalore" />

      <main className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="w-full h-80 bg-light-grey flex items-center justify-center">
            <span className="text-h1 text-gray-400">{meal.title}</span>
          </div>

          <button
            onClick={() => window.history.back()}
            className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <ArrowLeft size={20} className="text-text-dark" />
          </button>

          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <Heart
              size={20}
              className={isFavorite ? 'fill-error-red text-error-red' : 'text-gray-600'}
            />
          </button>
        </div>

        <div className="px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-h1 font-bold text-text-dark mb-2">{meal.title}</h1>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={18} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-body font-semibold">{meal.rating}</span>
                      <span className="text-small text-gray-500">({meal.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock size={16} />
                      <span className="text-small">{meal.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Flame size={16} />
                      <span className="text-small">{meal.calories} cal</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {meal.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-light-grey rounded-full text-small text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-body text-gray-600 mb-4">{meal.description}</p>

              <div className="grid grid-cols-2 gap-4 p-4 bg-light-grey rounded-lg">
                <div>
                  <p className="text-small text-gray-500">Spice Level</p>
                  <p className="text-body font-semibold text-text-dark">{meal.spiceLevel}</p>
                </div>
                <div>
                  <p className="text-small text-gray-500">Servings</p>
                  <p className="text-body font-semibold text-text-dark">{meal.servings} people</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-h2 font-semibold text-text-dark mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {meal.ingredients.map((ingredient, index) => (
                  <span key={index} className="px-3 py-2 bg-warm-white border border-primary-orange text-text-dark rounded-lg text-small">
                    {ingredient}
                  </span>
                ))}
              </div>
            </section>

            <CookProfile {...cook} />

            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-h2 font-semibold text-text-dark mb-4">
                Customer Reviews ({reviews.length})
              </h3>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <ReviewCard key={index} {...review} />
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-sm">
              <div className="mb-4">
                <p className="text-small text-gray-500 mb-1">Price per serving</p>
                <p className="text-h1 font-bold text-primary-orange">₹{meal.price}</p>
              </div>

              <div className="flex items-center justify-between mb-6">
                <span className="text-body font-medium text-text-dark">Quantity</span>
                <div className="flex items-center gap-3 bg-light-grey rounded-lg p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center rounded hover:bg-white transition-colors"
                  >
                    <Minus size={18} className="text-text-dark" />
                  </button>
                  <span className="text-body font-semibold w-10 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center rounded hover:bg-white transition-colors"
                  >
                    <Plus size={18} className="text-text-dark" />
                  </button>
                </div>
              </div>

              <div className="mb-4 p-3 bg-warm-white rounded-lg">
                <div className="flex justify-between text-body mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{meal.price * quantity}</span>
                </div>
                <div className="flex justify-between text-body">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-medium text-success-green">FREE</span>
                </div>
              </div>

              <Button fullWidth size="large">
                Add to Cart - ₹{meal.price * quantity}
              </Button>

              <p className="text-small text-gray-500 text-center mt-3">
                Free delivery on orders above ₹500
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
