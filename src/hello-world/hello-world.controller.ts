import { Controller, Get } from '@nestjs/common';

@Controller('hello-world')
export class HelloWorldController {
  @Get('/')
  async helloWorld() {
    return 'Hello World!!';
  }

  @Get('/secret')
  async getSecret() {
    return process.env.SECRET;
  }
}
