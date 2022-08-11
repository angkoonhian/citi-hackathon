import { Module } from '@nestjs/common';
import { getConnectionToken, TypeOrmModule } from '@nestjs/typeorm';
import { cryptoController } from './crypto.controller';
import { CryptoService } from './crypto.service';
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
  controllers: [cryptoController],
  providers: [CryptoService],
})
export class cryptoModule {}
