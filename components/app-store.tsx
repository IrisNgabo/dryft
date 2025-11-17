"use client"

export default function AppStore() {
  return (
    <section id="app-store" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 mb-16 animate-float">
          {/* Big "COMING SOON!" Message */}
          <div className="space-y-6">
            <div className="inline-block px-6 py-2 rounded-full bg-primary/20 border border-primary/30 text-sm font-semibold text-primary">
              Mobile App
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-balance">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                COMING SOON!
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get ready for the next generation of ride-hailing in Rwanda. Download Dryft on your phone and transform
              the way you move.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Lightning Fast",
                desc: "One-tap booking in seconds",
                color: "text-yellow-500",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Real-Time Tracking",
                desc: "Know exactly where your ride is",
                color: "text-red-500",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
                title: "Multiple Payments",
                desc: "Cash, card, or mobile money",
                color: "text-amber-500",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                    <circle cx="12" cy="12" r="6" strokeWidth={2} />
                    <circle cx="12" cy="12" r="2" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                  </svg>
                ),
                title: "Precise Pricing",
                desc: "No hidden fees, ever",
                color: "text-blue-500",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border/60 bg-card/50 backdrop-blur hover:bg-card hover:border-primary/40 transition-all duration-300 group"
                style={{
                  animation: `slide-in-up 0.6s ease-out forwards`,
                  animationDelay: `${idx * 100}ms`,
                  opacity: 0,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className={`${benefit.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
                    {benefit.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            {/* App Store Badge */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-4 py-3 bg-black text-white rounded-lg hover:opacity-90 transition-opacity border border-gray-700 shadow-lg"
              style={{ minWidth: "180px" }}
            >
              {/* Apple Logo */}
              <svg
                className="w-8 h-8 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              {/* App Store Text */}
              <div className="flex flex-col items-start">
                <span className="text-[10px] leading-tight">Download on the</span>
                <span className="text-lg font-semibold leading-tight -mt-0.5">App Store</span>
              </div>
            </a>

            {/* Google Play Badge */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-4 py-3 bg-black text-white rounded-lg hover:opacity-90 transition-opacity border border-gray-700 shadow-lg"
              style={{ minWidth: "180px" }}
            >
              {/* Google Play Logo */}
              <svg
                className="w-8 h-8 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M1.3 24l11.4-11.3L1.3 1.4 1.3 24z"
                  fill="#00A0FF"
                />
                <path
                  d="M12.7 12.7L24 24l-11.3-11.3z"
                  fill="#00C853"
                />
                <path
                  d="M1.3 1.4l11.4 11.3L1.3 24V1.4z"
                  fill="#FFD600"
                />
                <path
                  d="M12.7 12.7L24 0 12.7 12.7z"
                  fill="#FF6D00"
                />
              </svg>
              {/* Google Play Text */}
              <div className="flex flex-col items-start">
                <span className="text-[10px] leading-tight">GET IT ON</span>
                <span className="text-lg font-semibold leading-tight -mt-0.5">Google Play</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
