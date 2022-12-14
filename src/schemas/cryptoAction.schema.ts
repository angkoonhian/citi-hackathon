import * as mongoose from 'mongoose';

export interface IstockAction extends mongoose.Document {
  stockId: string;
  stockName: string;
  stockSymbol: string;
  stockPrice: number;
  stockQuantity: number;
  action: string;
}

const Schema = mongoose.Schema;

export const StockActionSchema = new mongoose.Schema({
  stockId: {
    type: Schema.Types.ObjectId,
    ref: 'stocks',
  },
  stockName: {
    type: String,
    required: true,
  },
  stockSymbol: {
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
  action: {
    type: String,
    required: true,
  },
});

const StockAction = mongoose.model<IstockAction>(
  'stockActions',
  StockActionSchema,
);
export default StockAction;
