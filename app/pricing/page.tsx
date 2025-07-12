import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PricingPlans } from "@/components/pricing/pricing-plans"
import { PricingFAQ } from "@/components/pricing/pricing-faq"

export const metadata = {
  title: "Pricing - LearnHub",
  description: "Choose the perfect plan for your learning journey",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your learning goals. All plans include access to our core features.
            </p>
          </div>
          <PricingPlans />
          <PricingFAQ />
        </div>
      </main>
      <Footer />
    </div>
  )
}
