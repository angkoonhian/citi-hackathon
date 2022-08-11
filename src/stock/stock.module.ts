import { Module } from '@nestjs/common';
import { getConnectionToken, TypeOrmModule } from '@nestjs/typeorm';
import { stockController } from './stock.controller';
import { StockService } from './stock.service';
import { Connection } from 'typeorm';
// import { stockProviders } from './stock.provider';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    // JwtModule.register({
    // secret: process.env.JWT_SECRET,
    // signOptions: { expiresIn: '' },
    // }),
  ],
  controllers: [stockController],
  providers: [StockService],
})
export class stockModule {}
