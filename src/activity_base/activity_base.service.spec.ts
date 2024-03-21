import { Test, TestingModule } from '@nestjs/testing';
import { ActivityBaseService } from './activity_base.service';

describe('ActivityBaseService', () => {
  let service: ActivityBaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivityBaseService],
    }).compile();

    service = module.get<ActivityBaseService>(ActivityBaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
