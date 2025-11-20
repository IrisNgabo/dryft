"use client"

import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-4 md:pt-2 lg:pt-4 pb-8 md:pb-20 bg-background min-h-screen flex "> 
      {/* Floating green orbs for atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-scale"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-scale" style={{ animationDelay: '1s' }}></div>
        <div className="hidden md:block absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-scale" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8 md:py-6 lg:py-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8 animate-slide-left text-center md:text-left">
            <div className="inline-block">
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-secondary text-primary font-semibold text-xs md:text-sm flex items-center gap-2 justify-center md:justify-start">
                🇷🇼 Made in Rwanda
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight">
              Drive the Future. <span className="text-primary">Sustainably.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed">
              Rwanda's first ride-hailing platform powered by Electric and Hybrid Vehicles.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <Link
                href="#app-store"
                className="px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all duration-300 font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Book a Ride
              </Link>
              <Link
                href="/drivers"
                className="px-6 py-3 md:px-8 md:py-4 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-all duration-300 font-semibold text-sm md:text-base flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Become a Driver
              </Link>
              <Link
                href="/partners"
                className="px-6 py-3 md:px-8 md:py-4 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-all duration-300 font-semibold text-sm md:text-base flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Partner with Us
              </Link>
            </div>
            
            <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed pt-2 md:pt-4">
              Welcome to Dryft Rwanda, the innovative mobility platform leading the shift toward clean transportation. We connect riders to professional drivers through a seamless digital experience — offering comfort, reliability, and environmental consciousness in every ride.
            </p>

          </div>

          {/* Right Visual - Hero Image */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[900px] w-full mt-8 md:mt-0 animate-slide-right flex items-center justify-center">
            <Image
              src="/homebg.png"
              alt="Dryft Rwanda - Sustainable Mobility"
              width={1600}
              height={1600}
              className="object-contain w-full h-full"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 50vw, 800px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
