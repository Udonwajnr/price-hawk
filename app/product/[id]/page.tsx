'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Bell, ChevronLeft, ExternalLink, Share2, ShoppingCart } from "lucide-react"
import { LineChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Area } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/charts"
import {use} from "react"
export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // In a real app, we'd fetch the product data based on params.id
  const {id} = use(params) 
  const product = {
    id: id,
    name: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    description:
      "Industry-leading noise cancellation with Dual Noise Sensor technology, premium sound quality with 40mm drivers, up to 30-hour battery life with quick charging (10 min charge for 5 hours of playback), touch sensor controls to pause/play/skip tracks, control volume, activate your voice assistant, and answer phone calls.",
    currentPrice: 248,
    originalPrice: 349.99,
    lowestPrice: 228,
    highestPrice: 349.99,
    image: "/placeholder.svg",
    discount: 29,
    status: "In Stock",
    url: "https://www.amazon.com/dp/B0863TXGM3",
    category: "Electronics",
    rating: 4.7,
    reviews: 32567,
  }

  // Sample price history data
  const priceHistoryData = [
    { date: "2023-06", price: 349.99 },
    { date: "2023-07", price: 349.99 },
    { date: "2023-08", price: 329.99 },
    { date: "2023-09", price: 298.0 },
    { date: "2023-10", price: 298.0 },
    { date: "2023-11", price: 248.0 },
    { date: "2023-12", price: 228.0 },
    { date: "2024-01", price: 248.0 },
    { date: "2024-02", price: 248.0 },
    { date: "2024-03", price: 248.0 },
  ]

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/dashboard">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <Badge variant="outline">{product.category}</Badge>
          <Badge variant="outline">
            ⭐ {product.rating} ({product.reviews.toLocaleString()} reviews)
          </Badge>
          <Badge variant="outline">{product.status}</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
              <div className="text-sm text-muted-foreground">Product Image</div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold mr-2">${product.currentPrice.toFixed(2)}</span>
                  {product.discount > 0 && (
                    <>
                      <span className="text-lg line-through text-muted-foreground mr-2">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <Badge className="bg-green-600">-{product.discount}%</Badge>
                    </>
                  )}
                </div>
                <div className="space-y-1 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lowest Price:</span>
                    <span className="font-medium">${product.lowestPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Highest Price:</span>
                    <span className="font-medium">${product.highestPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current vs. Lowest:</span>
                    <span
                      className={`font-medium ${product.currentPrice === product.lowestPrice ? "text-green-600" : ""}`}
                    >
                      {product.currentPrice === product.lowestPrice
                        ? "Best price now!"
                        : `$${(product.currentPrice - product.lowestPrice).toFixed(2)} higher`}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-4">{product.description}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Button asChild>
                  <a href={product.url} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    View on Amazon
                  </a>
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline">
                    <Bell className="h-4 w-4 mr-2" />
                    Set Alert
                  </Button>
                  <Button variant="outline">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Price History</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ChartContainer>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceHistoryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={["dataMin - 20", "dataMax + 20"]} />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="price" stroke="#3b82f6" fillOpacity={1} fill="url(#colorPrice)" />
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Set Price Alert</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="target-price" className="text-sm font-medium">
                  Target Price ($)
                </label>
                <Input id="target-price" type="number" defaultValue="229.99" />
                <p className="text-xs text-muted-foreground">
                  We'll notify you when the price drops to or below this amount
                </p>
              </div>
              <Button className="w-full">
                <Bell className="h-4 w-4 mr-2" />
                Set Price Alert
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Price Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Current vs. Average</span>
                    <span className="font-medium text-green-600">-8.2%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Current vs. Original</span>
                    <span className="font-medium text-green-600">-29.1%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">30-Day Price Trend</span>
                    <span className="font-medium">Stable</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Avg. Price Drop</span>
                    <span className="font-medium">$18.67</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Price Drops per Year</span>
                    <span className="font-medium">5</span>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <h4 className="text-sm font-medium mb-2">Price Prediction</h4>
                  <p className="text-sm text-muted-foreground">
                    Based on historical data, there's a <span className="font-medium">68%</span> chance of a price drop
                    in the next 30 days.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Similar Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-muted rounded-md flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Bose QuietComfort 45 Headphones</p>
                    <p className="text-sm text-green-600">$279.00</p>
                  </div>
                  <Button size="icon" variant="ghost" className="flex-shrink-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-muted rounded-md flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Apple AirPods Max</p>
                    <p className="text-sm text-green-600">$449.00</p>
                  </div>
                  <Button size="icon" variant="ghost" className="flex-shrink-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-muted rounded-md flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Sennheiser Momentum 4 Wireless</p>
                    <p className="text-sm text-green-600">$299.95</p>
                  </div>
                  <Button size="icon" variant="ghost" className="flex-shrink-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

