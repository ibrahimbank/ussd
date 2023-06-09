import { Controller, Get, Post, Req, Res } from '@nestjs/common';

@Controller('ussd')
export class UssdController {
  @Post()
  @Get()
  async handleUssdRequest(@Req() req) {
    console.log(req);
    const session_id = req.body['sessionId'] ?? null;
    const service_code = req.body['serviceCode'] ?? null;
    const phone_number = req.body['phoneNumber'] ?? null;
    const text = req.body['text'] ?? 'default';

    console.log(text);

    console.log({
      session_id,
      service_code,
      phone_number,
    });

    switch (text) {
      case '':
        return (
          'CON What would you want to check \n' +
          '1. My Wallet Balance \n' +
          '2. My HMO \n' +
          '3. Phone number \n' +
          '4. My Id \n' +
          '5. HMO Co-Pay \n' +
          '6. Service charge \n'
        );
      case '1*1':
        return (
          'CON Which Balance do you want to check \n' +
          '1. Pfizer Pharmaceuticals\n' +
          '2. Roche Product Limited \n'
        );

      case '1*2':
        return 'End Your HMO is Health Care International LTD';
      case '1*3':
        return 'End Your Phone Number is +234090898534';
      case '1*4':
        return 'End Your user ID is UNT0203581';
      case '1*5':
        return 'End Your HMO Co-Pay is ₦1,001,011.50';
      case '1*6':
        return 'End Your Service charge is ₦30,000.00';
      case '1*1*1':
        return 'End Your Pfizer Pharmaceuticals Balance is 498,899.00';
      case '1*1*2':
        return 'End Roche Product Limited Balance is 790,760.00';
      default:
        return 'End Thanks for using NHIS Service';
    }
  }
}
