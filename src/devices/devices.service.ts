import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Device } from './entities/device.entity';
import { Model } from 'mongoose';

@Injectable()
export class DevicesService {

  constructor(
    @InjectModel(Device.name) private deviceModel: Model<Device>
  ){}

  async create(createDeviceDto: CreateDeviceDto) {
    
    try {
      const newDevice = new this.deviceModel(createDeviceDto)
      
      await newDevice.save()

      return newDevice;
      
    } catch (error) {
      if(error.code === 11000){
        throw new BadRequestException(`The name of device or description already exists!`)
      }
      throw new InternalServerErrorException('Something terrible happend!!')
    }
  }

  findAll() {
    return this.deviceModel.find();
  }

  findForParty(party_name1: string){
    const party_name = party_name1.toUpperCase();
    return this.deviceModel.find({party_name})
  }

  findOne(id: number) {
    return `This action returns a #${id} device`;
  }

  update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return `This action updates a #${id} device`;
  }

  remove(id: number) {
    return `This action removes a #${id} device`;
  }
}
