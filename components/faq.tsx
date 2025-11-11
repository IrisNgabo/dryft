"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How do I book a ride with Dryft?",
      answer:
        "Download the Dryft app from the App Store or Google Play, create an account, enter your destination, and tap 'Request Ride'. A driver will be assigned within seconds. You can track their location in real-time until they arrive.",
    },
    {
      question: "What payment methods does Dryft accept?",
      answer:
        "We accept multiple payment options including cash, credit/debit cards, and mobile money (MTN Mobile Money, Airtel Money). You can save your preferred payment method in the app for faster checkout.",
    },
    {
      question: "How much does a Dryft ride cost?",
      answer:
        "Prices vary based on the ride type and distance. Dryft Lite starts from $0.50, Dryft Plus from $1.00, and Dryft Business from $2.00. You'll see the estimated fare before confirming your ride.",
    },
    {
      question: "Are Dryft drivers background checked?",
      answer:
        "Yes, all Dryft drivers undergo comprehensive background checks and vehicle inspections before joining our platform. Safety is our top priority, and we maintain strict standards for all drivers.",
    },
    {
      question: "What if I have an issue with my ride?",
      answer:
        "Our 24/7 support team is available through the app. You can report issues, request help, or provide feedback directly. We typically respond within 2 hours for urgent matters.",
    },
    {
      question: "Can I schedule a ride in advance?",
      answer:
        "Yes, you can schedule a ride up to 30 days in advance. Use the 'Schedule' option in the app, select your date and time, and we'll match you with a driver 5 minutes before your scheduled pickup.",
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 animate-float">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Find answers to common questions about Dryft services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 animate-slide-left"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-left text-foreground">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-background/50 animate-slide-down">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help CTA */}
        <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
          <h3 className="text-xl font-semibold mb-3">Didn't find your answer?</h3>
          <p className="text-muted-foreground mb-4">Our support team is here to help 24/7</p>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-colors font-semibold text-sm">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
