import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose'; 
import { ConfigModule } from '@nestjs/config';
import { PartiesModule } from './parties/parties.module';
import { DevicesModule } from './devices/devices.module';
import { ActivityBaseModule } from './activity_base/activity_base.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    PartiesModule,
    DevicesModule,
    ActivityBaseModule,
    LocationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
