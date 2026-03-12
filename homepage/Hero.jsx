"use client"

import React from "react";
import hero from "@/public/homepage/hero.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="Withered cornfields under a dusty sky"
          fill
          priority
          className="object-cover"
        />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70  to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16  max-w-6xl">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif uppercase text-white leading-tight">
          The Dying Earth
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-2xl italic text-stone-300 max-w-xl">
          A world suffocating under the weight of <span className="text-white">The Blight</span>.
        </p>

        {/* Divider */}
        <div className="mt-10 w-24 h-[2px] bg-stone-500"></div>

        {/* Quote */}
        <div className="mt-8 max-w-2xl   border-white/10 rounded-xl">
          <blockquote className="text-base md:text-xl font-serif italic text-stone-200 leading-relaxed">
            “We used to look up at the sky and wonder at our place in the stars.
            Now we just look down and worry about our place in the dirt.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}