import { Body, Controller, Get, Header, HttpCode, Query, Redirect } from '@nestjs/common';

@Controller('is-match')
export class IsMatch_Controller {
  @Get()
  @Header('Cache-Control', 'none')
  @HttpCode(204)
  findAll( @Body() body, @Query() query ): string {
    return 'is-match*';
  }
  @Get('for-redirect')
  @Redirect('/cats', 302)
  forRedirect() {
    return '';
  }
}
