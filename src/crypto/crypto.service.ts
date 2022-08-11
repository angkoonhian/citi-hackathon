import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import Stock from '../schemas/stock.schema';
import StockAction from '../schemas/stockAction.schema';

@Injectable()
export class CryptoService {
  constructor() {}

  public async getCryptoById(id: string) {
    const stock = Stock.findOne({ stockId: id })
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
    return stock;
  }

  public async getCryptoActionById(id: string) {
    const stockAction = StockAction.findOne({ stockActionId: id })
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
    return stockAction;
  }
}
