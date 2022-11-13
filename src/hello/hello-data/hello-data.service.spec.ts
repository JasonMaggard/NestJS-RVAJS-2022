import { Test, TestingModule } from '@nestjs/testing';
import { HelloDataService } from './hello-data.service';

describe('HelloDataService', () => {
  let service: HelloDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloDataService],
    }).compile();

    service = module.get<HelloDataService>(HelloDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
