import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BuyerModule } from './buyer/buyer.module';

@Module({
  imports: [BuyerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
