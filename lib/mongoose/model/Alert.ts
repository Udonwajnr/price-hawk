import mongoose from 'mongoose';

const alertSchema = new mongoose.Schema(
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      targetPrice: { type: Number, required: true }, // The price user wants
      notified: { type: Boolean, default: false }, // If user has been notified
    },
    { timestamps: true }
  );
  
  const Alert = mongoose.models.Alert || mongoose.model('Alert', alertSchema);
  
  export default Alert;
  