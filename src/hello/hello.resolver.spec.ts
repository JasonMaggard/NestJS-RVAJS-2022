import { Test, TestingModule } from '@nestjs/testing';
import { HelloResolver } from './hello.resolver';
import { HelloDataService } from './hello-data/hello-data.service';

describe('HelloResolver', () => {
  let resolver: HelloResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloResolver, HelloDataService],
    }).compile();

    resolver = module.get<HelloResolver>(HelloResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should say hello', () => {
    expect(resolver.sayHello('Jason')).toStrictEqual({ hello: 'Hello Jason' });
  });

  it('should reject Satan', () => {
    expect(resolver.sayHello('Satan')).toStrictEqual({
      hello: 'Get back Satan!',
    });
  });
});
