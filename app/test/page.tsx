// app/test.tsx
"use client"
import { useState, useEffect } from 'react';

export default  function Test() {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('/api/scrape?url=https://www.amazon.com/Excalibur-9-Tray-Food-Dehydrator-Black/dp/B004Z915M4?th=1');
        const data = await response.json();

        if (response.ok) {
          setProductData(data);
        } else {
          setError(data.error || 'An error occurred');
        }
      } catch (error) {
        setError('Error fetching product data');
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Product Data</h1>
      {productData ? (
        <div>
          <h2>{productData.title}</h2>
          <h2>{productData.url}</h2>
          <p>Price: {productData.currentPrice}</p>
          <p>brand: {productData.brand}</p>
          <p>Reviews: {productData.reviewsCount}</p>
          <p>Stars: {productData.stars}</p>
          <p>{productData.availability ? 'Out of Stock' : 'In Stock'}</p>
          <img src={productData.image} alt={productData.title} />
          <p>originalPrice: {productData.originalPrice}</p>
          <p>currentPrice: {productData.currentPrice}</p>
          <p>discountRate: {productData.discountRate}</p>
          <p>description: {productData.description?.split('\n')}</p>
          <p>averagePrice: {productData.averagePrice}</p>
          <p>highestPrice: {productData.highestPrice}</p>
          <p>LowestPrice: {productData.lowestPrice}</p>
          
        </div>
      ) : (
        <p>No product data available</p>
      )}

    </div>
  );
}
