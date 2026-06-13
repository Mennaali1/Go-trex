"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/port1.jpg",
    alt: "Port operations",
    caption: "",
  },
  {
    src: "/port2.jpg",
    alt: "Export logistics",
    caption: "",
  },
  {
    src: "/port3.jpg",
    alt: "Global trade",
    caption: "",
  },
];

export default function WhoWeAreCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  


  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 400);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    if (index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  return (
    <div className="relative w-full">
      {/* Main image */}
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/20">
        <Image
          src={slides[current].src}
          alt={slides[current].alt}
          fill
          className={`object-cover transition-all duration-500 ${
            animating ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Caption */}
        <div className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 ${animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
          <p className="text-white text-sm font-medium tracking-wide">
            {slides[current].caption}
          </p>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-2 bg-blue-500"
                : "w-2 h-2 bg-gray-300 hover:bg-blue-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

     
    </div>
  );
}