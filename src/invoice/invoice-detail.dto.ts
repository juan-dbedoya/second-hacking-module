import { InvoiceDetailInterface } from './invoice-detail.interface';
export class InvoiceDetailsDto implements InvoiceDetailInterface {
  mail: string;
  dir: string;
  cc: string;
}
