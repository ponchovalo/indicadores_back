import { IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    username: string;

    @IsString()
    name: string;

    @IsString()
    password: string;

    @IsString()
    departamento: string;

    @IsString()
    puesto: string;

}