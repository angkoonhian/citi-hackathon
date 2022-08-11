import { Module } from '@nestjs/common';
import { getConnectionToken, TypeOrmModule } from '@nestjs/typeorm';
import { userController } from './user.controller';
import { UserService } from './user.service';
import { Connection } from 'typeorm';
// import { userProviders } from './user.provider';
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
  controllers: [userController],
  providers: [UserService],
})
export class userModule {}
