import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloDataService {
  sayHello(name: string) {
    return {
      hello: name === 'Satan' ? `Get back ${name}!` : `Hello ${name}`,
    };
  }
}
