"use client"

import { PlanGrid } from "@/components/pricing/plans/plan-grid"
import { PlanComparison } from "@/components/pricing/plan-comparison"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="container py-16">
      <div className="text-center">
        <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl mb-4">
          Simple, Transparent
          <span className="text-primary"> Pricing</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Choose the perfect plan for your DAT preparation journey
        </p>
      </div>

      <PlanGrid />
      <PlanComparison />
      <PricingFAQ />

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-muted-foreground mb-8">
          Our support team is here to help you make the right choice.
        </p>
        <Link href="/contact">
          <Button variant="outline">Contact Support</Button>
        </Link>
      </div>
    </div>
  )
}