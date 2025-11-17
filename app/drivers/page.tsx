import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "For Drivers - Dryft Rwanda",
  description: "Join the Dryft Rwanda driver community. Earn flexible income, enjoy competitive rates, and be part of Rwanda's sustainable mobility revolution.",
}

export default function DriversPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">DRIVERS</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">Drive with Purpose. Earn with Dryft.</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Dryft Rwanda, we're redefining what it means to be a driver. Join a platform built for sustainability, fairness, and growth — where your hard work pays off, and your choice to drive electric or hybrid helps shape a cleaner Rwanda.
            </p>
          </div>

          {/* Why Drive with Dryft */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Why Drive with Dryft?</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-card shadow-green-md border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Lower Commissions. Higher Earnings.</h3>
                    <p className="text-muted-foreground">
                      We believe drivers deserve more. That's why our commission rates are among the lowest in the region — and they get even better as you perform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card shadow-green-md border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Eco-Driven Mission</h3>
                    <p className="text-muted-foreground">
                      Drive electric or hybrid and be part of Rwanda's green mobility movement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card shadow-green-md border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Flexible Work</h3>
                    <p className="text-muted-foreground">
                      Set your own schedule, choose your routes, and drive on your terms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card shadow-green-md border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Transparent Policies</h3>
                    <p className="text-muted-foreground">
                      No hidden fees, no surprises. Everything is clear — right here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Commission Structure */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">Commission Structure</h2>
            <p className="text-center text-muted-foreground mb-8">We reward sustainability, loyalty, and performance.</p>
            
            <div className="max-w-4xl mx-auto">
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-card rounded-2xl shadow-green-md border border-border/50 overflow-hidden">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="px-6 py-4 text-left font-bold text-foreground border-b border-border/50">Driver Type</th>
                      <th className="px-6 py-4 text-left font-bold text-foreground border-b border-border/50">Base Commission</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/30">
                      <td className="px-6 py-4 text-foreground font-medium">Electric Vehicle (EV)</td>
                      <td className="px-6 py-4 text-muted-foreground">10–15%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-foreground font-medium">Hybrid Vehicle</td>
                      <td className="px-6 py-4 text-muted-foreground">15–18%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-6 rounded-2xl bg-card shadow-green-md border border-border/50 mb-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Exclusive Discounts</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Exclusive Dryft Driver:</strong> –3% commission</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Rating above 4.8:</strong> –2% commission</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Over 100 rides/month:</strong> –5% commission</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Older vehicle (&gt;8 years):</strong> +2% adjustment</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground italic">
                  Commissions apply on ride fares (excluding tips).
                </p>
              </div>
            </div>
          </div>

          {/* Performance-Based Incentives */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Performance-Based Incentives</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-card shadow-green-md border border-border/50">
                <h3 className="text-xl font-bold mb-4 text-foreground">Ride Volume Discounts</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">51–100 rides/month:</strong> 3% discount</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">100+ rides/month:</strong> 5% discount</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-card shadow-green-md border border-border/50">
                <h3 className="text-xl font-bold mb-4 text-foreground">Rating-Based Rewards</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Rating 4.8+:</strong> 2% discount</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Below 4.2:</strong> 2% penalty (subject to review)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Peak Hour Bonus */}
          <div className="mb-16">
            <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 shadow-green-md border border-primary/30">
              <h2 className="text-2xl font-bold mb-4 text-center text-foreground">Peak Hour Bonus</h2>
              <p className="text-center text-lg text-muted-foreground">
                <strong className="text-foreground">6–9 AM & 5–8 PM:</strong> Additional 2% commission discount
              </p>
            </div>
          </div>

          {/* Optional Subscription Plan */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Optional Subscription Plan</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-card shadow-green-md border border-border/50 text-center">
                <div className="flex justify-center mb-4 text-primary">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">EV Drivers</h3>
                <p className="text-3xl font-bold text-primary mb-2">50,000 RWF/week</p>
                <p className="text-muted-foreground">Earn unlimited income</p>
              </div>
              <div className="p-8 rounded-2xl bg-card shadow-green-md border border-border/50 text-center">
                <div className="flex justify-center mb-4 text-primary">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Hybrid Drivers</h3>
                <p className="text-3xl font-bold text-primary mb-2">65,000 RWF/week</p>
                <p className="text-muted-foreground">Earn unlimited income</p>
              </div>
            </div>
          </div>

          {/* How to Join Dryft */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">How to Join Dryft</h2>
            <p className="text-center text-muted-foreground mb-8">
              Our onboarding process is quick, transparent, and designed to get you on the road in under 72 hours once approved.
            </p>

            {/* Eligibility Requirements */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <div className="p-8 rounded-2xl bg-card shadow-green-md border border-border/50">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Driver Requirements</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>At least 21 years old</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Valid Rwandan driver's license (Category B or higher)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Minimum 2 years driving experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Clean criminal record (verified by RNP)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Completion of Dryft's driver orientation and safety training</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-2xl bg-card shadow-green-md border border-border/50">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Vehicle Requirements</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Must be Electric or Hybrid (no petrol-only vehicles)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Roadworthy certificate from RSB or RTDA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Valid insurance (including passenger liability)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Vehicle age: under 8 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Clean, presentable, and safe</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step-by-Step Onboarding */}
            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Step-by-Step Onboarding</h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Application",
                    description: "Submit online or visit our center with required documents",
                  },
                  {
                    step: "2",
                    title: "Background Check",
                    description: "Verification of driving & criminal records",
                  },
                  {
                    step: "3",
                    title: "Vehicle Inspection",
                    description: "Done at Dryft or approved inspection center",
                  },
                  {
                    step: "4",
                    title: "Orientation Training",
                    description: "One-day session on app use, safety, and service standards",
                  },
                  {
                    step: "5",
                    title: "App Activation",
                    description: "Get your login, start accepting rides, and earn!",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 p-6 rounded-2xl bg-card shadow-green-md border border-border/50">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Needed */}
            <div className="max-w-3xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Documents Needed</h3>
              <div className="p-8 rounded-2xl bg-card shadow-green-md border border-border/50">
                <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                  {[
                    "National ID or Passport",
                    "Valid Driver's License",
                    "Vehicle Registration & Insurance",
                    "Technical Inspection Certificate",
                    "Passport photo",
                    "Bank or Mobile Money details",
                  ].map((doc, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Driver Code of Conduct */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-green-md border border-border/50">
              <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Driver Code of Conduct</h2>
              <p className="text-center text-muted-foreground mb-6">
                Every Dryft driver commits to professionalism, safety, and respect.
              </p>
              <ul className="space-y-3 text-muted-foreground max-w-2xl mx-auto">
                {[
                  "Treat riders courteously and fairly",
                  "Keep vehicles clean and roadworthy",
                  "Avoid unnecessary cancellations",
                  "Follow traffic laws strictly",
                  "Use the app honestly (no fraud or manipulation)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center mt-6 text-foreground font-semibold">
                Your rating reflects your service — maintain a 4.8+ and enjoy exclusive benefits!
              </p>
            </div>
          </div>

          {/* Terms & Conditions Overview */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-green-md border border-border/50">
              <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Terms & Conditions Overview</h2>
              <p className="text-center text-muted-foreground mb-6">
                By joining Dryft, you agree to operate under our driver agreement, which ensures fairness and compliance with Rwandan law.
              </p>
              <ul className="space-y-3 text-muted-foreground max-w-2xl mx-auto">
                {[
                  "Maintain valid documents at all times",
                  "Use only approved vehicles under your account",
                  "Keep communication professional and transparent",
                  "Earnings paid weekly via bank or Mobile Money",
                  "Violations or fraud may lead to suspension or termination",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center mt-6 text-sm text-muted-foreground">
                Your data is secure — Dryft protects driver information and only uses it for legitimate operational purposes.
              </p>
            </div>
          </div>

          {/* Re-Onboarding & Account Reactivation */}
          <div className="mb-16">
            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-card shadow-green-md border border-border/50">
              <h2 className="text-3xl font-bold mb-4 text-center text-foreground">Re-Onboarding & Account Reactivation</h2>
              <p className="text-center text-muted-foreground">
                If you've been inactive for more than 3 months, simply go through a quick reactivation check — update your documents and vehicle inspection, and you're back on the road.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors font-bold text-lg shadow-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
