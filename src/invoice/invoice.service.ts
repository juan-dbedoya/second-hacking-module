import { Injectable } from '@nestjs/common';
import { InvoiceDto } from './invoice.dto';

@Injectable()
export class InvoiceService {
  InvoiceList: InvoiceDto[];
  index: InvoiceDto;

  GetById(uuid: string): InvoiceDto | undefined {
    this.InvoiceList.forEach(function (invoice) {
      if (invoice.uuid == uuid) {
        return invoice;
      }
    });
    return undefined;
  }
  CreateInvoice(newInvoice: InvoiceDto): InvoiceDto | undefined {
    this.InvoiceList.forEach(function (invoice) {
      if (invoice.uuid == newInvoice.uuid) {
        return undefined;
      }
    });
    this.InvoiceList.push(newInvoice);
    return newInvoice;
  }
  UpdateInvoice(invoice: InvoiceDto): InvoiceDto {
    this.InvoiceList.forEach(function (oldInvoice) {
      if (invoice.uuid == oldInvoice.uuid) {
        this.index = oldInvoice;
      }
    });
    this.InvoiceList.splice(this.InvoiceList.indexOf(this.index), 1);
    this.index = undefined;
    this.InvoiceList.push(invoice);
    return invoice;
  }
  DeleteInvoice(uuid: string): void {
    this.InvoiceList.forEach(function (oldInvoice) {
      if (uuid == oldInvoice.uuid) {
        this.index = oldInvoice;
      }
    });
    this.InvoiceList.splice(this.InvoiceList.indexOf(this.index), 1);
    this.index = undefined;
  }
}
