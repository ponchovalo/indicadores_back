import { IsString } from "class-validator";

export class CreatePartyDto {
    @IsString()
    name: string;

    @IsString()
    description: string;
}
