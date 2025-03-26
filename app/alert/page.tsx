import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, BellOff, ChevronRight, MessageSquare, Plus, Trash2 } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AlertsPage() {
  // Mock data for alerts
  const priceAlerts = [
    {
      id: "1",
      productName: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
      currentPrice: 248,
      targetPrice: 229.99,
      status: "active",
      lastUpdated: "2 hours ago",
      image: "/placeholder.svg?height=80&width=80",
      url: "/product/1",
    },
    {
      id: "2",
      productName: "Samsung 49-Inch Odyssey G9 Gaming Monitor",
      currentPrice: 999.99,
      targetPrice: 899.99,
      status: "active",
      lastUpdated: "1 day ago",
      image: "/placeholder.svg?height=80&width=80",
      url: "/product/3",
    },
    {
      id: "3",
      productName: "Apple iPad Air (5th Generation)",
      currentPrice: 559,
      targetPrice: 499.99,
      status: "paused",
      lastUpdated: "3 days ago",
      image: "/placeholder.svg?height=80&width=80",
      url: "/product/2",
    },
  ]

  // Mock data for notification history
  const notificationHistory = [
    {
      id: "1",
      productName: "Kindle Paperwhite",
      message: "Price dropped to $119.99 (below your target of $129.99)",
      date: "Mar 24, 2024",
      type: "price-drop",
      read: true,
    },
    {
      id: "2",
      productName: "Sony WH-1000XM4 Headphones",
      message: "Price increased to $248.00 (from $228.00)",
      date: "Mar 15, 2024",
      type: "price-increase",
      read: true,
    },
    {
      id: "3",
      productName: "Samsung 49-Inch Odyssey G9 Monitor",
      message: "Back in stock at $999.99",
      date: "Mar 10, 2024",
      type: "back-in-stock",
      read: false,
    },
    {
      id: "4",
      productName: "Apple iPad Air",
      message: "Price dropped to $559.00 (below your target of $599.99)",
      date: "Feb 28, 2024",
      type: "price-drop",
      read: true,
    },
  ]

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Alerts & Notifications</h1>
          <p className="text-muted-foreground">Manage your price alerts and notification preferences</p>
        </div>
        <Button asChild>
          <Link href="/search">
            <Plus className="h-4 w-4 mr-2" />
            Create New Alert
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="alerts" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="alerts">Price Alerts</TabsTrigger>
          <TabsTrigger value="history">Notification History</TabsTrigger>
          <TabsTrigger value="settings">Notification Settings</TabsTrigger>
        </TabsList>

        {/* Price Alerts Tab */}
        <TabsContent value="alerts" className="mt-6">
          <div className="grid gap-6">
            {priceAlerts.length > 0 ? (
              priceAlerts.map((alert) => (
                <Card key={alert.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-20 w-20 bg-muted rounded-md"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                          <h3 className="font-medium line-clamp-1">{alert.productName}</h3>
                          <Badge variant={alert.status === "active" ? "default" : "outline"}>
                            {alert.status === "active" ? "Active" : "Paused"}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-4">
                          <div className="flex items-baseline">
                            <span className="text-sm text-muted-foreground mr-2">Current Price:</span>
                            <span className="font-medium">${alert.currentPrice.toFixed(2)}</span>
                          </div>
                          <div className="flex items-baseline">
                            <span className="text-sm text-muted-foreground mr-2">Target Price:</span>
                            <span className="font-medium text-green-600">${alert.targetPrice.toFixed(2)}</span>
                          </div>
                          <div className="flex items-baseline">
                            <span className="text-sm text-muted-foreground mr-2">Status:</span>
                            <span className="font-medium">
                              {alert.currentPrice <= alert.targetPrice
                                ? "Target reached!"
                                : `$${(alert.currentPrice - alert.targetPrice).toFixed(2)} to go`}
                            </span>
                          </div>
                          <div className="flex items-baseline">
                            <span className="text-sm text-muted-foreground mr-2">Last Updated:</span>
                            <span className="font-medium">{alert.lastUpdated}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link href={alert.url}>View Product</Link>
                          </Button>
                          <Button size="sm" variant="outline">
                            Edit Alert
                          </Button>
                          {alert.status === "active" ? (
                            <Button size="sm" variant="outline">
                              <BellOff className="h-4 w-4 mr-2" />
                              Pause
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline">
                              <Bell className="h-4 w-4 mr-2" />
                              Activate
                            </Button>
                          )}
                          <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">No Price Alerts</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    You haven't set up any price alerts yet. Create one to get notified when prices drop.
                  </p>
                  <Button asChild>
                    <Link href="/search">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Your First Alert
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        {/* Notification History Tab */}
        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification History</CardTitle>
              <CardDescription>Recent price alerts and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notificationHistory.map((notification) => (
                  <div
                    key={notification.id}
                    className={`border-b pb-4 ${notification.read ? "" : "bg-muted/30 -mx-2 px-2 py-2 rounded-md"}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-medium">{notification.productName}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                      </div>
                      <div className="text-sm text-muted-foreground whitespace-nowrap">{notification.date}</div>
                    </div>
                    <div className="flex justify-end mt-2">
                      <Button size="sm" variant="ghost" className="h-7 px-2">
                        View Details
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings Tab */}
        <TabsContent value="settings" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>Configure your email notification preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Price Drop Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get notified when prices drop to your target</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Price Increase Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get notified when prices increase significantly</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Back in Stock Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when out-of-stock items become available
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weekly Digest</Label>
                    <p className="text-sm text-muted-foreground">Receive a weekly summary of price changes</p>
                  </div>
                  <Switch />
                </div>
                <div className="pt-4">
                  <Label htmlFor="email-address">Email Address</Label>
                  <div className="flex mt-1.5">
                    <Input id="email-address" defaultValue="user@example.com" className="flex-1 rounded-r-none" />
                    <Button className="rounded-l-none">Update</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SMS Notifications</CardTitle>
                <CardDescription>Configure your SMS notification preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Enable SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive time-sensitive alerts via text message</p>
                  </div>
                  <Switch />
                </div>
                <div className="space-y-1.5 pt-2">
                  <Label htmlFor="phone-number">Phone Number</Label>
                  <Input id="phone-number" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="sms-alert-type">Alert Types</Label>
                  <Select defaultValue="price-drops">
                    <SelectTrigger id="sms-alert-type">
                      <SelectValue placeholder="Select alert types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price-drops">Price Drops Only</SelectItem>
                      <SelectItem value="back-in-stock">Back in Stock Only</SelectItem>
                      <SelectItem value="all">All Alerts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="sms-threshold">Price Drop Threshold</Label>
                  <Select defaultValue="any">
                    <SelectTrigger id="sms-threshold">
                      <SelectValue placeholder="Select threshold" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Price Drop</SelectItem>
                      <SelectItem value="5">At least 5%</SelectItem>
                      <SelectItem value="10">At least 10%</SelectItem>
                      <SelectItem value="20">At least 20%</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground mt-1">Only send SMS alerts for significant price drops</p>
                </div>
                <div className="pt-2">
                  <Button className="w-full" disabled>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Verify Phone Number
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    SMS notifications require Premium subscription
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Browser Notifications</CardTitle>
                <CardDescription>Get instant notifications in your browser</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Enable Browser Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications when you're browsing the web</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Price History</Label>
                    <p className="text-sm text-muted-foreground">Include price history chart in notifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="pt-2">
                  <Button variant="outline" className="w-full">
                    Test Browser Notification
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

