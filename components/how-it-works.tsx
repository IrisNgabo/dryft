"use client"

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Download the App",
      description: "Android & iOS",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Enter Pickup & Destination",
      description: "Set your location",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Select Your Category",
      description: "Choose Economy, 7-Seater, Premium, or Corporate",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Confirm & Ride Clean",
      description: "Enjoy your eco-friendly ride",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Rate Your Experience",
      description: "Share your feedback",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-float">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seamless, Smart, and Sustainable
          </p>
        </div>

        <div className="relative">
          {/* Horizontal connecting line - desktop only */}
          <div className="hidden lg:block absolute top-16 left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center group"
                style={{
                  animation: `slide-in-up 0.6s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
              >
                {/* Icon above - light grey */}
                <div className="w-14 h-14 mb-4 text-gray-400 flex items-center justify-center group-hover:text-primary transition-colors duration-300">
                  {step.icon}
                </div>

                {/* Green circle with number - positioned on the line */}
                <div className="relative z-20 mb-5">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-green-lg group-hover:scale-110 transition-all duration-300 ring-4 ring-background">
                    <span className="text-white font-bold text-xl">{step.id}</span>
                  </div>
                </div>

                {/* Content below */}
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold text-foreground leading-tight">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Connecting arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-16 left-full w-full h-0.5 bg-primary/30 flex items-center">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary/30 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


