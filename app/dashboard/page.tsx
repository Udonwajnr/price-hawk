import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Info, Plus, Search, Settings, ShoppingCart, Check } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DashboardPage() {
  // Mock data - in a real app, this would come from your database
  const trackedProducts = [
    {
      id: "1",
      name: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
      currentPrice: 248,
      originalPrice: 349.99,
      image: "/placeholder.svg",
      discount: 29,
      status: "In Stock",
    },
    {
      id: "2",
      name: "Apple iPad Air (5th Generation)",
      currentPrice: 559,
      originalPrice: 599,
      image: "/placeholder.svg",
      discount: 7,
      status: "In Stock",
    },
    {
      id: "3",
      name: "Samsung 49-Inch Odyssey G9 Gaming Monitor",
      currentPrice: 999.99,
      originalPrice: 1299.99,
      image: "/placeholder.svg",
      discount: 23,
      status: "In Stock",
    },
    {
      id: "4",
      name: 'Kindle Paperwhite (8 GB) – Now with a 6.8" display',
      currentPrice: 139.99,
      originalPrice: 139.99,
      image: "/placeholder.svg",
      discount: 0,
      status: "In Stock",
    },
  ]

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Your Dashboard</h1>
          <p className="text-muted-foreground">Track and manage your Amazon product prices</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/settings">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/search">
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Link>
          </Button>
        </div>
      </div>

      {/* Dashboard Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tracked Products</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Free plan: 1 remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Price Alerts</CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Set a target price for more products</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Potential Savings</CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$451.99</div>
            <p className="text-xs text-muted-foreground">Based on your tracked products</p>
          </CardContent>
        </Card>
      </div>

      {/* Product Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input className="pl-8" placeholder="Search your tracked products..." />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Products</SelectItem>
            <SelectItem value="price-drop">Price Drops</SelectItem>
            <SelectItem value="deals">Best Deals</SelectItem>
            <SelectItem value="alerts">With Alerts</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tracked Products Tabs */}
      <Tabs defaultValue="products" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="alerts">Price Alerts</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <TabsContent value="products" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {trackedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-square relative bg-muted">
                  {product.discount > 0 && (
                    <Badge className="absolute top-2 right-2 bg-green-600">-{product.discount}%</Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium line-clamp-2 h-12 mb-1">{product.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-xl font-bold mr-2">${product.currentPrice.toFixed(2)}</span>
                    {product.discount > 0 && (
                      <span className="text-sm line-through text-muted-foreground">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center text-sm mb-3">
                    <Badge variant="outline">{product.status}</Badge>
                    <Link
                      href={`/product/${product.id}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Price history
                    </Link>
                  </div>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href={`/product/${product.id}`}>
                      View Details
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="alerts" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Price Alerts</CardTitle>
              <CardDescription>Get notified when prices drop to your target</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">Sony WH-1000XM4 Headphones</div>
                  <Badge>Active</Badge>
                </div>
                <div className="flex items-baseline mb-2">
                  <span className="text-sm mr-1">Current:</span>
                  <span className="font-bold mr-3">$248.00</span>
                  <span className="text-sm mr-1">Target:</span>
                  <span className="font-bold text-green-600">$229.99</span>
                </div>
                <div className="flex justify-between">
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="text-destructive">
                    Delete
                  </Button>
                </div>
              </div>
              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">Samsung 49-Inch Odyssey G9 Monitor</div>
                  <Badge>Active</Badge>
                </div>
                <div className="flex items-baseline mb-2">
                  <span className="text-sm mr-1">Current:</span>
                  <span className="font-bold mr-3">$999.99</span>
                  <span className="text-sm mr-1">Target:</span>
                  <span className="font-bold text-green-600">$899.99</span>
                </div>
                <div className="flex justify-between">
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="text-destructive">
                    Delete
                  </Button>
                </div>
              </div>
              <div className="text-center py-4">
                <Button asChild>
                  <Link href="/search">
                    <Plus className="h-4 w-4 mr-2" />
                    Set Up New Alert
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Price History</CardTitle>
              <CardDescription>Recent price changes for your tracked products</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium">Sony WH-1000XM4 Headphones</div>
                    <Badge className="bg-green-600">Price Drop</Badge>
                  </div>
                  <div className="flex items-baseline text-sm">
                    <span className="mr-1">Changed from</span>
                    <span className="line-through mr-1">$279.99</span>
                    <span className="mr-1">to</span>
                    <span className="font-bold text-green-600">$248.00</span>
                    <span className="text-muted-foreground ml-2">2 days ago</span>
                  </div>
                </div>
                <div className="border-b pb-3">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium">Apple iPad Air (5th Generation)</div>
                    <Badge className="bg-yellow-600">Back in Stock</Badge>
                  </div>
                  <div className="flex items-baseline text-sm">
                    <span className="mr-1">Status changed from</span>
                    <span className="line-through mr-1">Out of Stock</span>
                    <span className="mr-1">to</span>
                    <span className="font-bold">In Stock</span>
                    <span className="text-muted-foreground ml-2">3 days ago</span>
                  </div>
                </div>
                <div className="border-b pb-3">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium">Samsung 49-Inch Odyssey G9 Monitor</div>
                    <Badge className="bg-red-600">Price Increase</Badge>
                  </div>
                  <div className="flex items-baseline text-sm">
                    <span className="mr-1">Changed from</span>
                    <span className="line-through mr-1">$949.99</span>
                    <span className="mr-1">to</span>
                    <span className="font-bold text-red-600">$999.99</span>
                    <span className="text-muted-foreground ml-2">1 week ago</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4 flex justify-center">
              <Button variant="outline" size="sm">
                View Full History
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Upgrade Banner */}
      <div className="mt-10 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-950/40 dark:to-green-950/40 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Upgrade to Premium</h3>
            <p className="mb-4 text-muted-foreground">
              Track up to 50 products, get SMS alerts, and access advanced price history with our Premium plan.
            </p>
            <Link href="/pricing">
              <Button>View Premium Benefits</Button>
            </Link>
          </div>
          <div className="flex flex-col text-sm gap-1.5">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-600 mr-2" />
              <span>Track up to 50 products</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-600 mr-2" />
              <span>SMS & Email alerts</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-600 mr-2" />
              <span>Advanced price history</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-600 mr-2" />
              <span>Hourly price checks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

