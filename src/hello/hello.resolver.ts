import { Query, Args, Resolver, ObjectType, Field } from '@nestjs/graphql';
import { HelloDataService } from './hello-data/hello-data.service';

@ObjectType()
export class Hello {
  @Field()
  hello: string;
}

@Resolver()
export class HelloResolver {
  constructor(private hello: HelloDataService) {}

  @Query(() => Hello)
  sayHello(@Args('name') name: string) {
    return this.hello.sayHello(name);
  }
}
