import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UssdModule } from './ussd/ussd.module';
import { UssdController } from './ussd/ussd.controller';

@Module({
  imports: [UssdModule],
  controllers: [AppController, UssdController],
  providers: [AppService],
})
export class AppModule {}
