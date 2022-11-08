import { InvoiceInterface } from './invoice.interface';
import { InvoiceDetailsDto } from './invoice-detail.dto';
export class InvoiceDto extends InvoiceDetailsDto implements InvoiceInterface {
  uuid: string;
  name: string;

  public(dataDetails: InvoiceDetailsDto, data: InvoiceInterface) {
    this.uuid = data.uuid ?? undefined;
    this.name = data.name ?? undefined;
    this.mail = dataDetails.mail ?? undefined;
    this.dir = dataDetails.dir ?? undefined;
    this.cc = dataDetails.cc ?? undefined;
  }
}
