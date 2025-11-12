import type { Metadata } from "next"
import Header from "@/components/header"
import Services from "@/components/services"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Services - Dryft Rwanda Comprehensive Mobility Solutions",
  description: "Comprehensive mobility solutions designed for everyone. Book rides, join our driver program, explore business solutions, and experience safety-first transportation.",
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Services />
      <Footer />
    </main>
  )
}

