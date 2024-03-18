import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Device, DeviceSchema } from './entities/device.entity';

@Module({
  controllers: [DevicesController],
  providers: [DevicesService],
  imports:[
    MongooseModule.forFeature([
      {
        name: Device.name,
        schema: DeviceSchema
      }
    ])
  ]
})
export class DevicesModule {}
