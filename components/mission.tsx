"use client"

export default function Mission() {
  return (
    <section id="mission" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-float">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Dryft Rwanda</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driving Sustainable Mobility
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
            Dryft Rwanda is pioneering a cleaner future for Rwanda's transport ecosystem. We operate exclusively Electric and Hybrid Vehicles, ensuring every trip contributes to a healthier planet.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Our vision is to become Rwanda's leading sustainable mobility platform — built on trust, innovation, and community empowerment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Core Values */}
          <div className="p-6 rounded-2xl bg-card shadow-green-md hover:shadow-green-lg transition-all duration-300 border border-border/50">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Sustainability</h3>
            <p className="text-sm text-muted-foreground">Protecting the planet through eco-innovation.</p>
          </div>
          <div className="p-6 rounded-2xl bg-card shadow-green-md hover:shadow-green-lg transition-all duration-300 border border-border/50">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Technology</h3>
            <p className="text-sm text-muted-foreground">Smarter, faster, and more efficient mobility.</p>
          </div>
          <div className="p-6 rounded-2xl bg-card shadow-green-md hover:shadow-green-lg transition-all duration-300 border border-border/50">
            <div className="text-4xl mb-4">🧭</div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Integrity</h3>
            <p className="text-sm text-muted-foreground">Operating transparently and ethically.</p>
          </div>
          <div className="p-6 rounded-2xl bg-card shadow-green-md hover:shadow-green-lg transition-all duration-300 border border-border/50">
            <div className="text-4xl mb-4">🚘</div>
            <h3 className="text-xl font-bold mb-2 text-foreground">Safety</h3>
            <p className="text-sm text-muted-foreground">Prioritizing passengers and drivers alike.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
