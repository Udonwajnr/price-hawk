"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart4, ExternalLink, Info, Loader2, Search, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { scrapeAndStoreProduct } from "@/lib/actions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url)
    const hostname = parsedURL.hostname

    if (hostname.includes("amazon.com") || hostname.includes("amazon.") || hostname.endsWith("amazon")) {
      return true
    }
  } catch (error) {
    return false
  }

  return false
}

export default function SearchPage() {
  const router = useRouter()

  const [activeTab, setActiveTab] = useState("url")
  const [urlInput, setUrlInput] = useState("")
  const [keywordInput, setKeywordInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleUrlSearch = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!urlInput.trim()) {
      toast("Error",{
        description: "Please enter an Amazon product URL",
      })
      return
    }

    const isValidLink = isValidAmazonProductURL(urlInput)

    if (!isValidLink) {
      toast("Invalid URL",{
        description: "Please provide a valid Amazon product link",
      })

      return
    }

    try {
      setIsLoading(true)

      // Scrape the product page
      const product = await scrapeAndStoreProduct(urlInput)

      toast("Success!",{
        description: "Product has been successfully tracked",
      })

      // Redirect to product page or dashboard
      // router.push("/dashboard")
    } catch (error: any) {
      console.error(error)
      toast("Error",{
        description: error.message || "Failed to track product. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeywordSearch = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!keywordInput.trim()) {
      toast("Error",{
        description: "Please enter a keyword to search",
      })
      return
    }

    try {
      setIsLoading(true)

      // In a real implementation, this would search Amazon for products matching the keyword
      // For now, we'll just show a toast message
      toast("Keyword Search",{
        description: `Searching for "${keywordInput}" products...`,
      })

      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to search results page (in a real implementation)
      // For now, we'll just reset the loading state
      setIsLoading(false)
    } catch (error: any) {
      console.error(error)
      toast("Error",{
         
        description: error.message || "Failed to search products. Please try again.",
        
      })
      setIsLoading(false)
    }
  }

  // Sample popular products data
  const popularProducts = [
    {
      id: 1,
      name: "Apple AirPods Pro (2nd Generation) Wireless Earbuds",
      currentPrice: 189.99,
      originalPrice: 249.0,
      discount: 22,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
      currentPrice: 248.0,
      originalPrice: 349.99,
      discount: 29,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Samsung 49-Inch Odyssey G9 Gaming Monitor",
      currentPrice: 999.99,
      originalPrice: 1299.99,
      discount: 23,
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: 'Kindle Paperwhite (8 GB) – Now with a 6.8" display',
      currentPrice: 139.99,
      originalPrice: 139.99,
      discount: 0,
      image: "/placeholder.svg",
    },
  ]

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Search Amazon Products</h1>

      <Tabs
        defaultValue="url"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full max-w-3xl mx-auto mb-10"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="url">Search by URL</TabsTrigger>
          <TabsTrigger value="keyword">Search by Keyword</TabsTrigger>
        </TabsList>
        <TabsContent value="url" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleUrlSearch} className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="url" className="text-sm font-medium">
                    Amazon Product URL
                  </label>
                  <div className="flex">
                    <Input
                      id="url"
                      placeholder="https://www.amazon.com/dp/B08H8VZ6PV"
                      className="flex-1 rounded-r-none"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      disabled={isLoading}
                    />
                    <Button type="submit" className="rounded-l-none" disabled={isLoading}>
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      ) : (
                        <Search className="h-4 w-4 mr-2" />
                      )}
                      {isLoading ? "Searching..." : "Search"}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Paste the full Amazon product URL to track its price history
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="keyword" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleKeywordSearch} className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="keyword" className="text-sm font-medium">
                    Product Keyword
                  </label>
                  <div className="flex">
                    <Input
                      id="keyword"
                      placeholder="e.g. wireless headphones, air fryer, etc."
                      className="flex-1 rounded-r-none"
                      value={keywordInput}
                      onChange={(e) => setKeywordInput(e.target.value)}
                      disabled={isLoading}
                    />
                    <Button type="submit" className="rounded-l-none" disabled={isLoading}>
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      ) : (
                        <Search className="h-4 w-4 mr-2" />
                      )}
                      {isLoading ? "Searching..." : "Search"}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Search for products by keyword or category</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="my-10">
        <h2 className="text-2xl font-bold mb-6">Recent Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square bg-muted relative">
                  {product.discount > 0 && (
                    <Badge className="absolute top-2 right-2 bg-green-600">-{product.discount}%</Badge>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium line-clamp-2 mb-1">{product.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-xl font-bold text-green-600 mr-2">${product.currentPrice.toFixed(2)}</span>
                    {product.discount > 0 && (
                      <span className="text-sm line-through text-muted-foreground">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => {
                        // In a real implementation, this would add the product to tracking
                        // For now, we'll just show a toast message
                        toast("Product Tracked",{
                          description: `${product.name} has been added to your tracking list`,
                        })
                      }}
                    >
                      <BarChart4 className="h-4 w-4 mr-2" />
                      Track
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="px-2"
                      onClick={() => {
                        // In a real implementation, this would open the product page
                        // For now, we'll just show a toast message
                        toast("View Product",{
                          description: "Redirecting to product page...",
                        })
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-6 max-w-3xl mx-auto">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-primary/10 rounded-full">
            <Info className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-2">How PriceHawk Works</h3>
            <ol className="space-y-2 mb-4 list-decimal pl-5">
              <li>Search for any Amazon product by URL or keyword</li>
              <li>View detailed price history and tracking data</li>
              <li>Set up price drop alerts (requires free account)</li>
              <li>Get notified when prices drop to your target</li>
            </ol>
            <div className="flex flex-col xs:flex-row gap-3">
              <Link href="/signup">
                <Button>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Create Free Account
                </Button>
              </Link>
              <Link href="/help">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

