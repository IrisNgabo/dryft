"use client"

export default function Partners() {
  const partnershipPillars = [
    { id: 1, name: "EV Infrastructure Partners", logo: "🔌" },
    { id: 2, name: "Corporate Mobility Solutions", logo: "🏢" },
    { id: 3, name: "Environmental Organizations", logo: "🌿" },
    { id: 4, name: "Vehicle & Tech Suppliers", logo: "🚗" },
  ]

  const whyPartner = [
    { id: 1, title: "Visibility", description: "As a sustainability leader" },
    { id: 2, title: "Access", description: "To eco-conscious riders and institutions" },
    { id: 3, title: "Co-branding", description: "And promotional opportunities" },
    { id: 4, title: "Contribution", description: "To Rwanda's environmental goals" },
  ]

  return (
    <section id="partners" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-float">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Partnerships</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Partner with Dryft Rwanda – Sustainable Mobility Partnerships
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            We believe in the power of collaboration to drive meaningful change. Dryft Rwanda partners with organizations, institutions, and innovators who share our vision of a cleaner and more connected Rwanda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnershipPillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 flex flex-col items-center justify-center text-center group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {pillar.logo}
              </div>
              <p className="text-sm font-medium text-foreground">{pillar.name}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Why Partner with Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPartner.map((item, index) => (
              <div
                key={item.id}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="font-bold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center animate-slide-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">🌍 Join us in shaping the future of sustainable transport.</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            📧 dryftrwanda@gmail.com | 🤝 Become a Partner
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-colors font-semibold">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  )
}
