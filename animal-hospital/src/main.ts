import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  global.animals = new Array() as any;
  global.$dataPath = join(__dirname, '..', '/data', 'data.json');
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
