"use client"

import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function Transition() {
  const images = [
    {
      src: "/transition.jpeg",
      alt: "Join us in the transition to sustainable mobility",
    },
    {
      src: "/join.jpeg",
      alt: "Join Dryft Rwanda for sustainable mobility",
    },
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image Swiper */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !bg-primary",
                bulletActiveClass: "swiper-pagination-bullet-active !bg-accent",
              }}
              loop={true}
              className="h-full w-full rounded-3xl"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 animate-slide-right">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Join Us in the <span className="text-primary">Transition</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                Be part of Rwanda's journey toward sustainable mobility. Every ride with Dryft contributes to a cleaner, greener future for our nation.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Together, we're building a transportation ecosystem that prioritizes the environment while connecting communities across Rwanda.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/partners"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                🌱 Partner With Us
              </Link>
              <Link
                href="/careers"
                className="px-8 py-4 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
              >
                💼 Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

