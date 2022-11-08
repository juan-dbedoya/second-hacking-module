import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from '../customer/customer.controller';
import { InvoiceController } from '../invoice/invoice.controller';
import { CustomerService } from '../customer/customer.service';
import { InvoiceService } from '../invoice/invoice.service';

@Module({
  imports: [],
  controllers: [AppController, CustomerController, InvoiceController],
  providers: [AppService, CustomerService, InvoiceService],
})
export class AppModule {}
