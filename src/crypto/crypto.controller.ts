import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CryptoService } from './crypto.service';

@ApiTags('crypto')
@Controller('Crypto')
export class cryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Get('/crypto/:id')
  @ApiOperation({ summary: 'get stock' })
  getStock(@Param('id') id: string) {
    return this.cryptoService.getCryptoById(id);
  }

  @Get('/cryptoAction/:id')
  @ApiOperation({ summary: 'get stock action' })
  getStockAction(@Param('id') id: string) {
    return this.cryptoService.getCryptoActionById(id);
  }
}
