"use client"

import { useState } from "react"
import { PlanCard } from "./plan-card"
import { planFeatures } from "./plan-features"
import { PricingToggle } from "@/components/pricing/pricing-toggle"

const plans = [
  {
    name: "Basic",
    description: "Essential DAT prep tools for focused students",
    monthlyPrice: 99,
    annualPrice: 79,
    features: planFeatures.basic
  },
  {
    name: "Standard",
    description: "Most popular choice for serious DAT candidates",
    monthlyPrice: 149,
    annualPrice: 119,
    features: planFeatures.standard,
    isPopular: true
  },
  {
    name: "Premium",
    description: "Comprehensive preparation with maximum support",
    monthlyPrice: 199,
    annualPrice: 159,
    features: planFeatures.premium
  }
]

export function PlanGrid() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div>
      <div className="text-center mb-8">
        <PricingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard
            key={plan.name}
            {...plan}
            isAnnual={isAnnual}
          />
        ))}
      </div>
    </div>
  )
}