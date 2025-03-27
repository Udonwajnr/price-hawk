// app/api/scrape/route.ts
import { NextResponse } from "next/server";
import { scrapeAmazonProduct } from "@/lib/scaper/scrapeProduct";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const productData = await scrapeAmazonProduct(url);
    return NextResponse.json(productData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error scraping product data" }, { status: 500 });
  }
}
