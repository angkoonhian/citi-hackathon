import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { StockService } from './stock.service';
import { stockDTO, stockActionDTO } from './model/stock.model';

@ApiTags('Stock')
@Controller('Stock')
export class stockController {
  constructor(private readonly stockService: StockService) {}

  @Get('/stock/:id')
  @ApiOperation({ summary: 'get stock' })
  getStock(@Param('id') id: string) {
    return this.stockService.getStockById(id);
  }

  @Get('/stockAction/:id')
  @ApiOperation({ summary: 'get stock action' })
  getStockAction(@Param('id') id: string) {
    return this.stockService.getStockActionById(id);
  }
}
