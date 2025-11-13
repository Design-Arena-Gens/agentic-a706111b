'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import BottomNav from '@/components/BottomNav'
import SearchBar from '@/components/SearchBar'
import CuisineFilter from '@/components/CuisineFilter'
import MealCard from '@/components/MealCard'
import Button from '@/components/Button'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'home' | 'search' | 'favorites' | 'profile'>('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([])
  const [favorites, setFavorites] = useState<string[]>([])

  const cuisines = ['North Indian', 'South Indian', 'Chinese', 'Italian', 'Continental', 'Bengali', 'Punjabi', 'Gujarati']

  const meals = [
    {
      id: '1',
      image: '/meal1.jpg',
      title: 'Paneer Butter Masala',
      cookName: 'Priya Sharma',
      rating: 4.8,
      reviews: 234,
      price: 180,
      prepTime: '30 min',
      distance: '2.5 km',
      tags: ['North Indian', 'Vegetarian', 'Spicy']
    },
    {
      id: '2',
      image: '/meal2.jpg',
      title: 'Hyderabadi Biryani',
      cookName: 'Fatima Khan',
      rating: 4.9,
      reviews: 456,
      price: 250,
      prepTime: '45 min',
      distance: '3.2 km',
      tags: ['South Indian', 'Non-Veg', 'Spicy']
    },
    {
      id: '3',
      image: '/meal3.jpg',
      title: 'Dal Makhani with Rice',
      cookName: 'Anjali Verma',
      rating: 4.7,
      reviews: 189,
      price: 150,
      prepTime: '25 min',
      distance: '1.8 km',
      tags: ['Punjabi', 'Vegetarian', 'Comfort Food']
    },
    {
      id: '4',
      image: '/meal4.jpg',
      title: 'Masala Dosa',
      cookName: 'Lakshmi Iyer',
      rating: 4.9,
      reviews: 567,
      price: 120,
      prepTime: '20 min',
      distance: '2.1 km',
      tags: ['South Indian', 'Vegetarian', 'Breakfast']
    },
    {
      id: '5',
      image: '/meal5.jpg',
      title: 'Chicken Tikka Masala',
      cookName: 'Rahul Kapoor',
      rating: 4.8,
      reviews: 345,
      price: 220,
      prepTime: '40 min',
      distance: '3.5 km',
      tags: ['North Indian', 'Non-Veg', 'Popular']
    },
    {
      id: '6',
      image: '/meal6.jpg',
      title: 'Veg Hakka Noodles',
      cookName: 'Meera Chen',
      rating: 4.6,
      reviews: 278,
      price: 140,
      prepTime: '20 min',
      distance: '2.8 km',
      tags: ['Chinese', 'Vegetarian', 'Fast']
    }
  ]

  const handleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-warm-white pb-20">
      <Header
        cartCount={0}
        location="Indiranagar, Bangalore"
        onMenuClick={() => console.log('Menu clicked')}
        onCartClick={() => console.log('Cart clicked')}
        onLocationClick={() => console.log('Location clicked')}
      />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <section className="mb-6">
          <h1 className="text-h1 font-bold text-text-dark mb-4">
            Welcome to Home Bite! 👋
          </h1>
          <p className="text-body text-gray-600 mb-4">
            Delicious home-cooked meals delivered from local cooks near you
          </p>
        </section>

        <section className="mb-6">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            showMicrophone={true}
          />
        </section>

        <section className="mb-6">
          <CuisineFilter
            cuisines={cuisines}
            selectedCuisines={selectedCuisines}
            onSelectionChange={setSelectedCuisines}
          />
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-h2 font-bold text-text-dark">Popular Meals Near You</h2>
            <Button variant="text" size="small">
              See All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meals.map(meal => (
              <MealCard
                key={meal.id}
                {...meal}
                isFavorite={favorites.includes(meal.id)}
                onFavorite={handleFavorite}
              />
            ))}
          </div>
        </section>

        <section className="mt-8 bg-primary-orange rounded-2xl p-6 text-white">
          <h3 className="text-h1 font-bold mb-2">Become a Home Cook</h3>
          <p className="text-body mb-4">Share your culinary skills and earn from home</p>
          <Button variant="secondary">
            Join as Cook
          </Button>
        </section>
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
