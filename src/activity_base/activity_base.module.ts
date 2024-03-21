import { Module } from '@nestjs/common';
import { ActivityBaseService } from './activity_base.service';
import { ActivityBaseController } from './activity_base.controller';
import { ActivityBase, ActivityBaseSchema } from './entities/activity_base.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ActivityBaseController],
  providers: [ActivityBaseService],
  imports: [
    MongooseModule.forFeature([
      {
        name: ActivityBase.name,
        schema: ActivityBaseSchema
      }
    ])
  ]
})
export class ActivityBaseModule {}
