"use client"

export default function AboutSection() {
  const coreValues = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Sustainability",
      description: "Protecting the planet through eco-innovation.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Technology",
      description: "Smarter, faster, and more efficient mobility.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Integrity",
      description: "Operating transparently and ethically.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Safety",
      description: "Prioritizing passengers and drivers alike.",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-float">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Dryft Rwanda</h2>
         
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dryft Rwanda is pioneering a cleaner future for Rwanda's transport ecosystem. We operate exclusively Electric and Hybrid Vehicles, ensuring every trip contributes to a healthier planet.
            </p>
           
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card shadow-green-md hover:shadow-green-lg transition-all duration-300 border border-border/50 text-center"
                style={{
                  animation: `slide-in-up 0.6s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
              >
                <div className="mb-4 text-primary">{value.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-foreground">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div className="p-8 rounded-2xl bg-card shadow-green-md hover:shadow-green-lg transition-all duration-300 animate-slide-left border border-border/50">
            <div className="w-16 h-16 rounded-full border-2 border-primary bg-background flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-primary/10"></div>
              <div className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide safe, affordable, and reliable ride-hailing services that connect communities across Rwanda.
              We're committed to empowering drivers, delighting passengers, and creating economic opportunities through
              innovative mobility solutions.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-2xl bg-card shadow-green-md hover:shadow-green-lg transition-all duration-300 animate-slide-right border border-border/50">
            <div className="w-16 h-16 rounded-full border-2 border-primary bg-background flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-primary/10"></div>
              <div className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become Africa's leading mobility platform, transforming how people move in cities. We envision a future
              where transportation is seamless, sustainable, and serves as a catalyst for economic growth and social
              connection across the continent.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

