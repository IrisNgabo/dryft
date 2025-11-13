import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy - Dryft Rwanda",
  description: "Learn how Dryft Rwanda collects, uses, stores, and protects your information when you use our ride-hailing platform.",
}

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <section className="py-20 md:py-32 bg-background min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4 animate-float">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At Dryft Rwanda, your privacy is our priority.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              This Privacy Policy explains how we collect, use, store, and protect your information when you use our ride-hailing platform, mobile applications, and related services.
            </p>
            <p className="text-sm text-muted-foreground italic">
              By using Dryft, you agree to the terms outlined in this policy.
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-green-sm">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span>1️⃣</span> Who We Are
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dryft Rwanda is a sustainable ride-hailing platform that connects riders with drivers of electric and hybrid vehicles across Rwanda.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to protecting your personal data and ensuring transparency in how it is used.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-green-sm">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span>2️⃣</span> Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We collect the following categories of data to deliver and improve our services:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">A. Information You Provide</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Full name</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Contact details (phone number, email)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>National ID or driver's license (for drivers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Payment details (Mobile Money, card, or wallet info)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Profile photo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Vehicle details (for drivers)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">B. Information Automatically Collected</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Location data (pickup and drop-off points, route navigation)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Ride history and transaction data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Device and app usage data (device type, IP address, OS version)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Ratings, feedback, and communication logs</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">C. Information from Third Parties</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Identity verification data (from RNP or RURA-verified sources)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Payment processors or mobile money operators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Analytics and service partners that help us improve app performance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-green-sm">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span>3️⃣</span> How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your data is used strictly to provide, improve, and secure our services.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may use your information to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Process ride requests and complete bookings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Enable communication between riders and drivers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Facilitate secure cashless payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Ensure passenger and driver safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Improve app functionality and user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Send trip updates, receipts, or notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Conduct driver background and compliance checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Comply with legal or regulatory requirements</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-green-sm">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span>4️⃣</span> How We Share Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We respect your privacy — we only share data where necessary:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong className="text-foreground">With Drivers or Riders:</strong> To complete ride requests and provide contact during active trips</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong className="text-foreground">With Service Providers:</strong> For payment processing, identity verification, or analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong className="text-foreground">With Regulators:</strong> When required by RURA, RNP, or RSB for compliance and safety audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong className="text-foreground">With Business Partners:</strong> For corporate or fleet account management (when applicable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong className="text-foreground">By Legal Obligation:</strong> In cases involving fraud, criminal investigation, or law enforcement requests</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed font-semibold">
                We do not sell or rent your personal information to third parties.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-green-sm">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span>5️⃣</span> Data Storage & Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your data is securely stored on encrypted servers within Rwanda or other approved jurisdictions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We retain your information only as long as necessary for:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Legal compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Operational requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Dispute resolution and fraud prevention</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Once no longer required, data is safely deleted or anonymized.
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-green-sm">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span>6️⃣</span> Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use strict security measures to protect your data, including:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>End-to-end encryption for sensitive data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Secure cloud storage and firewalls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Limited access to authorized personnel only</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Regular security audits and compliance checks</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                However, no digital platform is 100% secure — users are encouraged to protect their accounts and report any suspicious activity.
              </p>
            </div>

            {/* Section 7 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-green-sm">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span>7️⃣</span> Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a Dryft user, you have the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Access and review your personal data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Request correction or update of inaccurate information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Request account deactivation or deletion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Withdraw consent for optional data uses (e.g., marketing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Request a copy of your data in a portable format</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                You can exercise these rights through the Dryft app or by contacting us directly.
              </p>
            </div>

            {/* Section 8 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-green-sm">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span>8️⃣</span> Cookies & Tracking Technologies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dryft uses cookies and similar tools to:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Improve app performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Remember user preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Analyze traffic and usage trends</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                You may disable cookies in your browser or device settings, though some features may not function properly.
              </p>
            </div>

            {/* Section 9 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-green-sm">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span>9️⃣</span> Children's Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dryft services are intended for users aged 18 and above.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not knowingly collect personal data from minors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you believe a child has provided us with personal data, please contact us for immediate removal.
              </p>
            </div>

            {/* Section 10 */}
            <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-green-sm">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span>🔟</span> Policy Updates
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update this Privacy Policy from time to time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Any changes will be communicated via the app, website, or email, with the updated effective date clearly displayed.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-xl">
            <p className="text-sm text-muted-foreground text-center">
              Last updated: November 2025. For questions about this privacy policy, please{" "}
              <Link href="/contact" className="text-primary hover:underline font-semibold">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

