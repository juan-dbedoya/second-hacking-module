/* eslint-disable prettier/prettier */
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { customerInterface } from './customer.interface';
export class CustomerDto implements customerInterface {
  @IsUUID()
  uuid: string;
  @IsOptional()
  @IsString()
  name: string;

  constructor(data: customerInterface) {
    this.uuid = data.uuid;
    this.name = data.name ?? undefined ;
  }
}