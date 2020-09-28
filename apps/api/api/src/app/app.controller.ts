import { Controller, Get, Logger, Post, Req } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('orders')
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  @Post()
  setNewState(@Req() req: Request) {
    return this.logger.log(req.body);
  }
}
