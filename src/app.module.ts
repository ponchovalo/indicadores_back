import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose'; 
import { ConfigModule } from '@nestjs/config';
import { ActivitiesModule } from './activities/activities.module';
import { PartiesModule } from './parties/parties.module';
import { DevicesModule } from './devices/devices.module';
import { ActivityBaseModule } from './activity_base/activity_base.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    PartiesModule,
    DevicesModule,
    ActivityBaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
