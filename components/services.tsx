"use client"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Ride Booking",
      description:
        "Book a ride in seconds with our intuitive app. Real-time tracking, transparent pricing, and 24/7 support.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      color: "from-primary/20 to-primary/10",
    },
    {
      id: 2,
      title: "Driver Program",
      description:
        "Join our driver community and earn flexible income. Competitive rates, safety features, and continuous support.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "from-accent/20 to-accent/10",
    },
    {
      id: 3,
      title: "Business Solutions",
      description:
        "Corporate ride programs for employee mobility. Streamlined billing, usage analytics, and dedicated support.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "from-secondary/40 to-secondary/20",
    },
    {
      id: 4,
      title: "Safety First",
      description: "Advanced safety features including background checks, GPS tracking, and emergency support 24/7.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-primary/20 to-accent/20",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-background min-h-[60vh] relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-4 animate-float">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive mobility solutions designed for everyone
          </p>
        </div>

        {/* Two rows, two columns layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const colorClasses = [
              "from-teal-50/50 to-cyan-50/50", // Ride Booking
              "from-purple-50/50 to-blue-50/50", // Driver Program
              "from-orange-50/50 to-red-50/50", // Business Solutions
              "from-yellow-50/50 to-amber-50/50", // Safety First
            ]
            return (
              <div
                key={service.id}
                className={`p-8 rounded-2xl border border-border/60 bg-gradient-to-br ${colorClasses[index]} hover:shadow-2xl hover:border-primary/40 transition-all duration-300 group relative overflow-hidden`}
                style={{
                  animation: `slide-in-up 0.6s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
              >
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/50 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-xl bg-white/80 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
