import { Address } from './address';

export class Student {
  imageSrc!: string;
  name!: string;
  address!: Address;

  constructor() {
    this.address = new Address();
  }
}
