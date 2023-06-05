import { Controller, Post, Req, Res } from '@nestjs/common';

@Controller('ussd')
export class UssdController {
  @Post()
  async handleUssdRequest(@Req() req, @Res() res) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const UssdMenu = require('ussd-menu-builder');
    const menu = new UssdMenu();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const UssdRouter = require('ussd-menu-builder');
    const router = new UssdRouter(menu);

    menu.startState({
      run: () => {
        menu.con(
          'Welcome to My Health USSD App!\n1. Schedule an Appointment\n2. Get Test Results',
        );
      },
      next: {
        '1': 'scheduleAppointment',
        '2': 'getTestResults',
      },
    });

    menu.state('scheduleAppointment', {
      run: () => {
        // Implement your logic to schedule an appointment here
        menu.end('Appointment scheduled successfully!');
      },
    });

    menu.state('getTestResults', {
      run: () => {
        // Implement your logic to retrieve test results here
        menu.end('Your test results: ...');
      },
    });

    router.run(req.body, async (ussdResult) => {
      res.send(ussdResult);
    });
  }
}
