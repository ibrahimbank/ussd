import { Controller, Get, Post, Req, Res } from '@nestjs/common';

@Controller('ussd')
export class UssdController {
  @Post()
  @Get()
  async handleUssdRequest(@Req() req) {
    const session_id = req.body['sessionId'] ?? null;
    const service_code = req.body['serviceCode'] ?? null;
    const phone_number = req.body['phoneNumber'] ?? null;
    const text = req.body['text'] ?? 'default';

    console.log({
      session_id,
      service_code,
      phone_number,
    });

    switch (text) {
      case '':
        return (
          'CON What would you want to check \n' +
          '1. My Account \n' +
          '2. My phone number'
        );
      default:
        return 'Thanks for using stuff';
    }
  }
}
