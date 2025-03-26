import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart4, ExternalLink, Info, Search, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SearchPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Search Amazon Products</h1>

      <Tabs defaultValue="url" className="w-full max-w-3xl mx-auto mb-10">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="url">Search by URL</TabsTrigger>
          <TabsTrigger value="keyword">Search by Keyword</TabsTrigger>
        </TabsList>
        <TabsContent value="url" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="url" className="text-sm font-medium">
                    Amazon Product URL
                  </label>
                  <div className="flex">
                    <Input
                      id="url"
                      placeholder="https://www.amazon.com/dp/B08H8VZ6PV"
                      className="flex-1 rounded-r-none"
                    />
                    <Button className="rounded-l-none">
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Paste the full Amazon product URL to track its price history
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="keyword" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="keyword" className="text-sm font-medium">
                    Product Keyword
                  </label>
                  <div className="flex">
                    <Input
                      id="keyword"
                      placeholder="e.g. wireless headphones, air fryer, etc."
                      className="flex-1 rounded-r-none"
                    />
                    <Button className="rounded-l-none">
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Search for products by keyword or category</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="my-10">
        <h2 className="text-2xl font-bold mb-6">Recent Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square bg-muted relative">
                  <Badge className="absolute top-2 right-2 bg-green-600">-22%</Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-medium line-clamp-2 mb-1">Apple AirPods Pro (2nd Generation) Wireless Earbuds</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-xl font-bold text-green-600 mr-2">$189.99</span>
                    <span className="text-sm line-through text-muted-foreground">$249.00</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <BarChart4 className="h-4 w-4 mr-2" />
                      Track
                    </Button>
                    <Button size="sm" variant="outline" className="px-2">
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