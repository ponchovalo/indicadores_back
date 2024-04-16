import { IsDate, IsDateString, IsString } from "class-validator";

export class CreateActivityDto {

    @IsDateString()
    date: Date;

    @IsDateString()
    initial_date_time: Date;


}
