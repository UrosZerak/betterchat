import { AuthModule } from './../auth/auth.module';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
