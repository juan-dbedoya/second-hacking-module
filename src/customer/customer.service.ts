import { Injectable } from '@nestjs/common';
import { CustomerDto } from './customer.dto';

@Injectable()
export class CustomerService {
  customersList: CustomerDto[];
  index: CustomerDto;

  GetById(uuid: string): CustomerDto | undefined {
    this.customersList.forEach(function (customer) {
      if (customer.uuid == uuid) {
        return customer;
      }
    });
    return undefined;
  }
  CreateCustomer(newCustomer: CustomerDto): CustomerDto {
    this.customersList.forEach(function (customer) {
      if (customer.uuid == newCustomer.uuid) {
        return undefined;
      }
    });
    this.customersList.push(newCustomer);
    return newCustomer;
  }
  UpdateCustomer(customer: CustomerDto): CustomerDto {
    this.customersList.forEach(function (oldCustomer) {
      if (customer.uuid == oldCustomer.uuid) {
        this.index = oldCustomer;
      }
    });
    this.customersList.splice(this.customersList.indexOf(this.index), 1);
    this.index = undefined;
    this.customersList.push(customer);
    return customer;
  }
  DeleteCustomerById(uuid: string): void {
    this.customersList.forEach(function (oldCustomer) {
      if (uuid == oldCustomer.uuid) {
        this.index = oldCustomer;
      }
    });
    this.customersList.splice(this.customersList.indexOf(this.index), 1);
    this.index = undefined;
  }
}
