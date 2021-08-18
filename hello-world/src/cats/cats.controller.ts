import { Body, Controller, Get, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll( @Body() body, @Query() query ): string {
    console.log({ body, query });
    return 'This is action returns all cats';
  }
}
