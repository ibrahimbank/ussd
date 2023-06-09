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

    console.log(text);

    if (text === '') {
      return (
        'CON What would you want to check \n' +
        '1. My Wallet Balance \n' +
        '2. My HMO \n' +
        '3. Phone number \n' +
        '4. My Id \n' +
        '5. HMO Co-Pay \n' +
        '6. Service charge \n'
      );
    } else if (text === '1') {
      if (text == '1*1') {
        return 'End Your Pfizer Pharmaceuticals Balance is 498,899.00';
      }
      return (
        'CON Which Balance do you want to check \n' +
        '1. Pfizer Pharmaceuticals\n' +
        '2. Roche Product Limited \n'
      );
    } else if (text == '1*1') {
      return 'End Your Pfizer Pharmaceuticals Balance is 498,899.00';
    } else if (text == '1*2') {
      return 'End Roche Product Limited Balance is 790,760.00';
    } else if (text === '2') {
      return 'End Your HMO is Health Care International LTD';
    } else if (text === '3') {
      return 'End Your Phone Number is +234090898534';
    } else if (text === '4') {
      return 'End Your user ID is UNT0203581';
    } else if (text === '5') {
      return 'End Your HMO Co-Pay is ₦1,001,011.50';
    } else if (text === '5') {
      return 'End Your Service charge is ₦30,000.00';
    }

    //   switch (text) {
    //     case '':
    //       return (
    //         'CON What would you want to check \n' +
    //         '1. My Wallet Balance \n' +
    //         '2. My HMO \n' +
    //         '3. Phone number \n' +
    //         '4. My Id \n' +
    //         '5. HMO Co-Pay \n' +
    //         '6. Service charge \n'
    //       );
    //     case '1':
    //       return (
    //         'CON Which Balance do you want to check \n' +
    //         '1. Pfizer Pharmaceuticals\n' +
    //         '2. Roche Product Limited \n'
    //       );
    //     case '1*1':
    //       return 'End Your Pfizer Pharmaceuticals Balance is 498,899.00';
    //     case '1*2':
    //       return 'End Roche Product Limited Balance is 790,760.00';
    //     case '2':
    //       return 'End Your HMO is Health Care International LTD';
    //     case '3':
    //       return 'End Your Phone Number is +234090898534';
    //     case '4':
    //       return 'End Your user ID is UNT0203581';
    //     case '5':
    //       return 'End Your HMO Co-Pay is ₦1,001,011.50';
    //     case '6':
    //       return 'End Your Service charge is ₦30,000.00';

    //     case 'default':
    //       return 'End Invalid input';
    //     default:
    //       return 'End Thanks for using NHIS Service';
    //   }
    // }
  }
}
