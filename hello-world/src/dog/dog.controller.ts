import { Body, Controller, Get, Post, Redirect, Res } from '@nestjs/common';

@Controller('dog')
export class DogController {
  @Get()
  find() {
    return 'I am Dog';
  }

  @Post('plz-other')
  @Redirect('/dog', 304)
  plzOther(@Body('wantName') wantName) {
    if(wantName === undefined)  {
      return '';
    }
    return { url: `/${wantName}` };
  }
}
