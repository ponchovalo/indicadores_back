import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { Location, LocationSchema } from './entities/location.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [LocationController],
  providers: [LocationService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Location.name,
        schema: LocationSchema
      }
    ])
  ]
})
export class LocationModule {}
