import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  AlertCircle,
  ArrowUpRight,
  BarChart3,
  Clock,
  Download,
  Filter,
  MoreHorizontal,
  Search,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, BarChart, Bar, Area, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/charts"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AdminPage() {
  // Sample data for charts
  const revenueData = [
    { month: "Jan", revenue: 2400 },
    { month: "Feb", revenue: 3600 },
    { month: "Mar", revenue: 4200 },
    { month: "Apr", revenue: 3800 },
    { month: "May", revenue: 5200 },
    { month: "Jun", revenue: 6100 },
    { month: "Jul", revenue: 5900 },
    { month: "Aug", revenue: 6800 },
    { month: "Sep", revenue: 7400 },
    { month: "Oct", revenue: 8200 },
    { month: "Nov", revenue: 9100 },
    { month: "Dec", revenue: 10200 },
  ]

  const userGrowthData = [
    { month: "Jan", users: 120 },
    { month: "Feb", users: 240 },
    { month: "Mar", users: 380 },
    { month: "Apr", users: 560 },
    { month: "May", users: 780 },
    { month: "Jun", users: 920 },
    { month: "Jul", users: 1100 },
    { month: "Aug", users: 1350 },
    { month: "Sep", users: 1580 },
    { month: "Oct", users: 1820 },
    { month: "Nov", users: 2100 },
    { month: "Dec", users: 2450 },
  ]

  // Sample data for tables
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", plan: "Premium", joined: "Mar 15, 2024", status: "active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", plan: "Free", joined: "Mar 10, 2024", status: "active" },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert@example.com",
      plan: "Business",
      joined: "Feb 28, 2024",
      status: "active",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      plan: "Premium",
      joined: "Feb 15, 2024",
      status: "inactive",
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael@example.com",
      plan: "Free",
      joined: "Jan 20, 2024",
      status: "active",
    },
  ]

  const products = [
    {
      id: 1,
      name: "Sony WH-1000XM4 Headphones",
      trackCount: 245,
      currentPrice: "$248.00",
      priceChange: "-$31.99",
      status: "In Stock",
    },
    {
      id: 2,
      name: "Apple iPad Air (5th Generation)",
      trackCount: 189,
      currentPrice: "$559.00",
      priceChange: "-$40.00",
      status: "In Stock",
    },
    {
      id: 3,
      name: "Samsung 49-Inch Odyssey G9 Monitor",
      trackCount: 156,
      currentPrice: "$999.99",
      priceChange: "+$50.00",
      status: "In Stock",
    },
    {
      id: 4,
      name: "Kindle Paperwhite",
      trackCount: 132,
      currentPrice: "$139.99",
      priceChange: "$0.00",
      status: "In Stock",
    },
    {
      id: 5,
      name: "Bose QuietComfort 45 Headphones",
      trackCount: 118,
      currentPrice: "$279.00",
      priceChange: "-$50.00",
      status: "In Stock",
    },
  ]

  const scraperLogs = [
    {
      id: 1,
      timestamp: "Mar 26, 2024 10:15 AM",
      status: "success",
      message: "Successfully scraped 1,245 products",
      duration: "45m 12s",
    },
    {
      id: 2,
      timestamp: "Mar 25, 2024 10:00 AM",
      status: "success",
      message: "Successfully scraped 1,238 products",
      duration: "43m 55s",
    },
    {
      id: 3,
      timestamp: "Mar 24, 2024 10:00 AM",
      status: "warning",
      message: "Partial success: 1,150 products scraped, 88 failed",
      duration: "52m 30s",
    },
    {
      id: 4,
      timestamp: "Mar 23, 2024 10:00 AM",
      status: "success",
      message: "Successfully scraped 1,242 products",
      duration: "44m 10s",
    },
    {
      id: 5,
      timestamp: "Mar 22, 2024 10:00 AM",
      status: "error",
      message: "Scraper error: Rate limited by Amazon",
      duration: "15m 45s",
    },
  ]

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage users, products, and monitor system performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin/settings">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Link>
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Reports
          </Button>
        </div>
      </div>

      {/* Dashboard Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,450</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <span className="text-green-500 flex items-center mr-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                16.8%
              </span>
              vs. last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tracked Products</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,845</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <span className="text-green-500 flex items-center mr-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                8.2%
              </span>
              vs. last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$10,200</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <span className="text-green-500 flex items-center mr-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                12.1%
              </span>
              vs. last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Scraper Status</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center">
              <Badge className="mr-2 bg-green-600">Healthy</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Last run: 45m 12s ago</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="analytics" className="w-full">
        <TabsList className="grid w-full grid-cols-4 max-w-2xl">
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="scraper">Scraper Logs</TabsTrigger>
        </TabsList>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue from subscriptions</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ChartContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={["dataMin - 500", "dataMax + 500"]} />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
                <CardDescription>Monthly user acquisition</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ChartContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={userGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={["dataMin - 100", "dataMax + 100"]} />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Area type="monotone" dataKey="users" stroke="#10b981" fillOpacity={1} fill="url(#colorUsers)" />
                      <defs>
                        <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Subscription Distribution</CardTitle>
                <CardDescription>Breakdown of user subscription plans</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-muted-foreground">65%</div>
                    <div className="mt-2 text-center">
                      <Badge className="mb-1">Free Plan</Badge>
                      <p className="text-sm text-muted-foreground">1,592 users</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-primary">28%</div>
                    <div className="mt-2 text-center">
                      <Badge className="mb-1 bg-primary">Premium Plan</Badge>
                      <p className="text-sm text-muted-foreground">686 users</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-accent">7%</div>
                    <div className="mt-2 text-center">
                      <Badge className="mb-1 bg-accent">Business Plan</Badge>
                      <p className="text-sm text-muted-foreground">172 users</p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-4 bg-muted rounded-full mt-8 overflow-hidden">
                  <div className="h-full bg-muted-foreground rounded-full" style={{ width: "65%" }}></div>
                  <div
                    className="h-full bg-primary rounded-full -mt-4"
                    style={{ width: "28%", marginLeft: "65%" }}
                  ></div>
                  <div className="h-full bg-accent rounded-full -mt-4" style={{ width: "7%", marginLeft: "93%" }}></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Users Tab */}
        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>View and manage user accounts</CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-8 w-full sm:w-[250px]" placeholder="Search users..." />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full sm:w-[150px]">
                      <SelectValue placeholder="Filter by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant={user.plan === "Free" ? "outline" : "default"}>{user.plan}</Badge>
                      </TableCell>
                      <TableCell>{user.joined}</TableCell>
                      <TableCell>
                        <Badge variant={user.status === "active" ? "default" : "destructive"} className="capitalize">
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit User</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Suspend User</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-end space-x-2 py-4">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Products Tab */}
        <TabsContent value="products" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Product Tracking</CardTitle>
                  <CardDescription>Most tracked products and their current status</CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-8 w-full sm:w-[250px]" placeholder="Search products..." />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filter</span>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead className="text-right">Track Count</TableHead>
                    <TableHead className="text-right">Current Price</TableHead>
                    <TableHead className="text-right">Price Change</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.id}</TableCell>
                      <TableCell className="max-w-[300px] truncate">{product.name}</TableCell>
                      <TableCell className="text-right">{product.trackCount}</TableCell>
                      <TableCell className="text-right">{product.currentPrice}</TableCell>
                      <TableCell className="text-right">
                        <span
                          className={
                            product.priceChange.startsWith("+")
                              ? "text-red-500"
                              : product.priceChange === "$0.00"
                                ? ""
                                : "text-green-500"
                          }
                        >
                          {product.priceChange}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize">
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Update Price</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Remove from Tracking</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-end space-x-2 py-4">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Scraper Logs Tab */}
        <TabsContent value="scraper" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Scraper Performance</CardTitle>
                  <CardDescription>Monitor scraper activity and errors</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Filter by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Logs</SelectItem>
                      <SelectItem value="success">Success</SelectItem>
                      <SelectItem value="warning">Warnings</SelectItem>
                      <SelectItem value="error">Errors</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export Logs
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead className="text-right">Duration</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {scraperLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-medium">{log.id}</TableCell>
                      <TableCell>{log.timestamp}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            log.status === "success" ? "default" : log.status === "warning" ? "outline" : "destructive"
                          }
                          className="capitalize"
                        >
                          {log.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-[400px] truncate">{log.message}</TableCell>
                      <TableCell className="text-right">{log.duration}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Showing last 5 scraper runs. View full logs for more details.
                  </span>
                </div>
                <Button variant="outline" size="sm">
                  View Full Logs
                </Button>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6">
              <div className="w-full space-y-4">
                <h3 className="text-lg font-medium">Scraper Health</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-lg border p-4">
                    <div className="text-sm font-medium text-muted-foreground mb-1">Success Rate</div>
                    <div className="text-2xl font-bold text-green-600">98.2%</div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="text-sm font-medium text-muted-foreground mb-1">Average Duration</div>
                    <div className="text-2xl font-bold">44m 18s</div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="text-sm font-medium text-muted-foreground mb-1">Products Tracked</div>
                    <div className="text-2xl font-bold">12,845</div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button>
                    <Settings className="h-4 w-4 mr-2" />
                    Configure Scraper
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

