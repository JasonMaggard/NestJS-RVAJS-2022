import { Controller, Get, Param } from '@nestjs/common';
import { HelloDataService } from './hello-data/hello-data.service';

interface HelloReturn {
  hello: string;
}

@Controller('hello')
export class HelloController {
  constructor(private hello: HelloDataService) {}

  @Get('/:name')
  async sayHello(@Param('name') name: string): Promise<HelloReturn> {
    return this.hello.sayHello(name);
  }
}
