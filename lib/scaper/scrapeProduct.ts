'use server'
import axios from "axios";
import * as cheerio from "cheerio";
import { extractPriceFromElements,extractDescription,extractASIN } from '@/lib/utils'

export async function scrapeAmazonProduct(url: string) {
    
const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = 9222;
  const session_id = (1000000 * Math.random()) | 0;
    console.log(username)
  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: 'brd.superproxy.io',
    port,
    rejectUnauthorized: false,
  }
  try {
    const { data } = await axios.get(url,options);
    const $ = cheerio.load(data);

    console.log(data)
    return data
      

    // for objects that hae arrays
    const featuresItems:any[] =[]
    const productInformationItems:any[] =[]
    const videoItems:any[]=[]
    const categoryItems:any[] = []
    // Extract product details (Modify selectors based on the website structure)
 // Extract product details
  const title = $("span#productTitle").text().trim() || "Unknown Title";

  const brand = $(".po-brand .a-size-base").text().trim() || "Unknown brand"
  const image = $("#imgTagWrapperId img").attr("src") || "";
  let imageUrls: string[] = [];
  
  try {
    const imageData =
      $("#imgBlkFront").attr("data-a-dynamic-image") ||
      $("#landingImage").attr("data-a-dynamic-image") ||
      "{}";
  
    imageUrls = Object.keys(JSON.parse(imageData));
  } catch (e) {
    console.error("Error parsing images:", e);
  }
  
  const asin = extractASIN(url)
 // Extract discounted price (current sale price)
  const discountedPriceText = extractPriceFromElements(
    $("span.a-price span.a-offscreen"),
    $(".priceToPay span.a-price-whole"),
    $(".a-size-base.a-color-price"),
    $(".a-button-selected .a-color-base")
  );
  
 const discountedPrice = Number(discountedPriceText.replace(/[^0-9.]/g, "")) || 0;
 
 // Extract original listing price (before discount)
 const originalPriceText = extractPriceFromElements(
   $("span.a-price span.a-offscreen"),
   $("#listPrice"),
   $("#priceblock_dealprice"),
   $(".a-size-base.a-color-price")
 );

 // Keep original price as a string for precision
 const originalPrice = originalPriceText.replace(/[^0-9.]/g, "") || "0";
 
 // Extract discount percentage
 const discountRateText = $(".savingsPercentage").text().replace(/[-%]/g, "");
 const discountRate = Number(discountRateText) || 0;

 const features = $(".a-unordered-list .a-spacing-mini .a-list-item").each((index, element) => {
  featuresItems.push($(element).text().trim()); // Extract text and trim whitespace
 });

 

const productInformationObect = $(".prodDetTable tr").each((_, element) => {
  const type = $(element).find("th").text().trim();
  let value = $(element).find("td").contents().not("script, style").text().trim();

  // Remove JavaScript artifacts
  value = value.replace(/P\.when\([\s\S]*?\);/g, "").replace(/var\s+[^\n]+;/g, "").trim();

  // Normalize spaces and remove duplicates
  value = value.replace(/\s+/g, " ").trim();
  value = value.replace(/(\d+(\.\d+)?)\s+\1/g, "$1");

  // Special cleanup for "Customer Reviews" field
  if (type === "Customer Reviews") {
      value = value.match(/(\d+\.\d+ out of 5 stars \d{1,3}(,\d{3})* ratings)/)?.[1] || value;
  }

  if (type && value) {
      productInformationItems.push({ type, value });
  }
});

const category =  $(".a-unordered-list.a-horizontal.a-size-small .a-list-item .a-color-tertiary").each((_, element) => {
  const categoryText = $(element).text().trim();
  
  if (categoryText) {
      categoryItems.push(categoryText);
  }
});

const topReview = $('.review-text-read-more-expander .a-expander-content.reviewText.review-text-content span').text()

// vse-video-thumbnail-preview
 // Calculate listing price if missing
 const calculatedListingPrice = 
  discountRate > 0 && discountedPrice > 0
    ? Math.round((discountedPrice / (1 - discountRate / 100)) * 100) / 100 // Multiply, round, then divide
    : Number(originalPrice) || discountedPrice;

 const currencySymbol = $(".a-price-symbol").first().text().trim() || "USD"; // Default to "$"
 const reviewsText = $("#acrCustomerReviewText").text().trim();
 const reviewsCount = parseInt(reviewsText.match(/[\d,]+/)?.[0].replace(/,/g, "") || "0", 10);

 const starsText = $("span.a-icon-alt").first().text().trim();
 const stars = parseFloat(starsText.split(" ")[0]) || 0;
 const isOutOfStock = $("#availability span").text().toLowerCase().includes("out of stock");
 const description = extractDescription($);
 
 return {
   asin,
   brand,
   url,
   title,
  //  image,
  //  images: imageUrls,
  //  currency: currencySymbol,
  //  currentPrice: Number(originalPrice)||discountedPrice , // Fallback to original price if no discount
  //  originalPrice: calculatedListingPrice, // Keep precision
  //  priceHistory: [],
  //  discountRate,
   
  //  category: categoryItems, // Consider scraping or mapping category
  //  reviewsCount,
  //  stars,
  //  features:'',
  //  availability:isOutOfStock,
  //  description,
  //  lowestPrice: Math.min(discountedPrice, Number(originalPrice)) || 0,
  //  highestPrice: Math.max(discountedPrice, Number(originalPrice)) || 0,
  //  averagePrice: ((discountedPrice + Number(originalPrice)) / 2).toFixed(2) || 0,
 }} 
  catch (error) {
    console.error("Error scraping product:", error);
    return null;
  }
}