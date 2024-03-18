import { IsString } from "class-validator";

export class CreatePartyDto {
    @IsString()
    party_name: string;

    @IsString()
    party_description: string;
}
