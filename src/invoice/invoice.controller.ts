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

  @Get(':uuid')
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
  @Delete(':uuid')
  delete(@Param('uuid') uuid: string): void {
    return this.invoiceService.DeleteInvoice(uuid);
  }
}
