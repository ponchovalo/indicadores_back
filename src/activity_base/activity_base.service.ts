import { Injectable } from '@nestjs/common';
import { CreateActivityBaseDto } from './dto/create-activity_base.dto';
import { UpdateActivityBaseDto } from './dto/update-activity_base.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ActivityBase } from './entities/activity_base.entity';
import { Model } from 'mongoose';

@Injectable()
export class ActivityBaseService {

  constructor(
    @InjectModel(ActivityBase.name) private activityBaseModel: Model<ActivityBase>
  ){}

  create(createActivityBaseDto: CreateActivityBaseDto) {
    return 'This action adds a new activityBase';
  }

  findAll() {
    return this.activityBaseModel.find();
  }

  findForDevice(device_name1: string) {
    const device_name = device_name1.toUpperCase();
    return this.activityBaseModel.find({device_name});
  }

  findOne(id: number) {
    return `This action returns a #${id} activityBase`;
  }

  update(id: number, updateActivityBaseDto: UpdateActivityBaseDto) {
    return `This action updates a #${id} activityBase`;
  }

  remove(id: number) {
    return `This action removes a #${id} activityBase`;
  }
}
