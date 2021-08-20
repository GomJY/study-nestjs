import { Injectable } from '@nestjs/common';
import { promises } from 'fs';
import { Animal } from './Animal.interface';

const { readFile, writeFile } = promises;

@Injectable()
export class AnimalService {
  private readonly animals: Animal[] = [];

  create(animal: Animal) {
    this.animals.push(animal);
  }

  findAll(): Animal[] {
    return this.animals;
  }
}
