import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceDto } from './invoice.dto';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get('get')
  getById(@Param('uuid') uuid: string): InvoiceDto | undefined {
    return this.invoiceService.GetById(uuid);
  }
  @Post('create')
  create(@Body() invoice: InvoiceDto): InvoiceDto | undefined {
    return this.invoiceService.CreateInvoice(invoice);
  }
  @Put('update')
  update(@Body() invoice: InvoiceDto): InvoiceDto | undefined {
    return this.invoiceService.UpdateInvoice(invoice);
  }
  @Delete('delete')
  delete(@Param('uuid') uuid: string): void {
    return this.invoiceService.DeleteInvoice(uuid);
  }
}
