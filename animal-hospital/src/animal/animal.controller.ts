import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './create-animal.dto';

@Controller('animal')
export class AnimalController {
  constructor(private animalService: AnimalService) { }

  @Post('add')
  addAnimal(@Body() createAnimal: CreateAnimalDto) {
    return this.animalService.create(createAnimal);
  }

  @Get('list')
  findAll() {
    return this.animalService.findAll();
  }

}
