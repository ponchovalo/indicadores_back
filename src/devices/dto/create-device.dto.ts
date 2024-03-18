import { IsString } from "class-validator";

export class CreateDeviceDto {

    @IsString()
    device_name: string;

    @IsString()
    device_description: string;

    @IsString()
    party_name: string;
}
