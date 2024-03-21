import { Injectable } from '@nestjs/common';
import { CreateActivityBaseDto } from './dto/create-activity_base.dto';
import { UpdateActivityBaseDto } from './dto/update-activity_base.dto';

@Injectable()
export class ActivityBaseService {
  create(createActivityBaseDto: CreateActivityBaseDto) {
    return 'This action adds a new activityBase';
  }

  findAll() {
    return `This action returns all activityBase`;
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
