import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Home, ArrowLeft, ShoppingCart } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4 py-16 text-center">
      <div className="mb-8 relative">
        <div className="text-9xl font-bold text-muted-foreground/20">404</div>
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
        </div> */}
      </div>

      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Page Not Found</h1>

      <p className="max-w-[600px] text-muted-foreground mb-8">
        Oops! It seems the price for this page has dropped so low it's disappeared completely. Let's get you back to
        tracking real deals.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto w-full">
        <Button className="flex-1" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <Button className="flex-1" variant="outline" asChild>
          <Link href="/search">
            <Search className="mr-2 h-4 w-4" />
            Search Products
          </Link>
        </Button>
      </div>

      <div className="mt-12 border-t pt-8 w-full max-w-md">
        <h2 className="text-lg font-medium mb-4">Looking for something specific?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <Link href="/dashboard" className="flex items-center p-3 border rounded-md hover:bg-muted transition-colors">
            <ShoppingCart className="mr-2 h-4 w-4 text-primary" />
            Your Dashboard
          </Link>
          <Link href="/pricing" className="flex items-center p-3 border rounded-md hover:bg-muted transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4 text-primary" />
            Pricing Plans
          </Link>
          <Link href="/alerts" className="flex items-center p-3 border rounded-md hover:bg-muted transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4 text-primary" />
            Price Alerts
          </Link>
          <Link href="/settings" className="flex items-center p-3 border rounded-md hover:bg-muted transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4 text-primary" />
            Account Settings
          </Link>
        </div>
      </div>
    </div>
  )
}