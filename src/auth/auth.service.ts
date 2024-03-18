import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs'
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload';
import { LoginResponse } from './interfaces/login-response';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService
  ){}


  async create(createUserDto: CreateUserDto): Promise<User> {

    try {
      const {password, ...userData} = createUserDto;

      const newUser = new this.userModel({
        password: bcrypt.hashSync(password, 10),
        ...userData
      });

  

      await newUser.save();
      const { password:_, ...user } = newUser.toJSON();

      return user;

    } catch (error) {
      if(error.code === 11000){
        throw new BadRequestException(`${createUserDto.username} already exists!`)
      }
      throw new InternalServerErrorException('Something terrible happend!!')
      
    }

  }

  async register(registerUserDto: RegisterUserDto):Promise<LoginResponse>{

    const user = await this.create({
      username: registerUserDto.username, 
      name: registerUserDto.name, 
      password: registerUserDto.password, 
      departamento: 'tutum', 
      puesto: 'tutum' })

    console.log(user)

    return{
      user: user,
      token: this.getJwtToken({id: user._id})
    }

  }


  async login(loginDto: LoginDto):Promise<LoginResponse> {

    const {username, password} = loginDto;
    const user = await this.userModel.findOne({username})
    if(!user){
      throw new UnauthorizedException('not valid credential');
    }

    if(!bcrypt.compareSync(password, user.password)){
      throw new UnauthorizedException('not valid credential');
    }

    const {password:_, ...rest} = user.toJSON();

    return {
      user: rest,
      token: this.getJwtToken({id: user.id})
    }

  }

  findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  getJwtToken( payload: JwtPayload ){
    const token = this.jwtService.sign(payload);
    return token;
  }
}
