import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Location } from './entities/location.entity';
import { Model } from 'mongoose';

@Injectable()
export class LocationService {

  constructor(
    @InjectModel(Location.name) private locationModel: Model<Location>
  ){}

  create(createLocationDto: CreateLocationDto) {
    return 'This action adds a new location';
  }

  findAll() {
    return this.locationModel.find();
  }

  findAreas() {
    return this.locationModel.find({},{"location":1,"area_id":1,"area_name":1});
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
