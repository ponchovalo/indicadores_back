import { Test, TestingModule } from '@nestjs/testing';
import { ActivityBaseController } from './activity_base.controller';
import { ActivityBaseService } from './activity_base.service';

describe('ActivityBaseController', () => {
  let controller: ActivityBaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityBaseController],
      providers: [ActivityBaseService],
    }).compile();

    controller = module.get<ActivityBaseController>(ActivityBaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
