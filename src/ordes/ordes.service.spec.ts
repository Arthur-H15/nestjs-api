import { Test, TestingModule } from '@nestjs/testing';
import { OrdesService } from './ordes.service';

describe('OrdesService', () => {
  let service: OrdesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdesService],
    }).compile();

    service = module.get<OrdesService>(OrdesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
