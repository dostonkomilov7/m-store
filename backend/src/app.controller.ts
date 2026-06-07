import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('transactions')
  @Render('transactions')
  transactions() {
    return { layout: false };
  }
}
