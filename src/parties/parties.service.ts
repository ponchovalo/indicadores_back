import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePartyDto } from './dto/create-party.dto';
import { UpdatePartyDto } from './dto/update-party.dto';
import { Party } from './entities/party.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PartiesService {

  constructor(
    @InjectModel(Party.name) private partyModel: Model<Party>
  ){}

  async create(createPartyDto: CreatePartyDto): Promise<Party> {

    try {
      const newParty = new this.partyModel(createPartyDto)
      
      await newParty.save()

      return newParty;
      
    } catch (error) {
      if(error.code === 11000){
        throw new BadRequestException(`The name of party or description already exists!`)
      }
      throw new InternalServerErrorException('Something terrible happend!!')
    }
  }

  findAll() {
    return this.partyModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} party`;
  }

  update(id: number, updatePartyDto: UpdatePartyDto) {
    return `This action updates a #${id} party`;
  }

  remove(id: number) {
    return `This action removes a #${id} party`;
  }
}
