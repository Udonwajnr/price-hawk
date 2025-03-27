export type PriceHistoryItem = {
    price: number;
    date?: string; // Optional date when the price was recorded
  };
  
  export type User = {
    id?: string;
    email: string;
    trackedProducts?: string[]; // IDs of tracked products
    notificationsEnabled?: boolean; // Whether the user wants notifications
  };
  
  export type Product = {
    _id?: string;
    asin: string; // Amazon product ID
    url: string;
    currency: string;
    image: string;
    title: string;
    currentPrice: number;
    originalPrice: number;
    priceHistory: PriceHistoryItem[] | [];
    highestPrice: number;
    lowestPrice: number;
    averagePrice: number;
    discountRate: number;
    description: string;
    category: string;
    reviewsCount: number;
    stars: number;
    isOutOfStock: boolean;
    users?: User[]; // Users tracking this product
    alerts?: Alert[]; // Active alerts for this product
    lastScrapedAt?: string; // Timestamp for last price update
  };
  
  export type Alert = {
    _id?: string;
    user: string; // User ID
    product: string; // Product ID
    targetPrice: number; // The price user wants
    notified: boolean; // If user has been notified
  };
  
  export type NotificationType =
    | "WELCOME"
    | "CHANGE_OF_STOCK"
    | "LOWEST_PRICE"
    | "THRESHOLD_MET"
    | "PRICE_DROP_ALERT"; // Added this for better tracking
  
  export type EmailContent = {
    subject: string;
    body: string;
  };
  
  export type EmailProductInfo = {
    title: string;
    url: string;
    image: string; // Added for better email visuals
    price: number; // Added for better context
    currency: string; // Added to display correct price format
  };
  