import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ActivitiesService {

  constructor(
    @InjectModel(Activity.name) private activityModel: Model<Activity>
  ){}

  create(createActivityDto: CreateActivityDto) {
    const activity: Activity = new Activity();
    activity.date = new Date(createActivityDto.date)
    activity.initial_date_time = new Date(createActivityDto.initial_date_time)
    return activity
  }

  findAllForDate(date: Date) {
    return this.activityModel.find({date});
  }

  findAll() {
    return `This action returns all activities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
