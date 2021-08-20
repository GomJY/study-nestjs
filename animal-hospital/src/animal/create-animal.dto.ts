import { Animal, AnimalType } from './Animal.interface';

export class CreateAnimalDto implements Animal{
  age: number;
  description: string;
  name: string;
  type: AnimalType;

  constructor( age: number, description: string, name: string, type: AnimalType ) {
    this.age = age;
    this.description = description;
    this.name = name;
    this.type = type;
  }
}
