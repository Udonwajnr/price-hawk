'use server'
import axios from "axios";
import * as cheerio from "cheerio";
import { extractPriceFromElements,extractDescription } from '@/lib/utils'

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
      
    // Extract product details (Modify selectors based on the website structure)
 // Extract product details
 const title = $('span#productTitle').text().trim() || 'Unknown Title';

 const image = $('#imgTagWrapperId img').attr('src') || '';
 let imageUrls: string[] = [];

 try {
   const imageData =
     $('#imgBlkFront').attr('data-a-dynamic-image') ||
     $('#landingImage').attr('data-a-dynamic-image') ||
     '{}';

   imageUrls = Object.keys(JSON.parse(imageData));
 } catch (e) {
   console.error('Error parsing images:', e);
 }

 const priceText = extractPriceFromElements(
   $('.priceToPay span.a-price-whole'),
   $('.a.size.base.a-color-price'),
   $('.a-button-selected .a-color-base')
 );

 const originalPriceText = extractPriceFromElements(   
    //  $('a-size-small a-color-secondary aok-align-center basisPrice'),
    //  $('#priceblock_ourprice'),
     $('span.a-price span.a-offscreen'),
     
     $('#listPrice'),
     $('#priceblock_dealprice'),
     $('.a-size-base.a-color-price')
  
 );

 const price = parseFloat(priceText.replace(/[^0-9.]/g, '')) || 0;
 const originalPrice = parseFloat(originalPriceText.replace(/[^0-9.]/g, '')) || 0;

 const currencySymbol = $('.a-price-symbol').first().text().trim() || '$'; // Default to "$"
 const reviewsCount = parseInt($('#acrCustomerReviewText').text().replace(/\D/g, ''), 10) || 0;
 const starsText = $('span.a-icon-alt').first().text().trim();
 const stars = parseFloat(starsText.split(' ')[0]) || 0;
 const isOutOfStock = $('#availability span').text().toLowerCase().includes('out of stock');
 const description = extractDescription($);
 const discountRate = parseInt($('.savingsPercentage').text().replace(/[-%]/g, ''), 10) || 0;

 return {
   url,
   title,
   image,
   images: imageUrls,
   currency: currencySymbol,
   currentPrice: price || originalPrice,
   originalPrice: originalPriceText ,
   priceHistory: [],
   discountRate,
   category: 'Unknown', // Consider scraping or mapping category
   reviewsCount,
   stars,
   isOutOfStock,
   description,
   lowestPrice: Math.min(price, originalPrice) || 0,
   highestPrice: Math.max(price, originalPrice) || 0,
   averagePrice: (price + originalPrice) / 2 || 0,
 };
  } 
  catch (error) {
    console.error("Error scraping product:", error);
    return null;
  }
}