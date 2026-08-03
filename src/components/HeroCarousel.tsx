"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  "/images/hero/hero-runner-01.jpg",
  "/images/hero/hero-runner-02.jpg",
  "/images/hero/hero-runner-03.jpg",
  "/images/hero/hero-runner-04.jpg",
  "/images/hero/hero-runner-05.jpg",
  "/images/hero/hero-runner-06.jpg",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}
      <img
        src={images[current]}
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />


      {/* Content */}
      <div className="relative z-10 flex h-full items-center">

        <div className="mx-auto max-w-7xl px-8 text-white">

          <p className="mb-4 text-lg uppercase tracking-[0.35em] text-blue-300">
            Thailand AI Running Platform
          </p>


          <h1 className="max-w-4xl text-6xl font-extrabold leading-tight md:text-7xl">
            WING LAEN LON
            <br />
            THAILAND
          </h1>


          <p className="mt-8 max-w-2xl text-xl leading-8 text-gray-200">
            Connecting runners, events, communities,
            AI technology and sustainable development
            into one national platform.
          </p>



          <div className="mt-10 flex flex-wrap gap-4">


            <Link
              href="/register"
              className="rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
            >
              Create Athlete Passport
            </Link>


            <Link
              href="/login"
              className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
            >
              Login
            </Link>


            <Link
              href="/events"
              className="rounded-full border border-white/60 px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
            >
              Explore Events
            </Link>


          </div>


        </div>

      </div>



      {/* Slide Indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">

        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 transition-all ${
              current === index
                ? "w-8 rounded-full bg-white"
                : "w-3 rounded-full bg-white/40"
            }`}
          />
        ))}

      </div>



      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-center text-white">

        <Link
          href="/running"
          className="group inline-block"
        >

          <p className="text-sm tracking-widest group-hover:text-blue-300 transition">
            SCROLL
          </p>

          <div className="mt-2 animate-bounce text-2xl group-hover:text-blue-300 transition">
            ↓
          </div>

        </Link>

      </div>


    </section>
  );
}