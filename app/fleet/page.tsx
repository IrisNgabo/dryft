import type { Metadata } from "next"
import Header from "@/components/header"
import VehicleTypes from "@/components/vehicle"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Fleet - Dryft Rwanda Vehicle Types",
  description: "Choose the perfect ride for your journey. Explore our fleet of Economy, 7-Seater, Premium, and Corporate vehicles - all electric and hybrid.",
}

export default function FleetPage() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <VehicleTypes />
      <Footer />
    </main>
  )
}

