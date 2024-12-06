"use client"

import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PriceDisplay } from "@/components/pricing/price-display"
import Link from "next/link"

interface PlanFeature {
  name: string
  included: boolean
}

interface PlanCardProps {
  name: string
  description: string
  monthlyPrice: number
  annualPrice: number
  features: PlanFeature[]
  isPopular?: boolean
  isAnnual: boolean
}

export function PlanCard({
  name,
  description,
  monthlyPrice,
  annualPrice,
  features,
  isPopular,
  isAnnual
}: PlanCardProps) {
  return (
    <Card className="relative flex flex-col p-6">
      {isPopular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
          Most Popular
        </Badge>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <PriceDisplay
          monthlyPrice={monthlyPrice}
          annualPrice={annualPrice}
          isAnnual={isAnnual}
        />
      </div>

      <div className="space-y-3 flex-1">
        {features.map((feature) => (
          <div key={feature.name} className="flex items-center">
            <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
            <span className="text-sm">{feature.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link href="/signup">
          <Button
            className={`w-full ${
              isPopular
                ? "bg-primary hover:bg-primary/90"
                : ""
            }`}
            variant={isPopular ? "default" : "outline"}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </Card>
  )
}