import { IsString } from "class-validator";

export class RequestActivitiesDto {
    @IsString()
    date: Date;

    @IsString()
    user_name: string;
}