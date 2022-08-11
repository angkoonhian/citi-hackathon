import * as mongoose from 'mongoose';

export interface Istock extends mongoose.Document {
  stockId: string;
  stockName: string;
  stockPrice: number;
  stockQuantity: number;
  stockActions: [string];
}

const Schema = mongoose.Schema;

export const StockSchema = new mongoose.Schema({
  stockId: {
    type: String,
    required: true,
  },
  stockName: {
    type: String,
    required: true,
  },
  stockPrice: {
    type: Number,
    required: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
  },
  stockActions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'stockActions',
    },
  ],
});

const Stock = mongoose.model<Istock>('stocks', StockSchema);
export default Stock;
