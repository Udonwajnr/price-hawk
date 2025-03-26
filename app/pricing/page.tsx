import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Transparent Pricing for All Your Needs</h1>
        <p className="text-xl text-muted-foreground">
          Choose the perfect plan that works for your shopping habits. No hidden fees, cancel anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Free Plan */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-2xl">Free</CardTitle>
            <div className="mt-4">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-muted-foreground ml-2">/ month</span>
            </div>
            <CardDescription className="mt-2">Perfect for casual shoppers</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Track up to 5 products</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Email price alerts</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Basic price history (30 days)</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Daily price checks</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <X className="h-5 w-5 mr-2" />
                <span>SMS notifications</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <X className="h-5 w-5 mr-2" />
                <span>Advanced price history</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <X className="h-5 w-5 mr-2" />
                <span>Price comparison</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/signup" className="w-full">
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="border-2 border-primary relative md:scale-105">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-medium py-1 px-4 rounded-full">
            Most Popular
          </div>
          <CardHeader>
            <CardTitle className="text-2xl">Premium</CardTitle>
            <div className="mt-4">
              <span className="text-4xl font-bold">$9.99</span>
              <span className="text-muted-foreground ml-2">/ month</span>
            </div>
            <CardDescription className="mt-2">For regular online shoppers</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Track up to 50 products</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Email & SMS price alerts</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Advanced price history (1 year)</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Hourly price checks</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Price comparison across retailers</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Customizable alerts</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <X className="h-5 w-5 mr-2" />
                <span>API access</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/signup" className="w-full">
              <Button className="w-full">Subscribe Now</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Business Plan */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-2xl">Business</CardTitle>
            <div className="mt-4">
              <span className="text-4xl font-bold">$29.99</span>
              <span className="text-muted-foreground ml-2">/ month</span>
            </div>
            <CardDescription className="mt-2">For power users & businesses</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Unlimited product tracking</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>All notification types</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Complete price history</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Real-time price monitoring</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Market intelligence reports</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Price prediction analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>API access</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/contact" className="w-full">
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Can I change my plan later?</h3>
            <p className="text-muted-foreground">
              Yes, you can upgrade, downgrade, or cancel your subscription at any time. Changes will be applied at the
              end of your current billing cycle.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Is there a free trial for Premium and Business plans?</h3>
            <p className="text-muted-foreground">
              Yes, we offer a 14-day free trial for our Premium plan and a 30-day trial for Business plans. No credit
              card required to try it out.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">How accurate is the price tracking?</h3>
            <p className="text-muted-foreground">
              Our tracking is highly accurate and updates according to your plan (daily for Free, hourly for Premium,
              and real-time for Business). We monitor the main product price, not limited-time deals or coupons.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Can I get a refund if I'm not satisfied?</h3>
            <p className="text-muted-foreground">
              We offer a 30-day money-back guarantee for all paid plans if you're not completely satisfied with our
              service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

