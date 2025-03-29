import { PriceHistoryItem, Product } from "@/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const Notification: { 
  WELCOME: 'WELCOME'; 
  CHANGE_OF_STOCK: 'CHANGE_OF_STOCK'; 
  LOWEST_PRICE: 'LOWEST_PRICE'; 
  THRESHOLD_MET: 'THRESHOLD_MET'; 
} = {
  WELCOME: 'WELCOME',
  CHANGE_OF_STOCK: 'CHANGE_OF_STOCK',
  LOWEST_PRICE: 'LOWEST_PRICE',
  THRESHOLD_MET: 'THRESHOLD_MET',
};

 const THRESHOLD_PERCENTAGE = 40;
  
  // Determine the appropriate notification type
export function getEmailNotifType(
  scrapedProduct: Product,
  currentProduct: Product
): keyof typeof Notification | null {
  const lowestPrice = getLowestPrice(currentProduct.priceHistory);
  const highestPrice = getHighestPrice(currentProduct.priceHistory);

  // Check if the product's current price is the lowest recorded price
  if (scrapedProduct.currentPrice < lowestPrice) {
    return Notification.LOWEST_PRICE;
  }

  // Check if the stock status has changed (out of stock to in stock)
  if (!scrapedProduct.isOutOfStock && currentProduct.isOutOfStock) {
    return Notification.CHANGE_OF_STOCK;
  }

  // Check if the discount rate meets the threshold
  if (scrapedProduct.discountRate >= THRESHOLD_PERCENTAGE) {
    return Notification.THRESHOLD_MET;
  }

  // Add more checks if necessary (e.g., if the price is at a certain threshold compared to the highest price)
  if (scrapedProduct.currentPrice > highestPrice * 0.9) {
    return Notification.THRESHOLD_MET;
  }

  return null;
}
  
export function extractPriceFromElements(...elements: any[]): string {
    for (const element of elements) {
      const priceText = element.text().trim();
  
      if (priceText) {
        const cleanPrice = priceText.replace(/[^\d.]/g, '');
        const extractedPrice = cleanPrice.match(/\d+\.\d{2}/)?.[0] || cleanPrice;
  
        return extractedPrice;
      }
    }
    return '';
} 

export function extractCurrencySymbol(element: any): string {
  const currencyText = element.text().trim().slice(0, 1);
  return currencyText || "";
}
  
export function extractDescription($: any): string {
  const selectors = [
    "#productDescription",
    ".a-unordered-list .a-spacing-mini .a-list-item",
    ".a-expander-content p",

      // You can add more selectors if the description is found in other parts.
  ];

  for (const selector of selectors) {
      const elements = $(selector);
      if (elements.length > 0) {
      return elements.map((_:any, el:any) => $(el).text().trim()).get().join("\n");
      }
  }

  return "No description available.";
}

export function getHighestPrice(priceList: PriceHistoryItem[]): number {
    if (priceList.length === 0) return 0;
  
    return Math.max(...priceList.map(item => item.price));
  }
  
export function getLowestPrice(priceList: PriceHistoryItem[]): number {
if (priceList.length === 0) return 0;

return Math.min(...priceList.map(item => item.price));
}
  
export function getAveragePrice(priceList: PriceHistoryItem[]): number {
if (priceList.length === 0) return 0;

const sum = priceList.reduce((acc, curr) => acc + curr.price, 0);
return sum / priceList.length;
}

export function formatNumber(num: number = 0, currency: string = ""): string {
    const formattedNumber = num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  
    return currency ? `${currency}${formattedNumber}` : formattedNumber;
  }
  
  export function updatePriceHistory(product: Product, newPrice: number) {
    const newPriceHistoryItem: PriceHistoryItem = { price: newPrice };  // Ensure the type matches PriceHistoryItem
    const updatedHistory: PriceHistoryItem[] = [...product.priceHistory, newPriceHistoryItem];
    
    // Maintain the price history size limit (e.g., keep only the last 30 prices)
    const maxHistorySize = 30;
    if (updatedHistory.length > maxHistorySize) {
      updatedHistory.shift(); // Remove the oldest price entry
    }
    
    // Update the product's price history and recalculated price stats
    product.priceHistory = updatedHistory;
    product.highestPrice = getHighestPrice(updatedHistory);
    product.lowestPrice = getLowestPrice(updatedHistory);
    product.averagePrice = getAveragePrice(updatedHistory);
  }
   

 export function extractASIN(url: string): string | null {
    try {
      const urlObj = new URL(url);
      const parts = urlObj.pathname.split("/");
      const asinIndex = parts.indexOf("dp") + 1;
  
      return asinIndex > 0 && asinIndex < parts.length ? parts[asinIndex] : null;
    } catch (error) {
      console.error("Invalid URL:", error);
      return null;
    }
  }
  