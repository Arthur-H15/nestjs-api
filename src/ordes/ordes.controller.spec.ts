import { Test, TestingModule } from '@nestjs/testing';
import { OrdesController } from './ordes.controller';
import { OrdesService } from './ordes.service';

describe('OrdesController', () => {
  let controller: OrdesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdesController],
      providers: [OrdesService],
    }).compile();

    controller = module.get<OrdesController>(OrdesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
