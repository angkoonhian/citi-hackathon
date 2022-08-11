import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { stockDTO } from './model/stock.model';
import { v4 as uuidv4 } from 'uuid';
import Stock from '../schemas/stock.schema';
import StockAction from '../schemas/stockAction.schema';

@Injectable()
export class StockService {
  constructor() {}

  public async getStockById(id: string) {
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

  public async getStockActionById(id: string) {
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
