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
        const response = await fetch('/api/scrape?url=https://www.amazon.com/Coco-Eve-Self-Tanner-Mousse/dp/B08G1LDFL8?pd_rd_w=xOKW2&content-id=amzn1.sym.6199b410-4788-4f34-8996-b2bde5f9e45c&pf_rd_p=6199b410-4788-4f34-8996-b2bde5f9e45c&pf_rd_r=CYGXGGGXKPCVQ2DTFWAX&pd_rd_wg=6CqSn&pd_rd_r=03a694a8-451a-423d-a21d-96746074b884&pd_rd_i=B08G1LDFL8&th=1');
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
          <p>Price: {productData.currency} {productData.currentPrice}</p>
          <p>Reviews: {productData.reviewsCount}</p>
          <p>Stars: {productData.stars}</p>
          <p>{productData.isOutOfStock ? 'Out of Stock' : 'In Stock'}</p>
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
