import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "For Riders - Dryft Rwanda",
  description: "Book rides easily with Dryft Rwanda. Real-time tracking, transparent pricing, and 24/7 support for all your transportation needs.",
}

export default function RidersPage() {
  const rideCategories = [
    {
      number: "1️⃣",
      name: "Economy",
      subtitle: "Smart & Affordable",
      description: "Ideal for your everyday city trips. Enjoy smooth, clean, and reliable rides at the best value.",
      perfectFor: [
        "Daily commutes",
        "Solo riders or couples",
        "Students and budget travelers",
      ],
      vehicleType: "Compact electric and hybrid cars",
    },
    {
      number: "2️⃣",
      name: "7-Seater",
      subtitle: "Space for Everyone",
      description: "Travel together in comfort and convenience. Perfect for families, groups, or airport runs needing more room.",
      perfectFor: [
        "Family outings",
        "Group travel and events",
        "Airport transfers with luggage",
      ],
      vehicleType: "Electric or hybrid vans and SUVs with 7 seats",
    },
    {
      number: "3️⃣",
      name: "Premium",
      subtitle: "Ride in Style",
      description: "Add a touch of luxury to your travel experience. Designed for those who value comfort, class, and a premium feel.",
      perfectFor: [
        "Business meetings",
        "Date nights or special events",
        "When you just want to ride in style",
      ],
      vehicleType: "High-end hybrid and electric sedans or SUVs",
    },
    {
      number: "4️⃣",
      name: "Corporate",
      subtitle: "Designed for Businesses",
      description: "Mobility tailored for companies and professionals. Enjoy flexible billing, reliable service, and customized transport solutions.",
      perfectFor: [
        "Employee transport",
        "Client transfers",
        "Corporate events and partnerships",
      ],
      vehicleType: "Customized fleet solutions",
      keyFeatures: [
        "Monthly invoicing & account management",
        "Dedicated vehicle or driver options",
        "24/7 priority customer support",
      ],
    },
  ]

  return (
    <main className="relative min-h-screen">
      <Header />
      
      <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-float">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">RIDERS</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">Your Ride. Your Comfort. Your Choice.</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Dryft Rwanda, we make getting around easy, affordable, and sustainable. Whether you're heading to work, traveling with friends, or attending an important meeting, Dryft gives you the freedom to choose the ride that fits your lifestyle — all powered by electric and hybrid vehicles for a greener Rwanda.
            </p>
          </div>

          {/* Why Ride with Dryft */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Why Ride with Dryft?</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-card shadow-green-md border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🌱</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Clean & Green Mobility</h3>
                    <p className="text-muted-foreground">
                      Every Dryft ride supports Rwanda's transition to sustainable, eco-friendly transport.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card shadow-green-md border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🛡️</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Safe & Professional Drivers</h3>
                    <p className="text-muted-foreground">
                      All drivers are verified, trained, and rated for service excellence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card shadow-green-md border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💰</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Transparent Pricing</h3>
                    <p className="text-muted-foreground">
                      No hidden costs. What you see on the app is exactly what you pay.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card shadow-green-md border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🚗</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Comfort for Every Need</h3>
                    <p className="text-muted-foreground">
                      Choose from four categories designed for your budget, comfort, and lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Ride Categories */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Our Ride Categories</h2>
            <div className="space-y-8">
              {rideCategories.map((category, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card shadow-green-md border border-border/50 hover:shadow-green-lg transition-all duration-300"
                  style={{
                    animation: `slide-in-up 0.6s ease-out forwards`,
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{category.number}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                        {category.name} – {category.subtitle}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-bold mb-2 text-foreground">Perfect for:</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          {category.perfectFor.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="text-primary font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Vehicle Type:</strong> {category.vehicleType}
                      </p>

                      {category.keyFeatures && (
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <h4 className="font-bold mb-2 text-foreground">Key Features:</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            {category.keyFeatures.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety You Can Trust */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-green-md border border-border/50">
              <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Safety You Can Trust</h2>
              <p className="text-center text-muted-foreground mb-6 text-lg">
                Your safety comes first.
              </p>
              <ul className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
                {[
                  "All Dryft drivers are background-checked and professionally trained",
                  "Vehicles are inspected regularly for quality and cleanliness",
                  "Real-time GPS tracking on every trip",
                  "24/7 in-app and phone support available",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 100% Cashless Experience */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-green-md border border-primary/30">
              <h2 className="text-3xl font-bold mb-4 text-center text-foreground">100% Cashless Experience</h2>
              <p className="text-center text-muted-foreground mb-6 text-lg">
                Dryft is proudly cashless — built for convenience and security.
              </p>
              <p className="text-center text-foreground font-semibold mb-6">
                Pay instantly and seamlessly using your preferred method:
              </p>
              <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {[
                  "Mobile Money (MTN MoMo, Airtel Money)",
                  "Debit/Credit Cards",
                  "In-App Wallet Balance",
                ].map((method, index) => (
                  <div key={index} className="p-4 rounded-lg bg-white/50 text-center">
                    <p className="text-sm font-medium text-foreground">{method}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 text-muted-foreground">
                No need for cash. No delays. Just tap, ride, and go.
              </p>
            </div>
          </div>

          {/* Ride with Purpose */}
          <div className="mb-16">
            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-card shadow-green-md border border-border/50 text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Ride with Purpose</h2>
              <p className="text-lg text-muted-foreground">
                Every trip with Dryft helps drive Rwanda toward a cleaner, greener future. Choose Dryft — where every ride counts for both you and the planet.
              </p>
            </div>
          </div>

          {/* Ready to Ride CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Ride?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download the Dryft App, choose your ride category, and experience modern, cashless mobility today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors font-bold text-lg shadow-lg"
              >
                Download App
              </Link>
              <Link
                href="/fleet"
                className="inline-block px-8 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors font-bold text-lg"
              >
                View Fleet
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

