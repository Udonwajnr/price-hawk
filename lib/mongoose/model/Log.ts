import mongoose from 'mongoose';

const logSchema = new mongoose.Schema(
    {
      message: { type: String, required: true },
      level: { type: String, enum: ['info', 'warning', 'error'], default: 'info' },
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    },
    { timestamps: true }
  );
  
  const Log = mongoose.models.Log || mongoose.model('Log', logSchema);
  
  export default Log;
  