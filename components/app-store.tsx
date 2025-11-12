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
                icon: "⚡",
                title: "Lightning Fast",
                desc: "One-tap booking in seconds",
              },
              {
                icon: "📍",
                title: "Real-Time Tracking",
                desc: "Know exactly where your ride is",
              },
              {
                icon: "💳",
                title: "Multiple Payments",
                desc: "Cash, card, or mobile money",
              },
              {
                icon: "🎯",
                title: "Precise Pricing",
                desc: "No hidden fees, ever",
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
                  <div className="text-3xl group-hover:scale-110 transition-transform">{benefit.icon}</div>
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
            <button className="px-8 py-4 bg-foreground text-background rounded-xl hover:bg-primary hover:shadow-xl transition-all font-semibold flex items-center justify-center gap-3 group">
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.05 13.5c0 .65.07 1.29.18 1.9l-6.45 5c-.68-.52-1.64-.81-2.59-.81-2.4 0-4.35 1.95-4.35 4.35S5.6 29 8 29s4.35-1.95 4.35-4.35c0-.89-.26-1.73-.71-2.46l6.05-4.69c1.26 1.48 3.02 2.38 4.96 2.38 3.59 0 6.5-2.91 6.5-6.5s-2.91-6.5-6.5-6.5c-3.59 0-6.5 2.91-6.5 6.5z" />
              </svg>
              App Store
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-background rounded-xl hover:shadow-xl transition-all font-semibold flex items-center justify-center gap-3 group">
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 13.5l.120.886c.24 1.697 1.484 2.957 3.365 3.426.46.107.936.163 1.415.163h12.2c.479 0 .955-.056 1.415-.163 1.881-.469 3.125-1.729 3.365-3.426L21 13.5M12 1v10m5.293-6.293l-7.07 7.07m0-7.07l-7.07 7.07" />
              </svg>
              Google Play
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
