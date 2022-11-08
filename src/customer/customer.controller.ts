import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerDto } from './customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('get')
  getById(@Param('uuid') uuid: string): CustomerDto | undefined {
    return this.customerService.GetById(uuid);
  }
  @Post('create')
  create(@Body() NewCustomer: CustomerDto): CustomerDto | undefined {
    return this.customerService.CreateCustomer(NewCustomer);
  }
  @Put('update')
  update(@Body() customerUpdated: CustomerDto): CustomerDto | undefined {
    return this.customerService.UpdateCustomer(customerUpdated);
  }
  @Delete('delete')
  deleteById(@Param('uuid') uuid: string): void {
    this.customerService.DeleteCustomerById(uuid);
  }
}
