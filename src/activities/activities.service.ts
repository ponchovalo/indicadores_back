import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RequestActivitiesDto } from './dto/request-activities.dto';

@Injectable()
export class ActivitiesService {

  constructor(
    @InjectModel(Activity.name) private activityModel: Model<Activity>
  ){}

  async create(createActivityDto: CreateActivityDto): Promise<Activity> {
    try {
      const newActivity = new this.activityModel(createActivityDto)
      
      await newActivity.save()

      return newActivity;
      
    } catch (error) {
      if(error.code === 11000){
        throw new BadRequestException(`The name of party or description already exists!`)
      }
      throw new InternalServerErrorException('Something terrible happend!!')
    }
  }

  findAllForDate(requestActivitiesDto: RequestActivitiesDto) {
    try {
      const date = new Date(requestActivitiesDto.date);
      const user_name = requestActivitiesDto.user_name;
      console.log(date)

      return this.activityModel.find({date, user_name})

    } catch (error) {
      
    }
  }

  findAll() {
    return this.activityModel.find();
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
