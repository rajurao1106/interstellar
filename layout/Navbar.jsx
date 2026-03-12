"use client"; // Required for useState in Next.js App Router

import React, { useState } from 'react';

export default function Navbar() {
  const [rating, setRating] = useState(0);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 text-stone-200">
      
      {/* Left Side: Brand */}
      <div className="text-2xl font-serif tracking-[0.2em] uppercase">
        Interstellar
      </div>

      {/* Right Side: 5-Star Bar */}
      <div className="flex flex-col items-end gap-1">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-2xl transition-all duration-200 hover:scale-125 ${
                star <= rating ? 'text-orange-500' : 'text-stone-600'
              }`}
            >
              ★
            </button>
          ))}
        </div>
        
        {/* Rating Count Display */}
        <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
          Rating: {rating} / 5
        </span>
      </div>

    </nav>
  );
}