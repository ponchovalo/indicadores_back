import { Module } from '@nestjs/common';
import { ActivityBaseService } from './activity_base.service';
import { ActivityBaseController } from './activity_base.controller';

@Module({
  controllers: [ActivityBaseController],
  providers: [ActivityBaseService],
})
export class ActivityBaseModule {}
