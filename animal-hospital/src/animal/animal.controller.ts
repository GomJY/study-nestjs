import { Body, Controller, Get, Post } from '@nestjs/common';
import { Animal } from './Animal';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './create-animal.dto';

@Controller('animal')
export class AnimalController {
  constructor() {}

  @Get('/list')
  findAll() {
    return AnimalService.getList();
  }

  @Post('/add')
  addAnimal(@Body() createAnimal: CreateAnimalDto) {
    return AnimalService.save(new Animal(createAnimal));
  }

}
