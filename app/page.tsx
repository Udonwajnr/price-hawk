import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, Bell, ChevronRight, DollarSign, Search, Shield, Star, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Never overpay on Amazon again with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                    PriceHawk
                  </span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Track price changes, set alerts, and save money on your Amazon purchases with our powerful price
                  tracking tools.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/search">
                  <Button size="lg" className="w-full">
                    Start Tracking <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="w-full">
                    View Pricing
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Shield className="mr-1 h-4 w-4 text-green-500" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 text-yellow-500" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-1 h-4 w-4 text-blue-500" />
                  <span>10K+ Users</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[600px] overflow-hidden rounded-xl border bg-card shadow-xl p-4">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-2">
                    <Search className="h-5 w-5 text-muted-foreground" />
                    <div className="bg-muted rounded-md py-2 px-3 text-sm flex-1">Search or enter an Amazon URL</div>
                  </div>
                  <div className="border rounded-lg p-4 flex flex-col md:flex-row items-center gap-4">
                    <div className="h-24 w-24 bg-muted rounded-md flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="font-medium">Sony WH-1000XM4 Wireless Noise Cancelling Headphones</h3>
                      <div className="flex items-center mt-2">
                        <span className="text-xl font-bold text-green-600">$248.00</span>
                        <span className="ml-2 text-sm line-through text-gray-400">$349.99</span>
                        <span className="ml-2 text-sm font-medium text-green-600">-29%</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-32 bg-muted rounded-md w-full"></div>
                  <Button>Track This Product</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Search for any Amazon product</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Enter a product URL or search for products directly
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input className="pl-10 pr-10" placeholder="Paste Amazon URL or search..." />
                <Button className="absolute right-0 top-0 h-full rounded-l-none" variant="secondary">
                  Search
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Button variant="outline" size="sm">
                Electronics
              </Button>
              <Button variant="outline" size="sm">
                Home & Kitchen
              </Button>
              <Button variant="outline" size="sm">
                Fashion
              </Button>
              <Button variant="outline" size="sm">
                Books
              </Button>
              <Button variant="outline" size="sm">
                Toys
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Everything you need to track prices and save money
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20">
                <CardContent className="p-6 flex flex-col items-center space-y-4">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                    <BarChart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">Price History Tracking</CardTitle>
                  <CardDescription className="text-center">
                    View detailed price history charts to identify trends and patterns.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20">
                <CardContent className="p-6 flex flex-col items-center space-y-4">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                    <Bell className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-xl">Price Drop Alerts</CardTitle>
                  <CardDescription className="text-center">
                    Receive instant notifications when prices drop to your desired target.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20">
                <CardContent className="p-6 flex flex-col items-center space-y-4">
                  <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                    <DollarSign className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-xl">Price Comparisons</CardTitle>
                  <CardDescription className="text-center">
                    Compare prices across different retailers to find the best deals.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Snippet */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose the perfect plan for your price tracking needs
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
              {/* Free Plan */}
              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2">
                    <h3 className="text-xl font-bold">Free</h3>
                    <p className="text-4xl font-bold">$0</p>
                    <p className="text-sm text-gray-500">forever</p>
                  </div>
                  <div className="mt-6 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-2 text-green-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Track up to 5 products
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-2 text-green-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Email notifications
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-2 text-green-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Basic price history
                      </li>
                    </ul>
                    <Link href="/signup">
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              {/* Premium Plan */}
              <Card className="border-2 border-primary relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-medium py-1 px-4 rounded-full">
                  Most Popular
                </div>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2">
                    <h3 className="text-xl font-bold">Premium</h3>
                    <p className="text-4xl font-bold">$9.99</p>
                    <p className="text-sm text-gray-500">per month</p>
                  </div>
                  <div className="mt-6 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-2 text-green-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Track up to 50 products
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-2 text-green-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Email & SMS notifications
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-2 text-green-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Advanced price history & analytics
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-2 text-green-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Price comparison
                      </li>
                    </ul>
                    <Link href="/signup">
                      <Button className="w-full">Subscribe Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              {/* Business Plan */}
              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2">
                    <h3 className="text-xl font-bold">Business</h3>
                    <p className="text-4xl font-bold">$29.99</p>
                    <p className="text-sm text-gray-500">per month</p>
                  </div>
                  <div className="mt-6 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-2 text-green-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Unlimited product tracking
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-2 text-green-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        All notification types
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-2 text-green-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Market intelligence reports
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-2 text-green-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        API access
                      </li>
                    </ul>
                    <Link href="/signup">
                      <Button className="w-full" variant="outline">
                        Contact Sales
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Link href="/pricing" className="inline-flex items-center text-sm font-medium">
              View full pricing details
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Saving Today</h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of smart shoppers using PriceHawk to save money on their Amazon purchases.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" className="w-full bg-white text-primary hover:bg-gray-100">
                  Sign Up Free
                </Button>
              </Link>
              <Link href="/search">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-primary-foreground/10"
                >
                  Try Product Search
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

