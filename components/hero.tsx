"use client"

import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40 bg-background">
      {/* Floating green orbs for atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-scale"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-scale" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-scale" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-left">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-secondary text-primary font-semibold text-sm flex items-center gap-2">
                🇷🇼 Made in Rwanda
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Drive the Future. <span className="text-primary">Sustainably.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Rwanda's first ride-hailing platform powered by Electric and Hybrid Vehicles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#app-store"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Book a Ride
              </Link>
              <Link
                href="/drivers"
                className="px-8 py-4 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Become a Driver
              </Link>
              <Link
                href="/partners"
                className="px-8 py-4 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Partner with Us
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground max-w-lg leading-relaxed pt-4">
              Welcome to Dryft Rwanda, the innovative mobility platform leading the shift toward clean transportation. We connect riders to professional drivers through a seamless digital experience — offering comfort, reliability, and environmental consciousness in every ride.
            </p>

            {/* Animated Cars Moving - Replacing fake statistics */}
            <div className="pt-8 border-t border-border">
              <div className="relative h-24 overflow-hidden rounded-lg bg-secondary/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm font-medium text-muted-foreground">🚗 Coming Soon </p>
                </div>
                {/* Moving cars animation */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 -translate-y-1/2 left-[-60px] animate-car-move-1">
                    <svg width="50" height="30" viewBox="0 0 50 30" fill="none" className="text-primary">
                      <path d="M10 20 L40 20" stroke="currentColor" strokeWidth="2" />
                      <path d="M15 20 Q15 10 25 8 L35 8 Q45 10 45 20" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="20" cy="23" r="2.5" fill="currentColor" />
                      <circle cx="35" cy="23" r="2.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-[-60px] animate-car-move-2">
                    <svg width="50" height="30" viewBox="0 0 50 30" fill="none" className="text-accent">
                      <path d="M10 20 L40 20" stroke="currentColor" strokeWidth="2" />
                      <path d="M15 20 Q15 10 25 8 L35 8 Q45 10 45 20" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="20" cy="23" r="2.5" fill="currentColor" />
                      <circle cx="35" cy="23" r="2.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-[-60px] animate-car-move-3">
                    <svg width="50" height="30" viewBox="0 0 50 30" fill="none" className="text-primary/70">
                      <path d="M10 20 L40 20" stroke="currentColor" strokeWidth="2" />
                      <path d="M15 20 Q15 10 25 8 L35 8 Q45 10 45 20" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="20" cy="23" r="2.5" fill="currentColor" />
                      <circle cx="35" cy="23" r="2.5" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Hero Image */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] animate-slide-right">
            {/* Blurred green background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/30 to-accent/30 rounded-3xl blur-3xl backdrop-blur-sm"></div>
            
            {/* Main container with glass effect */}
            <div className="relative h-full rounded-3xl bg-gradient-to-br from-primary/20 via-primary/15 to-accent/15 border border-primary/30 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-2xl">
              {/* Hero Image */}
              <div className="relative w-full h-full">
                <Image
                  src="/hero.jpeg"
                  alt="Dryft Rwanda - Sustainable Mobility"
                  fill
                  className="object-contain p-8"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
