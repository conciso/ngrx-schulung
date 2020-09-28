import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KitchenGateway } from './packages.gateway';

@Module({
  imports: [InMemoryDBModule],
  controllers: [AppController],
  providers: [AppService, KitchenGateway]
})
export class AppModule {}
