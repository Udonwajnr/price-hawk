import puppeteer from "puppeteer";

export async function scrapeDynamicProduct(url: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto(url, { waitUntil: "domcontentloaded" });

    // Extract product data
    const title = await page.$eval("#productTitle", el => el.textContent?.trim() || "");
    const image = await page.$eval("#imgTagWrapperId img", el => el.getAttribute("src") || "");
    const priceText = await page.$eval("span.a-price-whole", el => el.textContent?.trim() || "");
    const currencySymbol = await page.$eval("span.a-price-symbol", el => el.textContent?.trim() || "");
    const reviewsCount = await page.$$eval("#acrCustomerReviewText", el => 
      parseInt(el[0]?.textContent?.replace(/\D/g, "") || "0", 10)
    );
    const stars = await page.$$eval("span.a-icon-alt", el => 
      parseFloat(el[0]?.textContent?.split(" ")[0] || "0")
    );
    const isOutOfStock = await page.$$eval("#availability span", el => 
      el[0]?.textContent?.toLowerCase().includes("out of stock") || false
    );

    // Parse price
    const currentPrice = parseFloat(priceText.replace(/[^0-9.]/g, "")) || 0;

    await browser.close();

    return {
      title,
      image,
      currency: currencySymbol,
      currentPrice,
      reviewsCount,
      stars,
      isOutOfStock,
    };
  } catch (error) {
    console.error("Error scraping product:", error);
    await browser.close();
    return null;
  }
}
