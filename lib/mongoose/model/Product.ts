import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    asin: { type: String, required: true, unique: true }, // Amazon's unique product ID
    url: { type: String, required: true, unique: true },
    currency: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    currentPrice: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    priceHistory: [
      {
        price: { type: Number, required: true },
        date: { type: Date, default: Date.now },
      },
    ],
    lowestPrice: { type: Number },
    highestPrice: { type: Number },
    averagePrice: { type: Number },
    discountRate: { type: Number },
    description: { type: String },
    category: { type: String },
    reviewsCount: { type: Number },
    isOutOfStock: { type: Boolean, default: false },
    usersTracking: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Users tracking this product
    alerts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Alert' }], // Alerts for this product
    lastScrapedAt: { type: Date, default: Date.now }, // Last time this product was scraped
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
