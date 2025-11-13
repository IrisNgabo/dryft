import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Services - Dryft Rwanda Comprehensive Mobility Solutions",
  description: "Comprehensive mobility solutions designed for everyone. Book rides, join our driver program, explore business solutions, and experience safety-first transportation.",
}

export default function ServicesPage() {
  const menuItems = [
    {
      title: "For Riders",
      href: "/riders",
      description: "Book rides easily and travel sustainably",
    },
    {
      title: "For Drivers",
      href: "/drivers",
      description: "Join our driver community and earn flexible income",
    },
    {
      title: "Our Fleet",
      href: "/fleet",
      description: "Explore our electric and hybrid vehicle options",
    },
    {
      title: "Careers",
      href: "/careers",
      description: "Join our team and help shape the future of mobility",
    },
  ]

  return (
    <main className="relative min-h-screen bg-accent">
      <Header />
      
      <section className="py-20 md:py-32 min-h-[60vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-float">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Services</h1>
          </div>

          <div className="space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block p-6 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 group"
                style={{
                  animation: `slide-in-up 0.6s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-1 group-hover:text-primary-foreground transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-sm text-white/80 group-hover:text-white transition-colors">
                      {item.description}
                    </p>
                  </div>
                  <svg
                    className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-2 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

