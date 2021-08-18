import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { IsMatch_Controller } from './is-match*/IsMatch_Controller';
import { DogController } from './dog/dog.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, IsMatch_Controller, DogController],
  providers: [AppService],
})
export class AppModule {}
