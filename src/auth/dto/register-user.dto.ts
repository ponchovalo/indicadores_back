import { IsString } from "class-validator";

export class RegisterUserDto {

    @IsString()
    username: string;

    @IsString()
    name: string;

    @IsString()
    password: string;


}