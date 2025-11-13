'use client'

import React, { useState } from 'react'
import TagButton from './TagButton'

interface CuisineFilterProps {
  cuisines: string[]
  selectedCuisines: string[]
  onSelectionChange: (selected: string[]) => void
}

export default function CuisineFilter({ cuisines, selectedCuisines, onSelectionChange }: CuisineFilterProps) {
  const toggleCuisine = (cuisine: string) => {
    if (selectedCuisines.includes(cuisine)) {
      onSelectionChange(selectedCuisines.filter(c => c !== cuisine))
    } else {
      onSelectionChange([...selectedCuisines, cuisine])
    }
  }

  return (
    <div className="w-full">
      <h3 className="text-h2 font-semibold text-text-dark mb-3">Filter by Cuisine</h3>
      <div className="flex flex-wrap gap-2">
        {cuisines.map(cuisine => (
          <TagButton
            key={cuisine}
            label={cuisine}
            selected={selectedCuisines.includes(cuisine)}
            onClick={() => toggleCuisine(cuisine)}
          />
        ))}
      </div>
    </div>
  )
}
